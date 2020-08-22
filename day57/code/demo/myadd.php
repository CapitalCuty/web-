<?php



function addData()
{
  // echo  $_SERVER['PHP_SELF'];
  // // 永远获取当前路径
  // 写获取表单提交的代码



  // print_r($_POST);

  // 1 判断  这些值不能为空
  // 2 获取表单元素提交的数据
  // 3 链接数据库
  // 4 操作数据库 添加数据
  // 5 添加数据成功后跳转到首页 
  // ( [name] => 1 [gender] => 1 [birthday] => 2020-08-20 )
  if (empty($_POST['name'])) {
    $GLOBALS['error_message'] = '用户名不能为空';
    return;
  }



  if (!(isset($_POST['gender']) &&  $_POST['gender'] != -1)) {
    $GLOBALS['error_message'] = '性别不能为空';
    return;
  }


  if (empty($_POST['birthday'])) {
    echo "xxxx";
    $GLOBALS['error_message'] = '日期不能为空';
    return;
  }





  $name = $_POST['name'];

  $gender = $_POST['gender'];
  $birthday = $_POST['birthday'];

  $avatar = '阿凡达';




  $connet = mysqli_connect('127.0.0.1', 'root', 'root', 'aaa');


  if (!$connet) {
    exit('链接数据库失败');
  }

  // $sql="delete from users where id=".$id;

  $sql = "insert into  users values(null, '{$name}', {$gender},'{$birthday}' ,'{$avatar}')";

  // 查询
  $query = mysqli_query($connet, $sql);

  // print_r($query);

  if (!$query) {
    //    echo "进来";
    exit('添加失败1');
  }
  // mysqli_affected_rows("链接数据库返回值") //   取   受影响的行
  $affects = mysqli_affected_rows($connet);

  print_r($affects);
  if ($affects != 1) {
    exit('删除失败2');
  }


  header("Location:./myindex.php");





}










if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  echo  111;
  addData();
}


// ?>


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
    <h1 class="heading">添加用户</h1>
    <?php if (isset($error_message)) : ?>
      <div class="alert alert-warning">
        <?php echo $error_message; ?>
      </div>
    <?php endif ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data" autocomplete="off">
      <div class="form-group">
        <label for="avatar">头像</label>
        <input type="file" class="form-control" id="avatar" name="avatar">
      </div>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender" name="gender">
          <option value="-1">请选择性别</option>
          <option value="1">男</option>
          <option value="0">女</option>
        </select>
      </div>
      <div class="form-group">
        <label for="birthday">生日</label>
        <input type="date" class="form-control" id="birthday" name="birthday">
      </div>
      <button class="btn btn-primary">保存</button>
    </form>
  </main>
</body>

</html>