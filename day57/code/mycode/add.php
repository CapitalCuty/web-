<?php

    header('content-type:text/html;charset=utf-8');
    echo $_SERVER['PHP_SELF'];
    
    $methods=$_SERVER['REQUEST_METHOD'];
    if($methods==='POST'){
        addData();
    }

    function addData(){
        if(empty($_POST['name'])){
            $GLOBALS['error_message']='姓名不能为空';
            return;
        }
        if(empty($_POST['age'])){
            $GLOBALS['error_message']='年龄不能为空';
            return;
        }
        if($_POST['sex']==-1){
            $GLOBALS['error_message']='请选择性别';
            return;
        }
        if(empty($_POST['birthday'])){
            $GLOBALS['error_message']='日期不能为空';
            return;
        }

        $name=$_POST['name'];
        $age=$_POST['age'];
        $sex=$_POST['sex'];
        $birthday=$_POST['birthday'];

        $connect=@mysqli_connect('127.0.0.1','root','root','k0902data');
        if(!$connect){
            exit('数据库连接失败');
        }

        $sql="insert into users values(null,'{$name}',$age,'{$sex}','{$birthday}')";
        $query=mysqli_query($connect,$sql);
        if(!$query){
            exit('添加数据失败');
        }

        $affects=mysqli_affected_rows($connect);
        if($affects!=1){
            exit('添加失败');
        }

        header('Location:./myindex.php');
    }

   
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
    <?php if (isset($error_message)): ?>
        <div class="alert alert-warning">
        <?php echo $error_message; ?>
        </div>
    <?php endif ?>
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="age">年龄</label>
        <input type="text" class="form-control" id="age" name="age">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" id="sex" name="sex">
          <option value="-1">请选择性别</option>
          <option value="男">男</option>
          <option value="女">女</option>
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
