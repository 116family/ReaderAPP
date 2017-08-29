$(function(){
     
    var imgBox=$('.imgBox')[0];
    var imges=$('li',imgBox);
    var banner_dian_box=$('.btnBox')[0];
    console.log(banner_dian_box)
    var lis=$('li',banner_dian_box);
    var banner=$('.banner')[0];

    var num=0;
    function move(type='r'){  //默认向右走
        if(type=='r'){
            num++;
            if(num>=imges.length){   //num大于第四张时置零。
               num=imges.length-1;
                window.location.href='23.html';
                return;
            }
        }
            
        for(var i=0;i<imges.length;i++){
            imges[i].style.opacity=0;
            lis[i].style.backgroundColor="#fff";
            
        }   
        imges[num].style.opacity=1;  //当前的图片层级较高
        lis[num].style.backgroundColor="#D41536";
    }
    var t=setInterval(function(){
        move(); 
    },2000);

    // banner.onmouseenter=function(){
    //     clearInterval(t);
        
    // }
    // banner.onmouseleave=function(){
    //     t=setInterval(function(){
    //     move(); 
    //     },1000);
    // }
    Array.from(lis).forEach(function(val,index){
        val.onmouseenter=function(){
            num=index-1;
        move();
        }

    })

    






})