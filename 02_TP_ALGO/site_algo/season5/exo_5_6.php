<?php
    $resultat= "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= $_POST["iNombre"];
        $sum= 0;  
        for ($i = 1; $i <= $iNombre; $i++) {
            $sum += $i;
        }
        $resultat= "(php) " . $sum; 
    }
    require "exo_5_6.html";
?>