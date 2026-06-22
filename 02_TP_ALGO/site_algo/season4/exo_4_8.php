<?php
    $resulta= "";
        if(isset($_POST["jour"])) {
            $jour= $_POST["jour"];
            $mois= $_POST["mois"];
            $anees= $_POST["anees"];
            $v_jour= $jour >= 1 && $jour <= 31;
            $v_mois= $mois >= 1 && $mois <= 12;
            $bis_anees = ($anees % 400 == 0) || (($anees % 4 == 0) && ($anees % 100 != 0));

            if ($v_mois) {
                if ($mois == 2) {
                    if ($bis_anees) {
                        $v_jour= ($jour >= 1 && $jour <= 29);
                    } else if (!($bis_anees)) { 
                        $v_jour= ($jour >= 1 && $jour <= 28);
                    }
                } else if ($mois == 4 || $mois == 6 || $mois == 9 || $mois == 11) {
                    $v_jour= ($jour >= 1 && $jour <= 30);
                    } else {
                    $v_jour= ($jour >= 1 && $jour <= 31);
                }
                
            }
            $v_date= $v_jour && $v_mois;
            if ($v_date) {
                $resulta= "(php) Votre date: $jour / $mois / $anees est valide!";
            } else { 
                $resulta= "(php) Votre date: $jour / $mois / $anees est NON valide!";
            }
        } 
    require "exo_4_8.html";
?>