// 2009 Metholdology. Type of Home
// /consumption/residential/data/2009/#tabs-4

/*
Data is:
											RECS Measurement	Respondent Report	difference
Single Family Home	w/ finished basement	3241				2277				30%
					w/ unfinished basement	3026				1786				41%
					No basement				1991				1795				10%
Apartment									955					868					9%
Mobile Home									1096				1099				0%
---

Would like to be able define my categories hierarchically - example:
xAxis: [{
  categories: [{
    name: 'Single Family Home'
    children: ['w/ finished basement', 'w/ unfinished basement', 'No basement']
  },{
    name: 'Apartment'
    children: ['']
  },{
    name: 'Mobile Home'
    children: ['']
  }]
}]

and get a result similar to what is fudged up by using the renderer on the right.
*/

jQuery(document).ready(function(){
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'methodology_chart',
        type: 'column'
		},
	title: {
		text: 'Average square footage by data source' 
		},
	exporting: {
		csvOptions: {
			overrideURL: '/consumption/residential/data/2009/Square Footage Methodology.xlsx'
			}
		},
	yAxis: [{
		title:{
			text:'square feet',
			},
		max: 3500,
		//min: 0,
		tickInterval: 500,
		}],
    xAxis: [{
        categories: ['Single family home w/ finished basement', 'Single family home  w/ unfinished basement', ' Single family home w/ no basement', 'Apartment', 'Mobile home'],
        tickLength: 20,
		/*title:{
			text:'type of home',
			},*/
		labels: {
            y: 20
			},
		}],
    legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle',
		
	},
	credits: {
		text: 'Source: 2009 Residential Energy Consumption Survey',
		href: '/consumption/residential/data/2009/'
		},
	captions: {
		marginTop:5,
		marginLeft:0,
		marginRight:15,
		marginBottom:5,
		enabled: true,
		style: {
			color: '#888888',
			fontSize: '11px',
			fontFamily: 'Arial, Verdana, sans-serif',
            },
		items:[{
			text: "Only includes homes with complete in-person measurements and a respondent report. Data is not imputed or weighted."
			// The same options specified above can
			// be overridden here.
			}]
		},
    series: [{
        name: 'RECS Measurement',
        data: [['RECS Measurement', 3241],['RECS Measurement',3026],['RECS Measurement', 1991],['RECS Measurement', 955], ['RECS Measurement', 1096]]
		},{
        name: 'Respondent Report',
        data: [['Respondent Report', 2277],['Respondent Report',1786],['Respondent Report', 1795],['Respondent Report', 868], ['Respondent Report', 1099]]
		}]
});/*, function(chart){
    $('.highcharts-axis:first > text').each(function() {
       this.setAttribute('y', parseInt(this.getAttribute('y')) - 20)
    });
    
    var text1 = chart.renderer.text("Single Family Home", 120, 375).add();
    var text2 = chart.renderer.text("Apartment", 295, 375).add();
	var text3 = chart.renderer.text("Mobile Home", 372, 375).add();
});*/
});


