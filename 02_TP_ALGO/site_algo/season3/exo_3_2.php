<?php
$resulta = "";
if(isset($_POST["i_num1"])) {
    $i_num1 = $_POST["i_num1"];
    $i_num2 = $_POST["i_num2"];
    if(($i_num1 > 0 && $i_num2 > 0) || ($i_num1 < 0 && $i_num2 < 0)) {
        $resulta = "(php) Votre produit est positif";
    } else {
        $resulta = "(php) Votre produit est negatif";
    }
}
require "exo_3_2.html";
?>