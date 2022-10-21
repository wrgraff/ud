$(document).ready(function() {
	var thumbHeight = $('.fotorama').attr('data-thumbheight');
	if (typeof thumbHeight !== typeof undefined && thumbHeight !== false) {
		$('.fotorama').attr('data-height', window.innerHeight - topbarHeight - thumbHeight);
	} else {
		$('.fotorama').attr('data-height', window.innerHeight - topbarHeight);
	}
});