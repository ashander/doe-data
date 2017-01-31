require({
	'baseUrl' : '/state/search'
}, [
	'js/SearchPage',
	'queryRouter'
],
function(
	SearchPage,
	QueryRouter
){
	var queryRouter = new QueryRouter(SearchPage);
});