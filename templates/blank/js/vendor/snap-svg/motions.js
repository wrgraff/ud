// Snap
var sites = Snap("#sites");
var sitesCircle = sites.circle(70, 70, 30);
sitesCircle.attr({
    fill: "transparent",
    stroke: "#231F20",
    strokeWidth: 5
});
Snap.load("/images/ico/arrow.svg", function (f) {
    var sitesarrow1 = f.select("g");
    sites.append(sitesarrow1);
	sitesarrow1.attr({ transform: 't0, 92, r-45'});
	sitesarrow1.animate({ 'transform' : 't15, 78, r-45' },300);
});
Snap.load("/images/ico/arrow_sr.svg", function (f) {
    var sitesarrow2 = f.select("g");
    sites.append(sitesarrow2);
    sitesarrow2.attr({ transform: 't15, 27, r25', opacity: 0});
	
	$('#sites_link').mouseenter(function (){
		sitesarrow2.animate({ transform: 't30, 35, r25',opacity: 1 },300);
	});
	$('#sites_link').mouseleave(function (){
		sitesarrow2.animate({ transform: 't15, 27, r25', opacity: 0 },300);
	});
});
Snap.load("/images/ico/arrow_sr.svg", function (f) {
    var sitesarrow3 = f.select("g");
    sites.append(sitesarrow3);
    sitesarrow3.attr({ transform: 't53, 0, r87', opacity: 0});

	$('#sites_link').mouseenter(function (){
		sitesarrow3.animate({ transform: 't55, 15, r87',opacity: 1 },300);
	});
	$('#sites_link').mouseleave(function (){
		sitesarrow3.animate({ transform: 't53, 0, r87', opacity: 0 },300);
	});
});

var support = Snap("#support");
var supportCircle = support.circle(70, 70, 30);
supportCircle.attr({
    fill: "transparent",
    stroke: "#231F20",
    strokeWidth: 5
});
Snap.load("/images/ico/arrow.svg", function (f) {
    var supportarrow1 = f.select("g");
    support.append(supportarrow1);
	supportarrow1.attr({ transform: 't33, 57, r-45'});
	supportarrow1.animate({ 'transform' : 't48, 42, r-45' },300);
});
var supportStroke = support.line(50, 116, 90, 116);
supportStroke.attr({
    stroke: "#0B3FD1",
    strokeWidth: 5
});
Snap.load("/images/ico/arrow_r.svg", function (f) {
    var supportarrow2 = f.select("g");
    support.append(supportarrow2);
    supportarrow2.attr({ transform: 't35, 99', opacity: 0});
	
	$('#support_link').mouseenter(function (){
		supportarrow2.animate({ transform: 't50, 99',opacity: 1 },300);
	});
	$('#support_link').mouseleave(function (){
		supportarrow2.animate({ transform: 't35, 99', opacity: 0 },300);
	});
});
Snap.load("/images/ico/arrow_sr.svg", function (f) {
    var supportarrow3 = f.select("g");
    support.append(supportarrow3);
    supportarrow3.attr({ transform: 't27, 53, r-80', opacity: 0});

	$('#support_link').mouseenter(function (){
		supportarrow3.animate({ transform: 't30, 38, r-80',opacity: 1 },300);
	});
	$('#support_link').mouseleave(function (){
		supportarrow3.animate({ transform: 't27, 53, r-80', opacity: 0 },300);
	});
});

var boost = Snap("#boost");
var boostCircle = boost.circle(70, 70, 30);
boostCircle.attr({
    fill: "transparent",
    stroke: "#231F20",
    strokeWidth: 5
});
var boostInnerCircle = boost.circle(55, 70, 9);
boostInnerCircle.attr({
    fill: "#FF5555",
    opacity: 0
});
$('#boost_link').mouseenter(function (){
	boostInnerCircle.animate({ transform: 't15, 0', opacity: 1 },300);
});
$('#boost_link').mouseleave(function (){
	boostInnerCircle.animate({ transform: 't0, 0', opacity: 0 },300);
});
Snap.load("/images/ico/arrow.svg", function (f) {
    var boostarrow1 = f.select("g");
    boost.append(boostarrow1);
	boostarrow1.attr({ transform: 't25, 106'});
	boostarrow1.animate({ 'transform' : 't40, 106' },300);
});
Snap.load("/images/ico/arrow_sr.svg", function (f) {
    var boostarrow3 = f.select("g");
    boost.append(boostarrow3);
    boostarrow3.attr({ transform: 't55, 62', opacity: 0});

	$('#boost_link').mouseenter(function (){
		boostarrow3.animate({ transform: 't70, 62',opacity: 1 },300);
	});
	$('#boost_link').mouseleave(function (){
		boostarrow3.animate({ transform: 't55, 62', opacity: 0 },300);
	});
});

var brand = Snap("#brand");
var brandCircle = brand.circle(70, 70, 30);
brandCircle.attr({
    fill: "transparent",
    stroke: "#231F20",
    strokeWidth: 5
});
var brandInnerCircle = brand.circle(70, 70, 9);
brandInnerCircle.attr({
    fill: "#0B3FD1"
});
var brandStroke = brand.line(55, 15, 85, 15);
brandStroke.attr({
    stroke: "#FF5555",
    strokeWidth: 5,
    opacity: 0
});
$('#brand_link').mouseenter(function (){
	brandStroke.animate({ transform: 't0, 15',opacity: 1 },300);
});
$('#brand_link').mouseleave(function (){
	brandStroke.animate({ transform: 't0, 0',opacity: 0 },300);
});
Snap.load("/images/ico/arrow_r.svg", function (f) {
    var brandarrow3 = f.select("g");
    brand.append(brandarrow3);
    brandarrow3.attr({ transform: 't40, 77', opacity: 0});

	$('#brand_link').mouseenter(function (){
		brandarrow3.animate({ transform: 't55, 77',opacity: 1 },300);
	});
	$('#brand_link').mouseleave(function (){
		brandarrow3.animate({ transform: 't40, 77', opacity: 0 },300);
	});
});