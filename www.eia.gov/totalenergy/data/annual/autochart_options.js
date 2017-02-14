(function(){
    $.fn.autoChart.setOptions({
			graphButtonHTML : '<button class="graph_button">Graph<span>&nbsp;</span></button>',
			clearButtonHTML : '<button class="clear_button">Clear<span>&nbsp;</span></button>',
			singleChartButtonHTML : '<button class="graph_button"><span>&nbsp;</span></button>',
			maxChartableUnits : 2
    });
	
    var verticleTimeseriesTable = function(){
	var $simtab = 	$('table.tpl:eq(0)');
	var ac_firstDataRow = 0;
	var ac_lastDataRow;
	for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
		var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
		ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
		if(!isNaN(ac_cell_text)){
			if(ac_firstDataRow==0){
				ac_firstDataRow = ac_lastDataRow;
			} 
		} else {
			if(ac_firstDataRow!=0){
				break;
			}
		}
	}
	ac_lastDataRow--;
	$('table.tpl:eq(0)').autoChart({
        layout : 'vertical',
        title : {
			row : 0,
			column : 0,
			regex : {
				pattern : /([\w\W]*?)\(/,
				match : 1
			}
		},
		units : {
			row : 0,
			column : 0,
			regex : {
				pattern : /\((.*?)\)/,
				match : 1
			}
		},
		category : 0,
		value : '1+',
		header : '1-' + (ac_firstDataRow-1),
		data : ac_firstDataRow + '-' + ac_lastDataRow
        });
    }
    
     var verticleTimeseriesTableAA = function(){
	var $simtab = 	$('table.tpl:eq(0)');
	var ac_firstDataRow = 0;
	var ac_lastDataRow;
	for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
		var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
		ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
		if(!isNaN(ac_cell_text)){
			if(ac_firstDataRow==0){
				ac_firstDataRow = ac_lastDataRow;
			} 
		} else {
			if(ac_firstDataRow!=0){
				break;
			}
		}
	}
	ac_lastDataRow--;
	$('table.tpl:eq(0)').autoChart({
        layout : 'vertical',
        title : {
			row : 0,
			column : 0,
			
		},
		units : {
			row : 2
			
			
		},
		category : 0,
		value : '1+',
		header : '1-' + (ac_firstDataRow-1),
		data : ac_firstDataRow + '-' + ac_lastDataRow
        });
    }

    var verticleTimeseriesTableAAA = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/, 
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/, //matches units with text inside units parenthesis
                                    match : 1
                            }
                    },
                    category : 0,
                    value : '1+',
                    header : '1-' + (ac_firstDataRow-1),
                    data : ac_firstDataRow + '-' + ac_lastDataRow
        });
    }
    
    var verticleTimeseriesTableAAAA = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?\(.*?\)[\w\W]+)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/, //matches units with text inside units parenthesis
                                    match : 1
                            }
                    },
                    category : 0,
                    value : '1+',
                    header : '1-' + (ac_firstDataRow-1),
                    data : ac_firstDataRow + '-' + ac_lastDataRow
        });
    }
    
    var verticleTimeseriesTableB = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0
                            
                    },
                    units : {
                            text: 'Days',
                            row : 0,
                            column : 0
            },
                    category : '0',
                            value : '1+',
                            header : '1',
                            data : '2-64'
        });
    }
    
    var verticleTimeseriesTableBB = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
            title : {
		  row : 0,
		  column : 0,
		  regex : {
			pattern : /(.*?)\(/,
			match : 1
		  }
		},
		units : {
		  row : 0,
		  column : 0,
		  regex : {
				pattern : /\((.*?)\)/,
				match : 1
			}
		},
		layout : 'vertical',
		header : [1],
		category : [0],
		secondaryHeader : 0,
		value : '1+',
		data : '3-5,7-9,11-13,15-17,19-21,23-25,27-29,31-33, 35-37, 39-41, 43-45',
		multiChart : false,
		autoParseCategories : false,
		chartOptions : {
		  chart : {
			defaultSeriesType : 'bar'
		  },
			yAxis : {
				title:{
					align : 'high'
				}
			},
		  xAxis : {
			categories : ['Coal','Natural Gas','Petroleum','Aviation Gasoline','Fuel Oil','Jet Fuel','LPG and Other','Motor Gasoline','Electricity','Purchased Steam and Other','Total Energy' ]
		  },
		  plotOptions: {
			area: {
				stacking: 'normal'
			}
		  }
		}
	
        });
    }
    
    var verticleTimeseriesTableBBB = function(){
	var $simtab = 	$('table.tpl:eq(0)');
	var ac_firstDataRow = 0;
	var ac_lastDataRow;
	for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
		var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
		ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
		if(!isNaN(ac_cell_text)){
			if(ac_firstDataRow==0){
				ac_firstDataRow = ac_lastDataRow;
			} 
		} else {
			if(ac_firstDataRow!=0){
				break;
			}
		}
	}
	ac_lastDataRow--;
	$('table.tpl:eq(0)').autoChart({
        layout : 'vertical',
        title : {
			row : 0,
			column : 0,
			
		},
		units : {
			row : 3
			
			
		},
		category : 0,
		value : '1+',
		header : '1-2',
		data : ac_firstDataRow + '-' + ac_lastDataRow,
		controlsIndex : 3
        });
    }
    
    var verticleTimeseriesTableCC = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0
                            
                    },
                    units : {
                               row : 2
                            },
                    
                    category : '0',
                            value : '1+',
                            header : '1',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 2
        });
    }
    
    var verticleTimeseriesTableD = function(){
            var $simtab = 	$('table.tpl:eq(0)');
	    
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
             title : {
		  row : 0,
		  column : 0,
		  regex : {
			pattern : /(.*?)\(/,
			match : 1
		  }
		},
		units : {
		  row : 0,
		  column : 0,
		  regex : {
				pattern : /\((.*?)\)/,
				match : 1
			}
		},
		    chartOptions : {
			chart : {
				defaultSeriesType : 'bar'
			},
			yAxis : {
				title:{
					align : 'high'
				}
			}
		   },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : '3-32',
			    controlsIndex : 2
        });
    }
    
    var verticleTimeseriesTableE = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            regex : {
			    pattern : /(.*?)\(/,
			    match : 1
		  }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : '3-41'
        });
    }
    
    var verticleTimeseriesTableEE = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
			row : 0,
			column : 0,
			regex : {
				pattern : /([\w\W]*?)\(/,
				match : 1
			}
		},
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow
        });
    }
    
    var verticleTimeseriesTableEEE = function(){
            
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
			row : 0,
			column : 0,
			regex : {
				pattern : /([\w\W]*?)\(/,
				match : 1
			}
		},
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
		    chartOptions : {
			chart : {
				defaultSeriesType : 'bar'
			},
			yAxis : {
				title:{
					align : 'high'
				}
			}
		   },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : '3-8'
        });
    }
    
    var verticleTimeseriesTableF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0
                            
                    },
                    units : {
                               row : 3
                            },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3
        });
    }
    
    var verticleTimeseriesTableFF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
			row : 0,
			column : 0,
			regex : {
				pattern : /([\w\W]*?)\(/,
				match : 1
			}
		},
		units : {
			row : 0,
			column : 0,
			regex : {
				pattern : /\((.*?)\)/,
				match : 1
			}
		},
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 2
        });
    }
    
    var verticleTimeseriesTableFFF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?\(.*?\)[\w\W]+)\(/,
                                    match : 1
                            }
                    },
                    units : {
                               row : 3
                            },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3
        });
    }
    
    var verticleTimeseriesTableFFFF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                               row : 3
                            },
                    category : '0',
                            value : '1+',
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3
        });
    }
    
     var verticleTimeseriesTableFFFFF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0
                            
                    },
                    units : {
                               row : 4
                            },
                    category : '0',
                            value : '1+',
                            header : '1-3',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 4
        });
    }
    
    var verticleTimeseriesTableG = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
	    multiChart : false,
            title : {
                            row : 0,
                            column : 0,
			    regex : {
				pattern: /([\w\W]*?)\(/,
				match:1
			    }
                            
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
            },
		    chartOptions : {
				chart : {
					defaultSeriesType : 'bar'
				},
				yAxis : {
					title:{
						align : 'high'
					}
				}
		   },
                    category : 0,
                            value : '1+',
                            header : '1',
                            data : '2-23',
        });
    }
    
    var verticleTimeseriesTableH = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            
                    },
                    units : {
                               row : 4
                            },
                    
                    category : '0',
                            value : '1+',
                            header : '1-3',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex: 4,
                            chartOptions : {
                                    legend :{
                                            itemStyle : {
                                                    fontSize : '10px'
                                            }
                                    }
                            }
        });
    }
    
    var verticleTimeseriesTableHH = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $('table.tpl:eq(0)').autoChart({
            layout : 'vertical',
            title : {
                            row : 0,
                            column : 0,
                            
                    },
                    units : {
                               row : 3
                            },
                    
                    category : '0',
                            value : '1+',
                            header : '1-3',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex: 3,
                            chartOptions : {
                                    legend :{
                                            itemStyle : {
                                                    fontSize : '10px'
                                            }
                                    }
                            }
        });
    }
    
    var horizontalTimeseriesTableA = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                    }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /\((.*?)\)/,
                                            match : 1
                                    }
                            },
                            category : '1',
                            value : '2-20',
                            header : '0',
                            data : '1+',
                            chartOptions : {
                                    chart : {
                                            defaultSeriesType : 'bar'
                                    },
                                    yAxis : {
                                            title:{
                                                    align : 'high'
                                            }
                                    }
                       }
                    });
    }
    
    var horizontalTimeseriesTableB = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                    }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /\((.*?)\)/,
                                            match : 1
                                    }
                            },
                            category : '1',
                            value : '2-35',
                            header : '0',
                            data : '1+',
                            chartOptions : {
                                    chart : {
                                            defaultSeriesType : 'bar'
                                    },
                                    yAxis : {
                                            title:{
                                                    align : 'high'
                                            },
                                            endOnTick: false
                                    }
                       }
                    });
    }
    
    var horizontalTimeseriesTableC = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                                    text: 'Percent of Households (except where noted)',
                                    row : 0,
                                    column : 0
                            },
                            category : '2',
                            value : '3,5-41',
                            header : '0',
                            data : '1-13'
                    });
    }
    
    var horizontalTimeseriesTableD = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                    }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /\((.*?)\)/,
                                            match : 1
                                    }
                            },
                            category : '1-2',
                            value : '3-32',
                            header : '0',
                            data : '1+',
                            chartOptions : {
                                    chart : {
                                            defaultSeriesType : 'bar'
                                    },
                                    yAxis : {
                                            title:{
                                                    align : 'high'
                                            }
                                    }
                       }
                    });
    }
    
    var horizontalTimeseriesTableE = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                    }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /\((.*?)\)/,
                                            match : 1
                                    }
                            },
                            category : '1-2',
                            value : '3-8,10,11',
                            header : '0',
                            data : '1+',
                            chartOptions : {
                                    chart : {
                                            defaultSeriesType : 'bar'
                                    },
                                    yAxis : {
                                            title:{
                                                    align : 'high'
                                            }
                                    }
                       }
                    });
    }
    
    var horizontalTimeseriesTableF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                    }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /\((.*?)\)/,
                                            match : 1
                                    }
                            },
                            category : '1',
                            value : '2-38',
                            header : '0',
                            data : '1+',
                            chartOptions : {
                                    chart : {
                                            defaultSeriesType : 'bar'
                                    },
                                    yAxis : {
                                            title:{
                                                    align : 'high'
                                            }
                                    }
                       }
                    });
    }
    
    var horizontalTimeseriesTableG = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $('table.tpl:eq(0)').autoChart({
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                    }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /\((.*?)\)/,
                                            match : 1
                                    }
                            },
                            category : '1',
                            value : '2-46',
                            header : '0',
                            data : '1+',
                            chartOptions : {
                                    chart : {
                                            defaultSeriesType : 'bar'
                                    },
                                    yAxis : {
                                            title:{
                                                    align : 'high'
                                            }
                                    }
                       }
                    });
    }
    
    var multipleSingleTimeseriesTableA = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                    defaultChartOptions = {
                            chart : {
                                    defaultSeriesType : 'bar'
                            },
                            yAxis : {
                                    title : {
                                            align : 'high'
                                    },
                                    endOnTick: false
                             }
                    };
                    $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 1,
                            value : 2,
                            header : 1,
                            data : '3-53',
                            controlsIndex : 2,
                            chartContainerStyles : {
                            height : '700px',
                            width : '800px'
                            },
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 3,
                            value : 4,
                            header : 1,
                            data : '3-53',
                            controlsIndex : 2,
                            chartContainerStyles : {
                            height : '700px',
                            width : '800px'
                            },
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 5,
                            value : 6,
                            header : 1,
                            data : '3-53',
                            controlsIndex : 2,
                            chartContainerStyles : {
                            height : '700px',
                            width : '800px'
                            },
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                            },
                            units : {
                               row : 2
                            },
                            category : 7,
                            value : 8,
                            header : 1,
                            data : '3-53',
                            controlsIndex : 2,
                            chartContainerStyles : {
                            height : '700px',
                            width : '800px'
                            },
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 9,
                            value : 10,
                            header : 1,
                            data : '3-53',
                            controlsIndex : 2,
                            chartContainerStyles : {
                            height : '700px',
                            width : '800px'
                            },
                            chartOptions : defaultChartOptions
                    }
              ]);
              });
    }
    
    var multipleSingleTimeseriesTableB = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            var ac_firstDataRow = 0;
            var ac_lastDataRow;
            for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
                    var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
                    ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
                    if(!isNaN(ac_cell_text)){
                            if(ac_firstDataRow==0){
                                    ac_firstDataRow = ac_lastDataRow;
                            } 
                    } else {
                            if(ac_firstDataRow!=0){
                                    break;
                            }
                    }
            }
            ac_lastDataRow--;
            $(function(){
                    defaultChartOptions = {
                            chart : {
                                    defaultSeriesType : 'bar'
                            },
                            yAxis : {
                                    title : {
                                            align : 'high'
                                    }
                             }
                    };
                    $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : 1,
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3,
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : 2,
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3,
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : 3,
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3,
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : 4,
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3,
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : 5,
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3,
                            chartOptions : defaultChartOptions
                    },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : 6,
                            header : '1-2',
                            data : ac_firstDataRow + '-' + ac_lastDataRow,
                            controlsIndex : 3,
                            chartOptions : defaultChartOptions
                    }
              ]);
              });
    }
    
    var multipleMultTimeseriesTable = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                    defaultChartOptions = {
                            chart : {
                                    defaultSeriesType : 'bar'
                            },
                            yAxis : {
                                    title : {
                                            align : 'high'
                                    },
                                    endOnTick: false
                             }
                    };
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1-10',
                            header : '1-2',
                            data : '4-35',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                                    row : 36			
                            },
                            category : 0,
                            value : '1-13',
                            header : '1-2',
                            data : '37-68',
                            controlsIndex : 36
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableA = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1+',
                            header : '1-2',
                            data : '4-12',
                            controlsIndex : 3
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableB = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                    defaultChartOptions = {
                            chart : {
                                    defaultSeriesType : 'bar'
                            },
                            yAxis : {
                                    title : {
                                            align : 'high'
                                    },
                                    endOnTick: false
                             }
                             
                    };
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 0,
                            value : '1-7',
                            header : 1,
                            data : '3-21',
                            controlsIndex : 2,
                            chartOptions:defaultChartOptions
                     },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                                    row : 22			
                            },
                            category : 0,
                            value : '1-7',
                            header : 1,
                            data : '23-41',
                            controlsIndex : 22,
                            chartOptions:defaultChartOptions
                     }
              ]);
              });
    }
    
   multipleMultTimeseriesTableC = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 3,
                               column : 2,
                                    regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                            },
                            category : 0,
                            value : '1-15',
                            header : '1-2',
                            data : '4-14',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                            },
                            units : {
                                    row : 15,
                                    column : 2,
                                    regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }			
                            },
                            category : 0,
                            value : '1-15',
                            header : '1-2',
                            data : '16-26',
                            controlsIndex : 15
                     }
              ]);
              });
    }
    
    multipleMultTimeseriesTableCC = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/, //matches units with text inside units parenthesis
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1+',
                            header : '1-2',
                            data : '4-25',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/, //matches units with text inside units parenthesis
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1+',
                            header : '1-2',
                            data : '27-48',
                            controlsIndex : 26
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableD = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 0,
                            value : '1-11',
                            header : 1,
                            data : '3-28',
                            controlsIndex : 2
                     },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                            },
                            units : {
                                    row : 29			
                            },
                            category : 0,
                            value : '1-11',
                            header : 1,
                            data : '30-55',
                            controlsIndex : 29
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableE = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
				text: 'Table 2.9  Commercial Buildings Consumption by Energy Source, Major Sources',
			    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-16',
                            header : '1-2',
                            data : '4-11',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
				text: 'Table 2.9  Commercial Buildings Consumption by Energy Source, Electricity',
			    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-16',
                            header : '1-2',
                            data : '13-20',
                            controlsIndex : 12
                     },{
                            layout : 'vertical',
                            title : {
				text: 'Table 2.9  Commercial Buildings Consumption by Energy Source, Natural Gas',
			    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-16',
                            header : '1-2',
                            data : '22-29',
                            controlsIndex : 21
                     },{
                            layout : 'vertical',
                            title : {
				text: 'Table 2.9  Commercial Buildings Consumption by Energy Source, Fuel Oil',
			    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-16',
                            header : '1-2',
                            data : '31-38',
                            controlsIndex : 30
                     },{
                            layout : 'vertical',
                            title : {
				text: 'Table 2.9  Commercial Buildings Consumption by Energy Source, District Heat',
			    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-4,7-8, 10-16',
                            header : '1-2',
                            data : '40-47',
                            controlsIndex : 39
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableF = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            text : 'Table 2.10  Commercial Buildings Energy Consumption and Expenditure Indicators, Major Sources'
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '5-12',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                            text : 'Table 2.10  Commercial Buildings Energy Consumption and Expenditure Indicators, Electricity'
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '14-21',
                            controlsIndex : 13
                     },{
                            layout : 'vertical',
                            title : {
                            text : 'Table 2.10  Commercial Buildings Energy Consumption and Expenditure Indicators, Natural Gas'
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '23-30',
                            controlsIndex : 22
                     },{
                            layout : 'vertical',
                            title : {
                            text : 'Table 2.10  Commercial Buildings Energy Consumption and Expenditure Indicators, Fuel Oil'
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '32-39',
                            controlsIndex : 31
                     },{
                            layout : 'vertical',
                            title : {
                            text : 'Table 2.10  Commercial Buildings Energy Consumption and Expenditure Indicators, District Heat '
                            },
                            units : {
                               row : 3
                            },
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '41-48',
                            controlsIndex : 40
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableG = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0
                            },
                            units : {
                            row : 2,
                            column : 2,
                            regex : {
                                    pattern : /\((.*?)\)$/,
                                    match : 1
                            }			
                    },
                            category : 0,
                            value : '1+',
                            header : '1',
                            data : '3-6',
                            controlsIndex : 2
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0
                            },
                            units : {
                            row : 8,
                            column : 2,
                            regex : {
                                    pattern : /\((.*?)\)$/,
                                    match : 1
                            }			
                    },
                            category : 0,
                            value : '1+',
                            header : '1',
                            data : '9-14',
                            controlsIndex : 8
                     }	  	  
              ]);
              });
    }
    
    var multipleMultTimeseriesTableH = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0
                            },
                            units : {
                            row : 2
                            
                    },
                            category : 0,
                            value : '1-6',
                            header : 1,
                            data : '4-34',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0
                            },
                            units : {
                               row : 2
                            },
                            category : 0,
                            value : '1-6',
                            header : 1,
                            data : '36-69',
                            controlsIndex : 35
                     }		  
              ]);
              });
    }
    
    var multipleMultTimeseriesTableI = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-5, 7-9',
                            header : 1,
                            data : '4-66',
                            controlsIndex : 3
                     }  
              ]);
              });
    }
    
    var multipleMultTimeseriesTableJ = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-16',
                            header : '1-3',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
			    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-5, 9-10, 14-16',
                            header : '1-3',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableK = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-5,8-10,14-16',
                            header : '1-3',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                            }
                    },
                            category : 0,
                            value : '1-5, 8-10, 14-16',
                            header : '1-3',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableL = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /([^;]*)\)$/,
                                            match : 1
                                            }
                    },		
                            category : 0,
                            value : '1-3,5-10',
                            header : '1-3',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                           title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /([^;]*)\)$/,
                                            match : 1
                                            }
                    },		
                            category : 0,
                            value : '1-10',
                            header : '1-3',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableM = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                                    }
    
                    }, 		
                            category : 0,
                            value : '1-5,7-9,13-14,16',
                            header : '1-3',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                                    }
    
                    }, 		
                            category : 0,
                            value : '1-5,7-9,13-14,16',
                            header : '1-3',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableN = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                    $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                            row : 3
                    }, 		
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                            row : 3
                    }, 		
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableO = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                            row : 3
                    }, 		
                            category : 0,
                            value : '1-7,9-11',
                            header : '1-2',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([\w\W]*?)\(/,
                                    match : 1
                            }
                    },
                            units : {
                            row : 3
                    }, 		
                            category : 0,
                            value : '1-11',
                            header : '1-2',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableP = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                            }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /([^;]*)\)$/,
                                            match : 1
                                            }
                            },		
                            category : 0,
                            value : '1-16',
                            header : '1-3',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                            }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /([^;]*)\)$/,
                                            match : 1
                                            }
                            },	
                            category : 0,
                            value : '1-5, 9-10, 14,16',
                            header : '1-3',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableQ = function(){
            var $simtab = 	$('table.tpl:eq(0)');
    
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                            }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /([^;]*)\)$/,
                                            match : 1
                                            }
                            },	
                            category : 0,
                            value : '1-3,5,10,14,16',
                            header : '1-3',
                            data : '5-27',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                            }
                            },
                            units : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /([^;]*)\)$/,
                                            match : 1
                                            }
                            },	
                            category : 0,
                            value : '1-5,8-10,14-16',
                            header : '1-3',
                            data : '29-51',
                            controlsIndex : 28
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableR = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                                    row : 0,
                                    column : 0,
                                    regex : {
                                            pattern : /(.*?)\(/,
                                            match : 1
                                            }
                            },
                            units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                                    }
                    },				
                            category : 0,
                            value : '1-16',
                            header : '1-4',
                            data : '5-30',
                            controlsIndex : 4
                     } 
              ]);
              });
    }
    
    var multipleMultTimeseriesTableS = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0
                            },
                            units : {
                            row : 4,
                            column : 2,
			    regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                                    }
                            
                    },	
                            category : 0,
                            value : '1+',
                            header : '1-2',
                            data : '4-23',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0
                            },
                            units : {
                            row : 24,
                            column : 2,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                                    }
                    },	
                            category : 0,
                            value : '1+',
                            header : '1-2',
                            data : '25-43',
                            controlsIndex : 24
                     }
              ]);
              });
    }
    
    var multipleMultTimeseriesTableT = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
		  row : 0,
		  column : 0,
		  regex : {
			pattern : /(.*?)\(/,
			match : 1
		  }
		},
		units : {
		  row : 3
		},
		header : [1,2],
		category : [0],
		secondaryHeader : 0,
		value : '1+',
		data : '5-7,9-11,13-15,17-19,21-23,25-27',
		multiChart : false,
		autoParseCategories : false,
		chartOptions : {
		  chart : {
			defaultSeriesType : 'area'
		  },
		  xAxis : {
			categories : [2001,2002,2003,2004,2005,2006]
		  },
		  plotOptions: {
			area: {
				stacking: 'normal'
			}
		  }
		}
	}
              ]);
              });
    }
    
    var multipleMultTimeseriesTableU = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },	
                            category : 0,
                            value : '1+',
                            header : '1-3',
                            data : '5-22',
                            controlsIndex : 4
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },		
                            category : 0,
                            value : '1+',
                            header : '1-3',
                            data : '24-26',
                            controlsIndex : 23
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /\((.*?)\)/,
                                    match : 1
                            }
                    },
		    
                            category : 0,
                            value : '1+',
                            header : '1-3',
                            data : '28',
                            controlsIndex : 27,
			    multiChart : false,
		autoParseCategories : false,
		chartOptions : {
		  chart : {
			defaultSeriesType : 'column'
		  },
			yAxis : {
				title:{
					align : 'high'
				}
			},
		}
                     }       
              ]);
              });
    }
    
    var multipleMultTimeseriesTableV = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                                    }
    
                    }, 		
                            category : 0,
                            value : '1-3,5-7,9-16',
                            header : '1-2',
                            data : '4-24',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                                    }
    
                    }, 			
                            category : 0,
                            value : '1-3,5-7,9-16',
                            header : '1-2',
                            data : '26-46',
                            controlsIndex : 25
                     }    
              ]);
              });
    }
    
    var multipleMultTimeseriesTableW = function(){
            var $simtab = 	$('table.tpl:eq(0)');
            
            $(function(){
                     $('table.tpl:eq(0)').autoChart([{
                        layout : 'vertical',
                    title : {
                            row : 0,
                            column : 0,
			    regex : {
				pattern : /([\w\W]*?)\(/,
				match : 1
			}
		    },
		    units : {
			    row : 0,
			    column : 0,
			    regex : {
				pattern : /\((.*?)\)/,
				match : 1
			    }
		    },	
                            category : 0,
                            value : '1-13',
                            header : '1-2',
                            data : '3-27',
                            controlsIndex : 3
                     },{
                            layout : 'vertical',
                            title : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /(.*?)\(/,
                                    match : 1
                            }
                    },
                    units : {
                            row : 0,
                            column : 0,
                            regex : {
                                    pattern : /([^;]*)\)$/,
                                    match : 1
                                    }
    
                    }, 			
                            category : 0,
                            value : '1-13',
                            header : '28-29',
                            data : '30-53',
                            controlsIndex : 30
                     }    
              ]);
              });
    }
    
    var verticleTimeseriesTableX = function(){
	var $simtab = 	$('table.tpl:eq(0)');
	var ac_firstDataRow = 0;
	var ac_lastDataRow;
	for(ac_lastDataRow=1;ac_lastDataRow<$simtab.find('tr').length;ac_lastDataRow++){
		var ac_cell_text = $simtab.find('tr:eq(' + ac_lastDataRow + ')').find('td, th').first().html();
		ac_cell_text = ac_cell_text.replace(/<sup>.*<\/sup>/gi,'').replace(/<.*?>/g,'');
		if(!isNaN(ac_cell_text)){
			if(ac_firstDataRow==0){
				ac_firstDataRow = ac_lastDataRow;
			} 
		} else {
			if(ac_firstDataRow!=0){
				break;
			}
		}
	}
	ac_lastDataRow--;
	$('table.tpl:eq(0)').autoChart({
        layout : 'vertical',
        title : {
			row : 0,
			column : 0,
			regex : {
				pattern : /([\w\W]*?)\(/,
				match : 1
			}
		},
		units : {
			row : 0,
			column : 0,
			regex : {
				pattern : /\((.*?)\)/,
				match : 1
			}
		},
		category : 0,
		value : '1-15',
		header : '1-' + (ac_firstDataRow-1),
		data : ac_firstDataRow + '-' + ac_lastDataRow
        });
    }
    
    var chartConfig = {ptb0101: verticleTimeseriesTable, ptb0102: verticleTimeseriesTable, ptb0103: verticleTimeseriesTable, ptb0104: verticleTimeseriesTable, ptb0105: verticleTimeseriesTableCC, ptb0106: multipleSingleTimeseriesTableA, ptb0107: verticleTimeseriesTableB, ptb0108: verticleTimeseriesTableB, ptb0109: verticleTimeseriesTableB, ptb0110: verticleTimeseriesTableB, ptb0111: verticleTimeseriesTable, ptb0112: verticleTimeseriesTable, ptb0113: verticleTimeseriesTableBB, ptb0114: multipleMultTimeseriesTableA, ptb0115: multipleMultTimeseriesTable, ptb0201a: verticleTimeseriesTable, ptb0201b: verticleTimeseriesTable, ptb0201c: verticleTimeseriesTable, ptb0201d: verticleTimeseriesTable, ptb0201e: verticleTimeseriesTable, ptb0201f: verticleTimeseriesTable, ptb0202: verticleTimeseriesTableG, ptb0203: multipleMultTimeseriesTableB, ptb0205: multipleMultTimeseriesTableC, ptb0207: multipleMultTimeseriesTableD, ptb0208: verticleTimeseriesTableF, ptb0209: multipleMultTimeseriesTableE, ptb0210: multipleMultTimeseriesTableF, ptb0211: horizontalTimeseriesTableA, ptb0301: verticleTimeseriesTableAA, ptb0302: verticleTimeseriesTableAA, ptb0303: verticleTimeseriesTable, ptb0304: verticleTimeseriesTable, ptb0305: verticleTimeseriesTable, ptb0306: verticleTimeseriesTable, ptb0307: verticleTimeseriesTableAA, ptb0308: verticleTimeseriesTableAA, ptb0309: verticleTimeseriesTableAA, ptb0310: verticleTimeseriesTableF, ptb0311: verticleTimeseriesTable, ptb0312: verticleTimeseriesTable, ptb0313: verticleTimeseriesTableF, ptb0401: multipleMultTimeseriesTableG, ptb0402: verticleTimeseriesTableF, ptb0403: multipleMultTimeseriesTableH, ptb0404: verticleTimeseriesTable, ptb0405: verticleTimeseriesTableF, ptb0406: verticleTimeseriesTableF, ptb0407: verticleTimeseriesTableF, ptb0409: verticleTimeseriesTableHH, ptb0410: verticleTimeseriesTableEEE, ptb0411: horizontalTimeseriesTableD, ptb0412: multipleSingleTimeseriesTableB, ptb0413: horizontalTimeseriesTableE, ptb0501a: verticleTimeseriesTableCC, ptb0501b: verticleTimeseriesTable, ptb0502: verticleTimeseriesTableFFFFF, ptb0503: verticleTimeseriesTable, ptb0504: verticleTimeseriesTableF, ptb0505: verticleTimeseriesTable, ptb0506: verticleTimeseriesTable, ptb0507: verticleTimeseriesTableF, ptb0508: verticleTimeseriesTable, ptb0509: verticleTimeseriesTableF, ptb0510: verticleTimeseriesTable, ptb0511: verticleTimeseriesTable, ptb0512: verticleTimeseriesTable, ptb0513a: verticleTimeseriesTable, ptb0513b: verticleTimeseriesTable, ptb0513c: verticleTimeseriesTable, ptb0513d: verticleTimeseriesTable, ptb0514a: verticleTimeseriesTable, ptb0514b: verticleTimeseriesTable, ptb0514c: verticleTimeseriesTable, ptb0516: verticleTimeseriesTable, ptb0517: verticleTimeseriesTable, ptb0518: verticleTimeseriesTableAA, ptb0519: verticleTimeseriesTableE, ptb0520: verticleTimeseriesTable, ptb0521: verticleTimeseriesTableAA, ptb0522: horizontalTimeseriesTableF, ptb0523: horizontalTimeseriesTableG, ptb0524: verticleTimeseriesTableBBB, ptb0601: verticleTimeseriesTable, ptb0602: verticleTimeseriesTable, ptb0603: verticleTimeseriesTableX, ptb0604: verticleTimeseriesTableH, ptb0605: verticleTimeseriesTable, ptb0606: verticleTimeseriesTable, ptb0607: verticleTimeseriesTableAA, ptb0608: verticleTimeseriesTableBBB, ptb0701: verticleTimeseriesTable, ptb0702: verticleTimeseriesTable, ptb0703: verticleTimeseriesTable, ptb0704: verticleTimeseriesTable, ptb0705: verticleTimeseriesTable, ptb0706: multipleMultTimeseriesTableI, ptb0707: verticleTimeseriesTable, ptb0708: verticleTimeseriesTable, ptb0709: verticleTimeseriesTableAA, ptb0801: verticleTimeseriesTable, ptb0802a: verticleTimeseriesTableAAAA, ptb0802b: verticleTimeseriesTableAAA, ptb0802c: multipleMultTimeseriesTableJ, ptb0802d: multipleMultTimeseriesTableK, ptb0803a: verticleTimeseriesTableAAAA, ptb0803b: verticleTimeseriesTableAAA, ptb0803c: multipleMultTimeseriesTableL, ptb0804a: verticleTimeseriesTableAAAA, ptb0804b: verticleTimeseriesTableAAA, ptb0804c: multipleMultTimeseriesTableM, ptb0805a: verticleTimeseriesTableFFF, ptb0805b: verticleTimeseriesTableFFFF, ptb0805c: multipleMultTimeseriesTableN, ptb0805d: multipleMultTimeseriesTableN, ptb0806a: verticleTimeseriesTableFFF, ptb0806b: verticleTimeseriesTableFFFF, ptb0806c: multipleMultTimeseriesTableO, ptb0807a: verticleTimeseriesTableFFF, ptb0807b: verticleTimeseriesTableFFFF, ptb0807c: multipleMultTimeseriesTableN, ptb0808: verticleTimeseriesTableF, ptb0809: verticleTimeseriesTable, ptb0810: verticleTimeseriesTableAA, ptb0811a: verticleTimeseriesTableAAAA, ptb0811b: verticleTimeseriesTableAAA, ptb0811c: multipleMultTimeseriesTableP, ptb0811d: multipleMultTimeseriesTableQ, ptb0812a: multipleMultTimeseriesTableR, ptb0812b: multipleMultTimeseriesTableR, ptb0813: verticleTimeseriesTableF, ptb0902: verticleTimeseriesTableCC, ptb0903: verticleTimeseriesTableF, ptb1001: verticleTimeseriesTable, ptb1002a: verticleTimeseriesTable, ptb1002b: verticleTimeseriesTable, ptb1002c: verticleTimeseriesTable, ptb1003: verticleTimeseriesTableF, ptb1004: verticleTimeseriesTableF, ptb1005: multipleMultTimeseriesTableS, ptb1006: verticleTimeseriesTable, ptb1007: multipleMultTimeseriesTableT, ptb1008: verticleTimeseriesTableFFFFF, ptb1009: multipleMultTimeseriesTableU, ptb1101: verticleTimeseriesTableFF, ptb1102a: verticleTimeseriesTableEE, ptb1102b: verticleTimeseriesTableEE, ptb1102c: verticleTimeseriesTableEE, ptb1102d: verticleTimeseriesTableEE, ptb1102e: verticleTimeseriesTableEE, ptb1103: verticleTimeseriesTable, ptb1104: verticleTimeseriesTable, ptb1105a: verticleTimeseriesTableAAAA, ptb1105b: verticleTimeseriesTableAAA, ptb1106: verticleTimeseriesTable, ptb1107: verticleTimeseriesTable, ptb1202: verticleTimeseriesTable, ptb1203: verticleTimeseriesTable, ptb1204: verticleTimeseriesTable, ptb1205: verticleTimeseriesTable, ptb1206: verticleTimeseriesTable, ptb1501: verticleTimeseriesTableF, ptb1601 : verticleTimeseriesTable};
    
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    
    $(document).ready(function(){
            var t = getUrlVars()['t'];
            if(chartConfig[t] != null)chartConfig[t]();
            $('.graph_button').parent().parent().css('background-color','#f2f2f2');
    });
}());