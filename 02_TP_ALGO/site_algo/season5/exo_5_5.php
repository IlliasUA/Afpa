<?php
    $resultat = "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= $_POST["iNombre"];
        for($i = 1; $i <= 10; $i++) {
            $resultat .= $iNombre . " x " . $i . " = " . ($iNombre * $i) . "<br>";
        }
        $resultat= "(php) " . $resultat; 
    }
    require "exo_5_5.html";
?>