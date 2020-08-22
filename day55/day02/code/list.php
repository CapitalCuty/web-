<?php

// 1 读取文件     

 $data=file_get_contents('names.txt');

 $myArray=[];

//  print_r( $data);
//  array explode( string $input, string $char )
// 2  通过换行符号切割 
  $array=  explode("\n",$data);

//   print_r( $array);

  foreach($array as $keys=>$value) {
    //    print_r ($value);    1 | 朱芳 | 18 | b.unyrl@tpwpqt.st | http://XEP.VC   
       $list=explode("|",$value);
       $myArray[]=$list;  // 往数组里面追加数据 把一维数组变成二维数组
     
    //  foreach($value  as $key2=>$val2) {

    //  }
  }

// 
//   print_r( $myArray);  //[[],[]]



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table>

<table>
     <thead>
         <tr>
             <th>编号</th>
             <th>姓名</th>
             <th>年龄</th>
             <th>邮箱</th>
             <th>网址</th>
            </tr>
     </thead>
     <tbody>

     <?php  foreach($myArray as $keys=>$value) {?>
           <tr>


           <?php foreach($value as $key1=>$value1) { ?>

             <td>   <?php  echo $value1?> </td>
            
          <?php }?>

           </tr>
      <?php }?>

     </tbody>

     </table>

</body>
</html>