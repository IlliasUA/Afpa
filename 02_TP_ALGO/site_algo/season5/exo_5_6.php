<?php
    $resultat= "";
    
    if(isset($_POST["iNombre"])) {
        $iNombre= $_POST["iNombre"];
        $sum= 0;
        $nomb_de_pas= "";  
        for ($i = 1; $i <= $iNombre; $i++) {
            $sum += $i;
            $nomb_de_pas .= $i;
            if ($i < $iNombre) {
              $nomb_de_pas .= " + ";   
            }
        }
        $resultat= "(php) " . $nomb_de_pas . " = " . $sum; 
    }
    require "exo_5_6.html";
?>