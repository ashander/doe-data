// Figure 2. The average Southern home built in the 2000s has 54% more cooled floorspace than one built in the 1970s
// /consumption/residential/reports/2009-square-footage.cfm
$(document).ready(function() {
	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container_spot', 
      events: {
				load: function() { // on complete
				this.renderer.path(['M', 580, 165, 'L', 495, 207, 'M', 580, 165, 'L', 565, 167, 'M', 580, 165, 'L', 570, 177])
				.attr({
					'stroke-width': 2,
					stroke: 'rgb(74, 126, 187)'
					})
				.add();
				}
				},
			defaultSeriesType: 'scatter'
			},
		//exporting: {
			//csvOptions: {
				//overrideURL: '/consumption/residential/reports/2009/xls/2009-RECS-Square-Footage-Graphs.xlsx'
				//}
			//},
		title: {
			text: 'Figure 2. The average Southern home built in the 2000s' + '<br/>' + 'has 54% more cooled floorspace than one built in the 1970s'
			},
		credits: {
			text: '2009 RECS: Housing Characteristics, Square Footage',
			href: '/consumption/residential/data/2009/#sf'
		},
		xAxis: {
			title: {
				text: 'Year of Construction'
				},
				categories: ['Pre-1940s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s']
				},
		yAxis: {
			title: {
				text: 'millions of homes'
				}
			},
		legend: {
			enabled: false
			},
		tooltip: {
			formatter: function() {
				return '<b>Homes built in the '+ this.x +'.</b><br/>'+
				this.point.id +' average cooled square feet,<br/>'+ this.y +' million total housing units';
				}
			},
		plotOptions:{
			series:{
				marker:{
					enabled:true,
					//radius: 30,
					//fillColor :'green'
					},
				dataLabels:{
					y:4,
					enabled:true,
					color:'black',
					style: {
						fontWeight: 'bold',
						},
					formatter:function(){if( typeof(this.point.id) != 'undefined' ){return this.point.id;}}
					}
				},
			scatter: {
				marker: {
					//radius: 10,
					//fillColor: 'red',
					states: {
						hover: {
							enabled: false,
							}
						},
					states: {
						hover:{
							enabled: false
							}
						}
					}
				}
			},
		labels: {
			items: [{
				html: 'There are 8.2 million homes' + '<br />' + 'built in the 2000s in the South;' + '<br />' + 'average cooled square footage' + '<br />' + 'is 2,083.',
				style:  {
					left:  '365px',
					top:  '119px'
					} 
				}]
			},
		series: [{
			point:{
					events:{
							mouseOver:function(){
									var rHov = this.marker.radius + 2;      
									this.graphic.attr('r', rHov);
									this.graphic.attr('fill', 'rgb(0,150,215)');
							},
							mouseOut:function(){
									this.graphic.attr('r', this.marker.radius);
									this.graphic.attr('fill', this.series.fillColor);
							}
					}
			},
			data: [{
				name: 'Pre-1940s', 
				y: 2.4,
				id: 1138,
				marker: {
					radius: 12,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '1940s', 
				y: 1.6,
				id: 1019,
				marker: {
					radius: 11,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '1950s', 
				y: 3.6,
				id: 1155,
				marker: {
					radius: 13,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '1960s', 
				y: 4.4,
				id: 1355,
				marker: {
					radius: 15,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '1970s', 
				y: 6.5,
				id: 1351,
				marker: {
					radius: 15,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '1980s', 
				y: 7.5,
				id: 1391,
				marker: {
					radius: 15,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '1950s', 
				y: 8.0,
				id: 1823,
				marker: {
					radius: 19,
					fillColor: 'rgb(198, 217, 241)'
					}
				},{
				name: '2000s', 
				y: 8.2,
				id: 2083,
				marker: {
					radius: 22,
					fillColor: 'rgb(198, 217, 241)'
					}
				}]
			}]
		}
	);
		});//end doc ready
