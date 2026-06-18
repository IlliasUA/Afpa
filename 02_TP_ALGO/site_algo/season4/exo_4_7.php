<?php
$resulta= "";
if(isset($_POST["score"])) {
    $score= $_POST["score"];
    $votants= $_POST["votants"];
    if(($score / $votants) * 100 > 50) {
        $resulta= "(php) Votre candidat est elu des le premier tour!";
    } else if(($score / $votants) * 100 >= 12.5) {
        $resulta= "(php) Votre candidat peut participier au second tour!";
    } else if(($score / $votants) * 100 <= 12.5) {
        $resulta= "(php) Votre candidat est perdu";
    }
}
require "exo_4_7.html";
?>