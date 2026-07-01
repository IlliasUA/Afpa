<?php
    $resulta = "";
    if(isset($_POST["btnMyDeuxTab"])) {
        $my_newTab= [];
        $somme= 0;
        $tab_1= [4, 8, 7, 12];
        $tab_2= [3, 6];
        
        for($i=0; $i<count($tab_1); $i++) {
        $my_newTab[$i] = $tab_1[$i] * $tab_2[0] + $tab_1[$i] * $tab_2[1];
        $somme += $tab_1[$i] * $tab_2[0] + $tab_1[$i] * $tab_2[1];
    }
        $resulta = "(php) : Votre nouveau tableau est: [" . implode(", ", $my_newTab) . "] avec sommes total:" . $somme;       
    }
require "exo_6_11.html";
?>