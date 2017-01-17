// Figure 2. Total residential energy consumption, 1980-2009
// /consumption/residential/reports/2009-RECS-show-decreased-home-energy-consumption.cfm

jQuery(document).ready(function(){
var colors = Highcharts.getOptions().colors,
	jColumn = {     
		chart: {
			zoomType:'xy',
			renderTo: 'container_line',
			defaultSeriesType: 'line',
            height: 400,
            marginLeft: 50
			},
		exporting: {
			csvOptions: {
				overrideURL: '/consumption/residential/reports/2009/xls/2009 RECS CE DER 1 Graphs v3.xlsx'
				}
			},
		credits: {
			text: 'Source: Residential Energy Consumption Survey. Includes occupied primary housing units only.',
			href: '/consumption/residential/data/2009/'
			},
		title: {
			text: 'Figure 2. Total residential energy consumption, 1980-2009' 
			},
		tooltip: {
            crosshairs: true,
			formatter: function() {
				return '<b>Total Residential Energy Consumption:</b><br>' + this.y +' quadrillion Btu'
				}
		},
		
        xAxis: {
			categories: ['1980', '', '1982', '', '1984', '','','1987', '', '', '1990', '', '','1993', '', '','','1997', '', '','','2001', '', '','','2005', '', '','','2009'],
			tickColor: '#ffffff'
            },
            //tickmarkPlacement: 'on'
		yAxis: [{
			title:{
				text:'quadrillion Btu',
				},
			max: 11,
			min: 0,
			//tickInterval: 0.5,
			}],
		series: [{
			data: [9.3, null, 8.6, null, 9.0, null,null,10.6, null,null,9.2, null,null,10.01,null,null,null, 10.25,null,null,null, 9.86, null,null,null,10.55, null,null,null,10.18],
			name: 'Total Consumption',
			connectNulls:true,
			marker: {
				enabled: true,
				radius: 2
				}
			}]
		};
var chart_column = new Highcharts.Chart(jColumn);
});


