function animate(obj, target, time) {
    if (obj.timeId) {
        clearInterval(obj.timeId)
    }
    obj.timeId = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (target == obj.offsetLeft) {
            obj.offsetLeft = target + "px";
            clearInterval(obj.timeId);
            return
        }
        obj.style.left = step + obj.offsetLeft + "px"
    }, time)
}