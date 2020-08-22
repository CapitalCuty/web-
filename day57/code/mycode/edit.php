<?php

    header('content-type:text/html;charset=utf-8');

    $methods=$_SERVER['REQUEST_METHOD'];
    if($methods==='GET'){
        $id=$_GET['id'];
        // echo $id;
    }

    $connect=@mysqli_connect('127.0.0.1','root','root','k0902data');
    if(!$connect){
        exit('数据库连接失败');
    }

    $sql='select * from users where id='.$id;
    $query=mysqli_query($connect,$sql);
    if(!$query){
        exit('查询数据失败');
    }

    $user=mysqli_fetch_assoc($query);
   
?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  <main class="container">  
    <form  action="./update.php?id=<?php echo $user['id']?>" method="post">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" value="<?php echo $user['name'];?>" name="name">
      </div>
      <div class="form-group">
        <label for="age">年龄</label>
        <input type="text" class="form-control" id="age" value="<?php echo $user['age'];?>" name="age">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" id="sex" name="sex">
          <option value="-1">请选择性别</option>
          <option value="男" <?php echo $user['sex']=='男'?'selected':'' ?>>男</option>
          <option value="女" <?php echo $user['sex']=='女'?'selected':'' ?>>女</option>
        </select>
      </div>
      <div class="form-group">
        <label for="birthday">生日</label>
        <input type="date" class="form-control" id="birthday" value="<?php echo $user['birthday'];?>" name="birthday">
      </div>
      <button class="btn btn-primary">保存</button>
    </form>
  </main>
</body>
</html>
