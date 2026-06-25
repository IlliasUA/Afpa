<?php
    $resultat = "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= (int)$_POST["iNombre"];
        for($i = 0; $i < 10; $i++) {
            $iNombre++;
            $resultat .= $iNombre . " ";
        }
        $resultat= "(php) " . $resultat; 
    }
    require "exo_5_4.html";
?>