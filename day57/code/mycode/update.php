<?php

    header('content-type:text/html;charset=utf-8');

    $methods=$_SERVER['REQUEST_METHOD'];
    if($methods==='POST'){
        // var_dump($_POST);
        // $id=$_GET['id'];
        // var_dump($id);
        updateData();
    }

    function updateData(){
        $id=$_GET['id'];

        $name=$_POST['name'];
        $age=$_POST['age'];
        $sex=$_POST['sex'];
        $birthday=$_POST['birthday'];

        $connect=@mysqli_connect('127.0.0.1','root','root','k0902data');
        if(!$connect){
            exit('数据库连接失败');
        }

        $sql="update users set name='{$name}',age=$age,sex='{$sex}',birthday='{$birthday}'  where id=".$id;
        $query=mysqli_query($connect,$sql);
        if(!$query){
            exit('修改数据失败');
        }

        $affects=mysqli_affected_rows($connect);
        if($affects!=1){
            exit('修改失败');
        }

        header('Location:./myindex.php');
    }
   
?>