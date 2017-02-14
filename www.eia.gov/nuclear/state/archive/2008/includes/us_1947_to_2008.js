// JavaScript Document by CJ

function InsertUSCode() {	
$(window).load(function() {
	
var chart_container_col; // globally available
      chart_container_col = new Highcharts.Chart({
         chart: {
		renderTo: 'container_col',
		defaultSeriesType: 'line'
	},
	
	credits: {
		text: 'Source: Form EIA-860, "Annual Electric Generator Report," <br>and Form EIA-923, "Power Plant Operations Report." ',
		href: '/electricity/data/detail-data.html',
		position : {
				y : -25,
			}, 
	},
	
	title: {
		text: 'Total electricity and nuclear net generation, 1957-2008',
	},
	


	xAxis: {
		categories: ['1957','1958','1959','1960','1961','1962','1963','1964','1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976',	'1977',	'1978',	'1979',	'1980',	'1981',	'1982',	'1983',	'1984',	'1985',	'1986',	'1987',	'1988',	'1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008'],
		 labels: {
                step: 5,
				rotation: 45
            }

	},
	yAxis: [{
		title:{
			text:'thousand megawatthours'
		},
		//tickInterval: 20
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
				name: 'total generation',
				//color: 'rgba(0, 57, 83, 1.0)',
				data: [634642.367,648450.862,713378.831,759155.788,797124.391,857943.656,920028.271,987218.326,1058385.671,1147531.895,1217795.688,1332825.601,1445458.056,1535111.467,1615853.616,1752978.413,1864056.631,1870319.405,1920754.569,2040913.681,2127447.487,2209376.911,2250665.025,2289600.364,2297973.339,2244372.488,2313445.685,2419465.368,2473002.122,2490470.952,2575287.666,2707411.177,2967305.524,3037988.277,3073798.885,3083882.204,3197191.096,3247522.388,3353487.362,3444187.621,3492172.283,3620295.498,3694809.81,3802105.043,3736643.653,3858452.252,3883185.205,3970555.264,4055422.754,4064702.229,4156745.0,4119388.0]
				}, 
				/*{
				name: 'other industrial',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [54.42,63.42,64.87,64.38,70.66,70.33]
                },
				{
				name: 'coke producers',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [95.00,118.09,143.01,153.59,184.44,190.55]
				},*/
				{
				name: 'nuclear generation',
				//color: 'rgba(93, 151, 50, 1.0)',
				data: [9.67,164.691,188.101,518.182,1692.149,2269.685,3211.836,3342.743,3656.699,5519.909,7655.214,12528.419,13927.839,21804.448,38104.545,54091.135,83479.463,113975.74,172505.075,191103.531,250883.283,276403.07,255154.623,251115.575,272673.503,282773.248,293677.119,327633.549,383690.727,414038.063,455270.382,526973.047,529354.717,576861.678,612565.087,618776.263,610291.214,640439.832,673402.123,674728.546,628644.171,673702.104,728254.124,753892.94,768826.308,780064.087,763732.695,788528.387,781986.365,787218.636,806425,806208]
				}
				
      ]
    });
	
});

}

   
	
