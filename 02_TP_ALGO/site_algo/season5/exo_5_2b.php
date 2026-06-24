<?php
$resulta= "";

if(isset($_POST["iNombre"])) {
    $iNombre = (int)$_POST["iNombre"];
    $iNombreHasard = (int)$_POST["iNombreHasard"];

    if($iNombre < $iNombreHasard) {
        $resulta= "(php) Plus grand!";
    }  else if($iNombre > $iNombreHasard) {
        $resulta= "(php) Plus petit!";
    } else {
        $resulta= "(php) Saisie OK";
    }
}  else  {
    $iNombreHasard = rand(1, 100);
}
require "exo_5_2b.html";
?>