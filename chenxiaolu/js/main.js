$(function(){
	// page2遮罩层
	function shade(){
		var y=$('#page2 .container').height();
		var x=$('#page2 .container').width();

		var $shade=$("<div id='shade'></div>");
		$('#page2 .container').append($shade);
		$('#shade').css({
			"width": x+'px',
			"height": y+'px',
			"position":"absolute",
			"top":0,
			"left":0,
			"background":'#103b30',
			"opacity":"0.6"
		});
	}
	shade();
	$(window).resize(function(){
		shade();
	});
	// 滚动
	$(window).scroll(function(){
		if($(window).scrollTop() >= 30){
			$("#top-btn").fadeIn(1000); // 开始淡入
		} else{
			$("#top-btn").stop(true,true).fadeOut(1000); 
		}
		
		function navclass(){
			var page=$('.page');
			var height=$('.page-active').height();

			num=Math.ceil($(window).scrollTop()/height);
			// console.log(num);
			if (num==0) {
				$('nav li:eq(0) a').addClass('active').parent().siblings().children().removeClass('active');
			}
			if (num==1||num==2||num==3||num==4) {
				$('nav li:eq(1) a').addClass('active').parent().siblings().children().removeClass('active');
			}else if (num==5) {
				$('nav li:eq(2) a').addClass('active').parent().siblings().children().removeClass('active');
			}	
		};
		navclass();
	});	
	// page3转动
	// function rotate(){
	// 	var div=$('#page3 .box div');
	// 	var width=$('#page3 .box div').eq(1).width();
	// 	// console.log(div.length);
	// 	console.log(width);


	// 	for (var i = 0; i < div.length; i++) {

	// 		var index=$('#page3 .box div').index(div[i]);
	// 		var ry=index*40;
	// 		console.log(ry);
	// 		var tz=Math.ceil(width/2/0.364);
	// 		console.log(tz);
	// 		console.log('---');

	// 		$('#page3 .box div').eq(index).attr({
	// 			"style":"transform: 'rotateY('ry+'deg)' translateZ(tz+'px');"
	// 		});
	// 		// css("transform","rotateY("+i*40+"deg"+")")
	// 		// $('#page3 .box div').eq(index).css("transform","rotateY("+index*40+"deg"+")");
	// 		// $('#page3 .box div').eq(index).css({
	// 		// "transform": x+'px',
	// 		// "height": y+'px'
	// 		// });
	// 	}
	// }
	// rotate();
		
})