<?php
    $resultat= "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= $_POST["iNombre"];
        $decomposition = "";
        $resultat = 1;  
        for ($i=1; $i<=$iNombre; $i++) {
            $decomposition .= $i;
            $resultat *= $i;
            if($i < $iNombre) {
                $decomposition .= " * ";                
                $resultat= "(php) " . $iNombre . "! = " . $decomposition . $iNombre . " = " . $resultat * $iNombre; 
            }
        }
    }
    require "exo_5_7.html";
?>