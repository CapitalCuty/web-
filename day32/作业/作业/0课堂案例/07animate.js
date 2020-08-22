function animate(obj, target, time) {
    if (obj.timeId) {
        clearInterval(obj.timeId)
    }
    obj.timeId = setInterval(function() {

        //动态计算步长,使得动画缓慢运行
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        //判断到什么时候停止
        if (obj.offsetLeft == target) {
            obj.style.left = target + "px"
            clearInterval(obj.timeId)
        }
        // var step = 10;
        obj.style.left = step + obj.offsetLeft + "px";
    }, time)
}