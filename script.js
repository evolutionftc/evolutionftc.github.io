
function nukeClasses() {
	$('a').each(function (index) {$(this).removeClass('selected');});
}

function show(id) {
	nukeClasses();
	$('p').each(function (index) {$(this).addClass('invisible');});
	$('#'+id).removeClass('invisible');
	$('#a'+id).addClass('selected');
}