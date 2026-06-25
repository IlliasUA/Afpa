<?php
    $resultat= "";
    
    if(isset($_POST["iNombre1"])) {
        $max= $_POST["iNombre1"];

        for ($i=1; $i<=20; $i++) {
            $iNombre = $_POST["iNombre" . $i];

            if($max < $iNombre) {
                $max = $iNombre;                
                }
        }
            $resultat= "(php) " . $max . " est plus grand numéro"; 
    }
    require "exo_5_8.html";
?>