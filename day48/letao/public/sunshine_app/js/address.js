$(function() {
    var address = ''; //用于存储收货地址

    // 获取用户存储的收货地址
    $.ajax({
        url: '/address/queryAddress',
        type: 'get',
        success: function(res) {
            address = res;
            var obj = {
                data: res
            }
            console.log(obj)
            var addressHtml = template('addressTmp', obj)
            $('.addresssUl').html(addressHtml)
        }
    })

    // id 字段id
    // address 三级联动地址
    // addressDetail 详细地址
    // recipients 收货人
    // postcode 邮编


    // 删除收货信息
    $('.addresssUl').on('tap', '.deleteBtn', function() {
        var id = $(this).attr('data-id');
        mui.confirm('确认要删除吗？', function(type) {
            if (type.index == 1) {
                $.ajax({
                    url: '/address/deleteAddress',
                    type: 'post',
                    data: {
                        id: id
                    },
                    success: function(res) {
                        console.log(res)
                        location.reload()
                    }
                })
            }
        })
    })



    // 修改收货信息
    // 1、给修改按钮绑定点击事件
    // 2、跳转到收获地址修改页面，并且将修改的数据传递到这个也页面
    // 3、将数据展示再页面
    // 4、给确定按钮绑定点击事件
    // 5、调用接口  执行编辑操作
    // 6、跳转回收货地址列表页面
    $('.addresssUl').on('tap', '.editBtn', function() {

        var id = $(this).attr('data-id');
        for (var i = 0; i < address.length; i++) {
            if (address[i].id == id) {
                localStorage.setItem('editAddress', JSON.stringify(address[i]))
                break;
            }
        }
        location.href = './addAddress.html?isEdit=1'
    })

})