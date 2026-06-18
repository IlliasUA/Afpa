<?php
$resulta= "";
if(isset($_POST["sexe"])) {
    $sexe= $_POST["sexe"];
    $age= $_POST["age"];
    if(($sexe == "homme" && $age >= 20) || ($sexe == "femme" && ($age >= 18 && $age <= 35))) {
        $resulta= "(php) Habitant est imposable";
    } else {
        $resulta= "(php) Habitant est non imposable";
    }
}
require "exo_4_5.html";
?>