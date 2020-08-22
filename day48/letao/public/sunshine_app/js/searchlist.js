$(function() {
    // 根据用户输入的关键字搜索结果
    // 1、获取到地址栏中用户输入的搜索关键字
    // 2、用关键字去调用搜索接口
    // 3、将搜索结果展示在页面中


    // 获取到地址栏中用户输入的搜索关键字
    var keywords = getParamsByUrl(location.href, 'keywords')

    var page = 1;
    var pageSize = 3;
    var price = 1; //初始化价格按升序
    var num = 1; //初始化产品销量按升序
    var This = ''; //初始化  用来保存pullfresh_function执行的this
    var productHtml = ''; //用于初始定义产品内容


    // 初始化下拉刷新
    var refreshContainer = document.querySelector('#refreshContainer')
    mui.init({
        pullRefresh: {
            container: refreshContainer, //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50, //可选.默认50.触发上拉加载拖动距离
                auto: true, //可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });

    function pullfresh_function() {
        if (!This) {
            This = this; //这里的This指的是mui
        }

        // 调用搜索商品的接口
        $.ajax({
            url: '/product/queryProduct',
            type: 'get',
            data: {
                price: price,
                num: num,
                page: page++,
                pageSize: pageSize,
                // proName: keywords
            },
            success: function(res) {
                console.log(res)
                console.log(res.data)
                if (res.data.length > 0) {
                    productHtml += template('searchTmp', res)
                    $('.productBox').html(productHtml);
                    //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
                    //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
                    This.endPullupToRefresh(false);
                } else {
                    This.endPullupToRefresh(true);
                }
            }
        })
    }


    // 按价格排序
    $('.price').on('tap', function() {
        pageSize = $('.productBox').children().length
        price = price == 1 ? 2 : 1
        productHtml = '';
        page = 1;
        pullfresh_function()

        //pullup-container为在mui.init方法中配置的pullRefresh节点中的container参数；
        //注意：refresh()中需传入true
        mui('#refreshContainer').pullRefresh().refresh(true);
    })

    // 按销量排序
    $('.sale').on('tap', function() {
        pageSize = $('.productBox').children().length
        num = num == 1 ? 2 : 1
        productHtml = '';
        page = 1;
        pullfresh_function()

        //pullup-container为在mui.init方法中配置的pullRefresh节点中的container参数；
        //注意：refresh()中需传入true
        mui('#refreshContainer').pullRefresh().refresh(true);
    })



    // 获取地址栏中的参数(地址字符串，要获取的参数名称)
    function getParamsByUrl(url, name) {
        var params = url.substr(url.indexOf('?') + 1);
        var param = params.split('&')
        for (var i = 0; i < param.length; i++) {
            var current = param[i].split('=')
            if (current[0] == name) {
                return current[1]
            } else {
                return null;
            }
        }
    }


    // 给立即购买按钮绑定点击事件
    $('.productBox').on('tap', '.buyBtn', function() {
        var id = $(this).attr('data-id');
        location.href = './detail.html?id=' + id;
    })
})