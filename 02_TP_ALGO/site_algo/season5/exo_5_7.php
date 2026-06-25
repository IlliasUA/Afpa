<?php
    $resultat= "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= $_POST["iNombre"];
        $nomb_de_pas = "";
        $sum = 1;  
        for ($i=1; $i<=$iNombre; $i++) {
            $nomb_de_pas .= $i;
            $sum *= $i;
            if($i < $iNombre) {
                $nomb_de_pas .= " * ";                
                }
                $resultat= "(php) " . $iNombre . "! = " . $nomb_de_pas . " = " . $sum; 
        }
    }
    require "exo_5_7.html";
?>