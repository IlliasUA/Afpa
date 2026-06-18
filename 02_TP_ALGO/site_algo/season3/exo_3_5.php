<?php
$resulta="";
if(isset($_POST["i_num1"])) {
    $i_num1= $_POST["i_num1"];
    $i_num2= $_POST["i_num2"];
    if(($i_num1 > 0 && $i_num2 > 0) || ($i_num1 < 0 && $i_num2 < 0)) {
       $resulta="(php) Votre nomber est positif!"; 
    } else if(($i_num1 < 0 && $i_num2 > 0) || ($i_num1 > 0 && $i_num2 < 0)) {
        $resulta="(php) Votre nomber est negatif!";
    } else if($i_num1 == 0 || $i_num2 == 0) {
        $resulta="(php) Votre nomber est nul!";
    }
}
require "exo_3_5.html";
?>