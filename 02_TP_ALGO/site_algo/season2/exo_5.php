<?php
$resulta = "";
if(isset($_POST["anee_de_naissance"])) {
    $anee_de_naissance = (int)$_POST["anee_de_naissance"];
    $anee_actuelle  = (int)$_POST["anee_actuelle"];
    $age = $anee_actuelle - $anee_de_naissance;
    $resulta = "(php) Vous avez $age ans";
}
require "exo_5.html";
?>