	$(document).ready(function () {
	  $('input[name="reset_map"]').trigger('click');
	});
	$('input[name="elec_power_plants"]').click(function() {
	  $('#elec_power_plants').toggle()
	  });
	$('input[name="elec_line"]').click(function() {
	  $('#elec_line').toggle()
	  });
	$('input[name="lng"]').click(function() {
	  $('#lng').toggle()
	  });
	$('input[name="nat_gas_hubs"]').click(function() {
	  $('#nat_gas_hubs').toggle()
	  });
	$('input[name="nat_gas_proc"]').click(function() {
	  $('#nat_gas_proc').toggle()
	  });
	$('input[name="nat_gas_pipelines"]').click(function() {
	  $('#nat_gas_pipelines').toggle()
	  });
	$('input[name="oil_imp_seaport"]').click(function() {
	  $('#oil_imp_seaport').toggle()
	  });
	$('input[name="refineries"]').click(function() {
	  $('#refineries').toggle()
	  });
	$('input[name="heating"]').click(function() {
	  $('#heating').toggle()
	  });
	  
/*-----Reset the map-------*/
	  
	$('input[name="reset_map"]').click(function() {
	  $('#elec_power_plants').show();
	  $('#elec_line').show();
	  $('#lng').show();
	  $('#nat_gas_hubs').show();
	  $('#nat_gas_proc').show();
	  $('#nat_gas_pipelines').show();
	  $('#oil_imp_seaport').show();
	  $('#refineries').show();
	  $('#heating').show();
	  
	  $('input[name="elec_power_plants"]').attr("checked","checked");
	  $('input[name="elec_line"]').attr("checked","checked");
	  $('input[name="lng"]').attr("checked","checked");
	  $('input[name="nat_gas_hubs"]').attr("checked","checked");
	  $('input[name="nat_gas_proc"]').attr("checked","checked");
	  $('input[name="nat_gas_pipelines"]').attr("checked","checked");
	  $('input[name="oil_imp_seaport"]').attr("checked","checked");
	  $('input[name="refineries"]').attr("checked","checked");
	  $('input[name="heating"]').attr("checked","checked");
	});
	
/*-----Turn off all layers in the map-------*/	  
	  
	$('input[name="uncheck_all"]').click(function() {
	  $('#elec_power_plants').hide();
	  $('#elec_line').hide();
	  $('#lng').hide();
	  $('#nat_gas_hubs').hide();
	  $('#nat_gas_proc').hide();
	  $('#nat_gas_pipelines').hide();
	  $('#oil_imp_seaport').hide();
	  $('#refineries').hide();
	  $('#heating').hide();
	  
	  $('input[name="elec_power_plants"]').removeAttr("checked");
	  $('input[name="elec_line"]').removeAttr("checked");
	  $('input[name="lng"]').removeAttr("checked");
	  $('input[name="nat_gas_hubs"]').removeAttr("checked");
	  $('input[name="nat_gas_proc"]').removeAttr("checked");
	  $('input[name="nat_gas_pipelines"]').removeAttr("checked");
	  $('input[name="oil_imp_seaport"]').removeAttr("checked");
	  $('input[name="refineries"]').removeAttr("checked");
	  $('input[name="heating"]').removeAttr("checked");
	});