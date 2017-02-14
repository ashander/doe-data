<!--
function InsertEIAHeaderCode(){
var	code='<TABLE border="0" width="100%" cellspacing="0" cellpadding="0" title="Search" summary="Contains EIA logo & FirstGov.gov Affiliates search form & glossary">';
// need border? <TABLE borderColor=#ffffff cellSpacing=0 cellPadding=0 border=1>
    code+='<TBODY> <TR> <TD vAlign=center scope=col noWrap align=left width="65%" rowSpan=2>';
	code+='<IMG src="http://www.eia.gov/images/eia_new.gif" height=55 width=680 usemap="#EIALogoMap" border="0"';
	code+=' alt="Energy Information Administration (EIA) Logo - Need Help? 202-586-8800"></TD></TR>';
//    code+='<TR> <TD scope=col noWrap borderColor=#990000 width="35%" bgColor=#e8e8e8>&nbsp;';
    code+='<TR> <TD align="center" scope=col noWrap width="35%">';
// begin FirstGov Affiliates Search.
// action= Sends form parameters to FirstGov Affiliates Search Directory.  DO NOT CHANGE    
    code+='<form style="DISPLAY: inline" method="get" action="http://firstgovsearch.gov/search">';
	code+='<input type="hidden" name="affiliate" value="eia.doe.gov">';
	code+='<input type="hidden" name="v:project" value="firstgov">';
// ...textbox for your search terms... You may alter the width of the search box here by changing the size="x" parameter
	code+='<input type="text" name="query" size="20" maxlength="256" title="enter the information you are searching for" />';
// submit button is a graphic
	code+='<input type="image" name="search" alt="enter terms to search" src="http://www.eia.gov/search_buttonS.gif" align="absmiddle" border="0" title="click to search EIA">';
	code+='</form>';  //</fieldset>
// end FirstGov Affiliates Search.
// glossary on next line	
	code+='&nbsp;<br><A href="http://www.eia.gov/glossary/index.html"> ';
	code+='<FONT face="Arial, Helvetica, sans-serif" size=2>Glossary</FONT></A> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;';
    code+='</TD></TR></TBODY></TABLE> ';  
	code+='<map name="EIALogoMap"><area shape="rect" coords="7,5,111,55" href="http://www.eia.gov" alt="return to EIA home" title="return to EIA home"></map>';
//          <img src="http://www.eia.gov/search_button.gif" align="absmiddle">&nbsp; 
	document.writeln(code);
}
//-->

