<?php
$resulta= "";
if(isset($_POST["nombre_de_photocopies"])) {
    $nombre_de_photocopies= $_POST["nombre_de_photocopies"];
    if($nombre_de_photocopies <= 10) {
        $facture = $nombre_de_photocopies * 0.1;
    } else if(($nombre_de_photocopies > 10) && ($nombre_de_photocopies <= 30)) {
        $facture = 10 * 0.1 + ($nombre_de_photocopies - 10) * 0.09;
    } else if($nombre_de_photocopies > 30) {
        $facture = 10 * 0.1 + 20 * 0.09 + ($nombre_de_photocopies - 30) * 0.08;
    }
    $resulta= "(php) Votre facture est " . number_format($facture, 2) . "";
}
require "exo_4_4.html";
?>