<?php
$resulta= "";
if(isset($_POST["inp_tutu"])) {
    $inp_tutu= $_POST["inp_tutu"];
    $inp_toto= $_POST["inp_toto"];
    $inp_tata= $_POST["inp_tata"];
    if(($inp_tutu <= $inp_toto + 4) && ($inp_tata != "OK")) {
        $inp_tutu -= 1;
    } else {
        $inp_tutu += 1;
    }
    $resulta= "(php) $inp_tutu";
}
require "exo_4_1.html";
?>