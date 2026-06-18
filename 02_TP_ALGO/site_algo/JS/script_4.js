/* 4.1* JS*/
function tutuFunc() {
    let tutu, toto, tata;
    tutu = Number(document.getElementById("inp_tutu").value);
    toto = Number(document.getElementById("inp_toto").value);
    tata = Number(document.getElementById("inp_tata").value);
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
    if(minutes >= 60) {
        minutes = 0;
        heur++;
    } if(heur >= 24) {
        heur = 0;
    } 
    document.getElementById("resulta").innerHTML = `Dans une minute, il sera ${heur} heur(s) ${minutes} minute(s)`;
    return false
}

/* 4.2* jQ*/
function minutePlusTard_jq() {
    let minutes, heur;
    minutes = $("#minutes").val();
    heur = $("#heur").val();
    minutes++;
    if(minutes >= 60) {
        minutes = 0;
        heur++;
    } if(heur >= 24) {
        heur = 0;
    }
    $("#resulta").html(`(jq) Dans une minute, il sera ${heur} heur(s) ${minutes} minute(s)`);
    return false
}

/* 4.3 JS*/
function secondePlusTard() {
   let = heures_1, minutes_1, secondes_1;
   heures_1 = document.getElementById("heures_1").value;
   minutes_1 = document.getElementById("minutes_1").value;
   secondes_1 = document.getElementById("secondes_1").value;
        secondes_1++;
   if(secondes_1 >= 60) {
        secondes_1 = 0;
        minutes_1++;
   } if(minutes_1 >= 60 ) {
        secondes_1 = 0;
        heures_1++;
   } if(heures_1 >= 24) {
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
   if(secondes_1 >= 60) {
        secondes_1 = 0;
        minutes_1++;
   } if(minutes_1 >= 60 ) {
        secondes_1 = 0;
        heures_1++;
   } if(heures_1 >= 24) {
        heures_1 = 0;
   }
   $("#resulta").html(`(jq) Dans une seconde, il sera ${heures_1} heur(s) ${minutes_1} minute(s) ${secondes_1} seconde(s)`);
}

/* 4.4 JS*/
function myFacture() {
    let nombre_de_photocopies, facture;
    nombre_de_photocopies = Number(document.getElementById("nombre_de_photocopies").value);
    if(nombre_de_photocopies <= 10) {
        facture = nombre_de_photocopies * 0.1;
    } else if((nombre_de_photocopies > 10) && (nombre_de_photocopies <= 30)) {
        facture = 10 * 0.1 + (nombre_de_photocopies - 10) * 0.09;
    } else if(nombre_de_photocopies > 30) {
        facture = 10 * 0.1 + 20 * 0.09 + (nombre_de_photocopies - 30) * 0.08;
    }
    document.getElementById("resulta").innerHTML = `Votre facture est ${facture.toFixed(2)}`;
}



/* 4.4 JQ*/
function myFacture_jq() {
    let nombre_de_photocopies, facture;
    nombre_de_photocopies = $("#nombre_de_photocopies").val();
    if(nombre_de_photocopies <= 10) {
        facture = nombre_de_photocopies * 0.1;
    } else if((nombre_de_photocopies > 10) && (nombre_de_photocopies <= 30)) {
        facture = 10 * 0.1 + (nombre_de_photocopies - 10) * 0.09;
    } else if(nombre_de_photocopies > 30) {
        facture = 10 * 0.1 + 20 * 0.09 + (nombre_de_photocopies - 30) * 0.08;
    }
    $("#resulta").html(`(jq) Votre facture est ${facture.toFixed(2)}`);
}

/* 4.5 JS*/
function myImpo() {
    let sexe, age;
    sexe= document.getElementById("sexe").value;
    age= Number(document.getElementById("age").value);
    if((sexe == "homme" && age >= 20) || (sexe == "femme" && (age >= 18 && age <= 35))) {
        document.getElementById("resulta").innerHTML = `Habitant est imposable`;
    } else{
        document.getElementById("resulta").innerHTML = `Habitant est non imposable`; 
    }
}

/* 4.5 JQ*/
function myImpo_jq() {
    let sexe, age;
    sexe= $("#sexe").val();
    age= $("#age").val();
    if((sexe == "homme" && age >= 20) || (sexe == "femme" && (age >= 18 && age <= 35))) {
        $("#resulta").html(`(jq) Habitant est imposable`);
    } else{
        $("#resulta").html(`(jq) Habitant est non imposable`); 
    }
}

/* 4.6 JS*/
function myCandidat() {
    let score, votants;
    score= document.getElementById("score").value;
    votants= document.getElementById("votants").value;
    if((score / votants) * 100 > 50) {
        document.getElementById("resulta").innerHTML = `Votre candidat est elu des le premier tour!`;
    } else if((score / votants) * 100 >= 12.5) {
        document.getElementById("resulta").innerHTML = `Votre candidat peut participier au second tour!`;
    } else if((score / votants) * 100 <= 12.5) {
        document.getElementById("resulta").innerHTML = `Votre candidat est perdu`;
    }
}

/* 4.6 JQ*/
function myCandidat_jq() {
    let score, votants;
    score= $("#score").val();
    votants= $("#votants").val();
    if((score / votants) * 100 > 50) {
        $("#resulta").html(`(jq) Votre candidat est elu des le premier tour!`);
    } else if((score / votants) * 100 >= 12.5) {
        $("#resulta").html(`(jq) Votre candidat peut participier au second tour!`);
    } else if((score / votants) * 100 <= 12.5) {
        $("#resulta").html(`(jq) Votre candidat est perdu`);
    }
}