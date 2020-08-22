<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="login.php"   method="POST" >  

    <!--  服务端必须要有name属性 否则 数据接收不到 -->
    
    用户名:
    <input type="text"  name='uname'>
     <input type="password"  name='pwd'>


     密码:
     <input type="submit" value="登录">

    </form>
</body>
</html>