<?php
    $resulta = "";
    if(isset($_POST["iNote1"])) {
        $arrNotesMoyen = [];
        $sumMoyen = 0;
        for($i=1; $i<10; $i++) {
            $arrNotesMoyen[] = $_POST["iNote" . $i];
            }
        for($i=0; $i<9; $i++) {
            $sumMoyen += $arrNotesMoyen[$i] / 2;
            }
    $resulta = "(php) La moyenne des votre notes est: " . $sumMoyen;       
    }
require "exo_6_7.html";
?>
