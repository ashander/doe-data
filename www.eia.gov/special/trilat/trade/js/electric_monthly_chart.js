var elecMonthlyChart = {
		chart: {
			renderTo: 'electric_monthly_chart',
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
			text: 'Electricity flows from U.S. to Canada'
		},

		yAxis: {
			 title: {
                align: 'high',
                offset: -75,
                text: 'megawatthours',
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
				return Highcharts.dateFormat('%b %e, %Y', this.x) +', '+'<br/> <b> '+ this.series.name +'</b><br/>'+  Highcharts.numberFormat(this.y, 2) + ' megawatthours';
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
	
	var series_elecMon = [
		{
			name: 'STC-EETSD',
			selected: true,
			color: '#4C0810',
			data: []
		},
		{ 
			name: 'NEB',
			selected: true,
			color: '#FF99A5',
			data: []
		},
		{ 
			name: 'STC-IATD',
			selected: true,
			color: '#d94153',
			data: []
		},
		{
			name: 'STC-EETSD',
			selected: true,
			color: '#4C0810',
			data: []
		},
		{ 
			name: 'NEB',
			selected: true,
			color: '#FF99A5',
			data: []
		},
		{ 
			name: 'STC-IATD',
			selected: true,
			color: '#d94153',
			data: []
		},
		{ 
			name: 'Mexico to U.S. (CRE-CENACE)',
			selected: true,
			color:'#afe784',
			data: []
		},
		{ 
			name: 'U.S. to Mexico (CRE-CENACE)',
			selected: true,
			color:'#5d9731',
			data: []
		}
	];// JavaScript Document
	
	var series_elec_monthly_source = [
		'STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, NEB=National Energy Board of Canada,<br/>STC-IATD=Statistics Canada, International Accounts and Trade Division',
		'STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, NEB=National Energy Board of Canada,<br/>STC-IATD=Statistics Canada, International Accounts and Trade Division',
		'CRE=Comisión Reguladora de Energía, CENACE= Centro Nacional de Control de Energía'
	];
	
	function clear_elecMon_chart() {
			elecMonthlyChart.series = [];
		}
		
		
		
		//load data for electric montly
		$("#us_ca_EM").click(function() {
			clear_elecMon_chart();
			elecMonthlyChart.title.text = "Electricity flows from U.S. to Canada";
			elecMonthlyChart.series.push(series_elecMon[0]);
			elecMonthlyChart.series.push(series_elecMon[1]);
			elecMonthlyChart.series.push(series_elecMon[2]);
			elecMonthlyChart.credits.text = series_elec_monthly_source[0];
			newElecMonChart = new Highcharts.Chart(elecMonthlyChart);
		});
		
		$("#ca_us_EM").click(function() {
			clear_elecMon_chart();
			elecMonthlyChart.title.text = "Electricity flows from Canada to U.S.";
			elecMonthlyChart.series.push(series_elecMon[3]);
			elecMonthlyChart.series.push(series_elecMon[4]);
			elecMonthlyChart.series.push(series_elecMon[5]);
			elecMonthlyChart.credits.text = series_elec_monthly_source[1];
			newElecMonChart = new Highcharts.Chart(elecMonthlyChart);
		});
		
		
		$("#us_mx_EM").click(function() {
			clear_elecMon_chart();
			elecMonthlyChart.title.text = "Electricity flows between U.S. and Mexico";
			elecMonthlyChart.series.push(series_elecMon[6]);
			elecMonthlyChart.series.push(series_elecMon[7]);
			elecMonthlyChart.credits.text = series_elec_monthly_source[2];
			newElecMonChart = new Highcharts.Chart(elecMonthlyChart);
		});
	