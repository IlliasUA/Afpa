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


/* 5.2 JS*/ 
function myNomberCompris_5_2 () {
    let iNombre;
    iNombre = Number(document.getElementById("iNombre").value);
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
    iNombre = Number($("#iNombre").val());
    if (iNombre < 10) {
         $("#resulta").html(`(jq) Plus grand!`);
    } else if (iNombre > 20) {
         $("#resulta").html(`(jq) Plus petit!`);   
    } else {
         $("#resulta").html(`(jq) Saisie OK`);
    }
}

/*5.2  JS (B)*/
let iNombreHasard = Math.floor(Math.random() * 100) + 1; 

function myNomberCompris_5_2b () {
    let iNombre = Number(document.getElementById("iNombre").value);
    if (iNombre < iNombreHasard) {
         document.getElementById("resulta").innerHTML= "Plus grand!";
    } else if (iNombre > iNombreHasard) {
         document.getElementById("resulta").innerHTML= "Plus petit!";
    } else {
         document.getElementById("resulta").innerHTML= "Saisie OK";
    }
}


/*5.2  jq (B)*/

function myNomberCompris_5_2b_jq () {
    let iNombre = $("#iNombre").val();
    if (iNombre < iNombreHasard) {
        $("#resulta").html(`(jq) Plus grand!`);
    } else if (iNombre > iNombreHasard) {
        $("#resulta").html(`(jq) Plus petit!`);
    } else if (iNombre == iNombreHasard) {
        $("#resulta").html(`(jq) Saisie OK!`);
    }
}


/* 5.3*/
function myNomberDepart () {
     let iNombre = Number(document.getElementById("iNombre").value);
     let iCompteur = 0;
     let resultat = ""; 

     while(iCompteur < 10) {
         iNombre ++;
         resultat += iNombre + " ";
         iCompteur ++;
     } 
     document.getElementById("resultat").innerHTML= resultat;
}  

/* 5.3*/
function myNomberDepart_jq () {
     let iNombre = Number($("#iNombre").val());
     let iCompteur = 0;
     let resultat = ""; 

     while(iCompteur < 10) {
         iNombre ++;
         resultat += iNombre + " ";
         iCompteur ++;
     } 
     $("#resultat").html(`(jq) ${resultat}`);
}  