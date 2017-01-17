// Figure 3. Average energy expenditures for selected states, 2009
// /consumption/residential/reports/2009-RECS-show-decreased-home-energy-consumption.cfm

jQuery(document).ready(function(){
var colors = Highcharts.getOptions().colors,
	jColumn = {
		chart: {
			zoomType:'xy',
			renderTo: 'container_col3',
			defaultSeriesType: 'column',
      height: 500,
      marginLeft: 50,
      events: {
				load: function() { // on complete
                    this.renderer.path(['M', 460, 175, 'L', 400, 200, //main line
                                        'M', 400, 200, 'L', 410, 190, //top left arrow
                                        'M', 400, 200, 'L', 417, 200]) //bottom right arrow
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
			text: 'Figure 3. Average home energy expenditures for selected states, 2009'
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +' homes spend $' + Highcharts.numberFormat(this.y, 0) + ' per housing unit</b>';
				}
		},
        legend: {
            enabled: false
        },
		xAxis: [{
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
			}],
		yAxis: [{
			title:{
				text:'dollars per housing unit'
				},
			plotLines: [{ // mark the weekend
					color: '#000',
					width: 2,
					value: 2033,
					dashStyle: 'dash'
				}],
			}],
        labels: {
			items: [{
				html: 'National Average = $2,024 per housing unit',
				style: {
					left: '300px',
					top: '80px',
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
				y: 2479,
				color: colors[0]
				},{
				name: 'CT, ME, NH, RI, VT',				
				y: 2949,
				color: colors[0]
				},{
				name:'NY',
				y: 2445,
				color: colors[0]
				},{
				name:'PA',
				y: 2353,
				color: colors[0]
				},{
				name:'NJ',
				y: 3065,
				color: colors[0]
				},{
				name:'IL',
				y: 2068,
				color: colors[1]
				},{
				name:'MI',
				y: 2147,
				color: colors[1]
				},{
				name:'WI',
				y: 1925,
				color: colors[1]
				},{
				name:'IN, OH',
				y: 1949,
				color: colors[1]
				},{
				name:'MO',
				y: 1891,
				color: colors[1]
				},{
				name:'IA, MN, ND, SD',
				y: 1947,
				color: colors[1]
				},{
				name:'KS, NE',
				y: 1784,
				color: colors[1]
				},{
				name:'VA',
				y: 2157,
				color: colors[2]
				},{
				name:'GA',
				y: 2074,
				color: colors[2]
				},{
				name:'FL',
				y: 2019,
				color: colors[2]
				},{
				name:'DC, DE, MD, WV',
				y: 2309,
				color: colors[2]
				},{
				name:'NC, SC',
				y: 1879,
				color: colors[2]
				},{
				name:'TN',
				y: 1774,
				color: colors[2]
				},{
				name:'AL, KY, MS',
				y: 2045,
				color: colors[2]
				},{
				name:'TX',
				y: 2156,
				color: colors[2]
				},{
				name:'AR, LA, OK',
				y: 1834,
				color: colors[2]
				},{
				name:'CO',
				y: 1555,
				color: colors[3]
				},{
				name:'ID, MT, UT, WY',
				y: 1649,
				color: colors[3]
				},{
				name:'AZ',
				y: 1961,
				color: colors[3]
				},{
				name:'NM, NV',
				y: 1805,
				color: colors[3]
				},{
				name:'c',
				y: 1423,
				color: colors[3]
				},{
				name:'AK, HI, OR, WA',
				y: 1647,
				color: colors[3]
				}
      ]
		}]
  };
var chart_column = new Highcharts.Chart(jColumn);
});


