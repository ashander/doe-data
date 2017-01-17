$(function() {
    Highcharts.setOptions().exporting.buttons.contextButton.menuItems[4] = null; //eliminate the option to downlad chart data = can of worms

    // Create Frequency selector buttonset
    var differentUnits=[], dataWUnits =[];

    //loop through all grid rows to find if there are different units.
    //Create a separate object with units appended to the description while doing this.
    for(var i=0;i<sampleData.ROWS.length;i++){
        dataWUnits[i] = $.extend({},sampleData.ROWS[i]);

        if(dataWUnits[i].HAS_DATA){
            //if unit name doesn't exist in array add it.
            if($.inArray(dataWUnits[i].UNITS, differentUnits)<0)
                differentUnits.push(dataWUnits[i].UNITS);

            dataWUnits[i].DESCRIPTION = dataWUnits[i].DESCRIPTION + (dataWUnits[i].DESCRIPTION.replace(/\s+/g, '') != dataWUnits[i].UNITS.replace(/\s+/g, '') ?' (' + dataWUnits[i].UNITS + ')':'');
            dataWUnits[i].PINNED_NAME = dataWUnits[i].PINNED_NAME + ' (' + dataWUnits[i].UNITS + ')'; //This is the property used by the highchart for the series name.
        }
    }
    //if there are different units, use the object previously created, otherwise use the original one.
    if(differentUnits.length > 1)
        sampleData.ROWS=dataWUnits;

    // Object for maintaining one central object with all the data used by the various components on the page
    var dataStore = {
        menus : menus,
        selectedCategory : selectedCategory,
        selectedTable : selectedTable,
        selectedTableFrequencies: selectedTableFrequencies,
        tableData : sampleData.ROWS,// output data from coldfusion as a json string
        tableColumns : sampleData.DATACOLUMNS, // array of data columns output from coldfusion as a json string
        defaultHash : '', // Default selections for each table, include this in the database and output here
        hashSelections : {
            charted : initialCharted,
            default_charted : defaultCharted,
            frequency : 'M',
            startDateCode : {
                'A' : null,
                'M' : null
            },
            endDateCode : {
                'A' : null,
                'M' : null
            },
            validate : function() {
                if(dataStore.selectedTableFrequencies.indexOf('M') < 0){
                    this.frequency = 'A';
                } else if(this.frequency != 'M' && this.frequency != 'A') {
					this.frequency = 'M';
				}
				this.startDateCode[this.frequency] = (this.startDateCode[this.frequency] == null) ? dataStore.tableColumns[this.frequency][0] : this.startDateCode[this.frequency];
				this.endDateCode[this.frequency] = (this.endDateCode[this.frequency] == null) ? dataStore.tableColumns[this.frequency][dataStore.tableColumns[this.frequency].length-1] : this.endDateCode[this.frequency];

				if(this.frequency == 'A') {
					if(this.startDateCode[this.frequency].toString().length == 6) {
						this.startDateCode[this.frequency] = parseInt(this.startDateCode[this.frequency]/100);
					}
					if(this.endDateCode[this.frequency].toString().length == 6) {
						this.endDateCode[this.frequency] = parseInt(this.endDateCode[this.frequency]/100);
					}
				}
				else if(this.frequency == 'M') {
					if(this.startDateCode[this.frequency].toString().length == 4) {
						this.startDateCode[this.frequency] = parseInt(this.startDateCode[this.frequency]*100 + 1);
					}
					if(this.endDateCode[this.frequency].toString().length == 4) {
						if(this.endDateCode[this.frequency] == dataStore.tableColumns['A'][dataStore.tableColumns['A'].length-1]) {
							this.endDateCode[this.frequency] = dataStore.tableColumns[this.frequency][dataStore.tableColumns[this.frequency].length-1];
						}
						else {
							this.endDateCode[this.frequency] = parseInt(this.endDateCode[this.frequency]*100+12);
						}
					}
				}
				if(this.startDateCode < dataStore.tableColumns[this.frequency][0]) {
					this.startDateCode = dataStore.tableColumns[this.frequency][0];
				}
				if(this.endDateCode[this.frequency] > dataStore.tableColumns[this.frequency][dataStore.tableColumns[this.frequency].length-1]) {
					this.endDateCode[this.frequency] = dataStore.tableColumns[this.frequency][dataStore.tableColumns[this.frequency].length-1];
				}
				if(this.startDateCode[this.frequency] >= this.endDateCode[this.frequency]) {
					this.endDateCode[this.frequency] = this.startDateCode[this.frequency]+1;
				}

				// Convert each charted row from a number to string to ensure that they are always treated the same.
				$.each(this.charted, function(index, value) {
					dataStore.hashSelections.charted[index] += "";
				});
			}
		},
		getHash : function() {
			var s = dataStore.hashSelections;
			return '?f=' + s.frequency + '&start=' + s.startDateCode[s.frequency] + '&end=' + s.endDateCode[s.frequency] + '&charted=' + s.charted.join('-');
        },
        getTableChangeHash : function() {
            var s = dataStore.hashSelections;
            return '?f=' + s.frequency;
        },
        viewComponents : {
            dataGrid : null,
            chart : null,
            freqSelector : null,
            timeSlider : null
        }
    };

    // Ensure the selected table is selected initially
    $('#tableSelect').val(dataStore.selectedTable);

	// Ensure the selected category is selected initially
	$('#categorySelect').val(dataStore.selectedCategory);

	dataStore.viewComponents.freqSelector = $('#frequencySelectorContainer').buttonset().change(function(){
		var $xls = $('#XLS'),
		$href= $xls.attr('href'),
		$idx = $href.indexOf('&f='),
		$freq = $(this).find(':radio:checked').attr('id').substr(0,1);

		$xls.attr('href',$href.substring(0,($idx<0?$href.length:$idx)) + '&f=' + $freq);
	});//.change();

	dataStore.viewComponents.freqSelector.children('#monthly').button({
		disabled: dataStore.selectedTableFrequencies.indexOf('M') <0}
	);

	require(['datagrid', 'hasher', 'signals', 'gridFormatter', 'timeSlider','simpleModal'], function(DataGrid, Hasher, Signals, GridFormatter, TimeSlider) {
		function showDownloadDialog(e){
			var $this = $(this),
			buttonOffset = $this.offset();
			e.stopPropagation();
			$this.children('#main_download_button').addClass('selected');
			$this.children('#download_dialog').show();
			$this.modal({
				'autoPosition' : false,
				'overlayClose' : true,
				'fixed' : false,
				'close' : false,
				'persist' : true
			});
			$('#simplemodal-container').css({
				'top' : buttonOffset.top,
				'right' : buttonOffset.left
			});

			$('#download_dialog_container').off('click');

			$('body, #download_dialog a[id!=EMBED]').on('click',hideDownloadDialog);
		}
		function hideDownloadDialog(e){
			e.stopPropagation();
			$('body, #download_dialog a[id!=EMBED]').off('click');
			$.modal.close();
			$('#main_download_button').removeClass('selected');
			$('#download_dialog').hide();
			$('#download_dialog_container').on('click',showDownloadDialog);
		}

		$('#download_dialog_container').on('click',showDownloadDialog);
        $('#download_dialog #EMBED').on('click', function(e) {
            dataStore.viewComponents.chart.openAPIEmbed();
			hideDownloadDialog(e);
            return false;
        });
		// Initialize datagrid
		dataStore.viewComponents.dataGrid = new DataGrid($('#tableContainer'));

		// Add click handler for all click events within the datagrid
		dataStore.viewComponents.dataGrid.onClick.add(function(row, cell, datum) {
			var updateHash = false;
			if(cell == 0 && datum.HAS_DATA) {
				var api_key = 'TOTAL.' + datum.SERIES_ID + '.' + dataStore.hashSelections.frequency;

            window.open('/opendata/qb.cfm?sdid=' + api_key);
			}
			else if(cell == 2) {
				var count = 1;
				var newCharted = datum.HAS_DATA ? [row] : [];

				while((row + count) < dataStore.tableData.length && dataStore.tableData[row + count].LEVEL > datum.LEVEL) {
					if(dataStore.tableData[row + count].HAS_DATA) {
						newCharted.push(row+count);
					}
					count++;
				}
				$.each(newCharted, function(index, value) {
					var elemIndex = $.inArray(value.toString(), dataStore.hashSelections.charted);

					if(elemIndex == -1 && !datum['linechart']) {
						dataStore.hashSelections.charted.push(value);
						updateHash = true;
					}
					else if(elemIndex != -1 && datum['linechart']) {
						dataStore.hashSelections.charted.splice(elemIndex, 1);
						updateHash = true;
					}

				});
			}

			if(updateHash) {
				dataStore.hashSelections.validate();
				Hasher.setHash(dataStore.getHash());
			}
		});

		// Function that sets additional properties on the rows to establish the parent child relationship based on the indents
		var processLevels = function(){
			var tableData = dataStore.tableData,
			levelGroups = [],
			levelGroupCounters = [],
			i, j, k, level, datum;

			for(i=tableData.length - 1; i>=0; i--){
				datum = tableData[i];
				datum['LEVEL_GROUPS'] = [];
				level = datum['LEVEL'];
				// Reset all of the groups after the current level
				for(j=levelGroups.slice(0).length - 1; j > level; j--){
					levelGroups.pop();
				}
				for(k=level; k>0; k--){
					if(levelGroups[k] === void 0){
						if(k == level){
							datum['IS_LAST'] = true;
							datum['LEVEL_GROUPS'][k] = levelGroups[k] =
							levelGroupCounters[k] !== void 0 ?
							++levelGroupCounters[k] : levelGroupCounters[k] = 0;
						}
					}
					else
						datum['LEVEL_GROUPS'][k] = levelGroups[k];
				}
			}
		}();

		$('input', dataStore.viewComponents.freqSelector).on('change', function(event) {
			var newFreq = $(this).val();
			var updateHash = (dataStore.hashSelections.frequency != newFreq);
			dataStore.hashSelections.frequency = newFreq;
			if(updateHash) {
				dataStore.hashSelections.validate();
				Hasher.setHash(dataStore.getHash());
			}
		});

		$('#categorySelect').on('change', function(event) {
			var catSelect = $(this);
			var tableSelect = $('#tableSelect');

			dataStore.selectedCategory = catSelect.val();

			tableSelect.empty().append($('<option value="initial_msg"><em>please select a table</em></option>'));
            $.each(dataStore.menus[catSelect.val()]['tableList'], function(index, value) {
                tableSelect.append($('<option value="' + value.id + '">' + value.title + '</option>'));
                });
            });


        $('#tableSelect').on('change', function(event) {
            var tableSelect = $(this);

            if(dataStore.selectedTable != tableSelect.val() && tableSelect.val() != 'initial_msg') {
            dataStore.selectedTable = tableSelect.val();
            Hasher.changed.active = false;
            Hasher.setHash(dataStore.getTableChangeHash());
            window.location.search = '?tbl='+ dataStore.selectedTable;
            //Submit value to releod page
            }
        else if( tableSelect.val() != 'initial_msg'){
            tableSelect.find("option[value='initial_msg']").remove();  //get rid of "please select a table"
            }
        });

        // decodeQuery function copied from EDB in router.js for parsing a typical query string after the hash
        var decodeQuery = function(queryString){
            var queryArr = (queryString || '').replace('?', '').split('&'),
                n = queryArr.length,
                queryObj = {},
                value, key;

            while (n--) {
                if(queryArr[n] != '') {
                queryArr[n] = queryArr[n].split('=');
                value = queryArr[n][1];
                //parseFloat("") -> NaN
                queryObj[queryArr[n][0]] = value;//(value === '' || isNaN(value))? value : parseFloat(value);
                }
            }

            return queryObj;
        };

        var createDataGrid = function() {
            var columns = [{
                "id":"api",
                "field":"HAS_DATA",
                "width":30,
                "output": false,
                "cssClass":"sourcekey_column",
                "iconClass":"sourcekey",
                "resizable":false,
                "displayFormatter":GridFormatter.pinSeriesFormatter
            },{
                "id":"description",
                "field":"DESCRIPTION",
                "cssClass":"description aggregate",
                "maxWidth":904,
                "width":200,
                "displayFormatter":GridFormatter.descriptionFormatter
            }, {
                "id":"chart",
                "field":"HAS_DATA",
                "width":30,
                "output":false,
                "cssClass":"chart_column",
                "iconClass":"linechart",
                "resizable":false,
                "displayFormatter":GridFormatter.chartButtonFormatter
            }]; // Create slickGrid columns

            var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            $('#tableContainer').height((dataStore.tableData.length + 1) * 25 + 30);
            $.each(dataStore.tableColumns[dataStore.hashSelections.frequency], function(index, value) {
                var name = value;
                if(value >= dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency] && value <= dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency]) {
                    if(dataStore.hashSelections.frequency == 'M') {
                        name = monthNames[(value%100)-1].substring(0,3) + ' ' + parseInt(value/100).toString();
                    }
                    columns.push({
                        "id":value,
                        "name":name,
                        "field":"DATA." + value,
                        "width":100,
                        "displayFormatter": function(row,cell,value,columnDef,datum) {
                            var ret = datum.HAS_DATA ? GridFormatter.nestedPropertyResolver(columnDef.field, datum) : "";
                            ret = (datum.HAS_DATA && (ret === null || ret === '' || typeof ret === 'undefined')) ? '--' : ret;

                            return ret;
                        }
                    });
                }
            });
            /* {id: "ENERGY_SOURCE", name: "Energy Source", field: "ENERGY_SOURCE"},
				{id: "title", name: "Title", field: "title"},
				{id: "rating", name: "Rating", field: "rating"}*/
            dataStore.viewComponents.dataGrid.update(dataStore.tableData, columns, {
                frozenColumn : 2,
                'dataItemColumnValueExtractor': function(item, colDef) {
                    if(colDef && colDef.field){
                        return GridFormatter.nestedPropertyResolver(colDef.field, item);
                    }
                    else
                        return null;
                },
                'scrollToRight' : true,
                'addSpacerColumn' : true
            });
        };

        var createChart = function() {
            var getUTC = function(datecode, frequency) {
                var datetime;

                switch(frequency) {
                    case 'A':
                        datetime = Date.UTC(datecode, 0, 1);
                        break;
                    case 'M':
                    default:
                        datetime = Date.UTC(parseInt(datecode/100), (datecode % 100)-1, 1);
                        break;
                }
                return datetime;
            };

            var chartOptions = {
                    chart : {
                        renderTo: 'chart_container'
                    },
                    title : {
                        text : tableDisplayName
                    },
                    xAxis : {
                        type : 'datetime',
                        min : getUTC(dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency], dataStore.hashSelections.frequency),
                        max : getUTC(dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency], dataStore.hashSelections.frequency)
                    },
                    yAxis:[],
                    series : []
                },
                axes = [],
                seriesWAxes = [];

            // embed options
            $.extend(true, chartOptions, {
                'exporting' : {
                    'embedOptions' : {
                        'series_id' : null,
                        'relation_mode' : 'line'
                    }
                }
            });
            // get series_ids for embedOptions
            var series_id = [];


            var s = dataStore.hashSelections;

            if(s.charted.length > 0) {
                $.each(s.charted, function(index, value) {
                    var dataRow = dataStore.tableData[value];
                    if(typeof dataRow != 'undefined' && dataRow.HAS_DATA) {
                        var series = {
                            data : [],
                            name : dataRow.PINNED_NAME,
                            units : dataRow.UNITS
                        };

                        $.each(dataStore.tableColumns[dataStore.hashSelections.frequency], function(index, value) {
                            var datetime = getUTC(value, dataStore.hashSelections.frequency);
                            if(isNaN(parseFloat(dataRow.DATA[value]))/*|| parseFloat(dataRow.DATA[value]) == 0 Commented out pending response*/) {
                                series.data.push([datetime, null]);
                            }
                            else {
                                series.data.push([datetime, dataRow.DATA[value]]);
                            }
                        });

                        if($.inArray(dataRow.UNITS,axes)< 0){
                            axes.push(dataRow.UNITS);
                        }
                        chartOptions.series.push(series);

                        series_id.push('TOTAL.' + dataRow.SERIES_ID + '.' + dataStore.hashSelections.frequency);
                    }
                });
            }

            if(series_id.length > 0) { chartOptions.exporting.embedOptions.series_id = series_id.join(';');}

            //testing new theme option to do commented out block below.
            chartOptions.userGenerated = s.charted.join('-') != s.default_charted
            /*if(s.charted.join('-') == s.default_charted) {
                chartOptions.chart.logo = Highcharts.logos.eia;
                chartOptions.credits = Highcharts.eiaTheme.credits;
                //alert(axes.length);
                if( axes.length==1) $(".multiaxis").css("display", "none");
            }
            else {
                chartOptions.chart.logo = Highcharts.logos.none;
                if( axes.length>1) $(".multiaxis").css("display", "block");
                if( axes.length==1) $(".multiaxis").css("display", "none");
                /*chartOptions.credits = {
                     text : 'You have selected series with different units resulting in a chart with multiple axes. Please take care in interpreting this chart.',
                     href : null,
                     style: {
                         color : 'red',
                         //fontSize : '12px',
                         fontWeight : 'Bold'
                     }
                };*/
            //}*/
            if(dataStore.viewComponents.chart != null && dataStore.viewComponents.chart.hasRendered) {
                dataStore.viewComponents.chart.destroy();
            }

            for(var i=0;i<chartOptions.series.length; i++){
                seriesWAxes[i] ={yAxis:$.inArray(chartOptions.series[i].units,axes), data:chartOptions.series[i].data, name:chartOptions.series[i].name};
            }

            for(var i=0;i<axes.length;i++){
                var tmp = {title:{text:axes[i]},opposite:i%2};

                chartOptions.yAxis.push(tmp);
                if( axes.length>1) chartOptions.yAxis[i].title.align = 'middle';
            }

            chartOptions.series = seriesWAxes;

            dataStore.viewComponents.chart = new Highcharts.Chart(chartOptions);
            //			console.log(dataStore.viewComponents.chart.options);
        };

        var createTimeSlider = function() {
            // Initialize timeSlider
            dataStore.viewComponents.timeSlider = new TimeSlider($('#timeSliderContainer'));

            dataStore.viewComponents.timeSlider.create(
                { selectDateRange : 1 },
                dataStore.hashSelections.frequency,
                dataStore.tableColumns[dataStore.hashSelections.frequency],
                dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency],
                dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency]
            );

            dataStore.viewComponents.timeSlider.timeSelectionChanged.add(function(start, end) {
                var updateHash = false;
                if(dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency] != start) {
                    dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency] = start;
                    updateHash = true;
                }
                if(dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency] != end) {
                    dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency] = end;
                    updateHash = true;
                }
                if(updateHash) {
                    dataStore.hashSelections.validate();
                    Hasher.setHash(dataStore.getHash());
                }
            });
        };

        /* Assume that the hash is like:
        #charted=0-1-3-7
        Where the value for selected is a list of row numbers that are charted separated by a '-'
        */
        var handleHashChanges = function(newHash, oldHash) {
            var hashObj = decodeQuery(newHash);

            dataStore.hashSelections.charted = (typeof hashObj['charted'] != 'undefined' && hashObj['charted']) ? hashObj['charted'].split('-') : dataStore.hashSelections.charted;
            dataStore.hashSelections.frequency = (typeof hashObj['f'] != 'undefined' && hashObj['f']) ? hashObj['f'] : 'M';
            dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency] = (typeof hashObj['start'] != 'undefined' && hashObj['start']) ? parseInt(hashObj['start']) : dataStore.tableColumns[dataStore.hashSelections.frequency][0];
            dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency] = (typeof hashObj['end'] != 'undefined' && hashObj['end']) ? parseInt(hashObj['end']) : dataStore.tableColumns[dataStore.hashSelections.frequency][dataStore.tableColumns[dataStore.hashSelections.frequency].length-1];

            dataStore.hashSelections.validate();

            // Loop through and set the charted rows
            $.each(dataStore.tableData, function(index, row) {
                row['linechart'] = ($.inArray(index.toString(), dataStore.hashSelections.charted) != -1);
            });

            // Loop through in reverse set the rows whose children rows are all charted
            for(var i = dataStore.tableData.length -1; i >= 0; i--) {
                var currRow = dataStore.tableData[i];

                if(!currRow.HAS_DATA) {
                    currRow['linechart'] = true;
                    for(var j = i+1; j < dataStore.tableData.length && dataStore.tableData[j]['LEVEL'] > currRow['LEVEL']; j++) {
                        currRow['linechart'] = currRow['linechart'] && dataStore.tableData[j]['linechart'];
                    }
                }
            }

            $('input[value=' + dataStore.hashSelections.frequency + ']', dataStore.viewComponents.freqSelector).prop('checked', true);

            dataStore.viewComponents.freqSelector.buttonset('refresh');
            if(dataStore.viewComponents.timeSlider == null) {
                createTimeSlider();
            }
            createDataGrid();
            createChart();
            dataStore.viewComponents.timeSlider.updateTimeSelection(
                dataStore.hashSelections.frequency,
                dataStore.tableColumns[dataStore.hashSelections.frequency],
                dataStore.hashSelections.startDateCode[dataStore.hashSelections.frequency],
                dataStore.hashSelections.endDateCode[dataStore.hashSelections.frequency]
            );
        };

        Hasher.changed.add(handleHashChanges);

        Hasher.initialized.add(handleHashChanges);

        Hasher.init();
    });
});