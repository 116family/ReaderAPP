$(function(){
	var box=$('.box')[0];
	var tophead=$('li',box)[0];
	var top_item=$('ol',tophead);
	var xian=$('.xian',tophead)[0];
	console.log(xian)
	var contentbox=$('li')[1];
	var botcontent=$('ol',contentbox);
	Array.from(top_item).forEach(function(val,index){
		var bw=3.04*index+'rem';
		console.log(bw)
		val.onmouseenter=function(){   
			for(var i=0;i<top_item.length;i++){
				botcontent[i].style.zIndex=2;
			}
			botcontent[index].style.zIndex=10;
			xian.style.left=bw;
		}
	})
})
