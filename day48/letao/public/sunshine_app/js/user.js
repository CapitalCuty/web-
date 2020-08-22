var userInfo = ''; //初始化，用于保存用户信息

// 在DOM加载之前，判断用户是否登陆 ，若未登录，则跳转到登陆页面
$.ajax({
    url: '/user/queryUserMessage',
    type: 'get',
    //  同步
    async: false,
    success: function(res) {
        console.log(res);
        // 判断用户未登录
        if (res.error && res.error == 400) {
            location.href = './login.html'
        }
        userInfo = res
    }
})


$(function() {
    // 退出登录
    $('#logout').on('tap', function() {
        mui.confirm('是否要退出', function(type) {
            if (type.index == 1) {
                $.ajax({
                    url: '/user/logout',
                    type: 'get',
                    success: function(res) {
                        if (res.success) {
                            mui.alert('退出登录成功，即将跳转到首页')
                            setTimeout(function() {
                                location.href = './index.html'
                            }, 1000)
                        }
                    }
                })
            } else {
                return false
            }
        })

    })


    //  修改用户信息
    $('.telNum').html('手机号:' + userInfo.mobile)
    $('.accountNum').html('账号:' + userInfo.username)

})