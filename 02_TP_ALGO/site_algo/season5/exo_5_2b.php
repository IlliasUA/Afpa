<?php
$resulta= "";
if(isset($_POST["iNombre"])) {
    $iNombre= $_POST["iNombre"];
    if ($iNombre < 10) {
        $resulta= "(php) Plus grand!";
     } else if ($iNombre > 20) {
        $resulta= "(php) Plus petit!";   
    } else {
        $resulta= "(php) Saisie OK";    
    }
}
require "exo_5_2b.html";
?>