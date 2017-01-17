$(function() {
	$(".fb").fancybox({
        'width': 900,
        'height': 560,
        'autoScale': false,
        //'transitionIn': 'none',
        //'transitionOut': 'none',
        'type': 'iframe'
    });
	$(".fb2").fancybox({
        'autoScale': true
    });
	/*$('#hide_menu').click(function(){
          $('#efmi_ui').slideToggle(500);
          return false;
       });*/
	/*$('#efmi_ui').hide();*/
	$(".hide_menu").live('click', function(e){
	  $(this).removeClass("hide_menu").addClass("show_menu");
	  $('#efmi_ui').slideToggle(700);
      return false;
	});
	$(".show_menu").live('click', function(e){
	  $(this).removeClass("show_menu").addClass("hide_menu");
	  $('#efmi_ui').slideToggle(500);
      return false;
	 });
});