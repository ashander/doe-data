// JavaScript Document by CJ

function InsertMONTHLYCode() {	
$(window).load(function() {
	
var chart_container_col; // globally available
      chart_container_col = new Highcharts.Chart({
         chart: {
		renderTo: 'container_col',
		defaultSeriesType: 'line'
	},
	
	credits: {
		text: 'Source:  Annual Coal Report Table 34.',
		href: '/coal/annual/xls/table34.xls' 
	},
	
	title: {
		text: 'Average price of coal delivered to end-use sector, 2008-15',
	},
	


	xAxis: {
		categories: ['2008','2009', '2010','2011', '2012', '2013','2014','2015']
	},
	yAxis: [{
		title:{
			text:'dollars per short ton'
		},
		tickInterval: 20
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
				showName:true
			}
		}
	},
	
 series: [ {
				name: 'electric power',
				//color: 'rgba(0, 57, 83, 1.0)',
				data: [40.69,43.33,44.27,46.24,45.77,45.03,45.66,42.58]
				}, 
				{
				name: 'other industrial',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [63.42,64.87,64.38,70.66,70.33,69.16,68.2,65.44]
                },
				{
				name: 'coke producers',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [118.09,143.01,153.59,184.44,190.55,156.99,131.41,118.69]
				},
				{
				name: 'commercial/institutional',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [86.5,97.28,88.42,91.94,90.76,90.51,87.87,85.7]
				}
				
      ]
    });
	
});

}

   
	
