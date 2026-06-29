<?php
$resulta= "";
$arrNum = [];
    for($i = 0; $i < 7; $i++) {
        $arrNum[$i] = 0;
    }

    $resulta= "(php) arrNum = [" . implode(" ", $arrNum) . "]";

    require "exo_6_1.html";
?>