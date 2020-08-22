$(function() {
    //顶部下载app的二级菜单
    $('.xzapp').hover(function() {
        $('.erwei').stop().slideDown(200)
    }, function() {
        $('.erwei').stop().slideUp(200)
    })


    //左边导航栏的子菜单
    $('.left_subnav>ul>li').hover(function() {
        var index = $(this).index();
        $('.submenu>.item').eq(index).css({
            'display': 'block'
        }).siblings().css({
            'display': 'none'
        })
    }, function() {
        $('.submenu>.item').css({
            'display': 'none'
        })
    })


    //中心轮播图
    var myIndex = 0;
    var count = 0;
    var circleNum = 0;
    //获取box的宽度
    var boxWidth = $('.right_banner').outerWidth()

    //动态添加小圆点的个数       
    var lis = $('.right_banner>ul>li')
    $(lis).each(function(index, ele) {
        $('.right_banner>ol').append($(`<li></li>`))
    });
    //第一个小圆点高亮
    $('.right_banner>ol>li').eq(0).addClass('current')

    // 一  鼠标移入时箭头显示，移出时箭头隐藏
    $('.right_banner').hover(function() {
        // $('.arrow').show()

        //关闭定时器
        clearInterval(timer)
    }, function() {
        // $('.arrow').hide()

        //开启定时器
        timer = setInterval(function() {
            $('.right_arrow').click()
        }, 2000)
    })

    //  二  点击小圆点 当前小圆点高亮 并且图片滚动
    $('.right_banner>ol>li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        //给每个小圆点动态生成自定义属性
        myIndex = $(this).index()
        count = myIndex;
        circleNum = myIndex;
        var leftWidth = -myIndex * boxWidth;
        $('.right_banner>ul').animate({
                left: leftWidth
            }, 300)
            // //对应的li显示，其余隐藏
            // $('.right_banner>ul>li').eq(myIndex).css({ 'display': 'block' }).siblings().css({ 'display': 'none' })
    })

    //  三  点击左右键图片滚动
    //无缝滚动  克隆第一张到ul的最后面
    var newCloneLi = $('.right_banner>ul>li').eq(0).clone();
    $('.right_banner>ul').append(newCloneLi)
    $('.right_arrow').click(function() {
        var leng = $('.right_banner>ul>li').length
        if (count == leng - 1) {
            count = 0;
            $('.right_banner>ul').css({
                left: 0
            })
        }
        count++;
        var leftWidth = -count * boxWidth;
        $('.right_banner>ul').animate({
            left: leftWidth
        }, 500)


        circleNum++;
        if (circleNum == leng - 1) {
            circleNum = 0;
        }
        $('.right_banner>ol>li').eq(circleNum).addClass('current').siblings().removeClass('current');

    })
    $('.left_arrow').click(function() {
        var leng = $('.right_banner>ul>li').length
            //轮播图跟随
        if (count == 0) {
            count = leng - 1;
            $('.right_banner>ul').css({
                left: -count * boxWidth
            })
        }
        count--;
        var leftWidth = -count * boxWidth;
        $('.right_banner>ul').animate({
            left: leftWidth
        }, 500)

        //小圆点跟随
        if (circleNum == 0) {
            circleNum = leng - 1;
        }
        circleNum--;
        $('.right_banner>ol>li').eq(circleNum).addClass('current').siblings().removeClass('current');

    })

    //  四  轮播图自己滚动
    var timer = setInterval(function() {
        $('.right_arrow').click()
    }, 2000)




    // 小米闪购的轮播滚动
    var myIndex1 = 0;
    var count1 = 0;
    var circleNum1 = 0;
    //获取box的宽度
    var boxWidth1 = $('.gilt_right').outerWidth()

    // //动态添加小圆点的个数       
    // var lis = $('.gilt_right .ulbox')
    // $(lis).each(function(index, ele) {
    //     $('.gilt_right>ol').append($(`<li></li>`))
    // });
    // //第一个小圆点高亮
    // $('.gilt_right>ol>li').eq(0).addClass('current')

    // 一  鼠标移入时箭头显示，移出时箭头隐藏
    $('.gilt_right').hover(function() {
        // $('.arrow').show()

        //关闭定时器
        clearInterval(timer)
    }, function() {
        // $('.arrow').hide()

        //开启定时器
        timer = setInterval(function() {
            $('.scroll_arrow_r').click()
        }, 2000)
    })

    //  二  点击小圆点 当前小圆点高亮 并且图片滚动
    // $('.gilt_right>ol>li').click(function() {
    //     $(this).addClass('current').siblings().removeClass('current');
    //     //给每个小圆点动态生成自定义属性
    //     myIndex1 = $(this).index()
    //     count1 = myIndex1;
    //     circleNum1 = myIndex1;
    //     var leftWidth = -myIndex1 * boxWidth;
    //     $('.right_banner>ul').animate({
    //             left: leftWidth
    //         }, 300)
    //         // //对应的li显示，其余隐藏
    //         // $('.right_banner>ul>li').eq(myIndex).css({ 'display': 'block' }).siblings().css({ 'display': 'none' })
    // })

    //  三  点击左右键图片滚动
    //无缝滚动  克隆第一张到ul的最后面
    var newCloneLi = $('.gilt_right .ulbox').eq(0).clone();
    $('.gilt_right .scroll').append(newCloneLi)
    $('.scroll_arrow_r').click(function() {
        var leng = $('.gilt_right .ulbox').length
        if (count1 == leng - 1) {
            count1 = 0;
            $('.gilt_right .scroll').css({
                left: 0
            })
        }
        count1++;
        var leftWidth = -count1 * boxWidth1;
        $('.gilt_right .scroll').animate({
            left: leftWidth
        }, 500)


        // circleNum1++;
        // if (circleNum1 == leng - 1) {
        //     circleNum1 = 0;
        // }
        // $('.right_banner>ol>li').eq(circleNum1).addClass('current').siblings().removeClass('current');

    })
    $('.scroll_arrow_l').click(function() {
        var leng = $('.gilt_right .ulbox').length
            //轮播图跟随
        if (count1 == 0) {
            count1 = leng - 1;
            $('.gilt_right .scroll').css({
                left: -count1 * boxWidth
            })
        }
        count1--;
        var leftWidth = -count1 * boxWidth;
        $('.gilt_right .scroll').animate({
            left: leftWidth
        }, 500)

        // //小圆点跟随
        // if (circleNum1 == 0) {
        //     circleNum1 = leng - 1;
        // }
        // circleNum1--;
        // $('.right_banner>ol>li').eq(circleNum1).addClass('current').siblings().removeClass('current');

    })

    //  四  轮播图自己滚动
    var timer = setInterval(function() {
        $('.scroll_arrow_r').click()
    }, 3000)



    //倒计时
    function comingSingDay() {
        var nowDate = +new Date(); //当前时间
        var singDate = +new Date('2020-8-5 00:00:00'); //目标时间
        var resultDate = (singDate - nowDate) / 1000; //时间差
        if (resultDate == 0) {
            clearInterval(timeId)
        } else {
            var d = Math.floor(resultDate / 60 / 60 / 24) //天数
            var h = Math.floor(resultDate / 60 / 60 % 24) //小时
            var m = Math.floor(resultDate / 60 % 60) // 分钟
            var s = Math.floor(resultDate % 60) //秒
            h = h < 10 ? '0' + h : h
            m = m < 10 ? '0' + m : m
            s = s < 10 ? '0' + s : s
            $('.hour').text(h);
            $('.minute').text(m);
            $('.second').text(s);
        }
    }
    comingSingDay()
    var timeId = setInterval(comingSingDay, 1000)

})