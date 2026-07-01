<?php
    $resulta = "";
    if(isset($_POST["ArrOneACinq"])) {
        $nb = [];
        for ($i = 0; $i < 5; $i++) {
            $nb[$i] = $i * $i;
        }
    $resulta = "(php) nb = [" . implode(", ", $nb) . "]";
    }
require "exo_6_4.html";
?>