function HttpRequest(url){
var pageRequest = false //variable to hold ajax object

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

HttpRequest("http://www.eia.gov/todayinenergy/widgets/ris_200.cfm") //include "external.htm" onto current page