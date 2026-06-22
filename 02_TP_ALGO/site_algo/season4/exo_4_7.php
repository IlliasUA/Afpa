<?php
$resulta= "";
if(isset($_POST["age"])) {
    $age= $_POST["age"];
    $annees_permis= $_POST["annees_permis"];
    $accident= $_POST["accident"];
    $annees_client= $_POST["annees_client"];
    $rouge = "Tarif Rouge";  
    $orange = "Tarif Orange";
    $vert = "Tarif Vert";
    $blue = "Tarif Blue";

    if($age < 25 && $annees_permis < 2) {
        if($accident == 0) {
                $tarif = $rouge;
        } else {
                $tarif = "Refuse!";
            }
    } else if (($age < 25 && $annees_permis >= 2) || ($age >= 25 && $annees_permis < 2)) {
        if ($accident == 0) {
                $tarif = $orange;
            } else if ($accident == 1) {
                $tarif = $rouge;
            } else {
                $tarif = "Refuse";
            }
    } else if ($age >= 25 && $annees_permis >= 2) {
        if($accident == 0) {
                $tarif = $vert;
            } else if ($accident == 1) {
                $tarif = $orange;
            } else if ($accident == 2) {
                $tarif = $rouge;
            } else {
                $tarif = "Refuse";
            }
    }
    if($annees_client > 5 && $tarif != "Refuse") {
        if($tarif == $vert) {
            $tarif = $blue;
        } else if($tarif == $orange) {
            $tarif = $vert;
        } else if($tarif == $rouge) {
            $tarif = $orange;
        }
    }
    $resulta= "(php) $tarif"; 
}
require "exo_4_7.html";
?>