var elecAnnualChart = {
		chart: {
			renderTo: 'electric_annual_chart',
			defaultSeriesType: 'line',
			marginTop: 60,
			spacingBottom: 60
		},
		credits: {
			enabled:true,
			text: null,
				style: {
				width: 690,
				height: 100
			},
			position: {
				align: 'left',
				y: -80
				// y: -32
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

	var series_elecAnn = [
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
			name: 'EIA',
			selected: true,
			color: '#0196d8',
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
			name: 'EIA',
			selected: true,
			color: '#0196d8',
			data: []
		},
		{
			name: 'CRE-CENACE',
			selected: true,
			color: '#afe784',
			data: []
		},
		{
			name: 'EIA',
			selected: true,
			color: '#0196d8',
			data: []
		},
		{
			name: 'CRE-CENACE',
			selected: true,
			color: '#afe784',
			data: []
		},
		{
			name: 'EIA - Adjusted',
			selected: true,
			color: '#00355b',
			data: []
		},
		{
			name: 'EIA',
			selected: true,
			color: '#0196d8',
			data: []
		}
	];// JavaScript Document

	var series_elec_annual_source = [
		'STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, NEB=National Energy Board of Canada,<br/>STC-IATD=Statistics Canada, International Accounts and Trade Division, EIA=U.S. Energy Information Administration',
		'STC-EETSD=Statistics Canada, Energy and Transportation Statistics Division, NEB=National Energy Board of Canada,<br/>STC-IATD=Statistics Canada, International Accounts and Trade Division, EIA=U.S. Energy Information Administration',
		'CRE=Comisión Reguladora de Energía, CENACE= Centro Nacional de Control de Energía,<br/>EIA=U.S. Energy Information Administration',
		'CRE=Comisión Reguladora de Energía, CENACE= Centro Nacional de Control de Energía,<br/>EIA=U.S. Energy Information Administration<br/>The EIA values reflects interchange data between Mexico and US balancing authorities. The EIA Adjusted values include' +
		'<br/>the output of two gas-fired facilities located on the Mexican side of the border which are directly connected to the CAISO. <br/>These units are not connected to the Mexican system and are, therefore, the imports from them are not captured by<br/> interchange data.'
	];

		function clear_elecAnn_chart() {
			elecAnnualChart.series = [];
		}



		//load data for electric annual
		$("#us_ca_EA").click(function() {
			clear_elecAnn_chart();
			elecAnnualChart.title.text = "Electricity flows from U.S. to Canada";
			elecAnnualChart.series.push(series_elecAnn[0]);
			elecAnnualChart.series.push(series_elecAnn[1]);
			elecAnnualChart.series.push(series_elecAnn[2]);
			elecAnnualChart.series.push(series_elecAnn[3]);
			elecAnnualChart.credits.text = series_elec_annual_source[0];
			newElecAnnChart = new Highcharts.Chart(elecAnnualChart);
		});

		$("#ca_us_EA").click(function() {
			clear_elecAnn_chart();
			elecAnnualChart.title.text = "Electricity flows from Canada to U.S.";
			elecAnnualChart.series.push(series_elecAnn[4]);
			elecAnnualChart.series.push(series_elecAnn[5]);
			elecAnnualChart.series.push(series_elecAnn[6]);
			elecAnnualChart.series.push(series_elecAnn[7]);
			elecAnnualChart.credits.text = series_elec_annual_source[1];
			newElecAnnChart = new Highcharts.Chart(elecAnnualChart);
		});

		$("#us_mx_EA").click(function() {
			clear_elecAnn_chart();
			elecAnnualChart.title.text = "Electricity flows from U.S. to Mexico";
			elecAnnualChart.series.push(series_elecAnn[8]);
			elecAnnualChart.series.push(series_elecAnn[9]);
			elecAnnualChart.credits.text = series_elec_annual_source[2];
			newElecAnnChart = new Highcharts.Chart(elecAnnualChart);
		});

		$("#mx_us_EA").click(function() {
			clear_elecAnn_chart();
			elecAnnualChart.title.text = "Electricity flows from Mexico to U.S.";
			elecAnnualChart.series.push(series_elecAnn[10]);
			elecAnnualChart.series.push(series_elecAnn[11]);
			elecAnnualChart.series.push(series_elecAnn[12]);
			elecAnnualChart.credits.text = series_elec_annual_source[3];
			newElecAnnChart = new Highcharts.Chart(elecAnnualChart);
		});
