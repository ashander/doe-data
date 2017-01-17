// JavaScript Document by CJ

function InsertCHART3Code() {	
$(window).load(function() {
	
var chart_container_chart3; // globally available
      chart_container_chart3 = new Highcharts.Chart({
         chart: {
		renderTo: 'container_chart3',
		defaultSeriesType: 'column'
	},
	
	credits: {
		text: 'Source:  Annual Coal Report Table 18.',
		href: '/coal/annual/xls/table18.xls' 
	},
	
	title: {
		text: 'Average number of employees by mine type, 2008-15',
	},
	


	xAxis: {
		categories: ['2008','2009', '2010','2011', '2012', '2013','2014','2015']
	},
	yAxis: [{
		title:{
			text:'employees'
		},
		tickInterval: 10000
	}],	
	 navigation: {
            buttonOptions: {
                align: 'right',
				verticalAlign: 'top',
                y: 20
            }
    
	    },
	
	/*	captions : {
			items:[{
				text:'<b>Note:</b> Data for January 2010 through September 2012 are revised to match MSHA, October through December 2012 are preliminary EIA estimates.',
				style:{
					fontSize:'10px',
					color:'black'
				}
				
			}]
			
		},*/
		plotOptions: {
		series: {
			dataLabels: {
				enabled: false,
				color: 'black'
			},
			tooltip:{
				// Exludes the series name from the tooltip output
				showName: true
			}
		}
	},
	
 series: [ {
				name: 'underground',
				//color: 'rgba(0, 57, 83, 1.0)',
				data: [50100,49575,50515,54395,54426,49504,46348,40045]
				}, 
				{
				name: 'surface ',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [37492,37144,35542,37087,35310,30705,28456,25814]
                },
				/*{
				name: 'Coke',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [95.00,118.09,143.01,153.59,184.44]
				},*/
				{
				name: 'total',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [87755,86859,86195,91611,89838,80396,74931,65971]
				}
				
      ]
    });
	
});

}

   
	
