 <?php
     header('content-type:text/html;charset=utf-8');

    // 1、建立连接数据库
    $connect=@mysqli_connect('127.0.0.1','root','root','k0902data');

    if(!$connect){
        exit('<h1>数据库连接失败</h1>');
    }

    // 2、查询数据库
    $sql='select * from users';
    $query=mysqli_query($connect,$sql);

    if(!$query){
        exit('<h1>数据库查询失败</h1>');
    }

    // 3、显示数据
    // $array=[];
    // while($rows=mysqli_fetch_assoc($query)){
    //     $array[]=$rows;
    // }
    // print_r($array);
?> 


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src='./jquery-1.12.4.min.js'></script>
    <style>
        table{
            width:600px;
            height:500px;
            margin:10px auto;
            text-align:center;
        }
       
        tr:nth-of-type(even){
            background-color:#eee;
        }

        .current{
            background-color:skyblue!important;
        }
        a{
            text-decoration:none;
        }
        .del{
            color:red;
        }
        .edit{
            color:green;
        }
        h1{
            position:absolute;
            top:0;
            left:20px;
        }
    </style>
</head>
<body>
    <h1><a href="./add.php" class='btn btn-success btn-sm'>新增</a></h1>
    <table cellspacing='0' cellpadding='0' border='1'>
        <thead>
            <tr style='background-color:#eee;height:50px'>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>出生日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            
            <?php while($rows=mysqli_fetch_assoc($query)){?>
                <tr>
                    <th> <?php echo $rows['id']  ?> </th>
                    <td> <?php echo $rows['name'] ?> </td>
                    <td> <?php echo $rows['age'] ?> </td>
                    <td> <?php echo $rows['sex']?> </td>
                    <td> <?php echo $rows['birthday'] ?> </td>

                    <td>
                        <a href="edit.php?id=<?php echo $rows['id']  ?>" class='btn btn-info btn-sm'>编辑</a>
                        <a href="del.php?id=<?php echo $rows['id']  ?>" class='btn btn-danger btn-sm'>删除</a>
                    </td>
                </tr>

            <?php }?>

        </tbody>
    </table>

    <script>
        $(function(){

            $('tbody').on('mouseover','tr',function(){
               $(this).addClass('current').siblings('tr').removeClass('current');
            })

            $('tbody').on('mouseout','tr',function(){
               $(this).removeClass('current');
            })
        })
    </script>
</body>

</html>