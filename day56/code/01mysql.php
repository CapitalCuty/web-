<?php



header("content-type:text/html;charset=utf-8"); 
// 1 创建连接 数据库 

// $connect=mysqli_connect('主机名','用户名','秘密','数据库名字');
// 主机名  localhost /127.0.0.1;  

// @  一种机器语法
$connect=mysqli_connect('127.0.0.1','root','root','k0902data');
// var_dump($connect);
if(!$connect) {
    // echo "连接数据库失败";

    // 2判断连接数据库成功还是失败
    exit('<h1>连接数据库失败</h1>');
}
// $query=mysqli_query('连接信息也就是$connect','sql 语句');

// 3 如果连接成功了  查询数据库 
$sql='select * from users';

$query=mysqli_query($connect,$sql);

if(!$query) {
    exit ('<h1> 查询数据库失败</h1>');
}

// print_r($query);




//4  把查询结果展示出来 

// 默认是时候只查询一行  开始是id=1   再一次就是 id  =2 

// mysqli_fetch_assoc('查询后的接收变量');
// $rows1=mysqli_fetch_assoc($query);
// print_r($rows1);

// // mysqli_fetch_assoc('查询后的接收变量');
// $rows2=mysqli_fetch_assoc($query);
// print_r($rows2);

// $rows3=mysqli_fetch_assoc($query);

// print_r($rows3);

//如果想一次查询所有的就必须使用循环 whlie 
while($rows=mysqli_fetch_assoc($query)) {
    print_r($rows);
    echo "</br>";


}




















