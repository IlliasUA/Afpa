<?php
    $resultat = "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= (int)$_POST["iNombre"];
        $iCompteur = 0;
        for($i = $iNombre; $i < 10; $i++) {
            $iNombre++;
            $resultat .= $iNombre . " ";
            $iCompteur++;
        }
        $resultat= "(php)  $resultat"; 
    }
    require "exo_5_4.html";
?>