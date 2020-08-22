$(function() {

    // 定义验证码的全局变量
    var getCode;

    function getCode() {
        $('#getCode').on('tap', function() {
            $.ajax({
                url: '/user/vCodeForUpdatePassword',
                type: 'get',
                success: function(res) {
                    getCode = res.vCode
                    mui.alert(getCode)
                    return getCode
                }
            })
        })
    }
    getCode()


    $('#modifyBtn').on('tap', function() {
        var oldPassword = $('#oldPassword').val().trim()
        var newPassword = $('#newPassword').val().trim()
        var verifyPwd = $('#verifyPwd').val().trim()
        var vCode = $('#vCode').val().trim()

        if (!oldPassword) {
            mui.alert('请输入原密码')
            return
        }
        if (!newPassword) {
            mui.alert('请输入新密码')
            return
        }
        if (verifyPwd != newPassword) {
            mui.alert('请确认新密码')
            return
        }
        if (vCode != getCode) {
            mui.alert('验证码输入有误')
            return
        }

        $.ajax({
            url: '/user/updatePassword',
            type: 'post',
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword,
                vCode: vCode
            },
            success: function(res) {
                console.log(res)
                if (res.success) {
                    mui.alert('修改密码成功，即将跳转到登录页面')
                    setTimeout(function() {
                        location.href = './login.html'
                    }, 1000)
                } else {
                    mui.alert('修改密码失败:' + res.message)
                }
            }
        })

    })
})