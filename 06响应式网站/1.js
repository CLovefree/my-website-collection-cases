window.onload=function(){
	var oOl=document.getElementsByTagName('ol')[0];
	var aBtn=oOl.getElementsByTagName('li');
	var oDiv=document.getElementById('banner-full');
	var aBox=oDiv.getElementsByTagName('article');
	var aMenu=document.getElementById('menu');
	var aMenuBtn=document.getElementsByClassName('menu')[0];

	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].className="";
				aBox[i].style.display="none";
				startMove(aBox[i],{opacity:0});
			}
			this.className="active";
			startMove(aBox[this.index],{opacity:100});
			aBox[this.index].style.display='block';
		}
	}

	aMenuBtn.onclick=function(){
		if (aMenu.style.block) {
			aMenu.style.display="none";
		}else{
			aMenu.style.display="block";
		}
		
	}

}
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//这一次运动就结束了――所有的值都到达了
		for(var attr in json)
		{
			//1.取当前的值
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.算速度
			var iSpeed=(json[attr]-iCur)/20;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.检测停止
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}