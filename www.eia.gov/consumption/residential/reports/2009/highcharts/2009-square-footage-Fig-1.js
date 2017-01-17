// Figure 1. Newer homes trend larger in all regions of the country
// /consumption/residential/reports/2009-square-footage.cfm

jQuery(document).ready(function(){
var jColumn = {
	chart: {
		zoomType:'xy',
		renderTo: 'container_col',
		defaultSeriesType: 'column',
		},
	//exporting: {
		//csvOptions: {
			//overrideURL: '/consumption/residential/reports/2009/xls/2009-RECS-Square-Footage-Graphs.xlsx'
			//}
		//},
	credits: {
		text: '2009 RECS: Housing Characteristics, Square Footage',
		href: '/consumption/residential/data/2009/#sf'
	},
	title: {
		text: 'Figure 1. Newer homes trend larger in all regions of the country'
	},
	tooltip: {
      formatter: function() {
                return '<b>'+ this.x +' homes built in ' + this.series.name +'</b><br/>'+ this.y +' average square footage';
      }
   },
	xAxis: {
		title: {
				text: 'Year of Construction'
				},
		categories: ['US', 'Northeast', 'Midwest', 'South', 'West'],
		plotLines : [
        $.extend(true, {
            value: 0.5
        }, Highcharts.eia_projections_line)
    ],
	},
	yAxis: [{
		max: 3600,
		tickInterval: 600,
		title:{
			text:'average square footage'
			}
		}],
		series:
		 [{
		name: '1970s',
		data: [1685, 1922, 1887, 1604, 1493]
	}, {
		name: '1980s',
		data: [1770, 2125, 2010, 1619, 1677]
	}, {
		name: '1990s',
		data: [2200, 2507, 2524, 2073, 2082]
	}, {
		name: '2000s',
		data: [2465, 3006, 3033, 2302, 2146]
	}]
};
var chart_column = new Highcharts.Chart(jColumn);
});


