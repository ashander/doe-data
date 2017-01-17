var options = {
	target: query.contentTarget,
	beforeSerialize: preSerialize,
	beforeSubmit: preSubmit,
	success: onResponse
};

$(document).ready(function() {
	$('#queryForm').ajaxForm(options);
	$.each($('input[name*="periodType"]'), function() {
		if(this.value == query.periodType.toUpperCase())
		{
			this.checked = true;
		}
	});
});
		
function preSerialize(jqForm, options)
{
	var $data = $('[name="leafNode_CB"]');
	var someSelected = false;
	var binaryArray = Array((Math.ceil(query.lastId/5) * 5));
	var hexArray = Array(Math.ceil(query.lastId/5));
	
	for (var i=0; i < binaryArray.length; i++)
		binaryArray[i] = 0;
		
	for (var i=0; i < $data.length; i++)
	{
		if ($data[i].checked)
		{
			someSelected = true;
			binaryArray[$data[i].value] = 1;
		}
	}
	
	if (someSelected) {
			var zeroCount = 0;
		for (var i = 0; i < hexArray.length; i++) {
			var char32 = parseInt(binaryArray.slice(i * 5, i * 5 + 5).join(""), 2).toString(32);
			if(char32 == '0') {
				zeroCount++;
			}
			else {
				if(zeroCount > 3) {
					var countString = 'x' + zeroCount + 'x';
					for(var k = 0; k < countString.length; k++) {
						hexArray[i - countString.length + k] = countString[k];
					}
				}
				else {
					for(var j = 0; j < zeroCount; j++) {
						hexArray[i - zeroCount + j] = '0';
					}
				}
				hexArray[i] = char32;
				zeroCount = 0;
			}
			
		}
		
		$('#formulas')[0].value = hexArray.join("");
	}
	else
	{
		$('#formulas')[0].value = 0;			
	}
}
	
function preSubmit(formData, jqForm, options) { 
	var startYear = 0;
	var endYear = 0;
	
	for (var i = 0; i < formData.length; i++) {
		if(formData[i].name === "formulas" && formData[i].value === "0")
		{
			alert("Please select at least one variable from the list on the left.");
			return false;	
		}
		else if(formData[i].name == "startYear")
		{
			startYear = formData[i].value;
		}
		else if(formData[i].name == "endYear")
		{
			endYear = formData[i].value;
		}
	}
	
	if(startYear > endYear)
	{
		alert("Start year occurs after end year.\nPlease select an end year which is equal to or later than the start year.");
		return false;	
	}
	
	return true;
} 
// Returns object that triggered event.
function eventTrigger (e) 
{
    if (! e)
        e = event;
    return e.target || e.srcElement;
}

// Processes onClick events for the form
function formDivClick(e){
	var targ = eventTrigger(e);
	var $targ = $(targ);
	
	if (targ.tagName == "INPUT") {
		if (targ.type == "checkbox") 
		{
			if (targ.name == "leafNode_CB") 
			{
				selectOrDeselect(0, e, true)
			}
			else 
			{
				selectOrDeselect(targ.value, e, true)
			}
		}
	}
	else if (targ.tagName == "IMG") 
	{
		if (targ.id.substr(0, 6) == "Image_") 
		{
			expandOrContract(targ.id.substring(6));
		}
		else if ($targ.hasClass('checkBox')) 
		{
			var $checkBox = $('#' + $targ.attr('id') + '_CB');
			
			if ($targ.hasClass('checked')) 
			{
				$checkBox[0].checked = false;
				$targ.addClass('unchecked');
				$targ.removeClass('checked');
				
				toggleSelections($targ, $checkBox, false, true);
			}
			else if ($targ.hasClass('intermediate')) 
			{
				$checkBox[0].checked = true;
				$targ.addClass('checked');
				$targ.removeClass('intermediate');
				toggleSelections($targ, $checkBox, true, true);
			}
			else if ($targ.hasClass('unchecked')) 
			{
				$checkBox[0].checked = true;	
				$targ.addClass('checked');
				$targ.removeClass('unchecked');
				toggleSelections($targ, $checkBox, true, true);
				
			}
		}
	}
}

function toggleSelections($target, $checkBox, selected, initial)
{	
	if(initial)
	{
		toggleSelectionsUp($target);
	}
	
	if ($target.attr('name') != 'leafNode') {
		var i = 1;
		var $nextTarg = $('#' + $checkBox.attr('value') + '_' + String(i));
		var $nextCheckBox = $('#' + $checkBox.attr('value') + '_' + String(i) + '_CB');
		
		while ($nextCheckBox.length > 0) {			
			if ($nextTarg.hasClass('checked') && !selected) 
			{
				$nextCheckBox[0].checked = selected;
				$nextTarg.addClass('unchecked');
				$nextTarg.removeClass('checked');
				
				toggleSelections($nextTarg, $nextCheckBox, selected, false);
			}
			else if ($nextTarg.hasClass('intermediate') && selected) 
			{
				$nextCheckBox[0].checked = selected;
				$nextTarg.addClass('checked');
				$nextTarg.removeClass('intermediate');
				toggleSelections($nextTarg, $nextCheckBox, selected, false);
			}
			else if ($nextTarg.hasClass('unchecked') && selected) 
			{
				$nextCheckBox[0].checked = selected;	
				$nextTarg.addClass('checked');
				$nextTarg.removeClass('unchecked');
				toggleSelections($nextTarg, $nextCheckBox, selected, false);
				
			}
			i++;
			$nextTarg = $('#' + $checkBox.attr('value') + '_' + String(i));
			$nextCheckBox = $('#' + $checkBox.attr('value') + '_' + String(i) + '_CB');
		}
	}
}

function toggleSelectionsUp($target)
{
	var keepLooking = true;
	var menuNumber = $target.attr('id').split("_", 1)[0];
	var i = 1;
	
	var checkCount = 0;
	var interCount = 0;
	var uncheckCount = 0;
	
	if(menuNumber != "1") {
		while(keepLooking) {
			$cBox = $('#' + menuNumber + "_" + i++);
			
			if ($cBox.length > 0) {
				if ($cBox.hasClass('checked')) {
					checkCount++;
				}
				else if ($cBox.hasClass('intermediate')) {
					interCount++;
				}
				else if ($cBox.hasClass('unchecked')) {
					uncheckCount++;
				}
			}
			else 
			{
				var $parent = $('[name="' + menuNumber + '_Parent"]');
				var $parentCheckBox = $('[name="' + menuNumber + '_Parent_CB"]');
				
				if(interCount == 0 && uncheckCount == 0) {
					if($parent.hasClass('intermediate')) {
						$parent.removeClass('intermediate');
						$parent.addClass('checked');
						$parentCheckBox[0].checked = true;
					}
					else if($parent.hasClass('unchecked')) {
						$parent.removeClass('unchecked');
						$parent.addClass('checked');
						$parentCheckBox[0].checked = true;
					}
				}
				else if(checkCount == 0 && interCount == 0) {
					if($parent.hasClass('checked')) {
						$parent.removeClass('checked');
						$parent.addClass('unchecked');
						$parentCheckBox[0].checked = false;
					}
					else if($parent.hasClass('intermediate')) {
						$parent.removeClass('intermediate');
						$parent.addClass('unchecked');
						$parentCheckBox[0].checked = false;
					}
				}
				else {
					if($parent.hasClass('checked')) {
						$parent.removeClass('checked');
						$parent.addClass('intermediate');
						$parentCheckBox[0].checked = false;
					}
					else if($parent.hasClass('unchecked')) {
						$parent.removeClass('unchecked');
						$parent.addClass('intermediate');
						$parentCheckBox[0].checked = false;
					}
				}
				toggleSelectionsUp($parent);
				keepLooking = false;
			}
		}
	}
}

// Select/Deselect function for tree menu, checks down the tree and calls helper function
function selectOrDeselect(nextMenuNumber, e, initial)
{	
	var obj = eventTrigger(e);
	var selected = obj.checked;
	
	if(initial) {
		selectOrDeselectUp(obj, selected);
	}
	
	var i = 1;
	var checkBox = document.getElementById(String(nextMenuNumber) + "_" + String(i) + '_CB');
	while (checkBox != null)
	{
		checkBox.checked = selected;
		if (!(checkBox.name == "leafNode_CB"))
		{
			selectOrDeselect(Number(checkBox.value), e, false);
		}	
		checkBox = document.getElementById(String(nextMenuNumber) + "_" + String(++i) + '_CB');
	}
	
	return true;
}
// Select/Deselect Helper, checks up the tree
function selectOrDeselectUp(obj, selected)
{
	var keepLooking = true;
	var menuNumber = obj.id.split("_", 1)[0];
	var cBox;
	var i = 1;
	
	if(menuNumber != "1")
	{
		if(selected)
		{
			while(keepLooking) 
			{
				cBox = document.getElementById(menuNumber + "_" + i++ + '_CB');
				if(cBox != null) 
				{
					keepLooking = cBox.checked;
				}
				else 
				{
					document.getElementsByName(menuNumber + "_Parent_CB")[0].checked = true;
					selectOrDeselectUp(document.getElementsByName(menuNumber + "_Parent_CB")[0], selected);
					keepLooking = false;
				}
			}
		}
		else
		{
			document.getElementsByName(menuNumber + "_Parent_CB")[0].checked = false;
			selectOrDeselectUp(document.getElementsByName(menuNumber + "_Parent_CB")[0], selected);
		}
	}
}
// Expand or collapse tree.  Show or hide child nodes.
function expandOrContract(nextMenuNumber)
{
	if (document.getElementById(String(nextMenuNumber)).className == "menuHide")
	{
		document.getElementById(String(nextMenuNumber)).className = "menuShow";
		document.getElementById("Image_"+String(nextMenuNumber)).src = "imgs/minus1.GIF";
	}
	else
	{
		document.getElementById(String(nextMenuNumber)).className = "menuHide";
		document.getElementById("Image_"+String(nextMenuNumber)).src = "imgs/plus1.GIF";
	}
	
	$('#formDiv').resize();
}