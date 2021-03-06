// JavaScript Document by CJ

function InsertORIGINCode() {	
$(function() {
	
var chart_container_origin; // globally available
      chart_container_origin = new Highcharts.Chart({
         chart: {
		renderTo: 'container_origin',
		defaultSeriesType: 'column',
			spacingBottom: 40,
			
			marginLeft: 40
	},
	
	credits: {
			text: '<b>Source:</b> Quarterly Coal Distribution Report. EIA survey forms: EIA-3, EIA-7A, and EIA-923. <br />Note: U.S. quarterly domestic coal distribution report excludes coke, waste coal, imports, and exports.',	
	         href: '/coal/distribution/quarterly/',
		   
	  	position : {
				y : -25
			}
	},
 
      title: {
         text: 'Top 5 coal origin and destination states, third quarter 2016',
       
	   
		 
      },
	   navigation: {
            buttonOptions: {
                verticalAlign: 'top',
                y: 20
            
            }
        },
	  
	  
	     xAxis: {
         categories:  ['WY','WV','IL','KY','TX', ' TX',' IL',' MO',' KY',' IN'],
		  labels: {
 		   y: 18,
           style: {
           	  color: 'black',
        	  fontFamily: 'Arial',
        	  fontSize: '12px'
              }
            }
	 
}, 
      yAxis: {
		 min: 0,
         max: 110,
         tickInterval: 10,
		title: {
        text: 'million short tons'    
		
      },

           labels: {
			   formatter: function() {
              return  Highcharts.numberFormat(this.value, 0); //this.value ; 
			   }
		      
		   }
      },

      tooltip: {
         formatter: function() {
           return '<b>'+ this.series.name +'<br/><b>State: '+ this.x +'<br/><b>'+ Highcharts.numberFormat(this.y, 2) + ' million short tons</b>';
         }
      },
 
   
 
					plotOptions: {
						series: {
						stacking: 'normal',
						shadow: false 
						}
					},
 
						
      legend: {
         		align: 'center',
			    backgroundColor: 'white',
			    borderWidth: 0,
			    layout: 'horizontal',
			    verticalAlign: 'bottom',
			    x: 0,
			    y: -5,
						itemStyle: {
						    fontFamily: 'Arial',
                            color: '#339',
                            fontWeight: 'normal'
                        },
						itemHoverStyle: {
	                       color: '#339',
						   fontWeight: 'bold'
                        }									
				
      },
      
      series: [{
		  selected: false,
					  type: 'column',
			name: 'Top 5 coal origin states',
				//color: 'rgba(0, 150, 215, 1.0)',
			data: [86.62,14.91,11.45,10.45,10.29,null,null,null,null,null]
			}, {
			name: 'Top 5 coal destination states',
			type: 'column',
			//color: 'rgba(163, 51, 64, 1.0)',
			data: [null,null,null,null,null,25.42,11.03,10.17,9.82,8.82]	
		
				
 
			}]
    });
	
});

}

   
	
