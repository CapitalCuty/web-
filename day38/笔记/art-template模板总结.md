# art-template模板总结

分为原生语法和简洁语法，本文主要是讲简洁语法
目录
1.基础数据渲染
2.输出HTML
3.流程控制
4.遍历
5.调用自定义函数方法
6.子模板引入

**基础数据渲染**
一、引入art-template.js文件

```javascript
<script src="template-debug.js"></script>
```

二、编写HTML模板

```javascript
<script id="test" type="text/html">
    <h1>{{title}}</h1>
</script>

```

三、向模板插入数据，并输出到页面

```javascript
var data = {
    title:"hello world"
};
var html = template("test",data);
document.getElementById('content').innerHTML = html;

```

**输出HTML**

```javascript
<script id="test" type="text/html">
    <h1>{{title}}</h1>
</script>
```

注意：{{title}}这是对内容编码输出，应该写成{{#title}}这是对内容不编码输出

```javascript
<script id="test" type="text/html">
    <h1>{{#title}}</h1>
</script>

var data = {
    title:"<p>hello world</p>"
};
var html = template("test",data);
document.getElementById('content').innerHTML = html;


```

**流程控制语句（if else）**
{{if value}}
…
{{else if value}}
…
{{else}}
…
{{/if}}
art-template里面的流程控制就相对其他模板来说强大很多

```javascript
<script id="test" type="text/html">
    <div>
        {{if bok==22}}
        <h1>线上</h1>
        {{else if bok==33}}
        <h2>隐藏</h2>
        {{else}}
        <h3>走这里</h3>
        {{/if}}
    </div>
</script>
<script>
    var data = {
        "bok":22
    };
    var html = template('test',data);
    document.getElementById("app").innerHTML = html;
</script>

```

嵌套的写法

```javascript
<script id="test" type="text/html">
    <div>
        {{if bok}}
            {{if list.length>=0}}
                {{each list}}
                    <p>{{$index}}:{{$value}}</p>
                {{/each}}
            {{else}}
                <p>没有数据</p>
            {{/if}}
        {{/if}}
    </div>
</script>

```

**循环遍历语句**
{{each name}}
索引：{{ $ index}}
值：{{ $ value}}
{{/each}}

```javascript
<script id="test" type="text/html">
<div>
    <ul>
        {{if c==100}}
            <ul>
                {{each person}}
                    <li>
                        编号：{{$index+1}}--姓名：{{$value.name}}--年龄：{{$value.age}}
                    </li>
                {{/each}}
            </ul>
        {{/if}}
    </ul>
</div>
</script>

<script>
    var data = {
        c:100,
        person:[
            {name:"jack",age:18},
            {name:"tom",age:19},
            {name:"jerry",age:20},
            {name:"kid",age:21},
            {name:"jade",age:22}
        ]
    };
    var html = template("test",data);
    document.getElementById("content").innerHTML = html;
</script>

```

**调用自定义方法**  

可以直接在{{}}中调用

```javascript
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script src="template-web.js"></script>

<script id="test" type="text/html">
    {{if c==100}}
        <ul>
            {{each person}}
                <li>姓名：{{$value.name}}--性别：{{show($value.sex)}}</li>
            {{/each}}
        </ul>

    {{/if}}
</script>

<div id ="app">
	
</div>
<script>
    var data = {
        c:100,
        person:[
            {name:"jack",age:18,sex:1},
            {name:"tom",age:19,sex:0},
            {name:"jerry",age:20,sex:0},
            {name:"kid",age:21,sex:1},
            {name:"jade",age:22,sex:0}
        ]
    };
    //自定义函数
   template.defaults.imports.show = function(sex){
      console.log(sex);//同样可以打印日志到控制台
        if(sex==0){
        return "男"
        }else if(sex==1){
              return "女"
      }
        };

    var html = template("test",data);
    document.getElementById("app").innerHTML = html;
</script>

</body>
</html>

```

**调用子模板**
{{include ‘main’}} 引入子模板，数据默认为共享
{{include ‘main’ a}} a为制定数据，但是同样必须是父级数据，可以看看下面的例子，如果不注入的a的话，引入的子模板是接受不到数据的



```javascript
<body>
<div id="app"></div>
<script src="template-debug.js"></script>
<script id="main" type="text/html">
    <ul>
       {{each list}}
            <li>{{$value}}</li>
        {{/each}}
    </ul>
</script>
<script id="test" type="text/html">
    <div>
        <ul>
            {{each person}}
                <li>{{$value.name}}</li>
            {{/each}}
        </ul>
        {{include 'main' a}}
    </div>
</script>
<script>
    var data = {
        person:[
            {name:"jack",age:18},
            {name:"tom",age:19},
            {name:"jerry",age:20},
            {name:"kid",age:21},
            {name:"jade",age:22}
        ],
        a:{
            list:['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
        }
    };
    var html = template("test",data);
    document.getElementById("app").innerHTML=html;
</script>
</body>

```







选择一个模板引擎
https://github.com/tj/consolidate.js#supported-template-engines
2. 下载模板引擎JS文件
3. 引入到页面中
4. 准备一个模板
5. 准备一个数据
6. 通过模板引擎的JS提供的一个函数将模板和数据整合得到渲染结果HTML
7. 将渲染结果的HTML 设置到 默认元素的 innerHTML 中
var tmpl = '{{if user}}<h2>{{user.name}}</h2>{{/if}}'
为什么不在JS变量中写模板？
1. 如果将模板写到JS中，维护不方便，不能换行，没有着色
为什么使用script标记
9. script不会显示在界面
10. script 标签的特点是
  1. innerHTML 永远不会显示在界面上
  2. 如果 type 不等于 text/javascript 的话，内部的内容不会作为 JavaScript 执行