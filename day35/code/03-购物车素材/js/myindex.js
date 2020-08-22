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




    // 1  全选 功能
    //  1.1 找到全选按钮   
    //  1.2 获取的当前的状态   状态的改变采用 change事件
    //  1.3 把当前全选的状态赋值给所有的单选按钮的状态
    $('.checkall').change(function() { //  1.1 找到全选按钮 
        var flagAll = $(this).prop('checked') // 1.2 获取的当前的状态  
        $('.j-checkbox').prop('checked', flagAll) //  1.3 把当前全选的状态赋值给所有的单选按钮的状态

        if (flagAll) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }
    })





    // 2 单选功能
    //2.1 找到所有的单选
    //2.2 绑定change事件
    //2.3  绑定页面上所有的单选的个数 等不等于 单选选中的个数  如果相等就全选就相等 不相等全选不选中

    $('.j-checkbox').change(function() {
        var s_c_leg = $('.j-checkbox').length //单选按钮了的个数
        var checked_length = $('.j-checkbox:checked').length //单选按钮选中的个数
        if (s_c_leg === checked_length) {
            $('.checkall').prop('checked', true)
        } else {
            $('.checkall').prop('checked', false)
        }
        // 单个选中 高亮
        var flag = $(this).prop('checked')
        if (flag) {
            $(this).parent().parent().addClass('check-cart-item')
        } else {
            $(this).parent().parent().removeClass('check-cart-item')
        };
        // 调用价格计算的函数
        sumPrice()
    })



    // 3 加号功能 商品数量加1 同时计算价格
    //3.1 increment  
    //3.2 点击的时候
    //3.3 当前输入框的值加+1 
    //3.4 同时动态计算商品的价格
    $('.increment').click(function() {
        // 获取输入框的值
        var getVal = $(this).siblings('.itxt').val()
        getVal++;
        //重新把加之后的值赋给输入框
        $(this).siblings('.itxt').val(getVal)
            // 动态单个商品的总价格
        var priceVal = $(this).parent().parent().siblings('.p-price').text()
        priceVal = priceVal.substr(1)
        console.log(priceVal);
        //    toFixed(数字表示保留几位小数)
        var single_price_total = (priceVal * getVal).toFixed(2)
        $(this).parent().parent().siblings('.p-sum').text('￥' + single_price_total);
        // 调用价格计算的函数
        sumPrice()
    })





    // 4 减号功能 商品数量加1 同时计算价格
    //4.1 decrement  
    //4.2 点击的时候
    //4.3 当前输入框的值加-1 
    //4.4 同时动态计算商品的价格
    $('.decrement').click(function() {
        // 获取输入框的值
        var getVal = $(this).siblings('.itxt').val()
        if (getVal == 1) {
            alert('不能再减少了')
            return false
        }
        getVal--;
        //重新把加之后的值赋给输入框
        $(this).siblings('.itxt').val(getVal)
        var priceVal = $(this).parents('.p-num').siblings('.p-price').text()
        priceVal = priceVal.substr(1)
        console.log(priceVal);
        //toFixed(数字表示保留几位小数)
        var single_price_total = (priceVal * getVal).toFixed(2)
        $(this).parent().parent().siblings('.p-sum').text('￥' + single_price_total);
        // 调用价格计算的函数
        sumPrice()
    })


    // 5 单个商品删除
    $('.p-action').click(function() {
        var flag = window.confirm('确定要删除吗1')
        if (flag) {
            $(this).parent().remove()
        }
        // 调用价格计算的函数
        sumPrice()
    })




    // 8 清空以选中的商品  
    $('.remove-batch').click(function() {
        var flag = window.confirm('确定要删除吗2')
        if (flag) {
            $('.j-checkbox:checked').parents('.cart-item').remove();
            // 调用价格计算的函数
            sumPrice()
        }
    })




    // 9 清空所有的商品(清空购物车)  clear-all
    $('.clear-all').click(function() {
        $('.cart-warp').empty()
    })


    // 7 商品的总价格 总数量的计算
    // 7.1 找到被选中的商品
    // 7.2 把所有选择商品的小计加起来
    function sumPrice() {
        var count = 0; //初始化 商品的总数量
        var totalPrice = 0; //初始化 商品的总价格
        $('.j-checkbox:checked').each(function(index, ele) { //找到选中的商品
            //选中商品的小计 顺便的前面的人民币符号去掉
            var singlePrice = parseFloat($(this).parents('.p-checkbox').siblings('.p-sum').text().substr(1));
            //选中商品数量的小计
            var singlecount = parseInt($(this).parents('.p-checkbox').siblings('.p-num').find('.itxt').val());
            // 进行商品价格计算和商品数量计算
            totalPrice += singlePrice
            count += singlecount
        });
        //  重新赋值 把最后的商品价格跟数量进行赋值
        $('.price-sum em').text('￥' + totalPrice.toFixed(2))
        $('.amount-sum em').text(count)
    }
    sumPrice();

























})