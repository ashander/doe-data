require({
	'baseUrl' : '/state/compare'
}, [
	'js/comparePage',
	'queryRouter'
],
	function(ComparePage, QueryRouter){
		var queryRouter = new QueryRouter(ComparePage);	
	}
);