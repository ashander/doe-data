
function InsertCPRODUCTIONCode() {
$(window).load (function() {
var chart_2012coalquarter
      chart_2012coalquarter = new Highcharts.Chart({
      		chart: {
			        renderTo: 'chart_2012coalquarter',
			        defaultSeriesType: 'column',
					marginLeft: 40
					
            },
      credits: {
      text: 'Includes refuse recovery.  Source: U.S. Energy Information Administration:  "Quarterly Coal Report."',
	  href: '/coal/production/quarterly/index.cfm'
	  },
 
      title: {
         text: 'U.S. coal production by quarter ',
         
      },
  
 	       legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            y: 120,
            padding: 3,
            itemMarginTop: 5,
            itemMarginBottom: 5,
            itemStyle: {
            	lineHeight: '14px'
            }
        },
 
      xAxis:[ {
		  categories: ['2010   ', '2011  ','2012   ','2013   ','2014  ','2015   ','2016   '],

		  title: {
			  color: 'white',
		   text: 'year',
		  }
		   
		
			  }
	  ],
	  
      yAxis: [{
		title:{
			text: 'million short tons',
	
			
		}
	}],		
	  

      tooltip: {
         formatter: function() {
           return '<b>production </b> <br/>'+ this.series.name +' '+ this.x +'<br/>'+Highcharts.numberFormat(this.y, 1) + ' million tons</b>';
         }
      },
 
        
 
     exporting: {
		 
	 
            filename: 'coal-quarterly_production',
			 
        },
		
    plotOptions: {
        series: {
            shadow: false,
			markers: false,
			stacking: 'normal' 
		}
        },

						
// Table 1
    
      series: [{
		  
			
				name: 'fourth quarter',
				color: 'rgba(0, 150, 215, 1.0)',
				data: [
				['fourth quarter',276.180],['fourth quarter',282.853],['fourth quarter',249.591],['fourth quarter',239.169],['fourth quarter',253.557],['fourth quarter',207.237]
				]
				
			}, {
			name: 'third quarter',
			color: 'rgba(163, 51, 64, 1.0)',
				data: [
				['third quarter',277.505],['third quarter',275.006],['third quarter',258.956],['third quarter',257.595],['third quarter',255.377],['third quarter',236.823],['third quarter',195.140]	
				]
								
				}, {
			name: 'second quarter',
			color: 'rgba(0, 57, 83, 1.0)',
				data: 
				[
				['second quarter',264.982],['second quarter',264.291],['second quarter',241.047],['second quarter',243.211],['second quarter', 245.844], ['second quarter', 212.557],['second quarter', 160.515]
				]		
				}, {
					
				name: 'first quarter',
					color: 'rgba(255, 199, 2, 1.0)',
				data: 
				[
				['first quarter', 265.702],['first quarter', 273.478],['first quarter',266.865],['first quarter',244.867],['first quarter', 245.271],['first quarter', 240.324],['first quarter', 173.028]
				]
 
			}]
   		
 
 
   });
        
   
   
});
}     
 

 
 