for(var i = 0; i <$('.fig1').length; i++)
  {
		new Highcharts.Chart({
      chart: {
        renderTo: $('.fig1')[i],
        defaultSeriesType: 'pie',
				zoomType:'xy'
        },
      title: {
        text: 'Figure 1: Steel industry used six percent of the total energy used in U.S. manufacturing, 2006'
        },
			credits: {
				text: 'Source: Energy Information Administration, Manufacturing Energy Consumption Survey - Table 1.2: First Use of Energy for All Purposes (Fuel and Nonfuel), 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						color: '#000000',
						formatter: function() {
							return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 0) +'%';
							}
						}
					}
				},
      series: [{
        name: 'consumption',
        data: [{
          name: 'steel industry',
          y: 5
          },{
          name: 'all other manufacturing',    
          y: 95
          }]
        }]
      });
    }
	for(var i = 0; i <$('.fig2').length; i++)
	{
		new Highcharts.Chart({
			chart: {
				renderTo: $('.fig2')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 2: Steel industry used 22 percent less total energy over a ten year period '
        },
			credits: {
				text: 'Sources: Energy Information Administration, Manufacturing Energy Consumption Survey - Table 1.2: First Use of Energy for All Purposes (Fuel and Nonfuel), 1991, 1994, 1998, and 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			xAxis: {
				categories: [1991, 1994, 1998, 2002, 2006]
				},
			yAxis: {
				title: {
					text: 'trillion Btu'
					}
				},
			plotOptions: {
        series: {
					//stacking: 'normal',
					dataLabels: {
						enabled: true
						}
					}
				},
			series: [{
				data: [1673, 1649, 1584, 1308, 1040],
				name: 'Total energy consumption'
				}]
			});
		}
	for(var i = 0; i <$('.fig3').length; i++)
	{
		new Highcharts.Chart({
      chart: {
        renderTo: $('.fig3')[i],
        defaultSeriesType: 'pie',
				zoomType:'xy'
        },
      title: {
        text: 'Figure 3: Steel industry consumed over 1.1 quads of energy as a fuel, 2006'
        },
			credits: {
				text: 'Source: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 3.2: Fuel Consumption, Table 3.5: Byproducts in Fuel Consumption, 2002',
				//href: 'http://www.eia.gov',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				},
			captions: {
				enabled: true,
				style: {
					color: 'black',
					fontSize: '11px',
					fontFamily: 'Arial, Verdana, sans-serif',
					fontWeight:'bold'
					},
				items:[{
					text: "* An adjustment was made to the coke and breeze fuel consumption estimate to account for duplication in fuel use of coke and blast furnace gas. Further explanation about this duplication may be found on the MECS methodology page: http://www.eia.doe.gov/emeu/mecs/mecs2002/methodology_02/meth_02.html#duplication"
					}]
        },
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						color: '#000000',
						formatter: function() {
							return '<b>'+ this.point.name + '</b>: '+ Highcharts.numberFormat(this.percentage, 0) +' %';
							}
						}
					}
				},
      series: [{
        name: 'consumption',
        data: [{
          name: 'net electricity',
          y: 175
          },{
          name: 'distillate/residual',    
          y: 22
          },{
          name: 'natural gas',
          y: 326
          },{
          name: 'coal',
          y: 14
          },{
          name: 'coke and breeze*',
          y: 181
          },{
          name: 'other',
          y: 265
          }]
        }]
      });
		}
	for(var i = 0; i <$('.fig4').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig4')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 4: Steel industry natural gas and byproduct fuel consumption decreased as coke and breeze and electricity increased'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 3.2: Fuel Consumption, Table 3.5: Byproducts in Fuel Consumption, 1991, 1994, 1998, and 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
				},
			xAxis: {
				categories: [1991, 1994, 1998, 2002, 2006]
				},
			yAxis: {
				title: {
					text: 'trillion Btu'
					}
				},
			captions: {
				enabled: true,
				style: {
					color: 'black',
					fontSize: '11px',
					fontFamily: 'Arial, Verdana, sans-serif',
					fontWeight:'bold'
					},
				items:[{
					text: "* An adjustment was made to the coke and breeze fuel consumption estimate to account for duplication in fuel use of coke and blast furnace gas. Further explanation about this duplication may be found on the MECS methodology page: http://www.eia.doe.gov/emeu/mecs/mecs2002/methodology_02/meth_02.html#duplication"
					}]
        },
			plotOptions: {
        column: {
					groupPadding: 0.25,
					pointPadding: -0.75
					},
				series: {
					dataLabels: {
						enabled: true,
						style: {
              fontWeight: 'bold',
							color:'black'
							}
						}
					}
				},
			series: [{
				data: [253, 353, 350, 331, 181],
				color: 'rgba(0,150,215,.85)',
				name: 'Coke and breeze'
				},{
				data: [399, 476, 456, 388, 326],
				color: 'rgba(163,52,64,.85)',
				name: 'Natural gas'
				},{
				data: [441, 460, 370, 296, 246],
				color: 'rgba(255,199,2,.85)',
				name: 'Byproduct fuel'
				},{
				data: [130, 148, 158, 184, 175],
				color: 'rgba(118,213,255 ,.85)',
				name: 'Electricity'
				}]
			});
		}
	for(var i = 0; i <$('.fig5').length; i++)
	{
		new Highcharts.Chart({
			chart: {
				renderTo: $('.fig5')[i],
				defaultSeriesType: 'bar',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 5: Steel industry has not changed its end uses, between 1998 and 2006'
        },
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
				},
			xAxis: {
				categories: ['Not reported/Not asked*', 'Non-process use', 'Other process use', 'Machine drive', 'Process heating', 'Boiler Fuel']
				},
			yAxis: {
				title: {
					text: 'Percent of total fuel consumption'
					}
				},
			series: [{
				data: [53, 3, 1.5, 7, 32, 3],
				color: 'rgba(255,199,2,.85)',
				name: '2006',
				lineWidth: 10
				},{
				data: [57, 2, 0.1, 6, 30, 3],
				color: 'rgba(163,52,64,.85)',
				name: '2002',
				lineWidth: 10
				},{
				data: [58, 2, 0.4, 4, 30, 4],
				color: 'rgba(0,150,215,.85)',
				name: '1998',
				lineWidth: 10
				}]
			});
		}
	for(var i = 0; i <$('.fig6').length; i++)
	{
		new Highcharts.Chart({
      chart: {
        renderTo: $('.fig6')[i],
        defaultSeriesType: 'pie',
				zoomType:'xy'
        },
      title: {
        text: 'Figure 6: Steel industry about half a quad of energy as feedstocks, 2006'
        },
			credits: {
				text: 'Source: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 2.2: Nonfuel (Feedstock) Use of Combustible Energy, 2002',
				//href: 'http://www.eia.gov/',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' trillion Btu';
					}
				},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						color: '#000000',
						formatter: function() {
							return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.y, 0) +' trillion Btu';
							}
						}
					}
				},
      series: [{
        name: 'consumption',
        data: [{
          name: 'steel industry',
          y: 431
          },{
          name: 'all other manufacturing',    
          y: 6531
          }]
        }]
      });
    
		}
	for(var i = 0; i <$('.fig7').length; i++)
	{
    new Highcharts.Chart({
      chart: {
        renderTo: $('.fig7')[i],
        defaultSeriesType: 'pie',
				zoomType:'xy',
        },
      title: {
        text: 'Figure 7: Steel industry used 60 percent of the coal feedstock used in the U.S. manufacturing sector, 2002'
        },
			credits: {
				text: 'Source: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 2.2: Nonfuel (Feedstock) Use of Combustible Energy, 2002',
				//href: 'http://www.eia.gov/',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						color: '#000000',
						formatter: function() {
							return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 0) +' %';
							}
						}
					}
				},
			series: [{
        name: 'consumption',
        data: [{
          name: 'steel industry',
          y: 83
          },{
          name: 'all other manufacturing',    
          y: 17
          }]
        }]
      });
		}
	for(var i = 0; i <$('.fig8').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig8')[i],
				defaultSeriesType: 'bar',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 8: Total energy expenditures were over six billion dollars in the steel industry, 2002'
        },
			credits: {
				text: 'Source: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 7.9: Expenditures for Purchased Energy Sources, 2002',
				//href: 'http://www.eia.gov/',
				position: {
					y: -20
					},
				style:{
					width:550,
					}
				},
			legend: {
				margin: 30
				},
			xAxis: {
				categories: ['By product gases', 'Coke and breeze', 'Coal', 'LPG and NGL', 'Natural gas', 'Distillate/Residual', 'Electricity']
				},
			yAxis: {
				title: {
					text: 'Million U.S. dollars'
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': $' + Highcharts.numberFormat(this.y, 0);
					}
				},
			series: [{
				data: [106, 1430, 972, 1, 1623, 1928],
				//color: 'rgba(255,199,2,.85)',
				name: 'Total energy expenditures (million U.S. dollars)',
				lineWidth: 10
				}]
			});
		}
	for(var i = 0; i <$('.fig9').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig9')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 9: Energy expenditures per total establishment costs has changed litte in the steel industry'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 7.9: Expenditures for Purchased Energy Sources, 1991, 1994, 1998, and 2002, U.S. Census Bureau, 1991, 1994, and 1998 Annual Survey of Manufacturing, 2002 Economic Census - Manufacturing',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -35
					},
				style:{
					width:550,
					}
				},
			xAxis: {
				categories: [1991, 1994, 1998, 2002]
				},
			yAxis: {
				title: {
					text: 'percent'
					}
				},
			plotOptions: {
        series: {
					//stacking: 'normal',
					dataLabels: {
						enabled: true
						}
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + '%';
					}
				},
			series: [{
				data: [13.4, 15.0, 14.2, 16.7],
				name: 'Energy expenditures per total establishment costs',
				color: '#003953'
				}]
			});
		}
	for(var i = 0; i <$('.fig10').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig10')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 10: Energy consumption per 2000 dollar value of shipments has steadily decreased in the steel industry'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey – Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002, U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -35
					},
				style:{
					width:550,
					}
				},
			xAxis: {
				categories: [1991, 1994, 1998, 2002]
				},
			yAxis: {
				title: {
					text: 'thousand Btu'
					}
				},
			plotOptions: {
        series: {
					//stacking: 'normal',
					dataLabels: {
						enabled: true
						}
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [39.7, 37.6, 32.6, 27.2],
				name: 'Consumption per 2000 dollar value of shipments',
				color: '#410E14'
				}]
			});
		}
	for(var i = 0; i <$('.fig11').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig11')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 11: Energy consumption per 2000 dollar value of added value has gradually decreased in the steel industry'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey – Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002, U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -35
					},
				style:{
					width:550,
					}
				},
			xAxis: {
				categories: [1991, 1994, 1998, 2002]
				},
			yAxis: {
				title: {
					text: 'thousand Btu'
					}
				},
			plotOptions: {
        series: {
					//stacking: 'normal',
					dataLabels: {
						enabled: true
						}
					}
				},
			captions: {
				enabled: true,
				style: {
					color: 'black',
					fontSize: '11px',
					fontFamily: 'Arial, Verdana, sans-serif',
					fontWeight:'bold'
					},
				items:[{
					text: "Note: Value added price indices from Bureau of Economic Analysis are for the primary metals sub-sector"
					}]
        },
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [39.7, 37.6, 32.6, 27.2],
				name: 'Consumption per 2000 dollar value of shipments',
				//color: '#410E14'
				}]
			});
		}