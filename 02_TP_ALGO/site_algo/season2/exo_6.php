<?php
$surface = "";
if(isset($_POST["inp_largeur"])) {
    $inp_largeur = (int)$_POST["inp_largeur"];
    $inp_hauteur = (int)$_POST["inp_hauteur"];
    $res_surface = $inp_largeur * $inp_hauteur;
    $surface = "(php) $res_surface px";
}
require "exo_6.html";
?>