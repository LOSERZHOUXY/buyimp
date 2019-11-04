/*
数组求和，参数是一个数组
*/
function sum(arr) {
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		num += arr[i];
	}
	return num;
}
/*
元素获取
第一个参数：字符串，css选择器
第二个参数：可选，字符串，css选择器
*/
function $(name,parent) {
	parent = parent || document;
	var obj = parent.querySelectorAll(name);
	return obj;
}
/*
添加事件
第一个参数：需要添加事件的对象
第二个参数：需要添加的事件，是一个字符串
第三个参数：该事件需要执行的代码
*/
function bind(obj,event,fn){
		obj['on'+event]=fn;
}
/*
封装一个for循环，循环一个数组
*/
function forEach(obj,fn){
	for(var i =0;i<obj.length;i++){
		fn(obj[i],i);
	}
}
/*
封装一个兼容获取元素的css样式的函数
*/
function getCSS(obj,attr){
	if(obj.currentStyle){
		//IE
		return obj.currentStyle[attr];
	}else{
		//Chrome
		return getComputedStyle(obj)[attr];
	}
}
//封装的一个倒计时函数
function countDown(obj) {
			var now = new Date().getTime();
			var future=new Date(obj.end).getTime()
			var sec = parseInt((future-now)/1000);
			var days =parseInt(sec/(60*60*24));
			var hours=parseInt((sec-days*(60*60*24))/(60*60));
			var minustes = parseInt((sec -(days*60*60*24)-hours*3600)/60);
			var secs = parseInt(sec -(days*60*60*24)-hours*3600 - minustes*60);  
				if (days < 10) days = "0" + days;
				if (hours < 10) hours = "0" + hours;
				if (minustes < 10) minustes = "0" + minustes;
				if (secs < 10) secs = "0" + secs;
				typeof obj.success == 'function' &&obj.success({
					days:days,
					hours:hours,
					minustes:minustes,
					secs:secs
				})	
}
//倒计时传参
/* countDown({
			end:new Date(endTime).getTime(),
			success:function(date){
				console.log(date.days+''+date.hours+date.minustes+date.secs);
			}
		}) */