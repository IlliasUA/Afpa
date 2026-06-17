<?php
$resulta = "";
if(isset($_POST["inp_number"])) {
    $inp_number = (int)$_POST["inp_number"];
    if($inp_number >= 0) {
       $resulta= "(php) $inp_number est positif";
    } else {
       $resulta= "(php) $inp_number est négatif";
    }
}
require "exo_3_1.html";
?>