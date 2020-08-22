<?php


// 1 读取文件
// 
$contents=file_get_contents("names.txt");
// print_r($contents);


$lines=explode("\n",$contents);
// print_r($lines);


foreach($lines as $item) {
    if(!$item) continue;

    // print_r($item);
    $cols=explode("|",$item);
    $data[]=$cols;
        
}

var_dump($data);



?>










