# letao 移动端项目



#  关于mui 默认阻止a标签跳转处理方案

### common.js

```
	// 跳转页面
	mui('body').on('tap','a',function(){

		mui.openWindow({url: this.href})

	});

```



### 获取验证码

```
// 获取认证码
function getCheckCode(){

	$.ajax({
		type:'get',
		url:'/user/vCode',
		success:function(result){
			alert(result.vCode)
		}
	});

```



# 分类页面 

####  初始化页面的滚动效果



```
	// 页面滚动区域
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005
			});

```

### 

### 分类页面html

```
	<!-- 头部 -->
	<header class="mui-bar mui-bar-nav  header">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<a class="mui-icon mui-icon-search  mui-pull-right"></a>
		<h1 class="mui-title">嗨淘云购分类</h1>

	</header>
	<!-- 底部导航栏 -->
	
	<nav class="mui-bar mui-bar-tab footer">
		<a class="mui-tab-item mui-active" href="#tabbar">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-chat">
			<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
			<span class="mui-tab-label">分类</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">购物车</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-map">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">会员中心</span>
		</a>
	</nav>

	<!-- 主体内容部分 -->
<div class="my-content">
		<div class="cate_list_left">
			<div class='mui-scroll-wrapper'>
				<div class="mui-scroll">

					<div id='left'></div>
				</div>
			</div>
		</div>

		<div class="cate_list_right">
			<div class='mui-scroll-wrapper'>
				<div class="mui-scroll">

					<ul id='right'></ul>
				</div>
			</div>
		</div>

	</div>
```

### 分类页面less

```
.mui-scroll-wrapper {
	top: 0px;
	bottom: 0px;

}
html {
	height: 100%;

	body {
		height: 100%;


		.my-content {
			position: absolute;
			top: 44px;
			bottom: 50px;
			width: 100%;
			background-color: #f5f5f5;


			.cate_list_left {

				width: 80px;
				float: left;
				position: relative;
				height: 100%;

				
					#left {

						line-height: 45px;
						text-align: center;

						a {
							display: block;
							width: px;
							height: 45px;
							background: #FFF;
							border-bottom: 1px solid #e0e0e0;
							border-right: 1px solid #e0e0e0;

							&.active {
								background: #f5f5f5;
								border-right: 1px solid transparent;
								color: red;
							}

						}
					}
				

			}

			.cate_list_right {
				margin-left: 90px;
				position: relative;
				height: 100%; 
				#right{
					overflow: hidden;
					background-color: #fff;
                  li {
					  float: left;
					  width: 33.33%;
					  text-align: center;
					  a {

						display: block;
						width: 100%;
						img {
                             width: 100%;
						}
						p {
  
						}
					  }
					 
				  }
				}

			}
		}
	}
}
```

### 一级分类获取js 

```
   /*
             1 第一步请求数据
             2 定义我们的模板结构
             3 调用模板template  
             4 进行数据生成
             */

	// /category/queryTopCategory

			$.ajax({
				url: '/category/queryTopCategory',
				success: function (res) {
					console.log(res)
					var html = template('left_tmp', res)




					console.log(html)


					$('#left').html(html)

				$('#left a').eq(0).addClass('active')


					// 二级分类
					根据一级分类的id 进行二级分类数据的请求
					
					
					  /*
                 
					// /category/querySecondCategory
					if (res.rows.length > 0) {
						var id = res.rows[0].id;

						$.ajax({
							url: "/category/querySecondCategory",
							data: {
								id: id
							},
							success: function (res) {
								console.log(res)

								var html2 = template('right_tmp', res)




								console.log(html2)


								$('#right').html(html2)

							}
						})

					}

				}
			})
			
			           
             
```







### 二级分类的获取 



```
	 1 点击一级分类具体的名字 获取到对应的id 
                  2 传递id 给我们的二级分类  
                  3  发送ajax请求
                  4  拿到数据
                  5 定义模板 进行数据展示
		
 //点击绑定事件 
			$('#left') .on('tap','a',function() {
				// alert(1)
				var id=$(this).attr('data-id');
				alert(id)


				$(this).addClass('active').siblings('a').removeClass('active')




					$.ajax({
							url: "/category/querySecondCategory",
							data: {
								id: id
							},
							success: function (res) {
								console.log(res)

								var html2 = template('right_tmp', res)




								console.log(html2)


								$('#right').html(html2)

							}
						})

			})
       
        
        
```







### 收索页面

收索页面html

```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" href="./assets/mui/css/mui.min.css">
	<link rel="stylesheet" href="./css/base.css">
	<link rel="stylesheet" href="./css/search.css">
</head>

<body>
	<header class="mui-bar mui-bar-nav  header">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">嗨淘收索</h1>
	</header>
	<nav class="mui-bar mui-bar-tab footer">
		<a class="mui-tab-item mui-active" href="#tabbar">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-chat">
			<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
			<span class="mui-tab-label">分类</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">购物车</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-map">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">会员中心</span>
		</a>
	</nav>


	<div class="mui-content">
		<div class='mui-scroll-wrapper'>
			<div class="mui-scroll">
				<!-- 填写内容的区域 -->

				<div class="container">
						<div class="searchBox">
								<input type="text" placeholder="请输入关键字" class="seach">
								<button class="btn">收索</button>
							</div>
			
							<div  class='histroyBox mui-clearfix'>
								<span class="seach_histroy">收索历史</span>
								<span class="clear_histroy  mui-icon mui-icon-trash">清空历史</span>
							</div>
							<div class="histroyList">
									<ul class="mui-table-view ulBox">
											<li class="mui-table-view-cell">Item 1 
												<span class="mui-badge mui-badge-primary">11</span>
											</li>
											<li class="mui-table-view-cell">Item 2 
												<span class="mui-badge mui-badge-primary">22</span>
											</li>
											<li class="mui-table-view-cell">Item 3 
												<span class="mui-badge mui-badge-primary">33</span>
											</li>
										</ul>
							</div>
			
				</div>

			</div>
		</div>

	</div>



	<script src='./assets/mui/js/mui.min.js'></script>
	<script src="./assets/zepto/zepto.min.js"></script>

	<script src="./assets/artTemplate/template-web.js"></script>




	 
</body>

</html>
```





### 收索页面js

```
  <!-- 定义我们历史数据展示的模板结构 -->


	   <script type="text/template" id='histroyListTmp'>
		
    {{each data val index}}
		<li class="mui-table-view-cell">{{val}}</li>
	
		{{/each}}

	</script>

	<script>
	
		/*初始化区域滚动组件 当超过了父容器大小的时候生效*/
		mui('.mui-scroll-wrapper').scroll();


              /*
  一 点击搜索按钮实现实现跳转
     1 搜索按钮绑定点击事件 
     2 获取到输入框里面的值
     3  判断输入里面的值不能为空 如果为空则提示内容(不能为空) 如果有值那么进行跳转
     到搜索列表页面
*/


$(function() {


	$('.btn').on('tap',function() {
		 var getSearchVal=$('.seach').val().trim();
		 if(!getSearchVal) {
		mui.alert('内容不能为空', '')	
		 return false; 
		 }

		 keyArr.push(getSearchVal)
		 localStorage.setItem('seachKey',JSON.stringify(keyArr))
		 window.location.href='./seachlist.html?keywords='+getSearchVal




	})
	var keyArr=[];

// 二  搜索历史数据展示
                /*
                1 采用本地缓存 
                2 一进来的时候获取本地缓存里面的数据
                3 每次点击搜索按钮的时候把输入框里面的值放到本地缓存里面去
                4 把缓存里面的数据取出来进行展示
 */

    if(localStorage.getItem('seachKey')) {
		keyArr=JSON.parse(localStorage.getItem('seachKey'))

		var obj={
			data:keyArr
		}

		var html=template('histroyListTmp',obj)
		console.log(html)
		$('.ulBox').html(html)
	}





	   //功能三  清空历史
                /*
                1 给我们清空历史图标绑定点击事件
                2 把本地缓存的数据清空
                3 历史数据展示的内容也需要清空
 */


 $('.clear_histroy').on('tap',function() {
	 mui.confirm('确定要清空历史数据吗',function(type){
		 console.log(type)
		 if(type.index==1) {
		   localStorage.removeItem('seachKey')
		   $('.ulBox').html('')
		   
		 }
	 } )
 })



	



	
})


	</script>

```



### 收索页面less

```
.container {

	padding: 5px;

	.searchBox {
		position: relative;
		line-height: 30px;
		.seach {
			height: 28px;
			border: 1px solid #006699;
			font-size: 16px;

		}

		.btn {
			position: absolute;
			right: 0;
			background-color: #006699;
			height: 30px;
			width: 60px;
			color: #fff;



		}
	}

	.histroyBox {
		height: 30px;
		line-height: 30px;
		margin-top:10px;
		margin-bottom: 10px;

		span {
			font-size: 14px;
		
		}


		.seach_histroy {
			float: left;

		}
		.clear_histroy {
			float: right;
			height: 30px;
			line-height: 30px;
		}


	}

	.histroyList {
		

		
	}
}
```







### 收索列表展示页面

### 收索列表展示页面html

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <!-- 第一步 引入mui css -->
        <link rel="stylesheet" href="./assets/mui/css/mui.css">
        <!-- 第二步引入我们的base.css -->
        <link rel="stylesheet" href="./css/base.css">
        <link rel="stylesheet" href="./assets/fontAwesome/css/font-awesome.min.css">
        <script src="./assets/mui/js/mui.min.js"></script>

        <link rel="stylesheet" href="./css/search-list.css">

    </head>

<body>
    <div class="mui-inner-wrap">
        <!-- 主页面标题   头部-->
        <header class="mui-bar mui-bar-nav  header">

            <h1 class="mui-title">嗨淘代购搜索中心</h1>
        </header>



        <!-- 底部导航栏 -->
        <nav class="mui-bar mui-bar-tab  footer">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-bars"></span>
                <span class="mui-tab-label">分类</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <!-- <span class="mui-icon mui-icon-contact"></span> -->
                <span class=" mui-icon  fa fa-shopping-cart"></span>
                <span class="mui-tab-label">购物</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon  mui-icon-person"></span>
                <span class="mui-tab-label">个人中心</span>
            </a>
        </nav>

		<!-- 主体内容部分 -->
		<!-- 这里刷新部分只能有1个根标签 -->

        <div class="container" id='refreshContainer'>

            <div>

                <div class="changePriceBox">
                    <div class="mui-row">
                        <div class="mui-col-sm-6 mui-col-xs-6">
                            <span class="priceSort">价格
                                <i class="mui-icon mui-icon-arrowdown"></i>
                            </span>
                        </div>
                        <div class="mui-col-sm-6 mui-col-xs-6">
                            <span>销量
                                <i class="mui-icon mui-icon-arrowdown"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 商品列表展示区域 -->
                <div class="lifeBox mui-clearfix">
                    <ul class="mui-table-view goodsShow mui-clearfix">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-pull-center" src="./images/product.jpg">
                                <div class="mui-media-body">
                                    <p>adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                                    <p class='mui-ellipsis'>
                                        <span class="nowPrice">¥560.00</span>
                                        <span class="oldPrice">¥560.00</span>

                                    </p>
                                    <button type="button" class="mui-btn mui-btn-blue">立即购买</button>
                                </div>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>





        </div>








</body>

</html>






```

### 收索列表展示页面js

```

        <script src="./assets/zepto/zepto.min.js"></script>
        <!-- <script>
            /*初始化区域滚动组件 当超过了父容器大小的时候生效*/
            mui('.mui-scroll-wrapper').scroll();
        </script> -->


        <script src="./assets/artTemplate/template-web.js"></script>


        <!-- search-list 数据展示 -->
        <!-- id: 1
        proName: "匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮"
        oldPrice: 888.1
        price: 499.1
        proDesc: "描述"
        size: "40-50"
        statu: 1
        updateTime: "2017-01-04T16:28:29.000Z"
        num: 20
        brandId: 1 -->


        <script type="text/template" id='search-list'>
            {{each data val i}}
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-pull-center" src="{{val.pic[0].picAddr}}">
                    <div class="mui-media-body">
                        <p>{{val.proName}}</p>
                        <p class='mui-ellipsis'>
                            <span class="nowPrice">¥{{val.price}}</span>
                            <span class="oldPrice">¥{{val.oldPrice}}</span>

                        </p>
                        <button type="button" class="mui-btn mui-btn-blue">立即购买</button>
                    </div>
                </a>
            </li>
            {{/each}}

        </script>










        <script>
            //  获取传递过来的关键字 


            var mypage = 1;
            var mypageSize = 1;
            var htmlStr = '';
            var This = null;
            var priceSort = 1;


            var keyW = getUrlParam('keywrods')

            function getUrlParam(params) {
                var keywords = window.location.search;
                // console.log(keywords);
                var str = keywords.indexOf('?');
                // console.log(str);
                var newStr = keywords.substring(str + 1)
                // console.log(newStr);

                var arr = newStr.split("&");
                // console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    var content = arr[i].split('=');
                    console.log(content);
                    if (content[0] === params) {
                        return content[1]
                    }

                }
                return null;
            }



            mui.init({
                pullRefresh: {
                    container: document.querySelector(
                        '#refreshContainer'), //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
                    up: {
                        height: 50, //可选.默认50.触发上拉加载拖动距离
                        auto: true, //可选,默认false.自动上拉加载一次
                        contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                        contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                        callback: getListData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    }
                }
            });






            function getListData() {
                if (!This) {
                    This = this;

                }
                console.log(This);

                //  发送ajax请求 获取数据 
                $.ajax({
                    url: '/product/queryProduct',
                    data: {
                        proName: keyW,
                        page: mypage++,
                        pageSize: 3,
                        price: priceSort
                    },
                    success: function (res) {
                        if (res.data.length > 0) {
                            htmlStr += template('search-list', res)
                            // console.log(htmlStr);

                            $('.goodsShow').html(htmlStr)

                            //业务逻辑代码， 比如通过ajax从服务器获取新数据；
                            //......
                            //注意：
                            //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
                            //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
                            This.endPullupToRefresh(false);


                        } else {
                            This.endPullupToRefresh(true);
                        }


                    }
                })
            }




            //    价格排序 

            $('.priceSort').on('tap', function () {
                priceSort = priceSort == 1 ? 2 : 1;
                htmlStr = '';
                mypage = 1;
                //   重新开启下拉加载
                // document.querySelector(
                // '#refreshContainer'),
                mui('#refreshContainer').pullRefresh().refresh(true);

                getListData()



            })
        </script>
```



收索列表展示页面css

```
.container {
    padding:  5px;

}


.container .changePriceBox {
    background-color: #e5e5e5;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
}

.container .changePriceBox i {
    font-size: 14px;
}

#refreshContainer {
    position: absolute;
    left: 0;;
    top:44px;
    bottom: 50px;
    width: 100%;
}





```







