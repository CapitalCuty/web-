<?php



echo  $_SERVER['PHP_SELF'];
header("content-type:text/html;charset=utf-8"); 

if($_SERVER['REQUEST_METHOD']==='GET') {
    $id=$_GET['id'];

    // echo  $id;
}else {
    exit('只支持get请求');
};


$connet=mysqli_connect('127.0.0.1','root','root','aaa') ;


if(!$connet) {
    exit('链接数据库失败');
}

$sql="delete from users where id=".$id;

// 查询
$query=mysqli_query($connet,$sql);

// print_r($query);

if(!$query) {
//    echo "进来";
  exit('删除失败1');
}
// mysqli_affected_rows("链接数据库返回值") //   取   受影响的行
$affects=mysqli_affected_rows($connet);

print_r($affects);
if($affects<=0) {
    exit('删除失败2');
}






header("Location:./myindex.php");


 




