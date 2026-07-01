<?php
    $resulta = "";
    if(isset($_POST["fArticles"])) {
        $fArticles = $_POST["fArticles"];
        $arrValeurs = [];
        $negatif = 0;
        $positif = 0;
        $nul = 0;
        for($i=0; $i<$fArticles; $i++) {
            $arrValeurs[$i] = $_POST["iNombre" . ($i+1)];    
        }
        for($i=0; $i<$fArticles; $i++) {
            if($arrValeurs[$i] < 0) {
                $negatif++;
            } else if ($arrValeurs[$i] > 0) {
                $positif++;
            }else {
                $nul++;
            }
        }    
        $resulta = "(php) : Dans votre tableau il y a: <br> - " . $positif . " valeurs positiv <br> - " . $negatif . " valeurs negatif <br> - " . $nul . " valeur 0";       
    }
require "exo_6_8.html";
?>