require({
	'baseUrl' : '/state/rankings'
}, [
	'rankingsTable',
	'numberformatter',
	'order!signals',
	'order!hasher',
	'bucketMap'
],
	function(RankingsTable, NumberFormatter, Signals, Hasher, BucketMap){
		$.getJSON('dataProxy.cfc', {method : 'getConfig'}, function(data) {
			var table;
			var map;
			
			var selectionChanged = function(obj) {
				$.getJSON('dataProxy.cfc', {method : 'getData', seriesId : obj.selected }, function(data) {
					units = data.SERIES.UNITS;
					var date;
					switch(data.SERIES.PERIODICITY) {
						case 'M':
							date = Highcharts.dateFormat('%B %Y', new Date(data.PERIOD).getTime());
							break;
						case 'A':
						default:
							date = Highcharts.dateFormat('%Y', new Date(data.PERIOD).getTime());
					}
					$('#titleContainer > h1').empty().append('Rankings: ' + data.SERIES.NAME + ', ' + date + '<br/>(' + data.SERIES.UNITS + ')');
					//$('#sortContainer').empty().append('sort by: <a>Rank</a> | <a>State</a>');
					
				
					table = new RankingsTable($('#tableContainer'),
						{
							title : '',
							minRowsShown : 51,
							doubleHeader : false,
							tableClass : 'all_left',
							footnoteSpan : 4,
							footnotes : function() {
								var ret = [];
								ret.push({
									text : 'Note: Rankings are based on the full source data values.',
									span : 4
								});
								if(typeof data.SERIES.NOTE != 'undefined' && data.SERIES.NOTE.length > 0) {
									ret.push({
										text : data.SERIES.NOTE,
										span : 4
									});
								}
								return ret;
							}(),
							columns : [
								{
									ranked : false,
									name : 'Rank',
									field : 0,
									sortFunction: RankingsTable.LOW_TO_HIGH,
									sortable : true
								},
								{
									ranked : false,
									name : 'State',
									field : 2,
									displayFormatter : function(value, row, column) {
										return '<a href="../?sid=' + value + '">' + row[column.descriptionField] + '</a>';
									},
									descriptionField : 3,
									sortFunction : RankingsTable.LOW_TO_HIGH,
									sortable : true
								},
								{
									ranked : false,
									name : data.SERIES.NAME,
									units: data.SERIES.UNITS,
									field : 1,
									dataFormatter : function(value, row, column) {
										return !isNaN(parseFloat(value)) ? NumberFormatter.round(value, data.SERIES.PRECISION) : '--';
									},
									displayFormatter : function(value, row, column) {
										return !isNaN(parseFloat(value)) ? NumberFormatter.addCommas(value) : '--';
									},
									sortFunction: RankingsTable.HIGH_TO_LOW,
									showValueBar : true
								}
							],
							displayColumns : [
								{width:'75px'},{},{width:'35px'},{width:'235px'}
							],
							data : data.QUERY.DATA,
							csvFileName : data.SERIES.NAME + '-StateRankings',
							rowFilterFunction : function(row) {
								if(isNaN(parseFloat(row[1]))) {
									return false;
								}
								return true;
							}
						}
					);
				
					if(window.location.search.indexOf('?') != -1) {
						var parts = window.location.search.substring(window.location.search.indexOf('?') + 1).split('&');
						
						$.each(parts, function(index,value) {
						  var vals = value.split('=');
						  
						  if(vals.length > 1 && vals[0].toLowerCase() == 'sid'){
							table.highlightRow(table.columns[1], vals[1].toUpperCase());
						  }
						});
					}
					
					/*var grid = new DataGrid($('#tableContainer'));
					
					var columns = [
						{id: "rank", name: "Rank", field: $.inArray('RANK', data.QUERY.COLUMNS), sortable: true},
						{id: "state", name: "State", field: $.inArray('NAME', data.QUERY.COLUMNS), sortable: true},
						{id: "value", name: (data.SERIES.NAME ? data.SERIES.NAME : null), field: $.inArray('VALUE', data.QUERY.COLUMNS)},
						
					];
					
					var options = {
						enableColumnReorder : false,
						enableCellNavigation: false
					};
					grid.update(data.QUERY.DATA, columns, options);
					*/
					
					var mapData = {}, valueIndex = $.inArray('VALUE', data.QUERY.COLUMNS), stateIndex = $.inArray('STATE', data.QUERY.COLUMNS);
					$.each(data.QUERY.DATA, function(index, value) {
						mapData[value[stateIndex]] = value[valueIndex];
					});
					var options = {
						'legendItemFormatter' : function(val){
							return Highcharts.numberFormat(val, this.options.dataPrecision)
						},
						'onRegionLabelShow' : function(event, label, code){
							if (code) {
								if(code in map.counts[0]) {	
									var rank = null;
									$.each(table.data, function(index, value) {
										if(value[2] == code.toUpperCase()) {
											rank = value[0];
										}
									});
									var units = data.SERIES.UNITS, dollars = '';
									if(units.indexOf('$') != -1) {
										dollars = units.slice(0, units.indexOf('$') + 1);
										units = units.substr(units.indexOf('$') + 1);
									}
									
									$(label).html('<b>'+$(label).html() + '</b><br>');
									$(label).html($(label).html() + 
										(isNaN(parseFloat(map.counts[0][code])) ? 
											(map.counts[0][code] == null ? '--' : map.counts[0][code]) : 
											dollars + Highcharts.numberFormat(map.counts[0][code], data.SERIES.PRECISION) + 
											' ' + units) + '<br>Rank: ' + rank );
								}
							}
							else {
								label.empty();
							}
						},
						/*'onRegionClick' : function(event, code) {
							table.scrollToRow(table.columns[1], code.toUpperCase());
							table.highlightRow(table.columns[1], code.toUpperCase());
						},*/
						'dataPrecision' : data.SERIES.PRECISION,
						'bucketFunction' : function(counts, palette) {
							var ret = [], self = this;
							$.each(data.SERIES.RANGES, function(index, value) {
								var bucket = {min: value.MIN, max: value.MAX};
								bucket.label = (
									bucket.min ? 
										(bucket.max ? 
											(data.SERIES.UNITS == '$' ? data.SERIES.UNITS : '') + Highcharts.numberFormat(bucket.min, self.options.dataPrecision) + ' to  < ' + (data.SERIES.UNITS == '$' ? data.SERIES.UNITS : '') + Highcharts.numberFormat(bucket.max, self.options.dataPrecision) : 
											'>= ' + (data.SERIES.UNITS == '$' ? data.SERIES.UNITS : '') + Highcharts.numberFormat(bucket.min, self.options.dataPrecision)
										) : 
										'<= ' + (data.SERIES.UNITS == '$' ? data.SERIES.UNITS : '') + Highcharts.numberFormat(bucket.max, self.options.dataPrecision)) + (data.SERIES.UNITS != '$' ? ' ' + data.SERIES.UNITS : '');
								bucket.testValue = function(val) { 
									if(this.min && this.max) {
										return (val >= this.min && val < this.max);
									}
									else if(this.min) {
										return (val >= this.min);
									}
									else if(this.max) {
										return (val <= this.max);
									}
									return false;
								};
								ret.push(bucket);
							});
							
							return ret;							
						}
					};
					if(!map) {
						map = new BucketMap($('#parentMapContainer'), 'usa_en');
					}
					
					map.update(mapData, '',  options);
					
					var largeMap;
					
					$('#mapLink').fancybox({
						width:'800px', 
						height: '500px', 
						//Fancybox2
						beforeLoad: function(event) {
							$('#largeMapContainer').css('display', 'block');
						},
						afterShow : function(event) {
							largeMap = new BucketMap($('#largeMapContainer'), 'usa_en');
							largeMap.update(mapData, '',  $.extend(options, {'onRegionClick' : function(event, code) {
								$.fancybox.close();
								table.scrollToRow(table.columns[1], code.toUpperCase());
								table.highlightRow(table.columns[1], code.toUpperCase());
							}}));
						},
						afterClose : function(event) {
							largeMap.destroy();
							$('#largeMapContainer').css('display', 'none');
						},
						//FancyBox1
						onStart: function(event) {
							$('#largeMapContainer').css('display', 'block');
						},
						onComplete : function(event) {
							largeMap = new BucketMap($('#largeMapContainer'), 'usa_en');
							largeMap.update(mapData, '',  $.extend(options, {'onRegionClick' : function(event, code) {
								$.fancybox.close();
								table.scrollToRow(table.columns[1], code.toUpperCase());
								table.highlightRow(table.columns[1], code.toUpperCase());
							}}));
						},
						onCleanup : function(event) {
							largeMap.destroy();
							$('#largeMapContainer').css('display', 'none');
						}
					});
					$('#parentMapContainer').on('click', function(event) {
						$('#mapLink').click();
						return false;
					});
				});
			};
			
			var parseHash = function(newHash, oldHash) {
				var updateCalled = false;
				
				if(newHash != oldHash) {
					var hashSplit = newHash.split('/');
					$.each(hashSplit, function(index, value) {
						if(value.toLowerCase() == 'series') {
							if($.inArray(parseInt(hashSplit[index+1]), data.POSSIBLEVALUES) != -1) {
								selectionChanged({selected: hashSplit[index + 1]});
								updateCalled = true;
							}
						}
					});
				}
				
				if(!updateCalled && !table) {
					selectionChanged({selected: data.DEFAULTVALUE});
				}
			};
			
			Hasher.initialized.add(parseHash);
			Hasher.changed.add(parseHash);
			Hasher.init();
		});
	}
);