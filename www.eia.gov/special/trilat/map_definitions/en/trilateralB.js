// JavaScript Document
function loadDefinitions(takeLetter) {

		var result = 0;
    	$('#placeholder').empty();	
		
		$.getJSON("glossaryB.json", function(data) 
		{
			var html = '';		
		
			for (var i in data.glossary) 
			{	
					
				if ( RegExp('^'+takeLetter, 'i').test(data.glossary[i].TERM_EN) ) 
					{			
						result += 1;
						
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM_EN + '</strong></div>';
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_EN + '</h3>';					
				
					//US
					//html += '<div class="country">United States</div>';
																		
					if (data.glossary[i].USA_TERM_EN.trim() != '')
					{								
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="30px" style="margin:15px 10px 0 0;">United States</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">United States</h4>';								
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].USA_TERM_EN + '</div><br>' + data.glossary[i].USA_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].USA_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_EN + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';

						
					
					if (data.glossary[i].CAN_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Canada</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].CAN_TERM_EN + '</div><br>' + data.glossary[i].CAN_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].CAN_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Mexico</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexico</h4>';
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].MEX_TERM_EN + '</div><br>' + data.glossary[i].MEX_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
			$('#result').html('<b>'+(result<1 ? 'no results found' : result+' result(s) found')+'</b>');
			
		  }); 		  
		  
};
	
function showIndex() { 	//index code ----------------------------------------------------------------------------

    	$('#placeholder').empty();		

		$.getJSON("glossaryB.json", function(data) 
		{
			var html = '';
			
			var ordered_array = [];
			
			for (var i in data.glossary) 
			{			
						
					ordered_array.push(data.glossary[i].TERM_EN);
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM_EN + '</strong></div>';
					/*html += '<li class="glossaryterm"  style="cursor:pointer; text-decoration: underline;">' + data.glossary[i].TERM_EN + '</li>';
			
			        $('#placeholder').html(html);*/
				
			}
			
			function frsort(a,b) {
				return a.localeCompare(b);
			}
 			
			ordered_array.sort(frsort);
			
			for (var i in ordered_array) {
				html += '<li class="glossaryterm"><a href="#' + ordered_array[i] + '">' + ordered_array[i] + '</a></li>';
				$('#placeholder').html(html);
			}
			
		  }); 
		  
		  
		  
	};	
	
function getDefinition(val) {

		var result = 0;
    	$('#placeholder').empty();	

		$.getJSON("glossaryB.json", function(data) 
		{
			var html = '';
			
			for (var i in data.glossary) 
			{			
				if ( val == data.glossary[i].TERM_EN ) 
					{		
						
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_EN + '</h3>';					
				
					//US
					//html += '<div class="country">United States</div>';
																			
					if (data.glossary[i].USA_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="30px" style="margin:15px 10px 0 0;">United States</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">United States</h4>';			
														
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].USA_TERM_EN + '</div><br>' + data.glossary[i].USA_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].USA_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
												
					if (data.glossary[i].CAN_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Canada</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].CAN_TERM_EN + '</div><br>' + data.glossary[i].CAN_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].CAN_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Mexico</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexico</h4>';
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].MEX_TERM_EN + '</div><br>' + data.glossary[i].MEX_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
		  }); 		  
		  
};

function getDefinitionByCategory(val) {

		var result = 0;
    	$('#placeholder').empty();	

		$.getJSON("glossaryB.json", function(data) 
		{
			var html = '';
			
			html += '<div class="glossary_title" style="margin-bottom: 20px;">' + val + '</div>';
			
			for (var i in data.glossary) 
			{			
				if ( val.toLowerCase() == data.glossary[i].CATEGORY_EN.toLowerCase() ) 
					{					
					
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_EN + '</h3>';					
				
					//US
					//html += '<div class="country">United States</div>';
																							
					if (data.glossary[i].USA_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="30px" style="margin:15px 10px 0 0;">United States</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">United States</h4>';	
														
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].USA_TERM_EN + '</div><br>' + data.glossary[i].USA_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].USA_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
																
					if (data.glossary[i].CAN_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Canada</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].CAN_TERM_EN + '</div><br>' + data.glossary[i].CAN_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].CAN_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
										
					if (data.glossary[i].MEX_TERM_EN.trim() != '')
					{
						//html += '<h4 style="display:block;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Mexico</h4>';
						
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexico</h4>';
						
						html += '<div class="countryterm"><div class="term" >' + data.glossary[i].MEX_TERM_EN + '</div><br>' + data.glossary[i].MEX_DEFINITION_EN + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_EN.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_EN + '</div>  ';
						}
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
		  }); 	

};