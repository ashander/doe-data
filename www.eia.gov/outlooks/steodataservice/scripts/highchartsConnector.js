// Created by Shivan Computers Corporation 
// on behalf of Energy Information Administration
// on 6/14/2011

try{STEO}catch(e){STEO = {}}
$.extend(STEO,{
	/**
	 * This method generates charts for the rowData objects contained in
	 * the Array rowData.  These rowData objects should be in the format
	 * returned from the STEO data service table resource.  The options
	 * object can contain any valid highcharts options, except for
	 * "series" and "yAxis.title.text". and "xAxis.type" which will be 
	 * overridden by the metadata and data generated for the passed rows.  
	 * This method will return a highcharts chart object.
	 */
	generateRowChart : function(rowData, periodType, lastHistoricalDateCode, options){
		var options = options ? options : {};
		var chart = options.chart ? options.chart : {};
		chart.events = chart.events ? chart.events : {};
		chart.marginBottom = 45;
		var lastHistoricalDate = STEO.parseHistoricalCode(lastHistoricalDateCode, periodType);
		var yAxis = options.yAxis ? options.yAxis : {};
		var margin = rowData.ROW.formula.units.length * -5.8; // ratio calculated from EIA Highcharts gallery example where a string of length 19 gets a margin of -100. The ratio has been adjusted for aesthetics
		yAxis.title = yAxis.title ? yAxis.title : {};
		yAxis.title.text = rowData.ROW.formula.units;
		yAxis.title.align = 'above';
		yAxis.title.y = -10;
		yAxis.title.style = {};
		yAxis.title.style.fontWeight = 'normal';
		var xAxis = options.xAxis ? options.xAxis : {};
		xAxis.labels = xAxis.labels ? xAxis.labels : {};
		xAxis.labels.y = 20;
		xAxis.type = 'datetime';
		if(rowData.DATA.length <= 8) {
			xAxis.tickInterval = 365 * 24 * 3600 * 1000;
			if(periodType == 'Q') {
				xAxis.tickInterval = xAxis.tickInterval / 4;
			}
		}
		xAxis.plotLines = [{
			value: lastHistoricalDate,
			color: Highcharts.eia_grey,
			dashStyle: 'ShortDash',
			width: 2,
			label: {
				text: 'projections',
				verticalAlign: 'top',
				rotation: 0,
				y: 20
			}
		}];
		var tooltip = options.tooltip ? options.tooltip : {};
		var pData = [];
		switch(periodType){
			case 'A':
				xAxis.labels.formatter = STEO.xLabelAnnualFormatter;
				tooltip.formatter = STEO.tooltipAnnualFormatter;
				break;
			case 'Q':
				xAxis.labels.formatter = STEO.xLabelQuarterlyFormatter;
				tooltip.formatter = STEO.tooltipQuarterlyFormatter;
				break;
			case 'M':
				xAxis.labels.formatter = STEO.xLabelMonthlyFormatter;
				tooltip.formatter = STEO.tooltipMonthlyFormatter;
				break;
			default:
				break;
		}
		for(index in rowData.DATA){
			var item = rowData.DATA[index];
			var precisionFactor = Math.pow(10, rowData.ROW.decimalPlaces);
			var value = Math.round(parseFloat(item[1]) * precisionFactor) / precisionFactor;
			if(value < 0) yAxis.min = null;
			if(value == 99999999999) continue;
			else pData.push([STEO.parseCode(item[0], periodType), value]);
		}
		return new Highcharts.Chart($.extend(
				{},
				options,
				{
					chart:chart,
					series:[{
						name: rowData.ROW.formula.description,
						data: pData
					}],
					credits: {
						enabled: true,
						href: null,
						text: "Source: " + "Short-Term Energy Outlook"
					},
					legend: {
						enabled: false
					},
					title: {
						text: rowData.ROW.formula.description
					},
					yAxis:yAxis,
					xAxis:xAxis,
					tooltip:tooltip
				}
		));
	},
	/**
	 * This method parses the passed STEO date code into a javascript
	 * DATE object, based on the passed period type.  The period type
	 * and date codes should be the same formats and values that are
	 * used by the STEO Data Service table resource.
	 */
	parseCode : function(code, periodType){
		var y, m;
		switch(periodType){
			case 'A':
			case 'a':
				y = code;
				m = 1
				break;
			case 'Q':
			case 'q':
				y = code/100;
				m = (code%100 - 1) * 3;
				break;
			case 'M':
			case 'm':
				y = code/100;
				m = (code%100 - 1); 
				break;
		}
		
		return Date.UTC(y, m, 1);
	},
	
	/**
	 * This method parses the passed STEO date code into a javascript
	 * and sets it so that it is after the date passed in and before what would
	 * be the next data point.
	 */
	parseHistoricalCode : function(code, periodType){
		var y, m, d;
		switch(periodType){
			case 'A':
			case 'a':
				y = code;
				m = 6;
				d = 1;
				break;
			case 'Q':
			case 'q':
				y = code/100;
				m = ((code%100 - 1) * 3) + 1;
				d = 15;
				break;
			case 'M':
			case 'm':
				y = code/100;
				m = (code%100 - 1); 
				d = 15;
				break;
		}
		
		return Date.UTC(y, m, d);
	},
	
	
	xLabelAnnualFormatter : function() {
		return Highcharts.dateFormat('%Y', this.value);
	},
	
	xLabelQuarterlyFormatter : function() {
		var date = new Date(this.value);
		return 'Q' + (Math.ceil((date.getUTCMonth() + 1)/3)) + ' ' + Highcharts.dateFormat('%Y', this.value);
	},
	
	xLabelMonthlyFormatter : function() {
		return Highcharts.dateFormat('%b-%Y', this.value);
	},
	
	tooltipAnnualFormatter : function() {
		var xLabel;
		var date = new Date(this.x);
		xLabel = Highcharts.dateFormat('%Y', this.x);
		return '<b>' + xLabel + '</b><br/>' + this.series.name + ' : <b>' + this.y + '</b>';
	},
	
	tooltipQuarterlyFormatter : function() {
		var xLabel;
		var date = new Date(this.x);
		xLabel = 'Q' + (Math.ceil(date.getUTCMonth()/3) + 1) + ' ' + Highcharts.dateFormat('%Y', this.x);
		return '<b>' + xLabel + '</b><br/>' + this.series.name + ' : <b>' + this.y + '</b>';
	},
	
	tooltipMonthlyFormatter : function () {
		var xLabel;
		var date = new Date(this.x);
		xLabel = Highcharts.dateFormat('%b-%Y', this.x);
		return '<b>' + xLabel + '</b><br/>' + this.series.name + ' : <b>' + this.y + '</b>';
	}
});