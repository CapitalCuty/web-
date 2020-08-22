$(function() {
    var arrList = [];
    $('#searchBtn').on('tap', function() {
        var getVal = $('.keyword').val().trim();
        if (!getVal) {
            alert('请输入您喜欢的产品')
            return;
        }
        // 把搜索框的数据存储到本地缓存
        arrList.push(getVal);
        localStorage.setItem('keywords', JSON.stringify(arrList));
        // 跳转页面
        window.location.href = './seachlist.html?keywords=' + getVal;
        // 清空input框的值
        $('.keyword').val('');
    })

    // 获取本地缓存里面的数据
    var storageData = JSON.parse(localStorage.getItem('keywords'));
    if (storageData) {
        arrList = storageData;
        var obj = {
            data: arrList
        }
        var searchListBoxHtml = template('histroyListTmp', obj)
        $('.searchListBox').html(searchListBoxHtml)
    }

    // 清空历史搜搜记录
    $('.clearHistory').on('tap', function() {
        var flag = window.confirm('确定清空历史记录吗？')
        if (flag) {
            localStorage.removeItem('keywords');
            $('.searchListBox').html('');
        }
    })
})