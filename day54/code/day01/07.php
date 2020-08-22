<?php



$top = 'top variable';
function foo() {
    $sub = 'sub variable';

    // 使用之前 声明这个变量是一个全局变量 
    global $top;
    
    echo $top;
    // => 无法拿到





    function bar() {
        global $top,$sub;
        echo $top;
        // => 无法拿到
        echo $sub;
        // => 无法拿到
    }
    bar();
}



foo();