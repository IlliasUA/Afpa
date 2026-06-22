<?php
$resulta= "";
if(isset($_POST["score_1"])) {
    $score_1= $_POST["score_1"];
    $score_2= $_POST["score_2"];
    $score_3= $_POST["score_3"];
    $score_4= $_POST["score_4"];
    $votants= $score_1 + $score_2 + $score_3 + $score_4;
    if((($score_1 / $votants) * 100 >= 12.5) && (($score_1 / $votants) * 100 <= 50)) {
        if ($score_1 > $score_2 && $score_1 > $score_3 && $score_1 > $score_4) {
            $resulta= "Candidat 1 participe au second tour en étant arrivé en tête";
        } else { 
            $resulta= "Candidat 1 participe au second tour sans avoir été en tête";
            }
    }
    if(($score_1 / $votants) * 100 > 50) {
        $resulta= "Candidat 1 est elu des le premier tour!";
    } else if(($score_1 / $votants) * 100 < 12.5) {
        $resulta= "Candidat 1 est perdu";
    }
}
require "exo_4_6.html";
?>