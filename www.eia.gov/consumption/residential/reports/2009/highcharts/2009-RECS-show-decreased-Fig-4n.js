// Figure 4. Average Consumption per Household, 2009
// /consumption/residential/reports/2009-RECS-show-decreased-home-energy-consumption.cfm

jQuery(document).ready(function(){
var colors = Highcharts.getOptions().colors,
	jColumn = {
		chart: {
			zoomType:'xy',
			renderTo: 'container_col2',
			defaultSeriesType: 'column',
        height: 500,
        marginLeft: 50,
        events: {
				load: function() { // on complete
                    this.renderer.path(['M', 460, 155, 'L', 400, 180, //main line
                                        'M', 400, 180, 'L', 410, 170, //top left arrow
                                        'M', 400, 180, 'L', 417, 180]) //bottom right arrow
                    .attr({
                        'stroke-width': 2,
                        stroke: '#000'
                        })
                    .add();
                    }
				}
			},
		exporting: {
			csvOptions: {
				overrideURL: '/consumption/residential/reports/2009/xls/2009 RECS CE DER 1 Graphs v3.xlsx'
				}
			},
		credits: {
            text: 'Source: Residential Energy Consumption Survey. Includes occupied primary housing units only.',
			href: '/consumption/residential/data/2009/'
		},
		title: {
			text: 'Figure 4. Average home energy consumption for selected states, 2009'
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +' homes average ' + this.y + ' million Btu per housing unit</b>';
				}
		},
        legend: {
            enabled: false
        },
		xAxis: {
			categories: [
				'MA',
				'CT, ME, NH, RI, VT',
				'NY',
				'PA',
				'NJ',
				'IL',
				'MI',
				'WI',
				'IN, OH',
				'MO',
				'IA, MN, ND, SD',
				'KS, NE','VA','GA',
				'FL','DC, DE, MD, WV',
				'NC, SC',
				'TN',
				'AL, KY, MS',
				'TX',
				'AR, LA, OK',
				'CO',
				'ID, MT, UT, WY',
				'AZ',
				'NM, NV',
				'CA',
				'AK, HI, OR, WA'
				],
            tickmarkPlacement: 'on',
			labels: {
				rotation: -45,
				align: 'right',
				style: {
					fontSize: '12px',
					fontFamily: 'Arial, serif'
					}
				}
			},
		yAxis: [{
			title:{
				text:'million Btu per housing unit'
				},
			plotLines: [{ // mark the weekend
					color: '#000',
					width: 2,
					value: 90.2,
					dashStyle: 'dash'
				}],
			}],
        labels: {
			items: [{
				html: 'National Average = 89.6 mmBtu',
				style: {
					left: '300px',
					top: '50px',
                    color: '#000000',
                    fontWeight: 'bold'
					} 
				},{
				html: 'Northeast',
				style: {
					left: '25px',
					top: '10px',
                    color: colors[0],
					} 
				},{
				html: 'Midwest',
				style:  {
					left: '175px',
					top: '10px',
                    color: colors[1]
					} 
				},{
				html: 'South',
				style: {
					left:  '350px',
					top:  '10px',
                    color: colors[2],
					} 
				},{
				html: 'West',
				style: {
					left: '515px',
					top: '10px',
                    color: colors[3]
					} 
				}]
			},
		series: [{
			stack: 0,
			data: [
				{
				name: 'MA',
				y: 109.4,
				color: colors[0]
				},{
				name: 'CT, ME, NH, RI, VT',				
				y: 115.7,
				color: colors[0]
				},{
				name:'NY',
				y: 102.6,
				color: colors[0]
				},{
				name:'PA',
				y: 96.4,
				color: colors[0]
				},{
				name:'NJ',
				y: 127.4,
				color: colors[0]
				},{
				name:'IL',
				y: 128.8,
				color: colors[1]
				},{
				name:'MI',
				y: 123.2,
				color: colors[1]
				},{
				name:'WI',
				y: 103.2,
				color: colors[1]
				},{
				name:'IN, OH',
				y: 105.0,
				color: colors[1]
				},{
				name:'MO',
				y: 100.1,
				color: colors[1]
				},{
				name:'IA, MN, ND, SD',
				y: 113.0,
				color: colors[1]
				},{
				name:'KS, NE',
				y: 101.7,
				color: colors[1]
				},{
				name:'VA',
				y: 85.6,
				color: colors[2]
				},{
				name:'GA',
				y: 89.7,
				color: colors[2]
				},{
				name:'FL',
				y: 55.6,
				color: colors[2]
				},{
				name:'DC, DE, MD, WV',
				y: 88.7,
				color: colors[2]
				},{
				name:'NC, SC',
				y: 72.3,
				color: colors[2]
				},{
				name:'TN',
				y: 78.8,
				color: colors[2]
				},{
				name:'AL, KY, MS',
				y: 80.1,
				color: colors[2]
				},{
				name:'TX',
				y: 77.0,
				color: colors[2]
				},{
				name:'AR, LA, OK',
				y: 82.6,
				color: colors[2]
				},{
				name:'CO',
				y: 102.8,
				color: colors[3]
				},{
				name:'ID, MT, UT, WY',
				y: 105.0,
				color: colors[3]
				},{
				name:'AZ',
				y: 66.0,
				color: colors[3]
				},{
				name:'NM, NV',
				y: 85.4,
				color: colors[3]
				},{
				name:'CA',
				y: 61.6,
				color: colors[3]
				},{
				name:'AK, HI, OR, WA',
				y: 76.1,
				color: colors[3]
				}
			]
		}]
	};
var chart_column = new Highcharts.Chart(jColumn);
});


