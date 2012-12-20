// dummy click event.  Add your own!
function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
}

// handles the "Like button"
function likeunlike(e){
	// change like/unlike image, based on the current image
	if (e.source.image==="/likebtn.png"){
		e.source.image="/likebtnOn.png"
	}else{
		e.source.image="/likebtn.png"
	}
}

// shows or hide the menu
var menuOpen = false;
function showhidemenu(e){
	var moveTo=0;
	!menuOpen && (moveTo="300dp");
	
	// have to set the current width of the "main" view before moving it so it doesn't get squeezed
	// try commenting out the following line and setting the "newLeft" to 200 instead of 
	// 300 to see what I mean
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:moveTo,
		duration:100
	});
}

// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

$.index.open();
