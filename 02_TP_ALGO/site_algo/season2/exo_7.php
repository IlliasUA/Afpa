<?php
$greeting = "";
if(isset($_POST["inp_prenom"])) {
    $inp_prenom = $_POST["inp_prenom"];
    $inp_nom = $_POST["inp_nom"];
    $greeting = "(php) Bonjour $inp_prenom $inp_nom!";
}
require "exo_7.html";
?>