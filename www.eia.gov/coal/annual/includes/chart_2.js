// JavaScript Document by CJ

function InsertCHART2Code() {	
$(window).load(function() {
	
var chart_container_chart2; // globally available
      chart_container_chart2 = new Highcharts.Chart({
         chart: {
		renderTo: 'container_chart2',
		defaultSeriesType: 'column'
	},
	
	credits: {
		text: 'Source:  Annual Coal Report Table 11.',
		href: '/coal/annual/xls/table11.xls' 
	},
	
	title: {
		text: 'Productive capacity of coal mines by mine type, 2008-15',
		},
	
	 navigation: {
            buttonOptions: {
                align: 'right',
				verticalAlign: 'top',
                y: 20
            }
    
	    },

	xAxis: {
		categories: ['2008', '2009','2010', '2011', '2012','2013','2014','2015']
	},
	yAxis: [{
		title:{
			text:'thousand short tons'
		},
		tickInterval: 200000
	}],	
	
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
				name: 'underground',
				//color: 'rgba(0, 57, 83, 1.0)',
				data: [446445,439601,440850,435160,431888,415914,429614,393555]
				}, 
				{
				name: 'surface ',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [926411,955896,887232,895408,852481,836060,814102,771337]
                },
				/*{
				name: 'Coke',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [95.00,118.09,143.01,153.59,184.44]
				},*/
				{
				name: 'total',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [1372856,1395497,1328083,1330567,1284369,1251974,1243716,1164892]
				}
				
      ]
    });
	
});

}

   
	
