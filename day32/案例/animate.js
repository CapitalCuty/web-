

		function animate(obj, target, time) {
			console.log('move')
			
			if(obj.timerId) {
				 
				clearInterval(obj.timerId)
			}
	//往当前对象身上挂载一个timerId	 
	          obj.timerId= setInterval(function () {
				var steps = (target - obj.offsetLeft) / 10; // (300-277=23/10===2.3)

				steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps)


				if (obj.offsetLeft == target) {
					obj.style.left = target + 'px';
					clearInterval(obj.timerId)  //清除的自己身上的timerId
				
				}

				obj.style.left = obj.offsetLeft + steps + 'px' //这就是动画 

			}, time)
		}


	