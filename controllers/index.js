// dummy click event.  Add your own!
function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
}

function showmenu(e){
	// have to set the current width of the "main" view before moving it so it doesn't get sweezed
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:300,
		duration:100
	});
}

function hidemenu(e){
	// have to set the current width of the "main" view before moving it so it doesn't get sweezed
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:0,
		duration:100
	});
}

// This bit listens to the orientation change and re-establishes the width of the "main" view, allowing the layout to survive after oriantation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

$.index.open();
