// JavaScript Document
function loadDefinitions(takeLetter) {

		var result = 0;
		var eAccent = "\351";
		var getTerm = false;
    	$('#placeholder').empty();	
		
		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';						
		
			for (var i in data.glossary) 
			{
			   if ( RegExp('^'+takeLetter, 'i').test(data.glossary[i].TERM_FR))
					{			
						result += 1;
						
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM + '</strong></div>';
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_FR + '</h3>';
					
					//IRES
					
					if (data.glossary[i].IRES_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="28px" style="margin:10px 5px 3px 0; vertical-align:-10px">Recommandations International pour les Statistiques Énergétiques (IRES) </h4>';
						html += '<div class="countryterm"><div class="term" >' +  data.glossary[i].IRES_TERM_FR  + '</div> <br> ' + data.glossary[i].IRES_DEF_FR + '</div>';
					}
					
					//IEA
					
					if (data.glossary[i].IEA_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="28px" style="margin:35px 5px 3px 0; vertical-align:-10px">Agence Internationale de l&#39;Énergie (AIE)</h4>';
						html += '<div class="countryterm"><div class="term">' +  data.glossary[i].IEA_TERM_FR  + '</div> <br> ' + data.glossary[i].IEA_DEF_FR + '</div>';
					}
					
					//US
					//html += '<div class="country">États-Unis</div>';
																	
					if (data.glossary[i].USA_TERM_FR.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">États-Unis</h4>';								
						html += '<div class="countryterm"> <div class="term">' + data.glossary[i].USA_TERM_FR + '</div> <br> ' + data.glossary[i].USA_DEF_FR + '</div>';
						
						if (data.glossary[i].USA_SOURCE_FR.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].USA_HS_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH: ' + data.glossary[i].USA_HS_FR + '</div>  ';
						}
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
														
					if (data.glossary[i].CAN_TERM_EN_FR.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_EN_FR + '</div> <br> ' + data.glossary[i].CAN_DEF_EN_FR + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
						if (data.glossary[i].CAN_HS8_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH8 (exportations): ' + data.glossary[i].CAN_HS8_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS10_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH10 (importations): ' + data.glossary[i].CAN_HS10_FR + '</div>  ';
						}
						
						
						
						//html += '<br><div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexique
					//html += '<div class="country">Mexique</div>';
											
					if (data.glossary[i].MEX_TERME_FR.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexique</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERME_FR + '</div> <br> ' + data.glossary[i].MEX_DEF_FR + '</div>';
						
						
						if (data.glossary[i].MEX_SOURCE_FR.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].MEX_HS_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH: ' + data.glossary[i].MEX_HS_FR + '</div>  ';
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
						
					ordered_array.push(data.glossary[i].TERM_FR);
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
						
					//html += '<div class="glossaryterm"><strong>' + data.glossary[i].TERM + '</strong></div>';
					html += '<li class="glossaryterm"  style="cursor:pointer; text-decoration: underline;">' + data.glossary[i].TERM_FR + '</li>';
			
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
				if ( val == data.glossary[i].TERM_FR ) 
					{		
						
					html += '<h3  style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_FR + '</h3>';
					
					//IRES
					
					if (data.glossary[i].IRES_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="28px" style="margin:10px 5px 3px 0; vertical-align:-10px">Recommandations International pour les Statistiques Énergétiques (IRES) </h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IRES_TERM_FR + '</div> <br> ' + data.glossary[i].IRES_DEF_FR + '</div>';
					}
					
					//IEA
					
					if (data.glossary[i].IEA_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="28px" style="margin:35px 5px 3px 0; vertical-align:-10px">Agence Internationale de l&#39;Énergie (AIE)</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IEA_TERM_FR + '</div> <br> ' + data.glossary[i].IEA_DEF_FR + '</div>';
					}
					
					//US
					//html += '<div class="country">États-Unis</div>';
																				
					if (data.glossary[i].USA_TERM_FR.trim() != '')
					{	
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">États-Unis</h4>';							
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM_FR + '</div> <br> ' + data.glossary[i].USA_DEF_FR + '</div>';
						
						if (data.glossary[i].USA_SOURCE_FR.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].USA_HS_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH: ' + data.glossary[i].USA_HS_FR + '</div>  ';
						}
						
						
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
					
					if (data.glossary[i].CAN_TERM_EN_FR.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Canada</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_EN_FR + '</div> <br> ' + data.glossary[i].CAN_DEF_EN_FR + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS8_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH8 (exportations): ' + data.glossary[i].CAN_HS8_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS10_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH10 (importations): ' + data.glossary[i].CAN_HS10_FR + '</div>  ';
						}
						
						
						//html += '<div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexique
					//html += '<div class="country">Mexique</div>';
											
					if (data.glossary[i].MEX_TERME_FR.trim() != '')
					{
						html += '<h4 style="display:block;font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="20px" style="margin:35px 5px 5px 0;vertical-align:-10px;">Mexique</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERME_FR + '</div> <br> ' + data.glossary[i].MEX_DEF_FR + '</div>';
						
						if (data.glossary[i].MEX_SOURCE_FR.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].MEX_HS_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH: ' + data.glossary[i].MEX_HS_FR + '</div>  ';
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

		$.getJSON("glossaryA.json", function(data) 
		{
			var html = '';
			
			html += '<div class="glossary_title" style="margin-bottom: 20px;">' + val + '</div>';
			
			for (var i in data.glossary) 
			{			
				if ( val.toLowerCase() == data.glossary[i].CATEGORY_FR.toLowerCase() ) 
					{					
					
					html += '<h3 style="margin-top:30px;" class="glossaryterm">' + data.glossary[i].TERM_FR + '</h3>';
					
					//IRES
					if (data.glossary[i].IRES_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/un.jpg" height="35px" style="margin:15px 10px 0 0;">Recommandations International pour les Statistiques Énergétiques (IRES) </h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IRES_TERM_FR + '</div> <br> ' + data.glossary[i].IRES_DEF_FR + '</div>';
					}
					
					//IEA
					if (data.glossary[i].IEA_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="../../images/iea.jpg" height="35px" style="margin:20px 10px 0 0;">Agence Internationale de l&#39;Énergie (AIE)</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].IEA_TERM_FR + '</div> <br> ' + data.glossary[i].IEA_DEF_FR + '</div>';
					}
					
					//US
					//html += '<div class="country">États-Unis</div>';
																				
					if (data.glossary[i].USA_TERM_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/us-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">États-Unis</h4>';								
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].USA_TERM_FR + '</div> <br> ' + data.glossary[i].USA_DEF_FR + '</div>';
						
						if (data.glossary[i].USA_SOURCE_FR.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].USA_SOURCE_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].USA_HS_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH: ' + data.glossary[i].USA_HS_FR + '</div>  ';
						}					
						
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
					}
					
					//Canada
					//html += '<div class="country">Canada</div>';
														
					if (data.glossary[i].CAN_TERM_EN_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Canada</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].CAN_TERM_EN_FR + '</div> <br> ' + data.glossary[i].CAN_DEF_EN_FR + '</div>';
						//html += '<div class="countrysource"> Source: ' + data.glossary[i].CAN_SOURCE + '</div>  ';
						//html += '<div class="spacer"> &nbsp; </div>  ';
						
						if (data.glossary[i].CAN_HS8_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH8 (exportations): ' + data.glossary[i].CAN_HS8_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].CAN_HS10_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH10 (importations): ' + data.glossary[i].CAN_HS10_FR + '</div>  ';
						}	
						
						
						
						
						//html += '<div class="countryHS"> NAPCS: ' + data.glossary[i].NAPCS_CAN + '</div>  ';
					}
					
					//Mexique
					//html += '<div class="country">Mexique</div>';
											
					if (data.glossary[i].MEX_TERME_FR.trim() != '')
					{
						html += '<h4 style="font-weight:normal; font-size:11pt;"><img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/mx-lgflag.gif" height="30px" style="margin:20px 10px 0 0;">Mexique</h4>';
						html += '<div class="countryterm"><div class="term">' + data.glossary[i].MEX_TERME_FR + '</div> <br> ' + data.glossary[i].MEX_DEF_FR + '</div>';
						
						
						if (data.glossary[i].MEX_SOURCE_FR.trim() != '')
						{
							html += '<div class="countrysource"> Source: ' + data.glossary[i].MEX_SOURCE_FR + '</div>  ';
						}
						//html += '<div class="spacer"> &nbsp; </div>  ';
						if (data.glossary[i].MEX_HS_FR.trim() != '')
						{
							html += '<br><div class="countryHS">SH: ' + data.glossary[i].MEX_HS_FR + '</div>  ';
						}
							
					}
	
			        $('#placeholder').html(html);
				
					}
			}
			
		  }); 	

};