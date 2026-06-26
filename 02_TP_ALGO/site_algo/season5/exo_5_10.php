<?php
    $resultat= "";
    
    if(isset($_POST["iNombre1"])) {
        $max= $_POST["iNombre1"];
        $fNombre= $_POST["fNombre"];
        $iCount= 1;
        for ($i=1; $i<=$fNombre; $i++) {
            $iNombre = $_POST["iNombre" . $i];

            if($max < $iNombre) {
                $max = $iNombre;
                $iCount = $i;                
                }
        }
            $resultat= "(php) " . $max . " est plus grand numéro avec le champ de saisie n°" . $iCount; 
    }
    require "exo_5_10.html";
?>