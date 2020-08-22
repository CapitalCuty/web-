$(function() {

    // 获取验证码
    $('#getCode').on('tap', function() {
        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function(res) {
                getCode = res.vCode
                $('#vCode').val(getCode)
            }
        })
    })


    // 给注册按钮绑定点击事件
    $('#registerBtn').on('tap', function() {
        // 获取到每个输入框的值
        var username = $('#username').val().trim()
        var mobile = $('#mobile').val().trim()
        var password = $('#password').val().trim()
        var verifyPwd = $('#verifyPwd').val().trim()
        var vCode = $('#vCode').val().trim()


        // 判断每个输入框的值
        if (!username) {
            mui.alert('用户名不能为空！')
            return
        }
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile))) {
            mui.alert("手机号码格式有误，请重填");
            return
        }
        if (!(/^[0-9]{6,16}$/.test(password))) {
            mui.alert("密码格式有误，请重填");
            return
        }
        if (!verifyPwd) {
            mui.alert("确认密码不能为空");
            return
        }
        if (verifyPwd != password) {
            mui.alert("密码确认有误，请重填");
            return
        }
        if (!vCode) {
            mui.alert("验证码输入有误，请重填");
            return
        }

        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            beforeSend: function() {
                $('#registerBtn').html('正在注册中...')
            },
            success: function(res) {
                console.log(res)
                if (res.success) {
                    mui.alert('注册成功');
                    setTimeout(function() {
                        location.href = './login.html'
                    }, 2000)
                } else {
                    mui.alert('注册失败');
                }
            },
            complete: function() {
                username = $('#username').val('')
                mobile = $('#mobile').val('')
                password = $('#password').val('')
                verifyPwd = $('#verifyPwd').val('')
                vCode = $('#vCode').val('')
            }
        })
    })
})