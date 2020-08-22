$(function() {
    // 医院的下拉菜单
    $('.sel').hover(function() {
        $('.sel-abs').fadeIn()
    }, function() {
        $('.sel-abs').fadeOut()
    })



    //tab栏切换
    //医院/科室切换
    $('.tab>.title>span').mouseover(function() {
        //当前高亮,兄弟不高亮
        $(this).css({
            'backgroundColor': '#3CC4F1',
            'color': 'white'
        }).siblings().css({
            'backgroundColor': '#F4F6FA',
            'color': '#3CC4F1'
        })
        var index = $(this).index();
        $('.details').eq(index).show()
            .siblings().hide()

    })

    //当前第一个高亮
    $('.tab>.title>span').eq(0).css({
        'backgroundColor': '#3CC4F1',
        'color': 'white'
    }).siblings().css({
        'color': '#3CC4F1'
    })

    // 医院里面的区切换
    $('.tab-list li').mouseover(function() {
        //当前高亮,兄弟不高亮
        $(this).css({
            'backgroundColor': '#3CC4F1',
            'color': 'white'
        }).siblings().css({
            'backgroundColor': 'white',
            'color': 'black'
        })
        var index = $(this).index();
        $('.tab-con>.item').eq(index).show()
            .siblings().hide()
    })

    //当前第一个高亮
    $('.tab-list li').eq(0).css({
        'backgroundColor': '#3CC4F1',
        'color': 'white'
    }).siblings().css({
        'color': 'black'
    })




    // 导航条的清单里面的二级菜单
    //鼠标移入
    $('.nav-menu li').mouseover(function() {
        //当前高亮,兄弟不高亮
        $(this).css({
            'border': '1px solid white',
        }).siblings().css({
            'border': '1px solid transparent',
        })

        var index = $(this).index();
        $('.lunbotu-link-abs .lunbotu-link-abs-left').eq(index).css({
            'display': 'block',
        }).siblings().css({
            'display': 'none'
        })
    });
    // 鼠标移出
    $('.nav-menu li').mouseout(function() {
        //当前高亮,兄弟不高亮
        $(this).css({
            'border': '1px solid transparent',
        })

        $('.lunbotu-link-abs>.lunbotu-link-abs-left').css({
            'display': 'none'
        })
    })


})


//轮播图
var count = 0;
var circleNum = 0;
var box = document.querySelector(".box")
var boxWidth = box.offsetWidth
var ul = document.querySelector(".box>ul")
var ol = document.querySelector(".box>ol")
var ul_lis = ul.children;
//动态添加小圆点的个数
for (var i = 0; i < ul_lis.length; i++) {
    var li = document.createElement("li")
        // li.innerHTML = i + 1;
    ol.appendChild(li)
}
//第一个小圆点高亮
// ol.children[0].className = "current";
ol.children[0].style.backgroundColor = "#47A7ED";


// 一  鼠标移入时箭头显示，移出时箭头隐藏
var arrow = document.querySelector(".arrow");
box.addEventListener('mouseover', function() {
    arrow.style.display = "block";
})
box.addEventListener('mouseout', function() {
    arrow.style.display = "none";
})



//  二  点击小圆点 当前小圆点高亮 并且图片滚动
var ol_lis = ol.children;
for (var i = 0; i < ol_lis.length; i++) {
    var li = ol_lis[i];
    //自定义一个属性
    li.setAttribute('index', i);
    li.onclick = function() {
        for (j = 0; j < ol_lis.length; j++) {
            var li = ol_lis[j];
            // li.className = ""
            li.style.backgroundColor = "#ccc"
        }
        // this.className = "current";
        this.style.backgroundColor = "#47A7ED"

        var myIndex = this.getAttribute('index')
        count = myIndex;
        circleNum = myIndex;
        animate(ul, -myIndex * boxWidth, 30)

    }
}

//小圆点高亮的函数
function getCircle(num) {
    for (i = 0; i < ol_lis.length; i++) {
        var li = ol_lis[i];
        // li.className = "";
        li.style.backgroundColor = ""
    }
    // ol.children[num].className = "current";
    ol.children[num].style.backgroundColor = "#47A7ED"
}


//  三  点击左右键图片滚动
//无缝滚动
var newLi = ul.children[0].cloneNode(true);
ul.appendChild(newLi);
//右箭头
var right = document.querySelector(".right")
right.onclick = function() {
    var len = ul.children.length
    if (count == len - 1) {
        count = 0
        ul.style.left = 0;
    }
    count++;
    animate(ul, -count * boxWidth, 30);

    circleNum++;
    if (circleNum == len - 1) {
        circleNum = 0;
    }
    getCircle(circleNum);

};
//左箭头
var left = document.querySelector(".left")
left.onclick = function() {
    var len = ul.children.length
    if (count == 0) {
        count = len - 1;
        ul.style.left = -count * boxWidth + "px";
    }
    count--;
    animate(ul, -count * boxWidth, 30);


    if (circleNum == 0) {
        circleNum = len - 1;
    }
    circleNum--;
    getCircle(circleNum);

};


//  四  轮播图自己滚动
var timer = setInterval(function() {
    right.onclick();
}, 2000)



//  五  鼠标移入时停止滚动  移出时开启定时器
box.addEventListener('mouseover', function() {
    clearInterval(timer);
})
box.addEventListener('mouseout', function() {
    timer = setInterval(function() {
        right.onclick();
    }, 2000)
})