$(document).ready(function () {
    var EIA_grapher;

    var maxFrequency = null;
    var minYear = Infinity;
    var maxYear = -Infinity;

    var update_type = function(e) {
        var map_value = $('select#map').val();
        var relation_id = $('select#relation_id').val();

        if(map_value == 'none' && relation_id == 'none') {
            $('input#type').val('chart');
        }
        else if(map_value == 'none' && relation_id != 'none') {
            $('input#type').val('relation');
        }
        else if(map_value != 'none' && relation_id == 'none') {
            $('input#type').val('map');
        }
        else if(map_value != 'none' && relation_id != 'none') {
            $('input#type').val('map_relation');
        }
    };

    $('select#map').on('change', update_type);
    $('select#relation_id').on('change', update_type);

    $('.date-selector').on('change', function(e) {
        switch(maxFrequency) {
            case 'A':
                $('input#start_date').val($('#start_year').val());
                $('input#end_date').val($('#end_year').val());
                break;
            case 'M':
                $('input#start_date').val($('#start_year').val() + $('#start_month').val());
                $('input#end_date').val($('#end_year').val() + $('#end_month').val());
                break;
            case 'Q':
                $('input#start_date').val($('#start_year').val() + $('#start_quarter').val());
                $('input#end_date').val($('#end_year').val() + $('#end_quarter').val());
                break;
            case 'H':
            case 'D':
            case '4':
            case 'W':
                $('input#start_date').val($('#start_day').val());
                $('input#end_date').val($('#end_day').val());
                break;
        }
    });

    $('.enable-date').on('change', function(e) {
        $('div.start_date select').prop('disabled', !$('input#enable_start')[0].checked);
        $('div.end_date select').prop('disabled', !$('input#enable_end')[0].checked);
    });
    function setDateModes() {
        var newVal = $('input:radio[name ="date_mode"]:checked').val();
        switch (newVal) {
            case "periods":
                $('.end_date').hide().find('input').val(""); //.find('select').val('null');
                $('.start_date').hide().find('input').val("");  //.find('select').val('null');
                $('.periods').show();
                $('.periods input#periods').val(periods); //.find('input').val(periods);
                $('.periods input#periods_number').val(periods.substr(0, periods.length-1)); //.find('input').val(periods);
                $('.periods select#periods_frequency').val(periods.substr(periods.length-1, 1));
                break;
            case "start":
            case "range":
                $('.start_date').show().find('input').val(start); //.find('select').val(start);
                $('.end_date').show().find('input').val(end); //.find('select').val(end);
                $('.periods').hide();
                $('.periods input#periods').val(''); //.find('input').val(periods);
                $('.periods input#periods_number').val(''); //.find('input').val(periods);
                $('.periods select#periods_frequency').val(''); //.find('input').val(periods);
                break;
            case "all":
            default:
                $('.end_date').hide().find('input').val(''); //.find('select').val('null');
                $('.start_date').hide().find('input').val(''); //.find('select').val('null');
                $('.periods').hide();
                $('.periods input#periods').val(''); //.find('input').val(periods);
                $('.periods input#periods_number').val(''); //.find('input').val(periods);
                $('.periods select#periods_frequency').val(''); //.find('input').val(periods);
                break;
        }
    }

    function setDateSelectorValues() {
        var start_year_selector = $('select#start_year'),
            end_year_selector = $('select#end_year'),
            start_month_selector = $('select#start_month'),
            end_month_selector = $('select#end_month'),
            start_quarter_selector = $('select#start_quarter'),
            end_quarter_selector = $('select#end_quarter'),
            start_day_selector = $('input#start_day'),
            end_day_selector = $('input#end_day');

        switch(maxFrequency) {
            case 'A':
                if(start && start.toString().length >= 4) {
                    start_year_selector.val(start.toString().substr(0, 4));
                    $('#enable_start').prop('checked',true);
                }else{
                    $('div.start_date select').prop('disabled', true);
                }
                if(end && end.toString().length >= 4) {
                    end_year_selector.val(end.toString().substr(0, 4));
                    $('#enable_end').prop('checked',true);
                }else{
                    $('div.end_date select').prop('disabled', true);
                }
                break;
            case 'M':
                if(start && start.toString().length >= 6) {
                    start_year_selector.val(start.toString().substr(0, 4));
                    start_month_selector.val(start.toString().substr(4, 2));
                    $('#enable_start').prop('checked',true);
                }else{
                    $('div.start_date select').prop('disabled', true);
                }
                if(end && end.toString().length >= 6) {
                    end_year_selector.val(end.toString().substr(0, 4));
                    end_month_selector.val(end.toString().substr(4, 2));
                    $('#enable_end').prop('checked',true);
                }else{
                    $('div.end_date select').prop('disabled', true);
                }
                break;
            case 'Q':
                if(start && start.toString().length >= 6) {
                    start_year_selector.val(start.toString().substr(0, 4));
                    start_quarter_selector.val(start.toString().substr(4, 2));
                    $('#enable_start').prop('checked',true);
                }else{
                    $('div.start_date select').prop('disabled', true);
                }
                if(end && end.toString().length >= 6) {
                    end_year_selector.val(end.toString().substr(0, 4));
                    end_quarter_selector.val(end.toString().substr(4, 2));
                    $('#enable_end').prop('checked',true);
                }else{
                    $('div.end_date select').prop('disabled', true);
                }
                break;
            case 'H':
            case 'D':
            case 'W':
            case '4':
                if(start && start.toString().length >= 8) {
                    start_day_selector.val(start.toString().substr(0, 8));
                    $('#enable_start').prop('checked',true);
                }else{
                    $('div.start_date select').prop('disabled', true);
                }
                if(end && end.toString().length >= 8) {
                    end_day_selector.val(end.toString().substr(0, 8));
                    $('#enable_end').prop('checked',true);
                }else{
                    $('div.end_date select').prop('disabled', true);
                }
                break;
        }
    }

    function showDateSelectors() {
        var year_selectors = $('select.year'),
            month_selectors = $('select.month'),
            quarter_selectors = $('select.quarter'),
            day_selectors = $('input.day');

        var populateYearSelectors = function() {
            // populate year_selectors
            year_selectors.empty();
            for(var i = minYear; i <= maxYear; i++) {
                year_selectors.append('<option value="' + i + '">' + i + '</option>');
            }
        };

        var setDatePickerMinMax = function() {
            $('input.day').datepicker('option', 'minDate', new Date(minYear, 0, 1));
            $('input.day').datepicker('option', 'maxDate', new Date(maxYear, 11, 31));
        }

        switch(maxFrequency) {
            case 'A':
                year_selectors.show();
                month_selectors.hide();
                quarter_selectors.hide();
                day_selectors.hide();

                populateYearSelectors();
                break;
            case 'M':
                year_selectors.show();
                month_selectors.show();
                quarter_selectors.hide();
                day_selectors.hide();

                populateYearSelectors();
                break;
            case 'Q':
                year_selectors.show();
                month_selectors.hide();
                quarter_selectors.show();
                day_selectors.hide();

                populateYearSelectors();
                break;
            case 'H':
            case 'D':
            case 'W':
            case '4':
                day_selectors.show();
                month_selectors.hide();
                quarter_selectors.hide();
                year_selectors.hide();

                setDatePickerMinMax();
                break;
        }
    }

    function determineMinMaxTimeValues(fetchedData){

        var getMaxFrequency = function (f1, f2) {
            var frequencyOrder = ['A', 'Q', 'M', 'W', '4', 'D', 'H'];
            var f1_index = $.inArray(f1, frequencyOrder);
            var f2_index = $.inArray(f2, frequencyOrder);

            if (f1_index != -1 && (f1_index == f2_index || f1_index < f2_index)) {
                return f1;
            }
            return f2;
        }

        if (fetchedData.f) {
            maxFrequency = fetchedData.f;
        }
        else {
            for (s in fetchedData.series) {
                if (fetchedData.series[s].series_id != null) {
                    maxFrequency = getMaxFrequency(maxFrequency, fetchedData.series[s].f);
                }

            }
        }


        for (s in fetchedData.series) {
            if(fetchedData.series[s].start != null && fetchedData.series[s].end != null) {
                minYear = Math.min(minYear, parseInt(fetchedData.series[s].start.substr(0,4)));
                maxYear = Math.max(maxYear, parseInt(fetchedData.series[s].end.substr(0, 4)));
            }
        }
    }

    $('iframe#eia_widget').get(0).contentWindow.onReady = function () {
        EIA_grapher = this.EIA_grapher;

        $('#date_mode').buttonset().change(setDateModes);
        $('input#periods_number').spinner({
            min: 1,
            change: function() {
                $('input#periods').val($('input#periods_number').val() + $('select#periods_frequency').val());
            }
        });
        $('select#periods_frequency').on('change', function() {
            $('input#periods').val($('input#periods_number').val() + $('select#periods_frequency').val());
        });
        $('input#periods_number')
        $('input:radio[value="' + date_mode + '"]').prop('checked', true).button('refresh');
        $('select#analysis').val(analysis);

        $('input#start_day').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            showOn: 'focus',
            changeMonth: true,
            changeYear: true,
            dateFormat: 'yymmdd'
        });

        $('input#end_day').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            showOn: 'focus',
            changeMonth: true,
            changeYear: true,
            dateFormat: 'yymmdd'
        });

        EIA_grapher.server_host = server_host;

        EIA_grapher.visualizationReady = function ($eiaVisualization, fetchedData, type, optionsObject) {
            determineMinMaxTimeValues(fetchedData);
            showDateSelectors();
            setDateSelectorValues();

            if (type == 'map') {
                var originalMarkerClick = function (event, regionCode) {
                    },
                    originalRegionClick = function (event, regionCode) {
                    },
                    originalRegionSelected = function (event, regionCode, isSelected, selectedRegions) {
                    };

                if (typeof optionsObject.onMarkerClick == 'function') {
                    originalMarkerClick = optionsObject.onMarkerClick;

                    optionsObject.onMarkerClick = function (event, regionCode) {
                        originalMarkerClick(event, regionCode);

                        return true;
                    }
                }
                if (typeof optionsObject.onRegionSelected == 'function') {
                    originalRegionSelected = optionsObject.onRegionSelected;

                    optionsObject.onRegionSelected = function (event, regionCode, isSelected, selectedRegions) {
                        originalRegionSelected(event, regionCode, isSelected, selectedRegions);

                        var currRegions = $('input#regions').val();
                        if (currRegions.length == 0) {
                            currRegions = [];
                        }
                        else {
                            currRegions = currRegions.split(';');
                        }

                        var regionIndex = $.inArray(regionCode, currRegions);
                        if (isSelected && regionIndex == -1) {
                            currRegions.push(regionCode);
                        }
                        else if (!isSelected && regionIndex >= 0) {
                            currRegions.splice(regionIndex, 1);
                        }

                        $('input#regions').val(currRegions.join(';'));

                        return true;
                    }
                }
                if (typeof optionsObject.onRegionClick == 'function') {
                    originalRegionClick = optionsObject.onRegionClick;

                    optionsObject.onRegionClick = function (event, regionCode) {
                        originalRegionClick(event, regionCode);

                        /*
                         var currRegions = $('input#regions').val();
                         if(currRegions.length == 0) {
                         currRegions = [];
                         }
                         else {
                         currRegions = currRegions.split(';');
                         }

                         var regionIndex = $.inArray(regionCode, currRegions);
                         if(regionIndex == -1) {
                         currRegions.push(regionCode);
                         }
                         else {
                         currRegions.splice(regionIndex, 1);
                         }

                         $('input#regions').val(currRegions.join(';'));
                         $('input#regions').val(regionCode);*/

                        return true;
                    }
                }
            }

            if (type == 'map' || type == 'primary_relation') {
                //populateDateSelectors(fetchedData);
            }
            if (type == 'graph') {
                var oldLoad = function () {
                };
                if (optionsObject == null) {
                    optionsObject = {};
                }
                if (optionsObject.chart == null) {
                    optionsObject.chart = {};
                }
                if (optionsObject.chart.events == null) {
                    optionsObject.chart.events = {};
                }
                if (optionsObject.chart.events.load != null) {
                    oldLoad = optionsObject.chart.events.load;
                }

                optionsObject.chart.events.load = function (event) {
                    //var fetchedData = {'f' : null, 'series' : []};
                    for (var series in EIA_grapher.data.series) {
                        fetchedData['f'] = EIA_grapher.data.series[series]['f'];
                        fetchedData.series.push(EIA_grapher.data.series[series]);
                    }
                    //populateDateSelectors(fetchedData);
                    oldLoad(event);
                };
            }
            //TODO:  show input box (periods) and selectors (start and end) dynamically and have feed into the embedded DIV
        };

        setDateModes();
    };
});