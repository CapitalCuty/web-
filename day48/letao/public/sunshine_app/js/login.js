$(function() {
    // 1、绑定轻敲事件
    // 2、获取input框中的值
    // 3、判断不能为空
    // 4、发送ajax请求  成功或跳转到个人中心   失败给出提示
    // 5、无论成功失败都要清空输入框的值



    $('#loginBtn').on('tap', function() {
        var username = $('.username').val().trim();
        var password = $('.password').val().trim();

        if (!username) {
            mui.alert('请输入用户名')
            return
        }
        if (!password) {
            mui.alert('请输入密码')
            return
        }

        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            beforeSend: function() {
                $('#loginBtn').html('正在登陆中')
            },
            success: function(res) {
                console.log(res);
                // 判断用户名是否存在
                if (res.success) {
                    mui.alert('登陆成功');
                    $('#loginBtn').html('登陆成功')
                    setTimeout(function() {
                        location.href = './user.html'
                    }, 2000)
                } else {
                    $('#loginBtn').html('登录');
                    mui.alert(res.message);
                }
            },
            complete: function() {
                username = $('.username').val('')
                password = $('.password').val('')
            }
        })
    })
})