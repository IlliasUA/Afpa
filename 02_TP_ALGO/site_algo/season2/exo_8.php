<?php
$total_en_minutes = "";
if(isset($_POST["inp_heures"])) {
    $inp_heures = (int)$_POST["inp_heures"];
    $inp_minutes = (int)$_POST["inp_minutes"];
    $calc_total = $inp_heures * 60 + $inp_minutes;
    $total_en_minutes = "(php) $calc_total minutes";
}
require "exo_8.html";
?>