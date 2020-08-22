<?php

$connect=mysqli_connect('localhost','root','root','aaa');

if(!$connect) {
    exit('链接数据库失败');
}

$sql='select * from  users';
$query=mysqli_query($connect,$sql);


if(!$query) {
    exit('查询数据库失败');
}


// $rows=mysqli_fetch_assoc($query);


// print_r($rows);



// mysqli_free_result($query);

// mysqli_close($connect);


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
    <h1 class="heading">用户管理 <a class="btn btn-link btn-sm" href="myadd.php">添加</a></h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>头像</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th class="text-center" width="140">操作</th>
        </tr>
      </thead>
      <tbody>
       
      <!-- Array ( [id] => 23 [name] => 1 [gender] => 1 [birthday] => 2020-08-18 [avatar] => /uploads/avatar-5f3a9498a863d.png ) -->
   
   <?php  while($item=mysqli_fetch_assoc($query)) {?>

    <tr>
   <th scope="row">  <?php   echo $item['id'] ?>  </th>
   <td> <?php   echo   $item['avatar']?> </td>
   <td> <?php   echo   $item['name']?> </td>
   
   <td> <?php   echo   $item['gender'] == 0 ? '男' : '女'  ?> </td>
   
   <td> <?php   echo   $item['birthday']?> </td>
   
   
  
   <td class="text-center">
     <a class="btn btn-info btn-sm" href="myedit.php?id=<?php   echo  $item['id']?> ">编辑</a>
     <a class="btn btn-danger btn-sm" href="mydelete.php?id=<?php   echo  $item['id']?> ">删除</a>
   </td>
 </tr>



<?php    }  ?>

   





      </tbody>
    </table>
    <ul class="pagination justify-content-center">
      <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
    </ul>
  </main>
</body>
</html>