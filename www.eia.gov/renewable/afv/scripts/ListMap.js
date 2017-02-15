!function(define){
define(
[
	'signals',
	'Class'
],
function(signals, Class){
	
	return Class.$extend({
		
		container : null,
		mapContainer : null,
		legendContainer : null,
		counts : null,
		regionClicked : null,
		
		__init__ : function(container){
			var self = this;
			
			this.container = container;
			this.regionClicked =  new signals.Signal();
			
			this.mapContainer = $('#mapContainer', this.container);
			this.legendContainer = $('#map_legend', this.container);
			this.titleContainer = $('#mapTitle', this.container);
		},
		
		update : function(counts, title, options){
			var rangeVars = this.$class.determineRangeVars(counts),
			colors = this.$class.assignColors(counts, rangeVars);
			this.counts = counts;
			this.options = options || {};
			this.titleContainer.text(title);
			this.createLegend(rangeVars);
			this.mapContainer.height(
				this.mapContainer.parent().height() - 
					(this.titleContainer.outerHeight(true) + 
					this.legendContainer.outerHeight(true) + 
					parseInt(this.mapContainer.css('paddingTop')) +  
					parseInt(this.mapContainer.css('paddingBottom')) + 
					10)
				);
			this.createMap(colors, options);
		},
		
		createMap : function(colors, options){
			var self = this;
			this.mapContainer.empty();
			$('<div style="height:100%;width:100%;" class="map_inside_container"></div>').appendTo(this.mapContainer)
			.vectorMap($.extend({
				'colors' : colors,
				'onLabelShow' : function(event, label, code){
					if (code) {
						$(label).html($(label).html() + ' ' + self.counts[code.toUpperCase()] + ' plants');
					}
					else {
						label.empty();
					}
				},
				'onRegionClick' : function(event, code) {
					self.regionClicked.dispatch(code.toUpperCase());
				}
			}, this.$class.defaultMapOptions,options));
		},
		
		createLegend : function(rangeVars){
			var self = this,
			minVal, maxVal, prevMinVal, prevMaxVal, displayMin, displayMax;
			this.legendContainer.empty();
			var innerLegendContainer = $('<span style="display: inline-block; text-align:left;"></span>').appendTo(this.legendContainer);
			if (this.options.legendTitle){
				$('<span class="map_legend_title">' + this.options.legendTitle + '</span>').appendTo(innerLegendContainer);
				$('<br />').appendTo(innerLegendContainer);
				
		}
			$.each(this.$class.pallete, function(index, color){
				if(maxVal >= rangeVars.max) return false;
				else{
					prevMinVal = minVal;
					prevMaxVal = maxVal;
					minVal = parseInt(rangeVars.min + rangeVars.step * index);
					minVal = (index == 0 ? minVal : minVal + 1);
					maxVal = parseInt(rangeVars.min + rangeVars.step * (index + 1));
					maxVal = (maxVal < minVal ? minVal : maxVal);
					if(self.options.legendItemFormatter){
						displayMin = self.options.legendItemFormatter(minVal)
						displayMax = self.options.legendItemFormatter(maxVal)
					}
					else{
						displayMin = minVal;
						displayMax = maxVal;
					}
					
					if(!(isNaN(minVal) || isNaN(maxVal)) && !(minVal == maxVal && minVal == prevMaxVal)) {
						$('<span class="map_legend_marker"></span>').appendTo(innerLegendContainer)
						.css('background-color', color)
						.after('<span>' + displayMin + (minVal < maxVal ? ' to ' + displayMax + '</span>' : '')
						);
					}
					return true;
				}
			});
		},

		__classvars__ : {
		
			pallete : ['#7ce3ff', '#4cc9ff', '#0196d8', '#00628c'/*, '#00355b'*/],
			
			defaultMapOptions : {
				map: 'usa_en',
				normalizeFunction: 'polynomial',
				hoverOpacity: 0.7,
				hoverColor: false,
				backgroundColor: 'white'
			},
			
			determineRangeVars : function(counts){
				var countArr = [], 
				state, min, max, range, step;
				
				for(state in counts){
					if(counts[state] > 0)
						countArr.push(counts[state]);
				}
				
				max = Math.max.apply(null, countArr);
				min = Math.min.apply(null, countArr);
				range = max - min;
				step = range / this.pallete.length;
				
				return {
					'min' : min,
					'max' : max,
					'range' : range,
					'step' : step
				};
			},
			
			assignColors : function(counts, rangeVars){
				var ret = {},
				state, count;
				for (state in counts) {
					count = counts[state];
					if(count > 0){
						ret[state.toLowerCase()] = this.pallete[
							count != rangeVars.min ?
								Math.ceil(
									(count - rangeVars.min) / rangeVars.range * this.pallete.length
								) - 1 : 0
						];
					}
				}
				return ret;
			}
		}
	});
})
}(
	typeof define == 'function' && typeof define.amd == 'object' ? define :
	function(deps, factory){
		var i;
		for(i=0; i<deps.length; i++) deps[i] = this[deps[i]];
		this['ListMap'] = factory.apply(this, deps);
	}
)