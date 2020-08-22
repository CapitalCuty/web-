// 当页面的DOM结构加载完成之后，执行回调函数中的代码
$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // 获取一级分类的数据
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(res) {
            console.log(res);
            // 使用模板引擎
            var leftHtml = template('leftTmp', res)
            $('.links').html(leftHtml);
            var id = res.rows[0].id;
            // 调用获取二级分类数据的函数
            getSecondData(id);
        },
        error: function(err) {
            console.log(err)
        }
    });


    // 获取二级分类的数据
    // 1、一级分类添加点击事件  （事件代理）
    // 2、在事件处理函数中获取ID
    // 3、调用二级分类的接口获取对应的数据
    // 4、将数据展示到对应页面的位置
    // 5、如果接口中没有数据，要在页面上显示暂无数据


    // 移动端只有轻敲事件  tap  相当于点击
    $('.links').on('tap', 'a', function() {
        // 获取到当前的id
        var id = $(this).attr('data-id');
        // 当前高亮,兄弟不高亮
        $(this).css({
            'backgroundColor': '#f5f5f5',
            'borderRight': '1 px solid transparent'
        }).siblings().css({
            'backgroundColor': '#fff',
            'borderRight': '1 px solid #e0e0e0'
        })

        // 调用获取二级分类数据的函数
        getSecondData(id)
    })

    // 将获取二级分类的数据封装成一个函数
    function getSecondData(id) {
        $.ajax({
            url: '/category/querySecondCategory',
            type: 'get',
            data: {
                id: id
            },
            success: function(res) {
                console.log(res);
                // 如果数据库没有数据就显示‘客观请稍等,新品马上上架’
                if (res.rows.length > 0) {
                    var rightHtml = template('rightTmp', res);
                    $('.brand_list').html(rightHtml)
                } else {
                    $('.brand_list').html('客观请稍等,新品马上上架')
                }
            }
        })
    }
})