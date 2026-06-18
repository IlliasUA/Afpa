<?php
$i_resultat = "";
if(isset($_POST["inp_small"])) {
    $inp_small = $_POST["inp_small"];
    $carre = $inp_small * $inp_small;
    $i_resultat = "(php) Le carré de $inp_small est $carre";
} 
require "exo_2.html";
?>