var qtyMin = 1;
var qtyMax = 10;
$('.qty-up').click(function() {
	var num = +$(this).parent().find('input').val() + 1;
	if (qtyMax >= num) {
		$(this).parent().find('input').val(num);
	}
});
$('.qty-down').click(function() {
	var num = +$(this).parent().find('input').val() - 1;
	if (qtyMin <= num) {
		$(this).parent().find('input').val(num);
	}
});