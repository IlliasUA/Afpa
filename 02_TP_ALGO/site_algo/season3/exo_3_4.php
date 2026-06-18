<?php
$resulta= "";
if(isset($_POST["i_num1"])) {
    $i_num1= $_POST["i_num1"];
    if($i_num1 > 0) {
        $resulta= "(php) Votre nomber est positif!";
    } else if(i_num1 < 0) {
        $resulta= "(php) Votre nomber est negatif!";
    } else {
        $resulta= "(php) Votre nomber est nul!";
        }
}
require "exo_3_4.html";
?>