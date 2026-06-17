<?php
    $a = " belle marquise ";
    $b = " vos beaux yeux ";
    $c = " me font ";
    $d = " d’amour ";

    $resulta= "(php)" . $a . $c . $b . $d . "<br>";
    $resulta.= $b . $a . $c . $d . "<br>";
    $resulta.= $c . $d . $a . $b . "<br>";
    $resulta.= $a . $c . $b . $d;
require "exo_4.html";
?>