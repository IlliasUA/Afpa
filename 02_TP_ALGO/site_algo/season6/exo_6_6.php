<?php
$resulta = "";
$tabSuite = [1, 1];
    for ($i = 2; $i < 7; $i++) {
        $tabSuite[$i] = $tabSuite[$i-1] + $tabSuite[$i-2];
    }
    for($i=0; $i<7; $i++) {
        $resulta = "(php) tabSuite = [" . implode(", ", $tabSuite) . "]";
    }
require "exo_6_6.html";
?>
