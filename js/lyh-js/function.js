// 'use strict';


// 获取样式的兼容性函数
// obj 哪一个对象  attr 获取的样式

function getStyle(obj,attr){
	if(obj.currentStyle){
		return  obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

//***************************************************************
// 获取或者设置某一元素中的内容
//函数名 getText
//obj 哪一个对象  con 设置的内容 

function getText(obj,con){
	if(con==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
			obj.innerText=con;
		}else{
			obj.textContent=con;
		}
	}
}



//************************************************************************************
//获取元素的兼容性函数

//select  筛选什么类型的元素    obj  
//select  '.box'  '#aa'  'span ' 'li'
//函数的名称$


function $(select,obj=document){	
	if(typeof select==='string'){  //判断传入的字符串是否为字符串
		select=select.trim();   //去除字符串两端的空格
		if(select.charAt(0)==='.'){  //判断传入的字符串是否为类名
			return obj.getElementsByClassName(select.substring(1));  //返回相应对象中类名为select.substring(1)截取的字符串
		}else if((select.charAt(0)==='#')){ //判断传入的字符串是否为id
			return obj.getElementById(select.slice(1));
		}else if(/^[a-z|1-6]{1,10}/.test(select)){  //判断传入的字符串是否为标签名     //正则表达式 以a-z字母开头，有1-6的数字，数量1-10
			return obj.getElementsByTagName(select);
		}
	}else if(typeof select==='function'){  //判断select是否为函数
		window.onload=function(){
			select(); 
		}
	}
}


