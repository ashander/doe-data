function getInfo(element)
{
	element.attr('data-formula')
	var html = '<span><B>Formula:</B> ' + element.attr('data-formula') + '<BR>';
	
	if(element.attr('data-units'))
		html += '<B>Units:</B> ' + element.attr('data-units') + ' <BR>';
	
	if(element.attr('data-source'))
		html += '<B>Source:</B> ' + element.attr('data-source') + ' <BR>';
	
	if(element.attr('data-note'))
		html += '<B>Notes:</B> ' + element.attr('data-note') + ' <BR></span>';
		
	document.getElementById('tipDiv').innerHTML = html;
	
	return html;
}
// steotooltip.js

// functions to display and hide a tooltip


function showInteriorTip(e)
{
	var targ;
	var headerArray;
	var tipText = '';
	
	if(e.target)
		targ = e.target;
	else if (e.srcElement)
		targ = e.srcElement;
		
	if(targ.tagName == 'TD')
	{
		if(targ.headers)
		{
			headerArray = targ.headers.split(' ');
			
			tipText = document.getElementById(headerArray[0]).innerHTML + '<BR>'
			for (i = 1; i < headerArray.length; i++)
			{
				tipText = tipText + ' ' + document.getElementById(headerArray[i]).innerHTML;
			}
			showTip(e, tipText);
		}
	}
	else if(targ.tagName == 'IMG')
	{
		if(targ.name == 'Info')
		{
			showTip(e, getInfo($(targ)));
		}
		else if(targ.name == "Chart")
		{
			showTip(e, 'Click to display chart.');
		}
	}
}

function hideInteriorTip(e)
{
	hideTip();
}

function showTip(e, tipText)
{
	var tipDiv = $('#tipDiv');
	
	tipDiv.html(tipText);
	
	if(tipDiv.width() < 100)
	{
		tipDiv.width(100);
	}
	
	var mousePageX = 0;
	var mousePageY = 0;
	var mouseScreenX = 0;
	var mouseScreenY = 0;
	var margin = 20;
	
	if (e.pageX || e.pageY) 	{
			mousePageX = e.pageX;
			mousePageY = e.pageY;
			mouseScreenX = e.clientX;
			mouseScreenY = e.clientY;
		}
	else if (e.clientX || e.clientY) 	{
		mousePageX = e.clientX;
		mousePageY = e.clientY;
		mouseScreenX = e.clientX;
		mouseScreenY = e.clientY;
	}

	if(window.innerWidth && window.innerHeight){
		var windowEdgeBtm = window.innerHeight;
		var windowEdgeRgt = window.innerWidth;
	}
	else{
		var windowEdgeBtm = ((!document.documentElement.clientHeight) || (document.documentElement.clientHeight === 0)) ? document.body.clientHeight : document.documentElement.clientHeight;
		var windowEdgeRgt = ((!document.documentElement.clientWidth) || (document.documentElement.clientWidth === 0)) ? document.body.clientWidth : document.documentElement.clientWidth;
	}
	
	var divTipEdgeRgt = 10 + tipDiv.width();
	var divTipEdgeBtm = 10 + tipDiv.height();
	
	var left = ((mouseScreenX + divTipEdgeRgt) <= (windowEdgeRgt-margin)) ? (mousePageX + 10) + 'px' : (mouseScreenX >= (divTipEdgeRgt)) ? (mousePageX - divTipEdgeRgt) + 'px' : '0px';
	var top = ((mouseScreenY + divTipEdgeBtm) <= (windowEdgeBtm - margin)) ? (mousePageY + 10) + 'px' : (mouseScreenY >= (divTipEdgeBtm)) ? (mousePageY - divTipEdgeBtm) + 'px' : mousePageY - divTipEdgeBtm + (divTipEdgeBtm - mouseScreenY) + 'px';
	
	
	tipDiv.css('left', left);
	tipDiv.css('top', top);
	
	tipDiv.css('visibility', 'visible');
}

function hideTip()
{
	var tipDiv = $('#tipDiv');
	tipDiv.css('visibility', 'hidden');
}

function dlExcel()
{
	document.hiddenForm.submit.click();
}