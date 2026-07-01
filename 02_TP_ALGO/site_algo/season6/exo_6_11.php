<?php
    $resulta = "";
    if(isset($_POST["btnMyDeuxTab"])) {
        $my_tab = [];
        $tab_1 = [4, 8, 7, 9, 1, 5, 4 ,6];
        $tab_2 = [7, 6, 5, 2, 1, 3, 7, 4];
        for($i=0; $i<count($tab_1); $i++) {
           $my_tab[$i] = $tab_1[$i] + $tab_2[$i];  
        }
        $resulta = "(php) : Le nouveau tableau est my_tab = [" . implode(", ", $my_tab) . "]";       
    }
require "exo_6_11.html";
?>