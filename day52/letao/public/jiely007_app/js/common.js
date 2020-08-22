$(function(){
		// 跳转页面
		mui('body').on('tap','a',function(){

			mui.openWindow({url: this.href})
	
		});
	
})