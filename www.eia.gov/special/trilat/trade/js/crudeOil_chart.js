	var crudeOilChart = {
		chart: {
			renderTo: 'crude_oil_chart',
			defaultSeriesType: 'line',
			marginTop: 60,
			spacingBottom: 40
		},
		credits: {
			enabled: true,
			text: null,
            /*position: {
               align: 'left',
               y: -35 // position of credits
            }*/
			style: {
				width: 690
			},
			position: {
				align: 'left',
				y: -32
			}
		},	  
		title: {
			text: 'Crude oil flows from Mexico to U.S.'
		},

		yAxis: {
			 title: {
                align: 'high',
                offset: -130,
                text: 'thousand barrels per day',
                rotation: 0,
                y: -15,
				x: 4
            }
		},
	
		xAxis: { 
			type: 'datetime', 
			showLastLabel: true,
			startOfWeek: 0,
			tickInterval: 365*24 * 3600 * 1000
		},
		exporting: {
			buttons:{
				contextButton: {
					text:null
				}
			}
		},
		tooltip: {
			formatter: function() {
				return Highcharts.dateFormat('%b %e, %Y', this.x) +', '+'<br/> <b> '+ this.series.name +'</b><br/>'+  Highcharts.numberFormat(this.y, 2) + ' thousand barrels per day';
			}
		},
		plotOptions: {
			line: {
				shadow:0,
				borderWidth:0,
				marker: {
					enabled: false,
					states: {
						hover: {
							enabled: true,
							radius: 5
						}
					}
				}
			}
		},		  
		series: []
	};
	
	var series_oil = [
		{
			name: 'SENER',
			selected: true,
			color: '#32630c',
			data: []
		},
		{ 
			name: 'EIA',
			selected: true,
			color: '#0196d8',
			data: []
		},
		{ 
			name: 'USCB',
			selected: true,
			color:'#7ce3ff',
			data: []
		},
		{ 
			name: 'SENER',
			selected: true,
			color:'#32630c',
			data: []
		},
		{ 
			name: 'STC-EETSD',
			selected: true,
			color:'#4C0810',
			data: []
		},
		{ 
			name: 'STC-IATD',
			selected: true,
			color:'#d94153',
			data: []
		},
		{ 
			name: 'EIA',
			selected: true,
			color:'#0196d8',
			data: []
		},
		{ 
			name: 'USCB',
			selected: true,
			color:'#7ce3ff',
			data: []
		},
		{ 
			name: 'STC-EETSD',
			selected: true,
			color:'#4C0810',
			data: []
		},
		{ 
			name: 'NEB',
			selected: true,
			color:'#FF99A5',
			data: []
		},
		{ 
			name: 'STC-IATD',
			selected: true,
			color:'#d94153',
			data: []
		},
		{ 
			name: 'USCB',
			selected: true,
			color:'#7ce3ff',
			data: []
		},
		{ 
			name: 'EIA',
			selected: true,
			color:'#0196d8',
			data: []
		},
		{ 
			name: 'STC-EETSD',
			selected: true,
			color:'#4C0810',
			data: []
		},
		{ 
			name: 'STC-IATD',
			selected: true,
			color:'#d94153',
			data: []
		}
	];
	
	var series_oil_source = [
		'SENER=Secretaría de Energía, EIA=U.S. Energy Information Administration, USCB = U.S. Census Bureau',
		'SENER=Secretaría de Energía, STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, <br/>STC-IATD=Statistics Canada, International Accounts and Trade Division',
		'EIA=U.S. Energy Information Administration, USCB = U.S. Census Bureau, <br/>STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, NEB=National Energy Board of Canada,<br/>STC-IATD=Statistics Canada, International Accounts and Trade Division',
		'USCB = U.S. Census Bureau, EIA=U.S. Energy Information Administration, <br/>STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division,<br/>STC-IATD=Statistics Canada, International Accounts and Trade Division'
	];
	
	// JavaScript Document
	
	
		function clear_oil_chart() {
			crudeOilChart.series = [];
		}

		
		$("#mx_us").click(function() {
			clear_oil_chart();
			crudeOilChart.title.text = "Crude oil flows from Mexico to U.S.";
			crudeOilChart.series.push(series_oil[0]);
			crudeOilChart.series.push(series_oil[1]);
			crudeOilChart.series.push(series_oil[2]);
			crudeOilChart.credits.text = series_oil_source[0];
			newOilChart = new Highcharts.Chart(crudeOilChart);
		});
		
		$("#mx_ca").click(function() {
			clear_oil_chart();
			crudeOilChart.title.text = "Crude oil flows from Mexico to Canada";
			crudeOilChart.series.push(series_oil[3]);
			crudeOilChart.series.push(series_oil[4]);
			crudeOilChart.series.push(series_oil[5]);
			crudeOilChart.credits.text = series_oil_source[1];
			newOilChart = new Highcharts.Chart(crudeOilChart);
		});
		
		$("#ca_us").click(function() {
			clear_oil_chart();
			crudeOilChart.title.text = "Crude oil flows from Canada to U.S.";
			crudeOilChart.series.push(series_oil[6]);
			crudeOilChart.series.push(series_oil[7]);
			crudeOilChart.series.push(series_oil[8]);
			crudeOilChart.series.push(series_oil[9]);
			crudeOilChart.series.push(series_oil[10]);
			crudeOilChart.credits.text = series_oil_source[2];
			newOilChart = new Highcharts.Chart(crudeOilChart);
		});
		
		$("#us_ca").click(function() {
			clear_oil_chart();
			crudeOilChart.title.text = "Crude oil flows from U.S. to Canada";
			crudeOilChart.series.push(series_oil[11]);
			crudeOilChart.series.push(series_oil[12]);
			crudeOilChart.series.push(series_oil[13]);
			crudeOilChart.series.push(series_oil[14]);
			crudeOilChart.credits.text = series_oil_source[3];
			newOilChart = new Highcharts.Chart(crudeOilChart);
		});

	