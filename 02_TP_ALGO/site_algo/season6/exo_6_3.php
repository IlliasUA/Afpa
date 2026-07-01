<?php
$resulta = "";
if(isset($_POST["iNote1"])) {
$arrNotes = [];
for ($i = 1; $i <= 9; $i++) {
    $arrNotes[] = $_POST["iNote" . $i];
}

$resulta = "(php) Votre tableau de notes est: [" . implode(", ", $arrNotes) . "]";
}
require "exo_6_3.html";
?>