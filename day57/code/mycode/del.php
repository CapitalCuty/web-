<?php

    header('content-type:text/html;charset=utf-8');

    // 获取请求方式
    $methods=$_SERVER['REQUEST_METHOD'];
    if($methods==='GET'){
        // 获取地址栏中的参数
        $id=$_GET['id'];
        // echo $id;
    }else{
        echo '只允许get请求';
    }
    

    $connect=@mysqli_connect('127.0.0.1','root','root','k0902data');

    if(!$connect){
        exit('<h1>数据库链接失败</h1>');
    }

    $sql='delete from users where id='.$id;
    $query=mysqli_query($connect,$sql);

    if(!$query){
        exit('<h1>数据删除失败</h1>');
    }


    // 获取到受影响的行
    // mysqli_affected_rows('链接数据库返回的值')
    $affects=mysqli_affected_rows($connect);
    if($affects<=0){
        exit('删除失败');
    }

    // header()函数向客户端发送原始的HTTP报头
    header("Location:./myindex.php");

?>