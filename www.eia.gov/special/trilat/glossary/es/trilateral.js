// JavaScript Document
function loadDefinitions(takeLetter) {

		var result = 0;
    	$('#placeholder').empty();	
		
		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';		
		
			for (var i in data.glossary) 
			{	
					
				if ( RegExp('^'+takeLetter, 'i').test(data.glossary[i].TERM_SP) ) 
					{			
						result += 1;
						
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM_SP + '</strong></div>';
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_SP + '</h3>';
					
					//IRES
					
					if (data.glossary[i].IRES_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="28px" style="margin:10px 5px 3px 0; vertical-align:-10px">Recomendaciones Internacionales para las Estadísticas Energéticas </h4>';
						html += '<div class="countryterm"><div class="term" >' +  data.glossary[i].IRES_TERM_SP  + '</div> <br> ' + data.glossary[i].IRES_DEF_SP + '</div>';
					}
					
					//IEA
					
					if (data.glossary[i].IEA_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="28px" style="margin:35px 5px 3px 0; vertical-align:-10px">Agencia Internacional de Energía</h4>';
						html += '<div class="countryterm"><div class="term">' +  data.glossary[i].IEA_TERM_SP  + '</div> <br> ' + data.glossary[i].IEA_DEF_SP + '</div>';
					}
					
					//US
					//html += '<div class="country">United States</div>';
																	
					if (data.glossary[i].USA_TERM_SP.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Estados Unidos de América</h4>';								
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM_SP + '</div> <br> ' + data.glossary[i].USA_DEF_SP + '</div>';
						
						if (data.glossary[i].USA_SOURCE_SP.trim() != '')
						{		
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_SP + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].USA_HS_SP.trim() != '')
						{		
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].USA_HS_SP + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
														
					if (data.glossary[i].CAN_TERM_SP.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canadá</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_SP + '</div> <br> ' + data.glossary[i].CAN_DEF_SP + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
						if (data.glossary[i].CAN_HS8_SP.trim() != '')
						{		
							html += '<br><div class="countryHS">Export HS8: ' + data.glossary[i].CAN_HS8_SP + '</div>  ';
						}
												
						if (data.glossary[i].CAN_HS10_SP.trim() != '')
						{		
							html += '<br><div class="countryHS">Import HS10: ' + data.glossary[i].CAN_HS10_SP + '</div>  ';
						}
						
						//html += '<br><div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_SP.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">México</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERM_SP + '</div> <br> ' + data.glossary[i].MEX_DEF_SP + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_SP.trim() != '')
						{		
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_SP + '</div>  ';
						}
						
						
						if (data.glossary[i].MEX_HS_SP.trim() != '')
						{		
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].MEX_HS_SP + '</div>  ';
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

		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '<br>';
			
			var ordered_array = [];
			
			for (var i in data.glossary) 
			{			
						
					ordered_array.push(data.glossary[i].TERM_SP);
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
				html += '<li class="glossaryterm"><a href="#' + ordered_array[i] + '">' + ordered_array[i] + '</li>';
				$('#placeholder').html(html);
			}
		  });
		
		/*$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';
			
			for (var i in data.glossary) 
			{			
						
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM_SP + '</strong></div>';
					html += '<li class="glossaryterm"  style="cursor:pointer; text-decoration: underline;">' + data.glossary[i].TERM_SP + '</li>';
			
			        $('#placeholder').html(html);
				
			}
			
		  });*/ 
		  
		  
		  
	};	
	
function getDefinition(val) {

		var result = 0;
    	$('#placeholder').empty();	

		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';
			
			for (var i in data.glossary) 
			{			
				if ( val == data.glossary[i].TERM_SP ) 
					{		
						
					html += '<h3  style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_SP + '</h3>';
					
					//IRES
					
					if (data.glossary[i].IRES_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="28px" style="margin:10px 5px 3px 0; vertical-align:-10px">Recomendaciones Internacionales para las Estadísticas Energéticas </h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IRES_TERM_SP + '</div> <br> ' + data.glossary[i].IRES_DEF_SP + '</div>';
					}
					
					//IEA
					
					if (data.glossary[i].IEA_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="28px" style="margin:35px 5px 3px 0; vertical-align:-10px">Agencia Internacional de Energía</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IEA_TERM_SP + '</div> <br> ' + data.glossary[i].IEA_DEF_SP + '</div>';
					}
					
					//US
					//html += '<div class="country">United States</div>';
																				
					if (data.glossary[i].USA_TERM_SP.trim() != '')
					{	
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Estados Unidos de América</h4>';							
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM_SP + '</div> <br> ' + data.glossary[i].USA_DEF_SP + '</div>';
						
						if (data.glossary[i].USA_SOURCE_SP.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_SP + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
						if (data.glossary[i].USA_HS_SP.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].USA_HS_SP + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
					
					if (data.glossary[i].CAN_TERM_SP.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canadá</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_SP + '</div> <br> ' + data.glossary[i].CAN_DEF_SP + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS8_SP.trim() != '')
						{
							html += '<br><div class="countryHS">Export HS8: ' + data.glossary[i].CAN_HS8_SP + '</div>  ';
						}
						
						if (data.glossary[i].CAN_HS10_SP.trim() != '')
						{
							html += '<br><div class="countryHS">Import HS10: ' + data.glossary[i].CAN_HS10_SP + '</div>  ';
						}

						//html += '<div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_SP.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">México</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERM_SP + '</div> <br> ' + data.glossary[i].MEX_DEF_SP + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_SP.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_SP + '</div>  ';
						}
						
						if (data.glossary[i].MEX_HS_SP.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].MEX_HS_SP + '</div>  ';
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
				if ( val.toLowerCase() == data.glossary[i].CATEGORY_SP.toLowerCase() ) 
					{					
					
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_SP + '</h3>';
					
					//IRES
					if (data.glossary[i].IRES_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="35px" style="margin:15px 10px 0 0;">Recomendaciones Internacionales para las Estadísticas Energéticas </h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IRES_TERM_SP + '</div> <br> ' + data.glossary[i].IRES_DEF_SP + '</div>';
					}
					
					//IEA
					if (data.glossary[i].IEA_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="35px" style="margin:20px 10px 0 0;">Agencia Internacional de Energía</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IEA_TERM_SP + '</div> <br> ' + data.glossary[i].IEA_DEF_SP + '</div>';
					}
					
					//US
					//html += '<div class="country">United States</div>';
																				
					if (data.glossary[i].USA_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Estados Unidos de América</h4>';								
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM_SP + '</div> <br> ' + data.glossary[i].USA_DEF_SP + '</div>';
						
						if (data.glossary[i].USA_SOURCE_SP.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_SP + '</div>  ';
						}
						
						if (data.glossary[i].USA_HS_SP.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].USA_HS_SP + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
														
					if (data.glossary[i].CAN_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Canadá</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_SP + '</div> <br> ' + data.glossary[i].CAN_DEF_SP + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS8_SP.trim() != '')
						{
							html += '<br><div class="countryHS">Export HS8: ' + data.glossary[i].CAN_HS8_SP + '</div>  ';
						}
						
						if (data.glossary[i].CAN_HS10_SP.trim() != '')
						{
							html += '<br><div class="countryHS">Import HS10: ' + data.glossary[i].CAN_HS10_SP + '</div>  ';
						}
						
						
						
						//html += '<div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexico
					//html += '<div class="country">Mexico</div>';
											
					if (data.glossary[i].MEX_TERM_SP.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">México</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERM_SP + '</div> <br> ' + data.glossary[i].MEX_DEF_SP + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_SP.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_SP + '</div>  ';
						}
						
						if (data.glossary[i].MEX_HS_SP.trim() != '')
						{
							html += '<br><div class="countryHS">HS: ' + data.glossary[i].MEX_HS_SP + '</div>  ';
						}
						
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
		  }); 	

};