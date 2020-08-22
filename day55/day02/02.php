<?php


// 1 读取文件
// 
$contents=file_get_contents("names.txt");
// print_r($contents);


$lines=explode("\n",$contents);
print_r($lines);


foreach($lines as $item) {
    if(!$item) continue;

    // print_r($item);
    $cols=explode("|",$item);
    $data[]=$cols;
        
}

// var_dump($data);



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
  





   <?php   foreach($data as $value) {?>

        <tr>     

         <?php   foreach($value as $col) {?>
               <td>
               
               <?php   echo $col?>
               </td>
         <?php   }
?>
        </tr>

<?php }?>



 
 




 


     </tbody>

    </table>
</body>
</html>