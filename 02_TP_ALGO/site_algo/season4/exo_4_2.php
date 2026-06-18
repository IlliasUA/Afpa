<?php
$resulta= "";
if(isset($_POST["heur"])) {
    $heur= $_POST["heur"];
    $minutes= $_POST["minutes"];
    $minutes++;
    if($minutes >= 60) {
        $minutes = 0;
        $heur++;
    } if($heur == 24) {
        $heur = 0;
    }
    $resulta= "(php) Dans une minute, il sera $heur heur(s)  $minutes minute(s)";
}
require "exo_4_2.html";
?>