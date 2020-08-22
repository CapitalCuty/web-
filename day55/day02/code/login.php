<?php

header("content-type:text/html;charset=utf-8"); 
// var_dump($GLOBALS['_GET']);

// var_dump($GLOBALS['_POST']);




// var_dump( $_SERVER['REQUEST_METHOD']);
$methods= $_SERVER['REQUEST_METHOD'];

if($methods==='GET') {
   echo  "小米 发布新款";
}else {
    echo "小红你来了";
}


