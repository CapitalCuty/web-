$(function() {
    var flag = true //表示阀开

    //1、判断如果document(滚动条)的高度>=recommend距离顶部的高度就显示
    //获取recommend距离顶部的高度
    var recommendTop = $('.recommend').offset().top;
    //scroll()文档的滚动事件
    $(document).scroll(function() {
        var dcTop = $(document).scrollTop();
        //判断如果document(滚动条)的高度>=recommend距离顶部的高度
        if (dcTop >= recommendTop) {
            //电梯导航栏显示
            $('.fixedtool').fadeIn(500);
        } else {
            //电梯导航栏隐藏
            $('.fixedtool').fadeOut(500);
        }
    })


    //2、点击电梯导航里面的每个li,实现对应的版本滚动    并且当前li高亮
    //给每个li绑定点击事件
    $('.fixedtool li').click(function() {

        flag = false

        $(this).addClass('current').siblings().removeClass('current');
        var myIndex = $(this).index();
        var every_w = $('.floor .w').eq(myIndex).offset().top;
        // console.log(every_w)
        $('html,body').stop().animate({
            scrollTop: every_w
        }, 500, function() {
            flag = true
        })
    })



    //3、滑动右侧的滚动条   实现对应的电梯导航里面的li高亮
    $(document).scroll(function() {
        if (flag) {
            var dcTop = $(document).scrollTop();
            $('.floor .w').each(function(index, ele) {
                var every_w = $(ele).offset().top;
                if (dcTop >= every_w) {
                    $('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current')
                }

            })
        }
    })
})