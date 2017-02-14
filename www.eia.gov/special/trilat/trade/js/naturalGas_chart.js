var natGasChart = {
		chart: {
			renderTo: 'naturalGas_chart',
			defaultSeriesType: 'line',
			marginTop: 60,
			spacingBottom: 40
		},
		credits: {
			enabled:true,
			text: null,
				style: {
				width: 690
			},
			position: {
				align: 'left',
				y: -32
			}
		},	  
		title: {
			text: 'Natural gas flows from U.S. to Canada'
		},

		yAxis: {
			 title: {
                align: 'high',
                offset: -125,
                text: 'billion cubic feet per day',
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
				return Highcharts.dateFormat('%b %e, %Y', this.x) +', '+'<br/> <b> '+ this.series.name +'</b><br/>'+  Highcharts.numberFormat(this.y, 2) + ' billion cubic feet per day';
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
	
	var series_naturalGas = [
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
			name: 'NEB',
			selected: true,
			color:'#FF99A5',
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
			name: 'EIA',
			selected: true,
			color:'#0196d8',
			data: []
		}
	];// JavaScript Document
	
	var series_nat_gas_source = [
		'STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, <br/>STC-IATD=Statistics Canada, International Accounts and Trade Division ,<br/>NEB=National Energy Board of Canada, EIA=U.S. Energy Information Administration',
		'STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, NEB=National Energy Board of Canada, <br/>STC-IATD=Statistics Canada, International Accounts and Trade Division ,<br/>EIA=U.S. Energy Information Administration'
	];
	
	
	function clear_natGas_chart() {
			natGasChart.series = [];
		}
		
		
		
		//load data for natural gas
		$("#us_ca_NG").click(function() {
			clear_natGas_chart();
			natGasChart.title.text = "Natural gas flows from U.S. to Canada";
			natGasChart.series.push(series_naturalGas[0]);
			natGasChart.series.push(series_naturalGas[1]);
			natGasChart.series.push(series_naturalGas[2]);
			natGasChart.series.push(series_naturalGas[3]);
			natGasChart.credits.text = series_nat_gas_source[0];
			newNgChart = new Highcharts.Chart(natGasChart);
		});
		
		$("#ca_us_NG").click(function() {
			clear_natGas_chart();
			natGasChart.title.text = "Natural gas flows from Canada to U.S.";
			natGasChart.series.push(series_naturalGas[4]);
			natGasChart.series.push(series_naturalGas[5]);
			natGasChart.series.push(series_naturalGas[6]);
			natGasChart.series.push(series_naturalGas[7]);
			natGasChart.credits.text = series_nat_gas_source[1];
			newNgChart = new Highcharts.Chart(natGasChart);
		});

	