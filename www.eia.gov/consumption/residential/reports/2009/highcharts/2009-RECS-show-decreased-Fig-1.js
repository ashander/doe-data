// Figure 1. Average energy consumption in homes and number of  units 1980-2009
// /consumption/residential/reports/2009-RECS-show-decreased-home-energy-consumption.cfm

var tooltipFormatter = {
    0: function (point) {
            return '<b>Average consumption</b><br>' + Highcharts.numberFormat(point.y, 1)+' million Btu per housing unit'
    },
    1: function (point) {
            return '<b>Number of housing units</b><br>' + Highcharts.numberFormat(point.y, 1)+' million housing units'
    }
}

jQuery(document).ready(function(){
var colors = Highcharts.getOptions().colors,
	jColumn = {
		chart: {
			zoomType:'xy',
			renderTo: 'container_2line',
			defaultSeriesType: 'line',
            height: 400,
            marginLeft: 50
			},
		exporting: {
			csvOptions: {
				overrideURL: '/consumption/residential/reports/2009/xls/2009 RECS CE DER 1 Graphs v3.xlsx'
				}
			},
		/*plotOptions: {
      line: {
	      marker: {
          radius: 4,
          }
       }
            },*/
		credits: {
			text: 'Source: Residential Energy Consumption Survey. Includes occupied primary housing units only.',
			href: '/consumption/residential/data/2009/'
			},
		title: {
			text: 'Figure 1. Average energy consumption per home and number of<br />' + 'housing units, 1980-2009' 
			},
		tooltip: {
			formatter: function(){
				return tooltipFormatter[this.series.index](this);
				},
			crosshairs: true
			},
		yAxis: [{
			title:{
				text:'million Btu per housing unit',
				style: {
					color: colors[0]
					}
				},
			max: 115,
			min: 0,
			//tickInterval: 5,
			},{
			title:{
				text:'million housing units',
				style: {
					color: colors[1]
					}
				},
			max: 115,
			min: 0,
			//tickInterval: 5,
			opposite: true
			}],
		xAxis: {
			categories: ['1980', '', '1982', '', '1984', '','','1987', '', '', '1990', '', '','1993', '', '','','1997', '', '','','2001', '', '','','2005', '', '','','2009'],
			tickColor: '#ffffff'
            },          
		series: [{
			data: [114, null, 103, null, 104.7, null, null, 100.8, null, null,98, null, null,103.6, null, null,null,101, null, null,null,92.2, null, null,null,94.9, null, null,null,89.6],
			name: 'Average Consumption',
			connectNulls:true,
			marker: {
				enabled: true,
				radius: 2
				}
			},{
			data: [81.6, null, 83.8, null, 86.3, null, null, 90.5, null, null,94, null, null,96.6, null, null,null,101.5, null, null,null,107, null, null,null,111.1, null, null,null,113.6],
			name: 'Number Housing Units',
			connectNulls:true,
			marker: {
				enabled: true,
				radius: 3
				},
			yAxis: 1
			}]
		};
var chart_column = new Highcharts.Chart(jColumn);
});


