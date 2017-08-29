
// 上边选项卡
$(function(){
var lun_box1=$('.lun_box1')[0];
var dians=$('li',lun_box1);
var choose_box=$('.choose_box')[0];
var choose=$('.choose',choose_box);
	Array.from(dians).forEach(function(val,index){
		val.onmouseenter=function(){
			for(var i=0;i<choose.length;i++){
				choose[i].style.zIndex='10';
				dians[i].style.width='0.23rem';
				dians[i].style.borderRadius='50%';

			}
				choose[index].style.zIndex='30';
				dians[index].style.width='0.43rem';
				dians[index].style.borderRadius='0.12rem';

		}

	})


// 底部选项卡
	var F_lise=$('span',$('.footer')[0]);
	var change_zi=$('.change_zi1',$('.change')[0]);
	var change=$('.change')[0];
	Array.from(F_lise).forEach(function(val,index){
		val.onclick=function(){
			for(var i=0;i<change_zi.length;i++){
				change_zi[i].style.opacity='0';
				F_lise[i].style.color='#9D9D9D';
			}
			change_zi[index].style.opacity='1';
			F_lise[index].style.color=' #1D1D1D';
			if(index==1){
				change.style.height=11.96+'rem';
			}else{
				change.style.height=16+'rem';
			}
		}
	})
	// Array.from(change_zi).forEach(function(val,index){
	// 	if(index==1){
	// 		change.style.height=11.96+'rem';
	// 	}else{
	// 		change.style.height=16+'rem';
	// 	}
	// })
})