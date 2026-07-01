<?php
    $resulta = "";
    if(isset($_POST["fArticles"])) {
        $fArticles= $_POST["fArticles"];
        $arrValeurs=[];
        $arrValeursNew=[];
            for($i=0; $i<$fArticles; $i++) {
                $arrValeurs[$i] = $_POST["iNombre" . ($i+1)];     
            }
            for($i=0; $i<$fArticles; $i++) {
                $arrValeursNew[$i] = $arrValeurs[$i] + 1;
            }
        $resulta = "(php) : Votre nouveau tableau est: [" . implode(", ", $arrValeursNew) . "]<br> Il est augmentées de 1!";       
    }
require "exo_6_13.html";
?>