$(window).load(function(){
	$(".header").fadeTo(500, 1);
	$(".main").delay(300).fadeTo(500, 1);
});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(event){
	if (isScrolledIntoView($("#more"))){
		$('#more').delay(300).fadeTo(500, 1);
	}
	if (isScrolledIntoView($("#more2"))){
		$('#more2').delay(300).fadeTo(500, 1);
	}
	if (isScrolledIntoView($("#footer"))){
		$('#footer').delay(300).fadeTo(500, 1);
	}
});
