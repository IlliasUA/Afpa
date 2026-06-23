<?php
    $resultat = "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= (int)$_POST["iNombre"];
        $iCompteur = 0;
        while($iCompteur < 10) {
            $iNombre ++;
            $resultat .= $iNombre . " ";
            $iCompteur ++;
        }
        $resultat= "(php)  $resultat"; 
    }
    require "exo_5_3.html";
?>