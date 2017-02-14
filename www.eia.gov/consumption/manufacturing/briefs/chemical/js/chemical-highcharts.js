for(var i = 0; i <$('.fig1').length; i++)
  {
		new Highcharts.Chart({
      chart: {
        renderTo: $('.fig1')[i],
        defaultSeriesType: 'pie',
				zoomType:'xy'
        },
      title: {
        text: 'Figure 1: Chemical industries used 29 percent of the total energy<br />' + 'consumed in U.S. manufacturing, 2002'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 1.2: First Use of Energy for All Purposes (Fuel and Nonfuel), 2002',
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
          name: 'chemicals',
          y: 29
          },{
          name: 'all other manufacturing',    
          y: 71
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
        text: 'Figure 2: Chemical industries used 28 percent more total energy<br />' + 'over an eleven year period'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 1.2: First Use of Energy for All Purposes (Fuel and Nonfuel), 1991, 1994, 1998, and 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -20
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
				data: [5051, 5328, 6064, 6465],
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
        text: 'Figure 3: Chemical industries consumed over 3.7 quads of energy,<br />' + 'as a fuel, 2002'
        },
			credits: {
				text: 'Source: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 3.2: Fuel Consumption, 2002',
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
			/*captions: {
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
        },*/
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
          name: 'net electricity',
          y: 14
          },{
          name: 'distillate/residual',    
          y: 2
          },{
          name: 'natural gas',
          y: 44
          },{
          name: 'LPG and NPL',
          y: 1
          },{
          name: 'coal, coke and breez*',
          y: 8
          },{
          name: 'other',
          y: 31
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
        text: 'Figure 4: Chemical industries natural gas consumption fluctuated as<br />' + 'byproduct fuel consumption increased'
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
				categories: [1991, 1994, 1998, 2002]
				},
			yAxis: {
				title: {
					text: 'trillion Btu'
					}
				},
			/*captions: {
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
        },*/
			plotOptions: {
        column: {
					groupPadding: 0.25,
					pointPadding: 0
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
				data: [1669, 1895, 1984, 1678],
				color: 'rgba(0,150,215,.85)',
				name: 'Natural gas'
				},{
				data: [376, 298, 440, 503],
				color: 'rgba(163,52,64,.85)',
				name: 'Byproduct fuel'
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
        text: 'Figure 5: Chemical industries not reported/not asked end use<br />' + 'increased by 12 percent '
        },
						credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 5.2: End Uses of Fuel Consumption, 1998, and 2002',
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
				categories: ['Not reported/Not asked*', 'Non-process use', 'Other process use', 'Machine drive', 'Process heating', 'Boiler Fuel']
				},
			yAxis: {
				title: {
					text: 'Percent of total fuel consumption'
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
					text: "* Not Reported/Not Asked includes end use that was not collected along with those establishments that did not know or report their end use"
					}]
        },
			plotOptions: {
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
				data: [33, 19, 9, 2, 3, 32],
				color: 'rgba(0,150,215,.85)',
				name: '2002',
				lineWidth: 10
				},{
				data: [35, 25, 11, 2, 6, 20],
				color: 'rgba(163,52,64,.85)',
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
        text: 'Figure 6: Chemical industries used over 3.7 quads of energy as,<br />' + 'feedstocks, 2002'
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
							return '<b>'+ this.point.name +':</b><br />'+ Highcharts.numberFormat(this.y, 0) +' trillion Btu';
							}
						}
					}
				},
      series: [{
        name: 'consumption',
        data: [{
          name: 'chemical industry',
          y: 3750
          },{
          name: 'all other manufacturing',    
          y: 4439
          }]
        }]
      });
    
		}
	for(var i = 0; i <$('.fig7').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig7')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 7: Chemical industries used 99 percent of the U.S. manufacturing<br />' + 'decreased as coke and breeze and electricity increased'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 2.2: Nonfuel (Feedstock) Use of Combustible Energy, 2002',
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
				categories: ['Natural gas', 'LPG and NGL']
				},
			yAxis: {
				title: {
					text: 'trillion Btu'
					}
				},
			plotOptions: {
        column: {
					groupPadding: 0.15,
					pointPadding: 0
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
				data: [674, 2967],
				color: 'rgba(0,150,215,.85)',
				name: 'Total Manufacturing'
				},{
				data: [629, 2964],
				color: 'rgba(163,52,64,.85)',
				name: 'Chemicals'
				}]
			});
		}
	for(var i = 0; i <$('.fig8').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig8')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 8: Chemical industries natural gas feedstock use remained<br />' + 'steady as LPG and NGL feedstock use increased'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 2.2: Nonfuel (Feedstock) Use of Combustible Energy, 1994, 1998, and 2002',
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
				categories: ['Natural gas', 'LPG and NGL']
				},
			yAxis: {
				title: {
					text: 'trillion Btu'
					}
				},
			plotOptions: {
        column: {
					groupPadding: 0.15,
					pointPadding: 0
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
				data: [674, 1531],
				color: 'rgba(0,150,215,.85)',
				name: '1994'
				},{
				data: [726, 1745],
				color: 'rgba(163,52,64,.85)',
				name: '1998'
				},{
				data: [629, 2964],
				color: 'rgba(255,199,2,.85)',
				name: '2002'
				}]
			});
		}
	for(var i = 0; i <$('.fig9').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig9')[i],
				defaultSeriesType: 'bar',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 9: Chemical industries total energy expenditures were over<br />' + '32 billion dollars, 2002'
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
				categories: ['Other', 'Coke and breeze', 'Coal', 'LPG and NGL', 'Natural Gas', 'Distillate Fuel', 'Residential Fuel', 'Electricity']
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
			plotOptions: {
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
				data: [1667, 24, 689, 15743, 7448, 74, 258, 6386],
				//color: 'rgba(255,199,2,.85)',
				name: 'Total energy expenditures (million U.S. dollars)',
				lineWidth: 10
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
        text: 'Figure 10: Chemical industries LPG and NGL expenditures increased<br />' + 'by over seven billion dollars'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 7.9: Expenditures for Purchased Energy Sources, 1998, and 2002; U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1998, and 2002',
				//href: 'http://www.eia.doe.gov/emeu/mecs/mecs2002/data02/shelltables.html',
				position: {
					y: -35
					},
				style:{
					width:550,
					}
				},
			xAxis: {
				categories: [1998, 2002]
				},
			yAxis: {
				title: {
					text: 'constant 200 dollars in millions'
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
					text: "Note: Energy price indices from Bureau of Economic Analysis are for the chemical industries."
					}]
        },
			plotOptions: {
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
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [8684,15998],
				name: 'LPG and NGL expenditures',
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
        text: 'Figure 11: Chemical industries energy expenditures per total<br />' + 'establishment costs increased'
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
				categories: [1994, 1998, 2002]
				},
			yAxis: {
				title: {
					text: 'percent'
					}
				},
			plotOptions: {
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
				data: [8.9, 8.7, 11.9],
				name: 'Energy expeditures per total establishment costs',
				color: 'rgba(0,57,83,.85)'
				}]
			});
		}
	for(var i = 0; i <$('.fig12').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig12')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 12: Energy consumption per 2000 dollar value of shipments has<br />' + 'remained stable in the chemical industries'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002; U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
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
					dataLabels: {
						enabled: true,
						style: {
              fontWeight: 'bold',
							color:'black'
							}
						}
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [8.6, 8.5, 9.0, 8.5],
				name: 'Consumption per 2000 dollar value of shipments',
				color: 'rgba(190,213,173,.85)'
				}]
			});
		}
	for(var i = 0; i <$('.fig13').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig13')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 13: Energy consumption per 2000 dollar of value added has<br />' + 'slightly declined in the chemical industries'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002; U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
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
					dataLabels: {
						enabled: true,
						style: {
              fontWeight: 'bold',
							color:'black'
							}
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
					text: "Note: Value added price indices from Bureau of Economic Analysis are for the chemicals sub-sector"
					}]
        },
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [17.3, 17.1, 17.0, 15.6],
				color: 'rgba(163,52,64,.85)',
				name: 'Consumption per 2000 dollar of value added',
				//color: '#410E14'
				}]
			});
		}
	for(var i = 0; i <$('.fig14').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig14')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 14: Energy consumption per 2000 dollar of value of shipments<br />' + 'declined in the alkalies and chlorine industry'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002; U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
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
					dataLabels: {
						enabled: true,
						style: {
              fontWeight: 'bold',
							color:'black'
							}
						}
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [65.6, 62.3, 56.7, 52.4],
				color: 'rgba(255,199,2,.85)',
				name: 'Consumption per 2000 dollar value of shipments',
				//color: '#410E14'
				}]
			});
		}
	for(var i = 0; i <$('.fig15').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig15')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 15: Energy consumption per 2000 dollar of value of shipments<br />' + 'decreased in the nitrogenous fertilizer industry'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey - Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002; U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
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
					dataLabels: {
						enabled: true,
						style: {
              fontWeight: 'bold',
							color:'black'
							}
						}
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [78.3, 72.8, 76.8, 54.0],
				color: 'rgba(93,151,50,.85)',
				name: 'Consumption per 2000 dollar value of shipments',
				//color: '#410E14'
				}]
			});
		}
	for(var i = 0; i <$('.fig16').length; i++)
	{
    new Highcharts.Chart({
			chart: {
				renderTo: $('.fig16')[i],
				defaultSeriesType: 'column',
				zoomType:'xy'
				},
			title: {
        text: 'Figure 16: Energy consumption per 2000 dollar of value of shipments<br />' + 'increased in the plastics material and resins industry'
        },
			credits: {
				text: 'Sources: U.S. Energy Information Administration, Manufacturing Energy Consumption Survey â€“ Table 6.1: Consumption Ratios of Fuel, 1991, 1994, 1998, and 2002; U.S. Bureau of Economic Analysis, Gross-Domestic-Product-(GDP)-by Industry Data, 1991, 1994, 1998, and 2002',
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
					dataLabels: {
						enabled: true,
						style: {
              fontWeight: 'bold',
							color:'black'
							}
						}
					}
				},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +':</b><br />' + this.x + ': ' + Highcharts.numberFormat(this.y, 1) + ' thousand Btu';
					}
				},
			series: [{
				data: [8.2, 8.6, 8.0, 13.6],
				color: 'rgba(102, 102, 102,.85)',
				name: 'Consumption per 2000 dollar value of shipments',
				//color: '#410E14'
				}]
			});
		}