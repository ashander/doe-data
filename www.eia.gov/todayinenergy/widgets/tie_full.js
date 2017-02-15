function HttpRequest(url){
var pageRequest = false //variable to hold ajax object
/*@cc_on
   @if (@_jscript_version >= 5)
      try {
      pageRequest = new ActiveXObject("Msxml2.XMLHTTP")
      }
      catch (e){
         try {
         pageRequest = new ActiveXObject("Microsoft.XMLHTTP")
         }
         catch (e2){
         pageRequest = false
         }
      }
   @end
@*/

if (!pageRequest && typeof XMLHttpRequest != 'undefined')
   pageRequest = new XMLHttpRequest()

if (pageRequest){ //if pageRequest is not false
   pageRequest.open('GET', url, false) //get page synchronously 
   pageRequest.send(null)
   embedpage(pageRequest)
   }
}

function embedpage(request){
//if viewing page offline or the document was successfully retrieved online (status code=200)
if (window.location.href.indexOf("http")==-1 || request.status==200)
   document.write(request.responseText)
}

HttpRequest("http://www.eia.gov/todayinenergy/widgets/ris.cfm") //include "external.htm" onto current page

/* OLD brokeness
var http = false;

if(navigator.appName == "Microsoft Internet Explorer") {
  http = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  http = new XMLHttpRequest();
}

http.open("GET", "http://www.eia.gov/todayinenergy/widgets/ris.cfm");
http.onreadystatechange=function() {
  if(http.readyState == 4) {
    document.write(http.responseText);
	//alert(http.responseText);
  }
}
http.send(null);
// test added 2016-09-26
*/