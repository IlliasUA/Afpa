<?php
$resulta = "";
if(isset($_POST["i_nom1"])) {
    $i_nom1 = $_POST["i_nom1"];
    $i_nom2 = $_POST["i_nom2"];
    $i_nom3 = $_POST["i_nom3"];
    if($i_nom1 <= $i_nom2 && $i_nom2 <= $i_nom3) {
        $resulta = "(php) Votre trois nom sont dans l’ordre alphabétique";
    } else {
        $resulta = "(php) Votre trois nom ne sont pas dans l’ordre alphabétique";
    }
}
require "exo_3_3.html";
?>