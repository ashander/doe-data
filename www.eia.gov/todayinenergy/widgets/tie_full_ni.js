function HttpRequest1(url){
var pageRequest1 = false //variable to hold ajax object

if (!pageRequest1 && typeof XMLHttpRequest != 'undefined')
   pageRequest1 = new XMLHttpRequest()

if (pageRequest1){ //if pageRequest is not false
   pageRequest1.open('GET', url, false) //get page synchronously 
   pageRequest1.send(null)
   embedpage(pageRequest1)
   }
}

function embedpage(request1){
//if viewing page offline or the document was successfully retrieved online (status code=200)
if (window.location.href.indexOf("http")==-1 || request1.status==200)
   document.write(request1.responseText)
}

HttpRequest1("http://www.eia.gov/todayinenergy/widgets/ris2.cfm") //include "external.htm" onto current page