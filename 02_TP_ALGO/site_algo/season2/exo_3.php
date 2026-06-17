<?php
$resulta = "";
if(isset($_POST["inp_small_nombre"])) {
    $inp_small_nombre = $_POST["inp_small_nombre"];
    $inp_small_prix = $_POST["inp_small_prix"];
    $inp_small_tva = $_POST["inp_small_tva"];
    $resulta_ttc = $inp_small_prix * $inp_small_nombre * (1 + $inp_small_tva / 100);
    $resulta = "(PHP) Prix total des vos articles est $resulta_ttc";
} 
require "exo_3.html";
?>