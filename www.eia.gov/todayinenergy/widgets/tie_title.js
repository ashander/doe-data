function HttpRequest3(url){
var pageRequest3 = false //variable to hold ajax object

if (!pageRequest3 && typeof XMLHttpRequest != 'undefined')
   pageRequest3 = new XMLHttpRequest()

if (pageRequest3){ //if pageRequest is not false
   pageRequest3.open('GET', url, false) //get page synchronously 
   pageRequest3.send(null)
   embedpage(pageRequest3)
   }
}

function embedpage(request3){
//if viewing page offline or the document was successfully retrieved online (status code=200)
if (window.location.href.indexOf("http")==-1 || request3.status==200)
   document.write(request3.responseText)
}

HttpRequest3("http://www.eia.gov/todayinenergy/widgets/ris3.cfm") //include "external.htm" onto current page