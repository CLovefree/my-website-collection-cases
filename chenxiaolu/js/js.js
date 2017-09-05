jQuery(document).ready(function($) {
	
$('#page3 .box>div').hover(function() {
	var txt=$(this).text();
	console.log(txt);
	$('#page3 .intro').text('txt')
}, function() {
	
});
});