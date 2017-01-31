// JavaScript Document by CJ 

function InsertGENSUMCode() {
$(window).load(function() {
	$.when(
		$.getScript(eia_theme_path),
		$.getScript(highcharts_captions_path),
		$.Deferred(function( deferred ){
			$( deferred.resolve );
		})
	).done(function(){
		 var chart1;
		 chart1 = new Highcharts.Chart({
			 chart: {
				renderTo: 'chart1',
				defaultSeriesType: 'line',
				zoomType: 'xy'
					
			},
			  credits: {
				 text: ' Source: U. S. Energy Information Administration'
			 },
			 title: {
				text: 'Monthly nuclear utility generation'
				
				},
			 


			 
			 yAxis: {
				tickInterval: 2500000,
				gridLineWidth: 1,
				min: 54000000,
				max: 76000000,
				title:{
					text: 'megawatt hours', 
					}
			 },
			 

				   xAxis: { 
			   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

			 }, 
		

			/*  tooltip: {
				  formatter: function() {
					  return ''+this.series.name+' :<b>'  + Highcharts.numberFormat(this.y, 0) +'</b> megawatt hours';
					  },
			  style: { padding: 5, fontFamily: 'Arial', fontSize: '11.5px' }
				  },	*/			   

			plotOptions: {
			series: { 
				marker: {
					enabled: false
					}
				}
			},	

			 series: [
			
		 /* { name: '2008',
		
		  selected: true,
		  data: [70735552,65130385,64716468,57332716,64825901,70319366,74318270,72617066,67053867,	62792871,63408145,72931328]
		  },
			
		  { name: '2009',
		 
		  selected: true,
		  data: [74102489, 64227211,	67240567,	59408407,	65375452,	69734736,	72948979,	72244597,	65661942,	58020932,	59069208,	70710218]
		  },
		  
		  
		  */
		 /* {
		  name: '2011',
		  
		  selected: true,
		  data: [72742813, 64789078,65661598,54547338,57016703,65270134,72344850,71338566, 66848854,63353856,64473880,71837372]
		  },
		  
		  {
		  name: '2012',
		  selected: true,
		  data: [72381186,63847023,61728613,55870931,62081445,65140085,69129329,69602111,64510882,59743218,56712757,68583669]
		  },
		  */
		  {
		  name: '2013',
		  
		  selected: true,
		 //  type: 'spline',
		  data: [71405817,61483385,62947389,56766882,62848155,66429690,70530996,71344379,65798971,63183533,64975493,71293578]
		  },
		  {
		  name: '2014',
		  
		  selected: true,
		  // type: 'spline',
		  data: [73064085,62638950,62397080,56384588,62947430, 68138232,71940126, 71128746,67534500,62390988,65140185,73362548]
		  },
			
		  { name: '2015',
		 
		  selected: true,
		 //  type: 'spline',
		  data: [74269974,63462070,64546799,59757495,65832604,68546165,71412176,72415352,66466372,60570921,60263941,69633664]
		  },
		  { 
		  name: '2016',
		  selected: true,
		  //type: 'spline',
		  data: [72535501,65638141,66148894,62365118,66562579,67175038,70348722,71526405,65419966,60733343,65178776]
		  }
		  ]
		});
	});
});

}
