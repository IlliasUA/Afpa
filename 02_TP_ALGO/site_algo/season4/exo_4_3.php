<?php
$resulta= "";
if(isset($_POST["heures_1"])) {
    $heures_1= $_POST["heures_1"];
    $minutes_1= $_POST["minutes_1"];
    $secondes_1= $_POST["secondes_1"];
        $secondes_1++;
            if($secondes_1 >= 60) {
                $secondes_1 = 0;
                $minutes_1++;
   }        if($minutes_1 >= 60) {
                $minutes_1 = 0;
                $heures_1++;
   }        if($heures_1 >= 24) {
                $heures_1 = 0;
   }
   $resulta= "(php) Dans une seconde, il sera $heures_1 heur(s) $minutes_1 minute(s) $secondes_1 seconde(s)";
}
require "exo_4_3.html";
?>