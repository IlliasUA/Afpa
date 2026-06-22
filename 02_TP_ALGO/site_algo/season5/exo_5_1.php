<?php
$resulta= "";
if(isset($_POST["iNombre"])) {
    $iNombre= $_POST["iNombre"];
    if (($iNombre < 1) || ($iNombre > 3)) {
        $resulta= "(php) Saisie erronée. Recommoncez";
    } else {
        $resulta= "(php) Saisie OK";
    }
}
require "exo_5_1.html";
?>