<?php
// header("content-type:text/html;charset=utf-8"); 
// 1   创建连接

$connect = mysqli_connect('127.0.0.1', 'root', 'root', 'k0902data');
// 2  查询数据库
// 3  从结果中获取查询的结果并且展示


if (!$connect) {
    exit('连接数据库失败');
}

$sql = 'select *  from   users ';

$query = mysqli_query($connect, $sql);

if (!$query) {
    exit('查询数据库失败');
}


//    $rows=mysqli_fetch_assoc($query);

//    print_r($rows);


$array = [];
while ($rows = mysqli_fetch_assoc($query)) {
    // print_r($rows);
    $array[] = $rows;
}



// var_dump($array);
// 释放
mysqli_free_result($query);

//    4 查询完毕之后 需要关闭数据库

mysqli_close($connect);



?>


<!-- 
[id] => 1
    [myname] => zs
    [age] => 19
    [gender] => 0 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {

            text-align: center;

            width: 600px;
            height: 300px;
            /* border:1px solid red; */
            background-color: green;
            color: #fff;
            margin: 0 auto;

        }


        tr:nth-of-type(odd) {
            background-color: pink;
        }

        tr:nth-of-type(even) {
            background-color: red;
        }




        .current {
            /* font-size: 100px; */
            background-color: skyblue !important;
        }
    </style>

    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
</head>

<body>

    <table cellspacing='0' cellpadding='0' border="1">


        <thead>

            <tr style="background-color: black; color:#fff">
                <th>id</th>
                <th>名字</th>
                <th>年龄</th>
                <th>性别</th>
                <th>操作</th>

            </tr>
        </thead>

        <tbody>
            <?php foreach ($array as   $keys => $values) { ?>
                <tr>
                    <?php foreach ($values as $keys1 => $values1) {  ?>


                        <td> <?php echo  $values1 ?></td>
                    <?php    } ?>
                <td><a href="http://">删除</a></td>

                </tr>


            <?php } ?>

        </tbody>
    </table>







    <script>

        $(function() {
            $('tbody').on('mouseover', 'tr', function() {
                $(this).addClass('current').siblings('tr').removeClass('current')
            })


            $('tbody').on('mouseout', 'tr', function() {
                $(this).removeClass('current')
            })

        })
    </script>
</body>

</html>