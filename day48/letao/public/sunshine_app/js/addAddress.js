$(function() {

    // 判断是添加收货地址，还是修改收获地址
    // 获取地址栏中的参数(地址，要获取的参数名称)
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
    var isEdit = Number(getParamsByUrl(location.href, 'isEdit'));
    // isEdit为1则为真为修改操作，为0则为假为添加操作
    if (isEdit) {
        // 修改操作
        // 修改收货地址
        if (localStorage.getItem('editAddress')) {
            // 获取到本地的缓存的地址
            var address = JSON.parse(localStorage.getItem('editAddress'))
            var addressHtml = template('addressTmp', address)
            $('.addressBox').html(addressHtml)
        }
    } else {
        // 添加操作
        var addressHtml = template('addressTmp', {})
        $('.addressBox').html(addressHtml)
    }




    // 省市区三级联动
    // 1、初始化部分
    // 2、传递省市区数据
    // 3、省市区选择器

    // 初始化popPicker组件
    var picker = new mui.PopPicker({
        layer: 3
    });
    // 给picker对象添加数据
    picker.setData(cityData);
    // 显示piker
    $('#province').on('tap', function() {
        picker.show(function(selectItems) {
            console.log(selectItems)
            var val = selectItems[0].text + selectItems[1].text + selectItems[2].text;
            $('#province').val(val)
        })
    })



    // 添加收货地址、修改收货地址
    $('#addAddress').on('tap', function() {
        var addressName = $('#addressName').val().trim()
        var postcode = $('#postcode').val().trim()
        var province = $('#province').val().trim()
        var addressDetail = $('#addressDetail').val().trim()

        if (!addressName) {
            mui.alert('请输入收货人姓名')
        }
        if (!postcode) {
            mui.alert('请输入邮编')
        }
        if (!province) {
            mui.alert('请选择省市区')
        }
        if (!addressDetail) {
            mui.alert('请输入详细地址')
        }


        var data = {
            recipients: addressName,
            postcode: postcode,
            address: province,
            addressDetail: addressDetail
        }
        if (isEdit) {
            // 修改操作
            var url = '/address/updateAddress';
            data.id = address.id; //修改比添加要多传一个id值
        } else {
            // 添加操作
            var url = '/address/addAddress'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: data,
            success: function(res) {
                if (res.success) {
                    if (isEdit) {
                        mui.alert('地址修改成功')
                    } else {
                        mui.alert('地址添加成功')
                    }
                    setTimeout(function() {
                        location.href = './address.html'
                    }, 2000)
                } else {
                    mui.alert(res.message)
                }
            },
            complete: function() {
                addressName = $('#addressName').val('')
                postcode = $('#postcode').val('')
                province = $('#province').val('')
                addressDetail = $('#addressDetail').val('')
            }
        })

    })



})