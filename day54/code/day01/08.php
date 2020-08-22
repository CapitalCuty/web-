<?php



// print_r($GLOBALS);




$x=10;
$y=100;

function foo($x,$y) {
    
$GLOBALS['z']=$GLOBALS['x']+$GLOBALS['y'];

} 

foo($x,$y);



print_r($GLOBALS);

echo  $z;



