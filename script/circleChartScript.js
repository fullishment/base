jQuery(document).ready(function($) {
	var $llms_circ = $('.llms-animated-circle');
	var $llms_prog_count = $('.llms-progress-circle-count');
	var $llms_circ_val = $('.progress-range');

	//$range.on('change', function(e){
	  var llms_grade_perc = 73;
	  var llms_circ_offset = 430 * llms_grade_perc / 100;
	  $llms_circ.css({
	    "stroke-dashoffset" : 430 - llms_circ_offset
	  })
	  $llms_prog_count.html(Math.round(llms_grade_perc) + "%");
	//});
});