<?php


/*
......
这里可以添加任意行数的注释内容
......
*/
header("content-type:text/html;charset=utf-8"); 
$a='hello';



//  php 字符串拼接 使用 点
echo $a.'我是字符串拼接';


// \n  换行

// echo "hello\nworld";
// => `hello
// world`
// echo '<br>';

// $name = 'zce';
// echo "hello $name";
// => `hello zce`






// PHP 5.4 以后定义的方式可以用 `[]`
// 数组

// echo '<br>';  // 浏览器端的换行


// 关联数组
$arr3=array('key1'=>'hello','sex'=>'男','age'=>20);

var_dump($arr3);

 
echo "\n";  //换行 

$arr2 = [1, 2, 3, 4, 5];
var_dump($arr2);

echo "\n";
// echo '<br>';

$arr4=['key1'=>'hello','key2'=>'zs'];
var_dump($arr4);



$str='123';

print($str);
$num=(int)$str;

print_r($num);

print_r($arr4);




// 将一个数字强制转换为布尔值
$flag = (bool)$num;

echo $flag;

print_r($flag);



$flag2=0;
echo (bool)$flag2;

echo false;





$name = 'zce';
// 拼接 `hey ` 和 `zce`
$message = 'hey ' . $name;
// 相当于 +=

$foo='真帅';

$foo .= $message;

print($foo);








