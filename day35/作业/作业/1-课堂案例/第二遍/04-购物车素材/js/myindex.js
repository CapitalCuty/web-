$(function() {
    // 1  全选 功能
    // 2 单选功能
    // 3 加号功能 商品数量加1 同时计算价格
    // 4 减号功能  商品数量减1 同时计算价格
    // 5 单个商品删除
    // 6 全部商品删除(无这个功能)
    // 7 商品的总价格 总数量的计算
    // 8 清空以选中的商品
    // 9 清空所有的商品(清空购物车)


    // 1  全选功能
    //给全选按钮绑定点击事件
    $('.checkall').change(function() {
        //全选按钮的状态
        var flagAll = $(this).prop('checked');
        //单选按钮的状态等于全选按钮的状态
        $('.j-checkbox').prop('checked', flagAll);
        //判断如果全选按钮选中,则单选按钮的整个盒子高亮
        if (flagAll) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }

        getSum()
    })


    // 2 单选功能
    $('.j-checkbox').change(function() {
        //获取当前单选按钮的个数
        var inp_len = $('.j-checkbox').length;
        var inp_check_len = $('.j-checkbox:checked').length;
        if (inp_len == inp_check_len) {
            $('.checkall').prop('checked', true)
        } else {
            $('.checkall').prop('checked', false)
        }

        //点击单选按钮 当前高亮
        var flag = $(this).prop('checked')
        if (flag) {
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }


        getSum()
    })


    // 3 加号功能 商品数量加1 同时计算价格
    $('.increment').click(function() {
        //获取到当前数量
        var getVal = $(this).siblings('.itxt').val();
        //每点击一次  数量加一次
        getVal++;
        //重新将加后的数量赋值
        $(this).siblings('.itxt').val(getVal);
        //获取商品的单价
        var getPrice = $(this).parents('.p-num').siblings('.p-price').text();
        //截取掉钱的符号
        getPrice = getPrice.substr(1);
        //计算小计
        var getPriceAll = (getPrice * getVal).toFixed(2);
        //获取小计,将计算后的小计赋值进去
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + getPriceAll);

        getSum()
    })


    // 4 减号功能 商品数量减1  同时计算价格
    $('.decrement').click(function() {
        //获取到当前数量
        var getVal = $(this).siblings('.itxt').val();
        //判断当数量等于1是就不能在减少了
        if (getVal == 1) {
            alert('不能在减少啦！')
            return false
        }
        //每点击一次  数量减一次
        getVal--;
        //重新将加后的数量赋值
        $(this).siblings('.itxt').val(getVal);
        //获取商品的单价
        var getPrice = $(this).parents('.p-num').siblings('.p-price').text();
        //截取掉钱的符号
        getPrice = getPrice.substr(1);
        //计算小计
        var getPriceAll = (getPrice * getVal).toFixed(2);
        //获取小计,将计算后的小计赋值进去
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + getPriceAll);

        getSum()
    })


    // 5 单个商品删除
    $('.p-action').click(function() {
        flag = window.confirm('确定要删除吗？')
        if (flag) {
            $(this).parent().remove()
            getSum()
        }
    })


    // 7 商品的总价格 总数量的计算
    function getSum() {
        var count = 0; //初始化  商品的数量位0
        var totlePrice = 0; //初始化   商品的总价为0
        $('.j-checkbox:checked').each(function(index, ele) {
            //获取到选中商品的小计  并且去掉人名币符号
            var singlsPrice = parseFloat($(this).parent('.p-checkbox').siblings('.p-sum').text().substr(1)); //
            totlePrice += singlsPrice;
            //获取到选中商品的数量  
            var singlsCount = parseInt($(this).parent('.p-checkbox').siblings('.p-num').find('.itxt').val())
            count += singlsCount;

        })

        //把最后的商品价格和数量重新赋值
        $('.price-sum em').text('￥' + totlePrice.toFixed(2));
        $('.amount-sum em').text(count);
    }


    // 8 清空以选中的商品
    $('.remove-batch').click(function() {
        var flag = window.confirm('确定要删除吗？');
        if (flag) {
            $('.j-checkbox:checked').parents('.cart-item').remove();
            getSum()
        }
    })



    // 9 清空所有的商品(清空购物车)
    $('.clear-all').click(function() {
        $('.cart-warp').empty()
    })
})