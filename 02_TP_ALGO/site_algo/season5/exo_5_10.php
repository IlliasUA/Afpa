<?php
    $resultat= "";
    
    if(isset($_POST["sNombre"])) {
        $sommeDonnee= $_POST["sNombre"];
        $sommeDevoir= $_POST["sommeDevoir"];
        $nBillet10 = 0;
        $nBillet5 = 0;
        $nBillet1 = 0;
        $votreMonnaie = $sommeDonnee - $sommeDevoir;
        $resVotreMonnaie = $votreMonnaie;
        $resultates = "";

        if($votreMonnaie >= 10) {
            while ($votreMonnaie >= 10) {
                $nBillet10++;  
                $votreMonnaie -= 10;
            }
        }
        if($votreMonnaie >= 5) {
            $nBillet5++;
            $votreMonnaie -= 5;
        }
        if($votreMonnaie >= 1) {
            $nBillet1 = $votreMonnaie;
        } 
        $resultates = "Votre monnaie est " . $resVotreMonnaie . "€: <br>";
        if($nBillet10 > 0) {
            $resultates .= "- " . $nBillet10 . "billet de 10€<br>";     
        }
        if($nBillet5 > 0) {
            $resultates .= "- " . $nBillet5 . "billet de 5€<br>";
        }
        if($nBillet1 > 0) {
            $resultates .= "- " . $nBillet1 . "billet de 1€";
        }
            $resultat= "(php) " . $resultates; 
    }
    require "exo_5_10.html";
?>