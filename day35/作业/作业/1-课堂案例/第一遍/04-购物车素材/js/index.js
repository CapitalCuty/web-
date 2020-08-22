$(function () {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $('.checkall').change(function () {
        var flag = $(this).prop('checked')
        $('.j-checkbox').prop('checked', flag)
        $(this).prop('checked', flag)
        if (flag) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }


        getSum()

    })

    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true)
        } else {
            $('.checkall').prop('checked', false)
        }
        var flag = $(this).prop('checked');
        if (flag) {
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }


        getSum()

    })


    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $('.increment').click(function () {
        var num = $(this).siblings('.itxt').val();
        num++;

        $(this).siblings('.itxt').val(num)

        //当前商品的价格 
        var price = $(this).parents(".p-num").siblings('.p-price').text();

        var myprice = price.substr(1);
        console.log(myprice);
        //当前商品小计价格   toFixed(2) 表示保留2个小数
        var singlePrice = (myprice * num).toFixed(2)

        $(this).parents('.p-num').siblings('.p-sum').html('￥' + singlePrice)
        getSum()
    })

    //4 减少商品功能实现 

    $('.decrement').click(function () {


        var decnum = $(this).siblings('.itxt').val();
        if (decnum == 1) {
            return false;
        }
        decnum--;

        $(this).siblings('.itxt').val(decnum);

        //当前商品的价格 
        var price = $(this).parents(".p-num").siblings('.p-price').text();

        var myprice = price.substr(1);
        console.log(myprice);
        //当前商品小计价格   toFixed(2) 表示保留2个小数
        var singlePrice = (myprice * decnum).toFixed(2)

        $(this).parents('.p-num').siblings('.p-sum').html('￥' + singlePrice)
        getSum()
    })


    //  5. 用户修改文本框的值 计算 小计模块

    $('.itxt').change(function () {
        var newVal = $(this).val();

        var price = $(this).parents(".p-num").siblings('.p-price').text();

        var myprice = price.substr(1);
        console.log(myprice);
        //当前商品小计价格   toFixed(2) 表示保留2个小数
        var singlePrice = (myprice * newVal).toFixed(2)

        $(this).parents('.p-num').siblings('.p-sum').html('￥' + singlePrice)
        getSum()
    })



    getSum()
    //6 求总和 
    function getSum() {
        var count = 0; //商品总数量 
        var money = 0; // 商品总价
        // 判断哪些被选中了 
        $('.cart-item').each(function (i, ele) {
            // console.log($(this))
            var flag = $(this).hasClass('check-cart-item');
            // console.log(flag)
            if (flag) {
                count += parseInt($(this).find('.itxt').val())
                var total = parseFloat($(this).find('.p-sum').text().substr(1))
                money += total
            }
        })

        $('.amount-sum em').html(count);
        $('.price-sum em').html('￥' + money.toFixed(2))


    }


    // 7. 删除商品模块
    // (1) 商品后面的删除按钮
    $('.p-action a').click(function () {
        var flag = window.confirm('是否要删除')
        if (flag) {
            $(this).parents('.cart-item').remove();
            getSum()
        }

    })

    // (2) 删除选中的商品

    $('.remove-batch').click(function () {
        var flag = window.confirm('是否要删除')
        if (flag) {
            $('.j-checkbox:checked').parents('.cart-item').remove()
            getSum()
        }

    })

    // (3) 清空购物车 删除全部商品

    $('.clear-all').click(function () {
        $(".cart-item").remove();
        getSum()
        // console.log($('.cart-item-list').children());

        if ($('.cart-item-list').children().length == 0) {
            $('.cart-floatbar').hide(500)
        } else {
            $('.cart-floatbar').show(500)
        }

  
    })


})