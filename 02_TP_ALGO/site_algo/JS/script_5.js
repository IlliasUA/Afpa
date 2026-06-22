/* 5.1* JS*/
function myNomberCompris() {
    let iNombre;
    iNombre = document.getElementById("iNombre").value;
    if ((iNombre < 1) || (iNombre > 3)) {
         document.getElementById("resulta").innerHTML = `Saisie erronée. Recommoncez`;
    } else {
         document.getElementById("resulta").innerHTML= "Saisie OK";
    }
}

/* 5.1* JQ*/
function myNomberCompris_jq() {
    let iNombre;
    iNombre = $("#iNombre").val();
    if ((iNombre < 1) || (iNombre > 3)) {
        $("#resulta").html(`(jq) Saisie erronée. Recommoncez`);
    } else {
        $("#resulta").html(`(jq) Saisie OK`);
    }
}


/* 5.2* JS*/
function myNomberCompris_5_2 () {
    let iNombre;
    iNombre = document.getElementById("iNombre").value;
    if (iNombre < 10) {
         document.getElementById("resulta").innerHTML= "Plus grand!";
    } else if (iNombre > 20) {
         document.getElementById("resulta").innerHTML= "Plus petit!";
    } else {
         document.getElementById("resulta").innerHTML= "Saisie OK";
    }
}

/* 5.2* JQ*/
function myNomberCompris_5_2_jq () {
    let iNombre;
    iNombre = $("#iNombre").val();
    if (iNombre < 10) {
         $("#resulta").html(`(jq) Plus grand!`);
    } else if (iNombre > 20) {
         $("#resulta").html(`(jq) Plus petit!`);   
    } else {
         $("#resulta").html(`(jq) Saisie OK`);
    }
}