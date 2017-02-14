// JavaScript Document

<!--
// Author    : Robert Collette (ROBERT-COLLETTE@worldnet.att.net) 
function convertTempform(form)
{
	if (form.elements[1].value != null && form.elements[1].value.length != 0) 
	{
		firstvalue = form.elements[1].value
		form.elements[2].value = formatvalue((1.8 * firstvalue) + 32, form.rsize);
		return
	}
	if (form.elements[2].value != null && form.elements[2].value.length != 0) 
	{
		firstvalue = form.elements[2].value
		form.elements[1].value = formatvalue(( firstvalue - 32) / 1.8, form.rsize);
		return
	}
}
function convertform(form){
    var firstvalue = 0;
    for (var i = 1; i <= form.count; i++) {
       // Find first non-blank entry
       if (form.elements[i].value != null && form.elements[i].value.length != 0) {
          if (i == 1 && form.elements[2].value != "") return false;
          firstvalue = form.elements[i].value / form.elements[i].factor;
          break;
       }
    }
    if (firstvalue == 0) {
       clearform(form);
       return false;
    }
    for (var i = 1; i <= form.count; i++)
       form.elements[i].value = formatvalue((firstvalue * form.elements[i].factor), form.rsize);
    return true;
}
function formatvalue(input, rsize) {
   var invalid = "**************************";
   var nines = "999999999999999999999999";
   var strin = "" + input;
   var fltin = parseFloat(strin);
   if (strin.length <= rsize) return strin;
   if (strin.indexOf("e") != -1 ||
       fltin > parseFloat(nines.substring(0,rsize)+".4"))
      return invalid.substring(0, rsize);
   var rounded = "" + (fltin + (fltin - parseFloat(strin.substring(0, rsize))));
   return rounded.substring(0, rsize);
}
function resetform(form) {
    clearform(form);
    form[1].value = 1;
    convertform(form);
    return true;
}
function clearform(form) {
    for (var i = 1; i <= form.count; i++) form[i].value = "";
    return true;
}

// factors must convert the first item to the current item.
// Be sure to use the correct form index. The first form is
// always index "0" and remaining forms are numbered in the
// order they appear in the document.

window.onload =function () {
	
	//coal---------------------------------------------------------//
	document.forms[1].count = 4;  // number of unit types
	document.forms[1].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[1].val1.factor = 1;            // st to st.
	document.forms[1].val2.factor = 19622000;  // st to b.
	document.forms[1].val3.factor = 20702.30594;  // st to mmj.
	document.forms[1].val4.factor = 0.9071847;  // st to metric ton.
	
	//electricity--------------------------------------------------//
	document.forms[2].count = 4;  // number of unit types
	document.forms[2].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[2].val1.factor = 1;            // kwh to kwh.
	document.forms[2].val2.factor = 3412;  // kwh to b.
	document.forms[2].val3.factor = 3.59985055;  // kwh to mmj.
	document.forms[2].val4.factor = 0.859810;  // kwh to mmcal.
	
	//natural gas-------------------------------------------------//
	document.forms[3].count = 4;  // number of unit types
	document.forms[3].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[3].val1.factor = 1;            // cf to cf.
	document.forms[3].val2.factor = 1028;  // cf to b.
	document.forms[3].val3.factor = 1.08459741;  // cf to mmj.
	document.forms[3].val4.factor = 0.028317;  // cf to mmj.
	
	//crude oil---------------------------------------------------//
	document.forms[4].count = 4;  // number of unit types
	document.forms[4].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[4].val1.factor = 1;            // bbl to bbl.
	document.forms[4].val2.factor = 5800000;  // bbl to b.
	document.forms[4].val3.factor = 6119.323945;  // bbl to mmj.
	document.forms[4].val4.factor = 158.9868;  // bbl to metric ton. to liters 0.1363698350

	
	//gasoline---------------------------------------------------//
	document.forms[5].count = 4;  // number of unit types
	document.forms[5].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[5].val1.factor = 1;            // g to g.
	document.forms[5].val2.factor = 120476.19;  // g to b.
	document.forms[5].val3.factor = 127.109109;  // g to mmj.
	document.forms[5].val4.factor = 3.7854;  // g to j. (NOTE to liters)
	
	//diesel and heating oil-------------------------------------//
	document.forms[6].count = 4;  // number of unit types
	document.forms[6].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[6].val1.factor = 1;            // g to g.
	document.forms[6].val2.factor = 137380.952;  // g to b.
	document.forms[6].val3.factor = 144.944577;  // g to mmj.
	document.forms[6].val4.factor = 3.7854;  // g to metric ton.(NOTE to liters)
	//food--------------------------------------------------//
	document.forms[7].count = 4;  // number of unit types
	document.forms[7].rsize = 10;  // Rounding size, use same as SIZE
	document.forms[7].val1.factor = 1;            // kcal to kcal or 1000 cal
	document.forms[7].val2.factor = 3.968321;  // kcal to b.
	document.forms[7].val3.factor = 0.004187;  // kcal to mmj.
	document.forms[7].val4.factor = 0.001163;  // kcal to kwh.
}
// -->