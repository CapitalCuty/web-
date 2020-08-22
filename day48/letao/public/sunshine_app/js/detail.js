$(function() {
    // 获取地址栏中的id
    var idArr = location.search.substring(1).split('=');
    var id = idArr[1];

    // 请求获取数据
    $.ajax({
        url: '/product/queryProductDetail',
        type: 'get',
        data: {
            id: id
        },
        success: function(res) {
            var size = res.size.split('-')
            var smallSize = Number(size[0])
            var bigSize = Number(size[1])
            res.sizeArr = [];
            for (var i = smallSize; i <= bigSize; i++) {
                res.sizeArr.push(i)
            }
            var contentHtml = template('detailTmp', res);
            console.log(contentHtml)
            $('.contantBox').html(contentHtml)
        }
    })
})