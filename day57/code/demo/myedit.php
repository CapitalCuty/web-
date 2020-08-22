<?php

// 1 获取id 


header("content-type:text/html;charset=utf-8"); 

if($_SERVER['REQUEST_METHOD']==='GET') {
    $id=$_GET['id'];


}else {
    exit('只支持get请求');
};


$connet=mysqli_connect('127.0.0.1','root','root','aaa') ;


if(!$connet) {
    exit('链接数据库失败');
}

// $sql="delete from users where id=".$id;

$sql="  select   *   from   users   where id=".$id ;

// 查询
$query=mysqli_query($connet,$sql);

// print_r($query);

if(!$query) {

  exit('删除失败1');
}

$user=mysqli_fetch_assoc($query);

print_r($user);


// header("Location:./myindex.php");



//  2 通过id 从数据库里面查询  当前这1条数据
// 3  进行数据展示
// 4   进行数据更改 
//  5  更新数据库   
//  6  跳转到首页



?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>XXX管理系统</title>
  <link rel="stylesheet" href="assets/css/bootstrap.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">XXX管理系统</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">用户管理</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">商品管理</a>
      </li>
    </ul>
  </nav>
  <main class="container">
    <h1 class="heading">编辑“<?php echo $user['name']; ?>”</h1>
    <form  >
      <div class="form-group">
        <label for="avatar">头像</label>
        <input type="file" class="form-control" id="avatar">
      </div>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" value="<?php echo $user['name']; ?>">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender">
          <option value="-1">请选择性别</option>
          <option value="1"<?php echo $user['gender'] === '1' ? ' selected': ''; ?>>男</option>
          <option value="0"<?php echo $user['gender'] === '0' ? ' selected': ''; ?>>女</option>
        </select>
      </div>
      <div class="form-group">
        <label for="birthday">生日</label>
        <input type="date" class="form-control" id="birthday" value="<?php echo $user['birthday']; ?>">
      </div>
      <button class="btn btn-primary">保存</button>
    </form>
  </main>
</body>
</html>
