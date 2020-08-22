<?php



header("content-type:text/html;charset=utf-8"); 

$arr=['key1'=>'zs','age'=>17.8,'sex'=>'神魔一体'];




foreach ($arr as $key => $value) {
    echo $key . ' ' . $value;
    }



    


    $i=100;

    if ($i > 0){
        echo 'ok';
    };

      

    echo  '<br>';


      
        // for foreach while 也是一样
        for ($i = 0; $i < 10; $i++){
            echo $i;
        }

        echo  '<br>';

        function fn($age,$name) {
            echo $age.' '.$name;
        }

        fn(19,'zsf');

       
     
        
