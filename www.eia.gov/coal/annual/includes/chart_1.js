// JavaScript Document by CJ

function InsertCHART1Code() {	
$(window).load(function() {
	
var chart_container_chart1; // globally available
      chart_container_chart1 = new Highcharts.Chart({
         chart: {
		renderTo: 'container_chart1',
		defaultSeriesType: 'pie'
	},
	
	credits: {
		text: 'Source:  Annual Coal Report Table 6.',
		href: '/coal/annual/xls/table6.xls' 
	},
	
	title: {
		text: 'U.S. coal production by rank, 2015',
	},
	
	subtitle: {
      text: 'total: 896,941 thousand short tons'
    },

	 plotOptions: {
            pie: {
                dataLabels: {
                    connectorWidth: 1,
					color: 'black'
                }
            }
        },
        
		 tooltip: {
			percentageDecimals: 1,
			 formatter: function() {
                            return '<b>'+ this.point.name +'<br> '+ Highcharts.numberFormat(this.y,0)+ '</b> thousand short tons <br>'+ Highcharts.numberFormat(this.percentage,1) +' %'
			 }
        },
    
		
        series: [{
			
            data: [
                ['Bituminous ',	403712],
				['Anthracite',	2142],
                ['Sub-Bituminous',	419515],
                ['Lignite ',	71572]
            ]
        }]
    });
});

}

   
	
