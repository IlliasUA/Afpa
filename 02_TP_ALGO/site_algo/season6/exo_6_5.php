<?php
$resulta = "";
$tabN = [1];
    for ($k = 1; $k < 6; $k++) {
        $tabN[$k] = $tabN[$k-1] + 2;
    }
    for($i=0; $i<6; $i++) {
        $resulta = "(php) tabN =  [" . implode(", ", $tabN) . "]";
    }
require "exo_6_5.html";
?>

