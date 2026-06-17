/* 4.1* JS*/
function tutuFunc() {
    let tutu, toto, tata;
    tutu = document.getElementById("inp_tutu").value;
    toto = document.getElementById("inp_toto").value;
    tata = document.getElementById("inp_tata").value;
    if((tutu <= toto + 4) && (tata != "OK")) {
        tutu -= 1;
    } else {
        tutu += 1;
    }
    document.getElementById("resulta").innerHTML = `${tutu}`;
    return false
}

/* 4.1 jQ*/
function tutuFunc_jq() {
    let tutu, toto, tata;
    tutu = $("#inp_tutu").val();
    toto = $("#inp_toto").val();
    tata = $("#inp_tata").val();
    if((tutu <= toto + 4) && (tata != "OK")) {
        tutu -= 1;
    } else {
        tutu += 1;
    }
    $("#resulta").html(`(jq) ${tutu}`);
    return false
}

/* 4.2* JS*/
function minutePlusTard() {
    let minutes, heur;
    minutes = document.getElementById("minutes").value;
    heur = document.getElementById("heur").value;
        minutes++;
    if(minutes == 60) {
        minutes = 0;
        heur++;
    } else if(heur == 24) {
        heur = 0;
        minutes = 0;
    } 
    document.getElementById("resulta").innerHTML = `Dans une minute, il sera ${heur} : ${minutes}`;
    return false
}

/* 4.2* jQ*/
function minutePlusTard_jq() {
    let minutes, heur;
    minutes = $("#minutes").val();
    heur = $("#heur").val();
    minutes++;
    if(minutes == 60) {
        minutes = 0;
        heur++;
    } else if(heur == 24) {
        heur = 0;
        minutes = 0;
    }
    $("#resulta").html(`(jq) Dans une minute, il sera ${heur} : ${minutes}`);
    return false
}

/* 4.3 JS*/
function secondePlusTard() {
   let = heures_1, minutes_1, secondes_1;
   heures_1 = document.getElementById("heures_1").value;
   minutes_1 = document.getElementById("minutes_1").value;
   secondes_1 = document.getElementById("secondes_1").value;
        secondes_1++;
   if(secondes_1 == 60) {
        secondes_1 = 0;
        minutes_1++;
   } else if(minutes_1 == 60 ) {
        secondes_1 = 0;
        minutes_1 = 0;
        heures_1++;
   } else if(heures_1 == 24) {
        secondes_1 = 0;
        minutes_1 = 0;
        heures_1 = 0;
   }
   document.getElementById("resulta").innerHTML = `Dans une seconde, il sera ${heures_1} heur(s) ${minutes_1} minute(s) ${secondes_1} seconde(s)`;
}

/* 4.3 jQ*/
function secondePlusTard_jq() {
    let = heures_1, minutes_1, secondes_1;
   heures_1 = $("#heures_1").val();
   minutes_1 = $("#minutes_1").val();
   secondes_1 = $("#secondes_1").val();
        secondes_1++;
   if(secondes_1 == 60) {
        secondes_1 = 0;
        minutes_1++;
   } else if(minutes_1 == 60 ) {
        secondes_1 = 0;
        minutes_1 = 0;
        heures_1++;
   } else if(heures_1 == 24) {
        secondes_1 = 0;
        minutes_1 = 0;
        heures_1 = 0;
   }
   $("#resulta").html(`(jq) Dans une seconde, il sera ${heures_1} heur(s) ${minutes_1} minute(s) ${secondes_1} seconde(s)`);
}

/* 4.4 JS*/
function myFacture() {
    let nombre_de_photocopies, facture;
    nombre_de_photocopies = document.getElementById("nombre_de_photocopies")
}


/* 4.4 JS*/
function myFacture_jq() {
    
}