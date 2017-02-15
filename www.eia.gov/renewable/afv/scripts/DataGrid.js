!function(define){
	define(
	[
		'signals',
		'Class'
	],
	function(signals, Class)
	{
		
		return Class.$extend({
			
			__init__ : function(container){
				var self = this;
			
				this.isFiltered = false;
				
				this.slickgrid = null;
				
				this.container = container.empty();
				this.innerGridContainer = $(this.$class.innerSlickGridHTML)
					.appendTo(this.container);
					
				this.vSlider = null;
				this.hSliderTop = null;
				this.hSliderBottom = null;
				
				this.filteredColumns = [];
				this.columns = [];
				this.data = [];
				this.options = {};
				
				this.onClick = new signals.Signal();
				
				this.onColumnOrderChanged = new signals.Signal();
				
				this.onViewRowCountChanged = function(e, args){
					self.slickgrid.updateRowCount();
					self.slickgrid.render();
				};
				
				this.onViewRowsChanged = function(e, args){
					self.slickgrid.invalidateRows(args.rows);
					self.slickgrid.render();
				};
			},
			
			update : function(data, columns, options){
				var self = this;
				
				if(!this.slickgrid){
					this.setData(data);
					this.setColumns(columns);
					this.setOptions(options);
					this.slickgrid = new Slick.Grid(
						this.innerGridContainer,
						this.data,
						this.filterHiddenColumns(this.options.addSpacerColumn ?
							this.columns.concat([this.$class.spacerColumnOps]) :
							this.columns
						),
						this.options
					);
					this.slickgrid.onClick.subscribe(function(e, data){
						self.onClick.dispatch(
							data['row'],
							data['cell'],
							self.slickgrid.getDataItem(data['row'])
						);
					});
					this.slickgrid.onSort.subscribe(function(e, args) {
						self.data.sort(function(row1, row2) {
							var field = args.sortCol.field;
							var sign = args.sortAsc ? 1 : -1;
							var value1 = row1[field], value2 = row2[field];
							var result = (value1 == value2 ? 0 : ((value1 > value2) ? 1 : -1)) * sign;
							// Nulls last
							result = (value1 == '' ? 1 : (value2 == '' ? -1 : result));
							if(result != 0) {
								return result;
							}
							return 0;
						});
						
						self.slickgrid.invalidate();
						self.slickgrid.render();
					});
					this.slickgrid.onColumnsReordered.subscribe(function(e, args) {
						self.resetHSliders();
						self.checkScroll();
						self.onColumnOrderChanged.dispatch(e, args);
					});
					this.slickgrid.onColumnsResized.subscribe(function(e, args) {
						self.resetHSliders();
						self.checkScroll();
					});
					this.checkScroll();
					//this.scrollToRight();
				}
				else{
					this.setOptions(options);
					this.setData(data);
					this.setColumns(columns);
					this.checkScroll();
				}
			},
			
			outputToArrOfArrs : function(filtered){
				filtered = filtered !== void 0 ? filtered : true;
				var cols = filtered && this.isFiltered ? this.filteredColumns : this.columns,
				ret = [],
				i, j, datum, row, col, output, formatterArgs, value, numericValue;
				
				ret.push(row = []);
				
				for(i=0; i<cols.length; i++){
					col = cols[i];
					output = col.output !== void 0 ? col.output : true;
					if(output){
						row.push('"' + col.id + '"');
					}
				}
				
				for(i=0; i < (this.data.getLength ? this.data.getLength() : this.data.length); i++){
					datum = this.data.getItem ? this.data.getItem(i) : this.data[i];
					ret.push(row = []);
					for(j=0; j<cols.length; j++){
						col = cols[j];
						output = col.output !== void 0 ? col.output : true;
						if(output){
							formatterArgs = [
								i,
								j,
								datum[col.field],
								col,
								datum
							];
							value = col.outputFormatter ?
								col.outputFormatter.apply(this, formatterArgs) :
								col.dataFormatter ?
								col.dataFormatter.apply(this, formatterArgs) :
								formatterArgs[2] || '';
							if(value)
							numericValue = (value ? value.toString().replace(/,/g, '') : NaN);
							row.push(
								!isNaN(numericValue) ? numericValue : '"' + (value ? value : '') + '"'
							);
						}
					}
				}
				
				return ret;
			},
			
			processColumns : function(cols){
				var i, col;
				for(i=0; i<cols.length; i++){
					col = cols[i];
					col.formatter = this.$class.defaultFormatter;
				}
				return cols;
			},
			
			filterHiddenColumns : function(cols){
				return $.map(cols, function(col){
					if(col.display === false) return null;
					else return col;
				});
			},
			
			checkScroll : function(){
					
				var self = this,
				slickViewport = $('.slick-viewport', this.container),
				slickPane = $('.slick-pane', this.container),
				mainPane, mainViewport, checkVScroll, checkHScroll;
				
				if(this.options.frozenColumn >= 0){
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-right');
					mainPane = slickPane.filter('.slick-pane-top.slick-pane-right');
				}else{
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-left');
					mainPane = slickPane.filter('.slick-pane-top.slick-pane-left');
				}
				
				(checkVScroll  = function(){
					if(!this.vSlider){
						// Create a vertical slider to scroll the table
						this.vSlider = $('<div></div>')
							.appendTo(this.container)
							.css({
								'position' : 'relative',
								'float' : 'left',
								'height' : mainViewport.height() - 30,
								'marginTop' : 30,
								'marginBottom' : 0,
								'marginLeft' : 10
							})
							.slider({
								'orientation' : 'vertical',
								'min' : 0,
								'max' : 100,
								'value' : 100,
								'slide' : function(event, ui){
									(function(){
										this.scrollTop = (
											this.scrollHeight - this.offsetHeight
										) * ((100- ui.value) / 100);
									}).call(mainViewport.get(0));
								}
							});
						// Bind the scroll event of the mainViewport to the slider
						mainViewport.scroll(function(){
							self.vSlider.slider('value', 100 - (100 * this.scrollTop) /
								(this.scrollHeight - this.offsetHeight)
							);
						});	
						// Adjust the widths of the containers to account for the slider
						this.innerGridContainer.width(
							this.container.width() - this.vSlider.width() - 20
						).css('float', 'left');
						
						this.slickgrid.resizeCanvas();
					}
					if(mainViewport.get(0).scrollHeight > mainViewport.height())
						this.vSlider.slider('option', 'disabled', false);
					else
						this.vSlider.slider('option', 'disabled', true);
				}).call(this);
				// If we are in horizontal scroll territory...
				(checkHScroll = function(){
					var self = this,
					mainHeader, mainPanePostion, mainHeaderPosition;
					if(!this.hSliderTop && !this.hSliderBottom){
						// Create a horizontal slider to scroll the table
						mainHeader = mainPane.find('.slick-header').eq(0);
						mainHeaderPosition = mainHeader.position();
						mainPanePosition = mainPane.position();
						this.hSliderTop = $('<div></div>')
							.appendTo(this.container)
							.css({
								'position' : 'absolute',
								'top' : mainHeaderPosition.top + mainHeader.height() - 13,
								'left' : mainPanePosition.left,
								'width' : mainViewport.width() - 28,
								'marginRight' : 30
							})
							.slider({
								'min' : 0,
								'max' : 100,
								'value' : 0,
								'slide' : function(event, ui){
									(function(){
										this.scrollLeft = (
											this.scrollWidth - this.offsetWidth
										) * (ui.value / 100);
										self.hSliderBottom.slider('value', ui.value);
									}).call(mainViewport.get(0));
								}
							})
							.addClass('hSliderTop');
						this.hSliderBottom = $('<div></div>')
							.appendTo(this.container)
							.css({
								'position' : 'absolute',
								'bottom' : 0,
								'left' : mainPanePosition.left,
								'width' : mainViewport.width() - 28,
								'marginRight' : 30
							})
							.slider({
								'min' : 0,
								'max' : 100,
								'value' : 0,
								'slide' : function(event, ui){
									(function(){
										this.scrollLeft = (
											this.scrollWidth - this.offsetWidth
										) * (ui.value / 100);
										self.hSliderTop.slider('value', ui.value)
									}).call(mainViewport.get(0));
								}
							})
							.addClass('hSliderBottom');
						// Bind the scroll event of the tableScroller to the slider
						mainViewport.scroll(function(){
							self.hSliderTop.slider('value', (100 * this.scrollLeft) /
								(this.scrollWidth - this.offsetWidth)
							);
							self.hSliderBottom.slider('value', (100 * this.scrollLeft) /
								(this.scrollWidth - this.offsetWidth)
							);
						});
						// Adjust the height of the containers and vSlider to account
						// for the height of the scroller
						this.innerGridContainer.height(
							this.container.height() - this.hSliderBottom.height() - 20
						);
						// Check to see if we need an Vertical Scrollbar again
						this.slickgrid.resizeCanvas();
						checkVScroll.call(this);
					}
					if(mainViewport.get(0).scrollWidth > mainViewport.width()){
						this.hSliderBottom.slider('option', 'disabled', false);
						this.hSliderTop.slider('option', 'disabled', false);
						mainViewport.scroll();
					}
					else{
						mainViewport.scroll();
						this.hSliderBottom.slider('option', 'disabled', true);
						this.hSliderTop.slider('option', 'disabled', true);
						this.slickgrid.autosizeColumns();
					}
				}).call(this);
			},
			
			scrollToRight : function(){
				var slickViewport = $('.slick-viewport', this.container),
				mainViewport;
				
				if(this.options.frozenColumn >= 0){
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-right');
				}else{
					mainViewport = slickViewport.filter('.slick-viewport-top.slick-viewport-left');
				}
				
				mainViewport.get(0).scrollLeft = mainViewport.get(0).scrollWidth;
			},
			
			filterNumericColumns : function(start, end, addSpacer){
				var i, column;
				this.filteredColumns = [];
				for(i=0; i<this.columns.length; i++){
					column = this.columns[i];
					if(!isNaN(column['id'])){
						if(column['id'] >= start && column['id'] <= end)
							this.filteredColumns.push(column);
					}else
						this.filteredColumns.push(column);
				};
				this.slickgrid.setColumns(this.filterHiddenColumns(
					addSpacer ? this.filteredColumns.concat([
					this.$class.spacerColumnOps	
				]) : this.filteredColumns));
				this.isFiltered = true;
				this.checkScroll();
			},
			
			setColumns : function(cols){
				this.columns = this.processColumns(cols);
				this.isFiltered = false;
				if(this.slickgrid){
					this.slickgrid.setColumns(
						this.filterHiddenColumns(
							this.options.addSpacerColumn ? this.columns.concat([
								this.$class.spacerColumnOps
							]) : this.columns
						)
					);
					this.resetHSliders();
					this.checkScroll();
				}
			},
			
			setData : function(data){
				this.data = data;
				if(this.slickgrid){
					this.slickgrid.setData(data);
					this.resetHSliders();
					this.checkScroll();
				}
			},
			
			setOptions : function(options){
				this.options = $.extend(true, {} , options, this.$class.defaultOptions);
				if(this.slickgrid){
					this.slickgrid.setOptions(options);
				}
			},
			
			redraw : function(rows){
				if(rows)
					this.slickgrid.invalidateRows(rows);
				else
					this.slickgrid.invalidateAllRows();
				this.slickgrid.render();
			},
			
			resetHSliders : function(){
				this.hSliderBottom.remove();
				this.hSliderTop.remove();
				this.hSliderBottom = this.hSliderTop = null;
			},
			
			__classvars__ : {
				
				defaultOptions : {
					'enableCellNavigation' : false,
					'enableColumnReorder' : false
				},
				
				spacerColumnOps : {
					'id' : 'spacer',
					'name' : ' ',
					'autoWidth' : true
				},
				
				innerSlickGridHTML : '<div class="inner-slickgrid-container"></div>',
		
					
				defaultFormatter : function(row, cell, value, columnDef, dataContext){
					var data = columnDef.dataFormatter ? columnDef.dataFormatter.apply(this, arguments) : value,
					display = columnDef.displayFormatter ?
						columnDef.displayFormatter.call(this, row, cell, data, columnDef, dataContext) : data;
					
					return display;
				}
			}
		});
	});
}(
	typeof define == 'function' && typeof define.amd == 'object' ? define :
	function(deps, factory){
		var i;
		for(i=0; i<deps.length; i++) deps[i] = this[deps[i]];
		this['DataGrid'] = factory.apply(this, deps);
	}
)