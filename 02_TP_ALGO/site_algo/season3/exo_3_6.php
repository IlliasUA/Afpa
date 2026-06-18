<?php
$resulta= "";
if(isset($_POST["i_age"])) {
    $i_age= $_POST["i_age"];
    if($i_age > 5 && $i_age < 8) {
        $resulta= "(php) Poussin de 6 à 7 ans";
    } else if($i_age > 7 && $i_age < 10)  {
        $resulta= "(php) Pupille de 8 à 9 ans";
    } else if ($i_age > 9 && $i_age < 12) {
        $resulta= "(php) Minime de 10 à 11 ans";
    } else if ($i_age >= 12) {
        $resulta= "(php) Cadet après 12 ans";
    } else {
        $resulta= "(php) Saisir l'âge à partir de 6 ans";
    }
}
require "exo_3_6.html";
?>