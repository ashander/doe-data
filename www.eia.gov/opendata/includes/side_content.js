$(function() {

    // Create tab group --------------------------------------------------------------
    $( "#tabs" ).tabs().removeClass('ui-corner-all');
    // Create accordion --------------------------------------------------------------
    $( "#accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
		active: 0
    });

	var FACETS_LIST_OBJECT = {};  // container for facets -----------------------
	var FACET_OBJECT = {
		search_term  : null,
		search_value : null,
		data_set     : null,
		geo          : null,
		frequency    : null,
		units        : null,
		last_updated : null
    };
	$.getJSON('//api.eia.gov/facets.php', function(data) {
		FACETS_LIST_OBJECT = data;
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$(".hidden_search").show("fast");
		$("#search_results ul").append("<li class='result error' style='padding-left:1em;'>No facet records found.</li>");
	});

	function load_facets(result) {
		var count;
		var series_id;
		var series_label;
		var option = "<option value='' disabled selected>Data set</option>";

		$("#selectfilter0 optgroup").empty();
		$("#selectfilter0 optgroup").append(option);

		for(var i=0; i<result.facet_counts.facet_fields.data_set.length; i++) {
		  if (i % 2 === 0) {
			var c = i + 1;
			series_id = result.facet_counts.facet_fields.data_set[i];
			for(var j=0; j<FACETS_LIST_OBJECT.facets.datasets.length; j++) {
			  if(series_id == FACETS_LIST_OBJECT.facets.datasets[j].abr) {
				series_label = FACETS_LIST_OBJECT.facets.datasets[j].desc;
			  }
			}

			count = result.facet_counts.facet_fields.data_set[c];
			var option ="<option value='" + series_id + "'>" + series_label + " - " + count + "</option>";
			$("#selectfilter0 optgroup").append(option);
		  }
		}

		series_label = null;
		option       = null;
		option       = "<option value='' disabled selected>Geography</option>";

		$("#selectfilter1 optgroup").empty();
		$("#selectfilter1 optgroup").append(option);

		for(var i=0; i<result.facet_counts.facet_fields.region.length; i++) {
		  if (i % 2 === 0) {
			var c = i+1;
			series_id = result.facet_counts.facet_fields.region[i];
			for(var j=0; j<FACETS_LIST_OBJECT.facets.geo.length; j++) {
			  if(series_id == FACETS_LIST_OBJECT.facets.geo[j].abr) {
				series_label = FACETS_LIST_OBJECT.facets.geo[j].desc;
			  }
			}

			count      = result.facet_counts.facet_fields.region[c];
			series_id  = encodeURIComponent(series_id);
			var option = "<option value='" + series_id + "'>" + series_label + " - " + count + "</option>";

			$("#selectfilter1 optgroup").append(option);
		  }
		}

		series_label = null;
		option       = null;
		option       = "<option value='' disabled selected>Frequency</option>";

		$("#selectfilter2 optgroup").empty();
		$("#selectfilter2 optgroup").append(option);

		for(var i=0; i<result.facet_counts.facet_fields.frequency.length; i++) {
		  if (i % 2 === 0) {
			var c = i+1;
			series_id = result.facet_counts.facet_fields.frequency[i];
			for(var j=0; j<FACETS_LIST_OBJECT.facets.frequency.length; j++) {
			  if(series_id == FACETS_LIST_OBJECT.facets.frequency[j].abr) {
				series_label = FACETS_LIST_OBJECT.facets.frequency[j].desc;
			  }
			}

			count      = result.facet_counts.facet_fields.frequency[c];
			var option ="<option value='" + series_id + "'>" + series_label + " - " + count + "</option>";
			$("#selectfilter2 optgroup").append(option);
		  }
		}

		option = null;
		option = "<option value='' disabled selected>Units</option>";

		$("#selectfilter3 optgroup").empty();
		$("#selectfilter3 optgroup").append(option);

		for(var i=0; i<result.facet_counts.facet_fields.units.length; i++) {
		  if (i % 2 === 0) {
			var c = i+1;
			series_id = result.facet_counts.facet_fields.units[i];
			count = result.facet_counts.facet_fields.units[c];
			var option ="<option value='" + series_id + "'>" + series_id + " - " + count + "</option>";
			$("#selectfilter3 optgroup").append(option);
		  }
		}

		option = null;
		option = "<option value='' disabled selected>Last updated</option>";

		$("#selectfilter4 optgroup").empty();
		$("#selectfilter4 optgroup").append(option);

		for(var i=0; i<result.facet_counts.facet_fields.last_updated.length; i++) {
		  if (i % 2 === 0) {
			var c = i+1;
			series_id = result.facet_counts.facet_fields.last_updated[i];
			count = result.facet_counts.facet_fields.last_updated[c];
			var option ="<option value='" + series_id + "'>" + series_id + " - " + count + "</option>";
			$("#selectfilter4 optgroup").append(option);
		  }
		}
	}

	function search_results(result) {
		var docs = result.response.docs;

		$("#search_results ul").empty();
		$("#record_count").text("0 results");
		$("#end").text("0");

		if(result=="No data") {
		  $(".hidden_search").show("fast");
		  $("#search_results ul").append("<li class='result error'>No search term</li>");

		  $("#selectfilter0 optgroup").empty();
		  $("#selectfilter1 optgroup").empty();
		  $("#selectfilter2 optgroup").empty();
		  $("#selectfilter3 optgroup").empty();
		  $("#selectfilter4 optgroup").empty();

		  $('#nextBtn').prop('disabled', true);
		  $('#backBtn').prop('disabled', true);

		  return;
		}

		if(result.response.docs.length>0) {
		  var numFound = parseInt(result.response.numFound);
		  var end = 1;
		  var page_num = parseInt($('#page_index').text()) + 1;
		  if(numFound>99) {
			end = Math.ceil(parseInt(result.response.numFound)/100);
		  }

		  $("#record_count").text(result.response.numFound + " results");
		  $('#end').text(end);

		  if(numFound>100 && page_num<end) {
			$('#nextBtn').prop('disabled', false);
		  } else {
			$('#nextBtn').prop('disabled', true);
		  }

		  $('#queryBtn4').prop('disabled', false);
		  $('#resetBtn').prop('disabled', false);

		  for(var i=0; i<result.response.docs.length; i++) {
			var series_id = result.response.docs[i].series_id;
			var name      = result.response.docs[i].name;
			var units     = result.response.docs[i].units;
			var frequency = null;

			if(result.response.docs[i].frequency == "A") {
			  frequency = "Annual";
			} else if(result.response.docs[i].frequency=="M") {
			  frequency = "Monthly";
			} else if(result.response.docs[i].frequency=="Q") {
			  frequency = "Quarterly";
			} else if(result.response.docs[i].frequency=="W") {
			  frequency = "Weekly";
			} else if(result.response.docs[i].frequency=="D") {
			  frequency = "Daily";
			} else if(result.response.docs[i].frequency=="H") {
			  frequency = "Hourly";
			} else if(result.response.docs[i].frequency=="4") {
			  frequency = "4 week average";
			} else {
			  frequency = result.response.docs[i].frequency;
			}

			$("#search_results ul").append("<li class='result'><a href='qb.cfm?sdid=" + series_id + "'><b>" + name + "</b> <br>" + units + " / " + frequency + "</a></li>");
		  }

		  $("#search_results ul").scrollTop(0);

		  //load facet filter options into facet select options -------------------
		  load_facets(result);
		  // end ------------------------------------------------------------------

		  $("#selectfilter0").val(FACET_OBJECT["data_set"]).prop('selected', true);
		  $("#selectfilter1").val(FACET_OBJECT["geo"]).prop('selected', true);
		  $("#selectfilter2").val(FACET_OBJECT["frequency"]).prop('selected', true);
		  $("#selectfilter3").val(FACET_OBJECT["units"]).prop('selected', true);
		  $("#selectfilter4").val(FACET_OBJECT["last_updated"]).prop('selected', true);

		  $(".hidden_search").show("fast");
		  $("#search_results ul").scrollTop(0);


		} else {

		  $("#search_results ul").append("<li class='result error' style='padding-left:1em;'>No records found</li>");
		  $("#search_results ul").scrollTop(0);

		  $(".hidden_search").show("fast");
		  $('#queryBtn4').prop('disabled', true);
		  $('#resetBtn').prop('disabled', true);
		  $('#end').text('1');
		}
	}

	// SEARCH FUNCTIONS ---------------------------------------------------------------------------------------------------------
	function search_data(search_term, search_type, page_num, facets, FACET_OBJECT) {
		if(FACET_OBJECT["search_value"]) {
			var facet_vars = "";
			var search_term = FACET_OBJECT["search_term"];
			var search_value = FACET_OBJECT["search_value"];

			if(!page_num) {
				page_num=0;
			}

			if(FACET_OBJECT["data_set"]) {
				facet_vars = facet_vars + "&data_set=" + FACET_OBJECT["data_set"];
			}

			if(FACET_OBJECT["frequency"]) {
				facet_vars = facet_vars + "&frequency=" + FACET_OBJECT["frequency"];
			}

			if(FACET_OBJECT["geo"]) {
				facet_vars = facet_vars + "&region=" + FACET_OBJECT["geo"];
			}

			if(FACET_OBJECT["units"]) {
				facet_vars = facet_vars + "&units=" + FACET_OBJECT["units"];
			}

			if(FACET_OBJECT["last_updated"]) {
				facet_vars = facet_vars + "&last_updated=" + FACET_OBJECT["last_updated"];
			}

			$.getJSON('//api.eia.gov/search/?search_term=' + search_term + '&search_value=%22' + search_value + '%22&rows_per_page=100&page_num=' + page_num + facet_vars, function(data) {
				var search_array   = [];
				var ordered_search = [];

				for(var i = 0; data.response.docs.length>i; i++) {
					search_array.push(data.response.docs[i].name);
				}
				search_array.sort();

				for(var i=0; search_array.length>i; i++) {
					for(var j=0; data.response.docs.length>j; j++) {
						if(search_array[i] == data.response.docs[j].name) {
							ordered_search.push(data.response.docs[j]);
						}
					}
				}

				data.response.docs = ordered_search;
				data.responseHeader.facets = facets;  // boolean

			}).success(function(data) {
				search_results(data);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				$(".hidden_search").show("fast");
				$("#search_results ul").empty();
				$("#search_results ul").append("<li class='result error' style='padding-left:1em;'>No records found</li>");
			});
		} else {
			$(".hidden_search").show("fast");
			$("#search_results ul").empty();
			$("#search_results ul").append("<li class='result error' style='padding-left:1em;'>No records found</li>");
		}
	}

	function submit_search() {
		var search_val = $("#search_text").val();
		var search_type = "name";
		var page_num = 0;
		var facets = false;

		if(search_val.length>0) {
		  $('#start').text("1");
		  $('#page_index').text("0");

		  if($('#search_type1').is(':checked')) { search_type = "name"; }
		  if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		  FACET_OBJECT["search_term"]  = search_type;
		  FACET_OBJECT["search_value"] = search_val;
		  FACET_OBJECT["data_set"]     = null;
		  FACET_OBJECT["geo"]          = null;
		  FACET_OBJECT["frequency"]    = null;
		  FACET_OBJECT["units"]        = null;
		  FACET_OBJECT["last_updated"] = null;

		  search_data(search_val, search_type, page_num, facets, FACET_OBJECT);

		} else {
		  $(".hidden_search").show("fast");
		  $("#search_results ul").empty();
		  $("#search_results ul").append("<li class='result error'>No search term</li>");
		}
	}

	$(".searchBtn").on("click", function() {
		$("#accordion").accordion({active: 0});

		run_search();

	});

	function run_search() {
		var search_val = $("#search_text").val();
		var search_type = "name";
		var page_num = 0;
		var facets = false;

		if(search_val.length>0) {
		  $('#start').text("1");
		  $('#page_index').text("0");

		  if($('#search_type1').is(':checked')) { search_type = "name"; }
		  if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		  FACET_OBJECT["search_term"]  = search_type;
		  FACET_OBJECT["search_value"] = search_val;
		  FACET_OBJECT["data_set"]     = null;
		  FACET_OBJECT["geo"]          = null;
		  FACET_OBJECT["frequency"]    = null;
		  FACET_OBJECT["units"]        = null;
		  FACET_OBJECT["last_updated"] = null;

		  search_data(search_val, search_type, page_num, facets, FACET_OBJECT);

		} else {
		  $(".hidden_search").show("fast");
		  $("#search_results ul").empty();
		  $("#search_results ul").append("<li class='result error' style='padding-left:1em;'>No records found</li>");
		}
	}

	$("#search_text").keypress(function(e) {
		if(e.which == 13) {
			$("#accordion").accordion({active: 0});
			run_search();
		}
	});

	// new code -----------------------------------------------------------
  	$('#selectfilter0').on('change', function() {
		var search_val = $("#search_text").val();
		var search_val2 = $('#selectfilter0').val();
		var search_type = "name";
		var page_num = 0;
		var facets = false;

		$('#start').text("1");
		$('#page_index').text("0");

		if($('#search_type1').is(':checked')) { search_type = "name"; }
		if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		FACET_OBJECT["search_term"] = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["data_set"] = search_val2;

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});
	$("#selectfilter1").on("change", function() {
		var search_val = $("#search_text").val();
		var search_val2 = $("#selectfilter1").val();
		var search_type = "name";
		var page_num = 0;
		var facets = false;

		$("#start").text("1");
		$("#page_index").text("0");

		if($("#search_type1").is(":checked")) { search_type = "name"; }
		if($("#search_type2").is(":checked")) { search_type = "series_id"; }

		FACET_OBJECT["search_term"] = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["geo"] = search_val2;

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});
	$("#selectfilter2").on("change", function() {
		var search_val  = $("#search_text").val();
		var search_val2 = $("#selectfilter2").val();
		var search_type = "name";
		var page_num    = 0;
		var facets      = false;

		$("#start").text("1");
		$("#page_index").text("0");

		if($('#search_type1').is(':checked')) { search_type = "name"; }
		if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		FACET_OBJECT["search_term"]  = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["frequency"]    = search_val2;

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});
	$("#selectfilter3").on("change", function() {
		var search_val  = $("#search_text").val();
		var search_val2 = $("#selectfilter3").val();
		var search_type = "name";
		var page_num    = 0;
		var facets      = false;

		$("#start").text("1");
		$("#page_index").text("0");

		if($('#search_type1').is(':checked')) { search_type = "name"; }
		if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		FACET_OBJECT["search_term"]  = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["units"]        = search_val2;

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});
	$("#selectfilter4").on("change", function() {
		var search_val  = $("#search_text").val();
		var search_val2 = $("#selectfilter4").val();
		var search_type = "name";
		var page_num    = 0;
		var facets      = false;

		$("#start").text("1");
		$("#page_index").text("0");

		if($('#search_type1').is(':checked')) { search_type = "name"; }
		if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		FACET_OBJECT["search_term"]  = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["last_updated"] = search_val2;

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});
	$("#nextBtn").on("click", function() {
		var search_val = $("#search_text").val();
		var search_val2 = $('#selectfilter0').val();
		var search_type = "name";
		var page_num = 0;
		var facets = false;

		$("#accordion").accordion({active: 0});

		var page_num = parseInt($('#page_index').text()) + 1;
		var page_end = parseInt($('#end').text()) - 1;
		$('#start').text(page_num + 1);
		$("#page_index").text(page_num);

		if(page_num>0) { $('#backBtn').prop('disabled', false); }
		if(page_num==page_end) { $('#nextBtn').prop('disabled', true); }

		if($('#search_type1').is(':checked')) { search_type = "name"; }
		if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		FACET_OBJECT["search_term"] = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["data_set"] = search_val2;

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});
	$("#backBtn").on("click", function() {
		var search_val = $("#search_text").val();
		var search_val2 = $('#selectfilter0').val();
		var search_type = "name";
		var page_num = 0;
		var facets = false;

		$("#accordion").accordion({active: 0});

		var page_num = parseInt($('#page_index').text()) - 1;
		$('#start').text(page_num + 1);
		$("#page_index").text(page_num);

		if($('#search_type1').is(':checked')) { search_type = "name"; }
		if($('#search_type2').is(':checked')) { search_type = "series_id"; }

		FACET_OBJECT["search_term"] = search_type;
		FACET_OBJECT["search_value"] = search_val;
		FACET_OBJECT["data_set"] = search_val2;

		if(page_num>0) { $('#backBtn').prop('disabled', false); }
		if(page_num>1) { $('#backBtn').prop('disabled', false); }
		if(page_num<1) { $('#backBtn').prop('disabled', true); }

		search_data(search_val, search_type, page_num, facets, FACET_OBJECT);
	});

});
