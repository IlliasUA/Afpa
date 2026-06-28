<?php
    $resultat= "";
    
    if(isset($_POST["chevPart"])) {
        $chevPart = $_POST["chevPart"];
        $chevPlay = $_POST["chevPlay"];  
        $enOrdre = 1;
        $enDesordre;
        for ($i=0; $i<$chevPlay; $i++) {
          $enOrdre *= $chevPart - $i;
        }
        
        $enDesordre = $enOrdre;

        for ($i=1; $i<=$chevPlay; $i++) {
            $enDesordre /= $i;
        }
        $enDesordre = round($enDesordre);
        $resultat= "(php) Nos chances de gagner en désordre est 1:" . $enDesordre . 
        "<br> et nos chances de gagner dans le bon ordre est 1:" . $enOrdre;
    }

    require "exo_5_11.html";    
?>