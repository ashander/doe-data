// densified_biomass_data.json
$.getJSON('densified_biomass_data.json', function() {
	// $("#message").html("Data loading &hellip;");
}).done(function(data) {
	var east_region 	= "#E0ECF1";
	var south_region 	= "#DDDAE6";
	var west_region 	= "#E9E0CE";
	var no_region 		= "#cccccc";

	$('#map').vectorMap({
		map: 'us_aea_en',
		zoomOnScroll:false,
		//scaleColors: ['#C8EEFF', '#0071A4'],
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.7,
		hoverColor: false,
		markerStyle: {
			initial: {
				fill: '#FFC702',
				stroke: '#ffffff',
				strokeWidth: '2'
			}
		},
		backgroundColor: '#ffffff',
		markers: data['map']['markers'],
		// onMarkerClick: function (event, index) {},
		onMarkerTipShow: function(event, label, index){
			label.html(
				'<b>' + data['map']['markers'][index]['name'] + '</b><br/>'+
				'<b>Capacity: </b>' + data['map']['markers'][index]['value'] + '</br>' +
				'<b>Status: </b>' + data['map']['markers'][index]['status']
			);
		},
		regionStyle: {
			initial: {
				fill: '#9E9E9E',
				strokeColor: '#333333',
				strokeWidth: '2'
			}
		},
		series: {
			regions: [{
				values: {
					'US-AL': south_region,
					'US-AK': west_region,
					'US-AR': south_region,
					'US-AZ': west_region,
					'US-CA': west_region,
					'US-CO': west_region,
					'US-CT': east_region,
					'US-DE': east_region,
					'US-DC': east_region,
					'US-FL': south_region,
					'US-GA': south_region,
					'US-HI': west_region,
					'US-ID': west_region,
					'US-IL': east_region,
					'US-IN': east_region,
					'US-IA': east_region,
					'US-KS': west_region,
					'US-KY': south_region,
					'US-LA': south_region,
					'US-ME': east_region,
					'US-MD': east_region,
					'US-MA': east_region,
					'US-MI': east_region,
					'US-MN': east_region,
					'US-MS': south_region,
					'US-MO': east_region,
					'US-MT': west_region,
					'US-NE': west_region,
					'US-NV': west_region,
					'US-NH': east_region,
					'US-NJ': east_region,
					'US-NM': west_region,
					'US-NY': east_region,
					'US-NC': south_region,
					'US-ND': west_region,
					'US-OH': east_region,
					'US-OK': south_region,
					'US-OR': west_region,
					'US-PA': east_region,
					'US-RI': east_region,
					'US-SC': south_region,
					'US-SD': west_region,
					'US-TN': south_region,
					'US-TX': south_region,
					'US-UT': west_region,
					'US-VT': east_region,
					'US-VA': south_region,
					'US-WA': west_region,
					'US-WV': east_region,
					'US-WI': east_region,
					'US-WY': west_region
				},
				attribute: 'fill'
			}]
		}
	});
	var mapObject = $('#map').vectorMap('get', 'mapObject');
	$("#dash_tab").click(function() {
		//$('#map')

		mapObject.updateSize();
		//console.log("dash_tab click");
	});
	// $( ".page_tabs" ).on( "tabsactivate", function( event, ui ) {
	// 	var mapObject = $('#map').vectorMap('get', 'mapObject');
	// } );

	// $(".page_tabs").tabs({
  //   select: function(event, ui) {
	// 		if (ui.index==0) {
	// 				console.log("works tab click");
	// 		}
  //   }
	// });
	//
	// var mapObject = $('#map').vectorMap('get', 'mapObject');

	$(".report_date").append(' ' + data['report_date']);
	$(".report_year").append(' ' + data['report_year']);
	// TABLE BUILDER -----------------------------------------------------------
	$.each(data['table1']['table_body'], function(region_key, region_rows) {
		// table 1 region keys ---------------------------------------------------
		var th_header = null;
		var th_css = null;

		if (region_key=="east" || region_key=="south" || region_key=="west") {
			switch (region_key) {
				case "east":
					th_css = "east";
					th_header = "East";
				break;
				case "south":
					th_css = "south";
					th_header = "South";
				break;
				case "west":
					th_css = "west";
					th_header = "West";
				break;
			default:
				th_css = "error";
				th_header = "!! Error !!";

			}

			$('#table1 tbody').append('<tr class="sectionhead">'+
        '<td class="header_total ' + th_css + '" id="'+ region_key +'" align="left" colspan="5" style="text-align: left;" title="Click to expand"><span class="indicator">+</span>'+ th_header +'</td>' +
        '</tr>');
		}
		// table 1 region totals -------------------------------------------------
		if (region_key=="east_total" || region_key=="south_total" || region_key=="west_total" || region_key=="currently_operating_temporarily_not_in_operation" || region_key=="planned_under_construction" || region_key=="us_total") {
			$.each(region_rows, function(row_key, row_values) {
				var total_class = "total";
				if (region_key=='us_total') {
					total_class = "us_total";
				}
				$('#table1 tbody').append('<tr class="' + total_class +'">'+
          '<td align="left" style="text-align: left;" colspan="4"><span class="circle"></span> ' + row_values[0] + '</td>' +
          '<td align="left" style="text-align: right;">' + row_values[4] + '</td>' +
          '</tr>');
			});
		} else { // table 1 data rows --------------------------------------------
			$.each(region_rows, function(row_key, row_values) {

				switch (row_values[3]) {
					case "currently operating":
						color = "green";
					break;
					case "under construction/planned":
						color = "yellow";
					break;
					case "temporarily not in operation":
						color = "red";
					break;
					case "ceased operation":
						color = "black";
					break;
					default:
						color = "grey";
				}
				// $('#table1 tbody').append('<tr class="t1row ' + row_values[0] + '">'+
				$('#table1 tbody').append('<tr class="t1row white">'+
					'<td align="left" style="text-align: left;"></td>' +
          // '<td align="left" style="text-align: left;">' + row_values[0] + '</td>' +
          '<td align="left" style="text-align: left;">' + row_values[1] + '</td>' +
          '<td align="left" style="text-align: left;">' + row_values[2] + '</td>' +
          '<td align="left" style="text-align: left;"><span class="circle '+ color +'"></span> ' + row_values[3] + '</td>' +
          '<td align="right">' + row_values[4] + '</td>' +
          '</tr>');
			});
		}
	});

	// table 2 header row --------------------------------------------------------
	$.each(data['table2']['table_header'], function(row_key, row_values) {
		$('#table2 thead').append('<tr>'+
      '<th align="right">' + row_values[0] + '</th>' +
      '<th style="text-align: left;">'  + row_values[1] + '</th>' +
      '<th align="right">' + row_values[2] + '</th>' +
      '<th align="right">' + row_values[3] + '</th>' +
      '<th align="right">' + row_values[4] + '</th>' +
      '</tr>');
	});
	// table 2 data rows -------------------------------------------------------
	$.each(data['table2']['table_body'], function(region_key, region_rows) {
		// console.log(region_key);
		var th_header = null;

		switch (region_key) {
			case "east":
				th_header = "East";
			break;
			case "south":
				th_header = "South";
			break;
			case "west":
				th_header = "West";
			break;
			case "us_total":
				th_header = "U.S. total";
			break;
		default:
			th_css = "error";
			th_header = "!! Error !!";
		}
		$('#table2 tbody').append('<tr class="sectionhead">'+
      '<td class="header_total header_total_spacer" align="left" colspan="5" style="text-align: left;">'+ th_header +'</td>' +
      '</tr>');

		for (var i=0; i<region_rows.length; i++) {
			$('#table2 tbody').append('<tr>'+
	      '<td align="right"></td>' +
	      '<td style="text-align: left;">'  + region_rows[i][1] + '</td>' +
	      '<td align="right">' + region_rows[i][2] + '</td>' +
	      '<td align="right">' + region_rows[i][3] + '</td>' +
	      '<td align="right">' + region_rows[i][4] + '</td>' +
	      '</tr>');
		}
	});

	// table 3 header row --------------------------------------------------------
	var row_one_title = null;
	for (var i=0; i<data['table3']['table_header'].length; i++) {
		for (var j=0; j<data['table3']['table_header'][i].length; j++) {
			if (i==0  && row_one_title!=data['table3']['table_header'][i][j]) {
				if (j==0) {
					colspan = 1;
				} else {
					colspan = 2;
				}
				if (i==0 && j==0) {
					$('#table3_headrow_1').append(
						'<th></th>'
					);
				} else if (i==0 && j==1) {
					$('#table3_headrow_1').append(
						'<th class="top_row top_row_left" style="text-align: left;" colspan="' + colspan + '">' + data['table3']['table_header'][i][j] + '</th>'
					);
				} else {
					$('#table3_headrow_1').append(
						'<th class="top_row" style="text-align: left;" colspan="' + colspan + '">' + data['table3']['table_header'][i][j] + '</th>'
					);
				}
				row_one_title = data['table3']['table_header'][i][j];
			}

			if(i==1) {
				$('#table3_headrow_2').append(
					'<th>' + data['table3']['table_header'][i][j] + '</th>'
				);
			}
		}
	}
	// table 3 data rows ---------------------------------------------------------
	for (var i=0; i<data['table3']['table_body'].length; i++) {
		$('#table3 tbody').append('<tr>'+
      '<td align="right">'  + data['table3']['table_body'][i][0] + '</td>' +
      '<td align="right">'  + data['table3']['table_body'][i][1] + '</td>' +
      '<td align="right">$' + data['table3']['table_body'][i][2] + '</td>' +
      '<td align="right">'  + data['table3']['table_body'][i][3] + '</td>' +
      '<td align="right">$' + data['table3']['table_body'][i][4] + '</td>' +
			'<td align="right">'  + data['table3']['table_body'][i][5] + '</td>' +
			'<td align="right">$' + data['table3']['table_body'][i][6] + '</td>' +
			'<td align="right">'  + data['table3']['table_body'][i][7] + '</td>' +
			'<td align="right">$' + data['table3']['table_body'][i][8] + '</td>' +
      '</tr>');
	}

	// table 4 header row --------------------------------------------------------
	$.each(data['table4']['table_header'], function(row_key, row_values) {
		$('#table4 thead').append('<tr>'+
      '<th align="right">' + row_values[0] + '</th>' +
      '<th style="text-align: left;">'  + row_values[1] + '</th>' +
      '<th align="right">' + row_values[2] + '</th>' +
      '<th align="right">' + row_values[3] + '</th>' +
      '<th align="right">' + row_values[4] + '</th>' +
			'<th align="right">' + row_values[5] + '</th>' +
      '</tr>');
	});
	// table 4 data rows -------------------------------------------------------
	$.each(data['table4']['table_body'], function(region_key, region_rows) {
		// console.log(region_key);
		var th_header = null;

		switch (region_key) {
			case "east":
				th_header = "East";
			break;
			case "south":
				th_header = "South";
			break;
			case "west":
				th_header = "West";
			break;
			case "us_total":
				th_header = "U.S. total";
			break;
		default:
			th_css = "error";
			th_header = "!! Error !!";
		}
		$('#table4 tbody').append('<tr class="sectionhead">'+
      '<td class="header_total header_total_spacer" align="left" colspan="6" style="text-align: left;">'+ th_header +'</td>' +
      '</tr>');

		for (var i=0; i<region_rows.length; i++) {
			$('#table4 tbody').append('<tr>'+
	      '<td align="right"></td>' +
	      '<td style="text-align: left;">'  + region_rows[i][1] + '</td>' +
	      '<td align="right">' + region_rows[i][2] + '</td>' +
	      '<td align="right">' + region_rows[i][3] + '</td>' +
	      '<td align="right">' + region_rows[i][4] + '</td>' +
				'<td align="right">' + region_rows[i][5] + '</td>' +
	      '</tr>');
		}
	});
	// $.each(data['table4']['table_header'], function(row_key, row_values) {
	// 	$('#table4 thead').append('<tr class="region_east">'+
  //     '<th align="left">' + row_values[0] + '</th>' +
  //     '<th align="right">' + row_values[1] + '</th>' +
  //     '<th align="right">' + row_values[2] + '</th>' +
  //     '<th align="right">' + row_values[3] + '</th>' +
  //     '<th align="right">' + row_values[4] + '</th>' +
	// 		'<th align="right">' + row_values[5] + '</th>' +
  //     '</tr>');
	// });
	// table 4 data rows ------------------------------------------------------
	// $.each(data['table4']['table_body'], function(row_key, row_values) {
	// 	if (row_values[0]=='U.S. Total') {
	// 		css_class = ' class="header_total"';
	// 	} else {
	// 		css_class = ""
	// 	}
	// 	$('#table4 tbody').append('<tr' + css_class + '>'+
  //     '<td align="left">' + row_values[0] + '</td>' +
  //     '<td align="right">' + row_values[1] + '</td>' +
  //     '<td align="right">' + row_values[2] + '</td>' +
  //     '<td align="right">' + row_values[3] + '</td>' +
  //     '<td align="right">' + row_values[4] + '</td>' +
	// 		'<td align="right">' + row_values[5] + '</td>' +
  //     '</tr>');
	// });

	// table 6 header row --------------------------------------------------------
	$.each(data['table6']['table_header'], function(row_key, row_values) {
		$('#table6 thead').append('<tr>'+
      '<th align="right">' + row_values[0] + '</th>' +
      '<th style="text-align: left;">'  + row_values[1] + '</th>' +
      '<th align="right">' + row_values[2] + '</th>' +
      '<th align="right">' + row_values[3] + '</th>' +
      '<th align="right">' + row_values[4] + '</th>' +
      '</tr>');
	});
	// table 6 data rows -------------------------------------------------------
	$.each(data['table6']['table_body'], function(region_key, region_rows) {
		// console.log(region_key);
		var th_header = null;

		switch (region_key) {
			case "east":
				th_header = "East";
			break;
			case "south":
				th_header = "South";
			break;
			case "west":
				th_header = "West";
			break;
			case "us_total":
				th_header = "U.S. total";
			break;
		default:
			th_css = "error";
			th_header = "!! Error !!";
		}
		$('#table6 tbody').append('<tr class="sectionhead">'+
      '<td class="header_total header_total_spacer" align="left" colspan="5" style="text-align: left;">'+ th_header +'</td>' +
      '</tr>');

		for (var i=0; i<region_rows.length; i++) {
			$('#table6 tbody').append('<tr>'+
	      '<td align="right"></td>' +
	      '<td style="text-align: left;">'  + region_rows[i][1] + '</td>' +
	      '<td align="right">' + region_rows[i][2] + '</td>' +
	      '<td align="right">' + region_rows[i][3] + '</td>' +
	      '<td align="right">' + region_rows[i][4] + '</td>' +
	      '</tr>');
		}
	});

	// table 6 header row ------------------------------------------------------
	// $.each(data['table6']['table_header'], function(row_key, row_values) {
	// 	$('#table6 thead').append('<tr class="region_east">'+
  //     '<th align="left">' + row_values[0] + '</th>' +
  //     '<th align="right">' + row_values[1] + '</th>' +
  //     '<th align="right">' + row_values[2] + '</th>' +
  //     '<th align="right">' + row_values[3] + '</th>' +
  //     '<th align="right">' + row_values[4] + '</th>' +
  //     '</tr>');
	// });
	// table 6 data rows -------------------------------------------------------
	// $.each(data['table6']['table_body'], function(row_key, row_values) {
	// 	if (row_values[0]=='U.S. Total') {
	// 		css_class = ' class="header_total"';
	// 	} else {
	// 		css_class = ""
	// 	}
	// 	$('#table6 tbody').append('<tr' + css_class + '>'+
  //     '<td align="left">' + row_values[0] + '</td>' +
  //     '<td align="right">' + row_values[1] + '</td>' +
  //     '<td align="right">' + row_values[2] + '</td>' +
  //     '<td align="right">' + row_values[3] + '</td>' +
  //     '<td align="right">' + row_values[4] + '</td>' +
  //     '</tr>');
	// });

	// table 7 header row --------------------------------------------------------
	$.each(data['table7']['table_header'], function(row_key, row_values) {
		$('#table7 thead').append('<tr>'+
      '<th align="right">' + row_values[0] + '</th>' +
      '<th style="text-align: left;">'  + row_values[1] + '</th>' +
      '<th align="right">' + row_values[2] + '</th>' +
      '<th align="right">' + row_values[3] + '</th>' +
      '</tr>');
	});
	// table 7 data rows -------------------------------------------------------
	$.each(data['table7']['table_body'], function(region_key, region_rows) {
		// console.log(region_key);
		var th_header = null;

		switch (region_key) {
			case "east":
				th_header = "East";
			break;
			case "south":
				th_header = "South";
			break;
			case "west":
				th_header = "West";
			break;
			case "us_total":
				th_header = "U.S. total";
			break;
		default:
			th_css = "error";
			th_header = "!! Error !!";
		}
		$('#table7 tbody').append('<tr class="sectionhead">'+
      '<td class="header_total header_total_spacer" align="left" colspan="4" style="text-align: left;">'+ th_header +'</td>' +
      '</tr>');

		for (var i=0; i<region_rows.length; i++) {
			$('#table7 tbody').append('<tr>'+
	      '<td align="right"></td>' +
	      '<td style="text-align: left;">'   + region_rows[i][1] + '</td>' +
	      '<td align="right">'  + region_rows[i][2] + '</td>' +
	      '<td align="right">$' + region_rows[i][3] + '</td>' +
	      '</tr>');
		}
	});

	// table 7 header row ------------------------------------------------------
	// $.each(data['table7']['table_header'], function(row_key, row_values) {
	// 	$('#table7 thead').append('<tr class="region_east">'+
  //     '<th align="left">' + row_values[0] + '</th>' +
  //     '<th align="right">' + row_values[1] + '</th>' +
  //     '<th align="right">' + row_values[2] + '</th>' +
  //     '<th align="right">' + row_values[3] + '</th>' +
  //     '</tr>');
	// });
	// table 7 data rows -------------------------------------------------------
	// $.each(data['table7']['table_body'], function(row_key, row_values) {
	// 	if (row_values[0]=='U.S. Total') {
	// 		css_class = ' class="header_total"';
	// 	} else {
	// 		css_class = ""
	// 	}
	// 	$('#table7 tbody').append('<tr' + css_class + '>'+
  //     '<td align="left">' + row_values[0] + '</td>' +
  //     '<td align="right">' + row_values[1] + '</td>' +
  //     '<td align="right">' + row_values[2] + '</td>' +
  //     '<td align="right">' + row_values[3] + '</td>' +
  //     '</tr>');
	// });

	// table 8 header row ------------------------------------------------------
	$.each(data['table8']['table_header'], function(row_key, row_values) {
		$('#table8 thead').append('<tr class="region_east">'+
      '<th align="left">' + row_values[0] + '</th>' +
      '<th align="right">' + row_values[1] + '</th>' +
      '<th align="right">' + row_values[2] + '</th>' +
      '</tr>');
	});
	// table 8 data rows -------------------------------------------------------
	$.each(data['table8']['table_body'], function(row_key, row_values) {
		if (row_values[0]=='U.S. Total') {
			css_class = ' class="header_total"';
		} else {
			css_class = ""
		}
		$('#table8 tbody').append('<tr' + css_class + '>'+
      '<td align="left">' + row_values[0] + '</td>' +
      '<td align="right">' + row_values[1] + '</td>' +
      '<td align="right">$' + row_values[2] + '</td>' +
      '</tr>');
	});

	$('#table1 .sectionhead').click(function() {
		$(this).nextUntil('.total').toggle();
		$(this).find("span").text($(this).find('span').text() == '+' ? '-' : '+');
		// $(this).attr('span').text($(this).attr('span').text() == '+' ? '-' : '+');
	});
	$('#table1 tbody .t1row').toggle();

	var east_total 	= data['table1']['table_body']['east_total'][0][4];
	var south_total = data['table1']['table_body']['south_total'][0][4];
	var west_total 	= data['table1']['table_body']['west_total'][0][4];

	east_total 	= east_total.replace(/\,/g,'');
	east_total 	= parseInt(east_total,10);
	south_total = south_total.replace(/\,/g,'');
	south_total = parseInt(south_total,10);
	west_total 	= west_total.replace(/\,/g,'');
	west_total 	= parseInt(west_total,10);


	var chart1 = new Highcharts.Chart({
	  chart: {
      renderTo: 'chart1',
      type: 'column',
			logo: 'none',
			marginTop:30,
			marginBottom:18,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
			width:295,
			height: 160
	  },
		exporting: { enabled: false },
	  title: {
			text:'Capacity by region (tons per year)',
			style: {
				"color": "#333333",
				"fontSize":"15px"
			}
	  },
		subtitle: {
			text:'',
			x:0,
			y:10
		},
	  xAxis: {
	      categories: ['East', 'South', 'West'],
	      title: {
	          text: null
	      }
	  },
	  yAxis: {
	      min: 0,
	      title: {
	          text: ''
	      },
	      labels: {
						enabled:true
	      }
	  },
	  tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + ' annnual capacity</b><br>' + Highcharts.numberFormat(this.y, 0) + ' tons';
      }
	  },
	  plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
	  },
	  legend: {
			enabled:false
	  },
		credits: {
			enabled:false,
		},
	  series:[{
			name:'Region',
			data:[
				{
		      name: 'East',
					y:east_total,
					color: '#ADCDD9'
			  },
				{
		      name: 'South',
					y:south_total,
					color:'#ACA1BF'
		  	},
				{
		      name: 'West',
					y:west_total,
					color:'#D0BE99'
		  	}
			]
		}]
	});

	var t4_length 		= data['table4']['table_body']['us_total'].length -1;
	var wood_pellets1 = data['table4']['table_body']['us_total'][t4_length][2];
	var wood_pellets2 = data['table4']['table_body']['us_total'][t4_length][3];
	var wood_pellets3 = data['table4']['table_body']['us_total'][t4_length][4];

	wood_pellets1 = wood_pellets1.replace(/\,/g,'');
	wood_pellets1 = parseInt(wood_pellets1,10);
	wood_pellets2 = wood_pellets2.replace(/\,/g,'');
	wood_pellets2 = parseInt(wood_pellets2,10);
	wood_pellets3 = wood_pellets3.replace(/\,/g,'');
	wood_pellets3 = parseInt(wood_pellets3,10);
	var total_wood_pellets = wood_pellets1 + wood_pellets2;
	var total_wood_utility = wood_pellets3;

	// console.log('total_wood_pellets ' + total_wood_pellets);

	var chart2 = new Highcharts.Chart({
	  chart: {
      renderTo: 'chart2',
      type: 'column',
			logo: 'none',
			marginTop:30,
			marginBottom:18,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
			width:295,
			height: 160
	  },
		exporting: { enabled: false },
	  title: {
			text:'Production (tons)',
			style: {
				"color": "#333333",
				"fontSize":"15px"
			}
	  },
		subtitle: {
			text:'',
			x:0,
			y:10
		},
	  xAxis: {
      categories: ['Heating pellets', 'Utility pellets'],
      title: {
        text: null
      }
	  },
	  yAxis: {
      min: 0,
      title: {
        text: ''
      },
      labels: {
				enabled:true
      }
	  },
	  tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + ' production</b><br>' + Highcharts.numberFormat(this.y, 0) + ' tons';
      }
	  },
	  plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
	  },
	  legend: {
			enabled:false
	  },
		credits: {
			enabled:false,
		},
	  series:[{
			name:'Region',
			data:[
				{
		      name: 'Heating pellets',
					y:total_wood_pellets,
					color: '#CFD9CD'
			  },
				{
		      name: 'Utility pellets',
					y:total_wood_utility,
					color:'#6E8D69'
		  	}
			]
		}]
	});


	var t7_length = data['table7']['table_body']['us_total'].length -1;
	var domestic_sales = data['table7']['table_body']['us_total'][t7_length][2];
	var t8_length = data['table8']['table_body'].length -1;
	var export_sales = data['table8']['table_body'][t8_length][1];

	domestic_sales = domestic_sales.replace(/\,/g,'');
	domestic_sales = parseInt(domestic_sales,10);
	export_sales = export_sales.replace(/\,/g,'');
	export_sales = parseInt(export_sales,10);
	// var total_wood_pellets = wood_pellets1;
	// var total_wood_utility = wood_pellets2;

	var chart3 = new Highcharts.Chart({
	  chart: {
      renderTo: 'chart3',
      type: 'column',
			logo: 'none',
			marginTop:30,
			marginBottom:18,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
			width:295,
			height: 160
	  },
		exporting: { enabled: false },
	  title: {
			text: 'Sales (tons)',
			style: {
				"color": "#333333",
				"fontSize":"15px"
			}
	  },
		subtitle: {
			text:'',
			x:0,
			y:10
		},
	  xAxis: {
      categories: ['Domestic', 'Export'],
      title: {
        text: null
      }
	  },
	  yAxis: {
      min: 0,
      title: {
        text: ''
      },
      labels: {
				enabled:true
      }
	  },
	  tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + ' sales</b><br>' + Highcharts.numberFormat(this.y, 0) + ' tons';
      }
	  },
	  plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
	  },
	  legend: {
			enabled:false
	  },
		credits: {
			enabled:false,
		},
	  series:[{
			name:'Sales',
			data:[
				{
		      name: 'Domestic',
					y:domestic_sales,
					color: '#D3DCBA'
			  },
				{
		      name: 'Export',
					y:export_sales,
					color:'#A8B975'
		  	}
			]
		}]
	});

});
