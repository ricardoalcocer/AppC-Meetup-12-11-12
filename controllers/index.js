function testclick(e){
	alert('Clicked');
}

function showmenu(e){
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:300,
		duration:100
	});
}

function hidemenu(e){
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:0,
		duration:100
	});
}

$.index.open();
