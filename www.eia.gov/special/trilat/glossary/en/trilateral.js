// JavaScript Document
function loadDefinitions(takeLetter) {

		var result = 0;
    	$('#placeholder').empty();	
		
		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';		
		
			for (var i in data.glossary) 
			{	
					
				if ( RegExp('^'+takeLetter, 'i').test(data.glossary[i].TERM) ) 
					{			
						result += 1;
						
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM + '</strong></div>';
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM + '</h3>';
					
					//IRES
					
					if (data.glossary[i].IRES_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="28px" style="margin:10px 5px 3px 0; vertical-align:-10px">International Recommendations for Energy Statistics (IRES) </h4>';
						html += '<div class="countryterm"><div class="term" >' +  data.glossary[i].IRES_TERM  + '</div> <br> ' + data.glossary[i].IRES_DEF + '</div>';
					}
					
					//IEA
					
					if (data.glossary[i].IEA_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="28px" style="margin:35px 5px 3px 0; vertical-align:-10px">International Energy Agency (IEA)</h4>';
						html += '<div class="countryterm"><div class="term">' +  data.glossary[i].IEA_TERM  + '</div> <br> ' + data.glossary[i].IEA_DEF + '</div>';
					}
					
					//US
					//html += '<div class="country">United States</div>';
																	
					if (data.glossary[i].USA_TERM.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">United States</h4>';								
						html += '<div class="countryterm"> <div class="term">' + data.glossary[i].USA_TERM + '</div> <br> ' + data.glossary[i].USA_DEF + '</div>';
						
						if (data.glossary[i].USA_SOURCE.trim() != '')
						{		
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].USA_HS.trim() != '')
						{		
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].USA_HS + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
														
					if (data.glossary[i].CAN_TERM_EN.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_EN + '</div> <br> ' + data.glossary[i].CAN_DEF_EN + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
						if (data.glossary[i].CAN_HS8.trim() != '')
						{		
							html += '<br><div class="countryHS">Export HS8: ' + data.glossary[i].CAN_HS8 + '</div>  ';
						}
												
						if (data.glossary[i].CAN_HS10.trim() != '')
						{		
							html += '<br><div class="countryHS">Import HS10: ' + data.glossary[i].CAN_HS10 + '</div>  ';
						}
						
						//html += '<br><div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_EN.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexico</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERM_EN + '</div> <br> ' + data.glossary[i].MEX_DEF_EN + '</div>';
						
						if (data.glossary[i].MEX_SOURCE.trim() != '')
						{		
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE + '</div>  ';
						}
						
						if (data.glossary[i].MEX_HS.trim() != '')
						{		
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].MEX_HS + '</div>  ';
						}
						
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
			$('#result').html('<b>'+(result<1 ? 'no results found' : result+' result(s) found')+'</b>');
			
		  }); 		  
		  
};
	
function showIndex() { 	//index code ----------------------------------------------------------------------------

    	$('#placeholder').empty();		

		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '<br>';
			
			var ordered_array = [];
			
			for (var i in data.glossary) 
			{			
						
					ordered_array.push(data.glossary[i].TERM);
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM + '</strong></div>';
					//html += '<li class="glossaryterm"  style="cursor:pointer; text-decoration: underline;">' + data.glossary[i].TERM + '</li>';
			
			        //$('#placeholder').html(html);
				
			}
			
			function frsort(a,b) {
				return a.localeCompare(b);
			}
 			ordered_array.sort(frsort);
			
			//ordered_array.sort();
			
			for (var i in ordered_array) {
			//	html += '<li class="glossaryterm"  style="cursor:pointer; text-decoration: underline;">' + ordered_array[i] + '</li>';
				html += '<li class="glossaryterm"><a href="#' + ordered_array[i] + '">' + ordered_array[i] + '</a></li>';
				$('#placeholder').html(html);
			}
		  }); 
		  
		  
		  
	};	
	
function getDefinition(val) {

		var result = 0;
    	$('#placeholder').empty();	

		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';
			
			for (var i in data.glossary) 
			{			
				if ( val == data.glossary[i].TERM ) 
					{		
						
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM + '</h3>';
					
					//IRES
					
					if (data.glossary[i].IRES_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="28px" style="margin:10px 5px 3px 0; vertical-align:-10px">International Recommendations for Energy Statistics (IRES) </h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IRES_TERM + '</div> <br> ' + data.glossary[i].IRES_DEF + '</div>';
					}
					
					//IEA
					
					if (data.glossary[i].IEA_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="28px" style="margin:35px 5px 3px 0; vertical-align:-10px">International Energy Agency (IEA)</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IEA_TERM + '</div> <br> ' + data.glossary[i].IEA_DEF + '</div>';
					}
					
					//US
					//html += '<div class="country">United States</div>';
																				
					if (data.glossary[i].USA_TERM.trim() != '')
					{	
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">United States</h4>';							
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM + '</div> <br> ' + data.glossary[i].USA_DEF + '</div>';
						
						if (data.glossary[i].USA_SOURCE.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
						if (data.glossary[i].USA_HS.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].USA_HS + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
					
					if (data.glossary[i].CAN_TERM_EN.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_EN + '</div> <br> ' + data.glossary[i].CAN_DEF_EN + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS8.trim() != '')
						{
							html += '<br><div class="countryHS">Export HS8: ' + data.glossary[i].CAN_HS8 + '</div>  ';
						}
						
						if (data.glossary[i].CAN_HS10.trim() != '')
						{
							html += '<br><div class="countryHS">Import HS10: ' + data.glossary[i].CAN_HS10 + '</div>  ';
						}

						//html += '<div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_EN.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexico</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERM_EN + '</div> <br> ' + data.glossary[i].MEX_DEF_EN + '</div>';
						
						if (data.glossary[i].MEX_SOURCE.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE + '</div>  ';
						}
						
						if (data.glossary[i].MEX_HS.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].MEX_HS + '</div>  ';
						}
						
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
		  }); 		  
		  
};

function getDefinitionByCategory(val) {

		var result = 0;
    	$('#placeholder').empty();	

		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';
			
			html += '<div class="glossary_title" style="margin-bottom: 20px;">' + val + '</div>';
			
			for (var i in data.glossary) 
			{			
				if ( val.toLowerCase() == data.glossary[i].CATEGORY.toLowerCase() ) 
					{					
					
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM + '</h3>';
					
					//IRES
					if (data.glossary[i].IRES_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="35px" style="margin:15px 10px 0 0;">International Recommendations for Energy Statistics (IRES) </h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IRES_TERM + '</div> <br> ' + data.glossary[i].IRES_DEF + '</div>';
					}
					
					//IEA
					if (data.glossary[i].IEA_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="35px" style="margin:20px 10px 0 0;">International Energy Agency (IEA)</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IEA_TERM + '</div> <br> ' + data.glossary[i].IEA_DEF + '</div>';
					}
					
					//US
					//html += '<div class="country">United States</div>';
																				
					if (data.glossary[i].USA_TERM.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">United States</h4>';
														
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM + '</div> <br> ' + data.glossary[i].USA_DEF + '</div>';
						
						if (data.glossary[i].USA_SOURCE.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE + '</div>  ';
						}
						
						if (data.glossary[i].USA_HS.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].USA_HS + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
														
					if (data.glossary[i].CAN_TERM_EN.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Canada</h4>';
						
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_EN + '</div> <br> ' + data.glossary[i].CAN_DEF_EN + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS8.trim() != '')
						{
							html += '<br><div class="countryHS">Export HS8: ' + data.glossary[i].CAN_HS8 + '</div>  ';
						}
						
						if (data.glossary[i].CAN_HS10.trim() != '')
						{
							html += '<br><div class="countryHS">Import HS10: ' + data.glossary[i].CAN_HS10 + '</div>  ';
						}
						
						
						
						//html += '<div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_EN.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Mexico</h4>';
						
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERM_EN + '</div> <br> ' + data.glossary[i].MEX_DEF_EN + '</div>';
						
						if (data.glossary[i].MEX_SOURCE.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE + '</div>  ';
						}
						
						if (data.glossary[i].MEX_HS.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].MEX_HS + '</div>  ';
						}
						
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
		  }); 	

};