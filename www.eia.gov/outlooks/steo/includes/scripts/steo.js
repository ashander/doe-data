function formatNumber(number, decimalPlaces, thousandsSeperator, percent) {
	number = Math.round(number * Math.pow(10, decimalPlaces))/Math.pow(10,decimalPlaces);
	
	var numAsString = number.toString();
	var decIndex = numAsString.indexOf(".");
	if(decIndex == -1 && decimalPlaces > 0)
	{
		numAsString = numAsString + ".";
	}
	for (var j = ((decIndex == -1) ? 0 : numAsString.length - decIndex - 1); j < decimalPlaces; j++)
	{
		numAsString = numAsString + "0";
	}
	
	decIndex = numAsString.indexOf(".");
	
	if (thousandsSeperator) {		
		var arr = numAsString.split("");
		var ret = "";
		var count = 0;
		for (var i = arr.length - 1; i >= 0; i--) {
			if (i < (decIndex == -1 ? arr.length : decIndex) && arr[i] != '-') {
				if (count >= 3) {
					ret = "," + ret;
					count = 0;
				}
				ret = arr[i] + ret;
				count++;
			}
			else {
				ret = arr[i] + ret;
			}
		}
	}
	
	if(percent)
		ret = ret + "%";
		
	return ret;
	
}