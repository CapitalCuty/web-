$(function () {
	var flag=true  // 表示阀开
	// 1 判断top高度     recommend 距离顶部的高度   
	// 如果 document 距离顶部的高度 大于   recommend 距离顶部的高度     那么就显示左边的小导航栏

	var recommendTop = $('.recommend').offset().top

	console.log(recommendTop)


	$(document).scroll(function () {
		console.log('cxx')
		var dTop = $(document).scrollTop()
		console.log(dTop)
		// 如果 document 距离顶部的高度(动态的) 大于   recommend 距离顶部的高度     那么就显示左边的小导航栏
		if (dTop > recommendTop) {
			//显示左边小导航栏
			$('.fixedtool').show(500)
		} else {
			//隐藏左边小导航栏
			$('.fixedtool').hide()
		}
	})






	//2 点击每个小的li 实现对应版本滚动并且当前的小li高亮
	$('.fixedtool li').click(function () {

            flag=false


			$(this).addClass('current').siblings().removeClass('current')
			var myindex = $(this).index();
			console.log(myindex)


			// 获取到对应的每个版本距离顶部的高度
			var every_floor_top = $('.floor .w').eq(myindex).offset().top;
			//    $('html,body').scrollTop(every_floor_top)
			// 放滚动条的的滚动的距离等于对应当前的版本的高度
			$('html,body').stop().animate({
				scrollTop: every_floor_top
			},function() {
				flag=true
			})


		

	})




	//3 滑动右侧滚动条  实现对应版本的内容与左边的小导航栏高亮
	$(document).scroll(function () {
		if(flag) {
			var dTop = $(document).scrollTop()
	
		$('.floor .w').each(function (index, ele) {
			var every_floor_top = $(ele).offset().top
			if (dTop >= every_floor_top) {
				$('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current')
			}
		})
			
		}

		
	})





})






