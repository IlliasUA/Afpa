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


/* 4.6(A) JS*/
function myCandidat() {
    let score_1, score_2, score_3, score_4, votants;
    score_1= Number(document.getElementById("score_1").value);
    score_2= Number(document.getElementById("score_2").value);
    score_3= Number(document.getElementById("score_3").value);
    score_4= Number(document.getElementById("score_4").value);

    votants= score_1 + score_2 + score_3 + score_4;
    if(((score_1 / votants) * 100 >= 12.5) && ((score_1 / votants) * 100 <= 50)) {
        if (score_1 > score_2 && score_1 > score_3 && score_1 > score_4) {
            document.getElementById("resulta").innerHTML = "Candidat 1 participe au second tour en étant arrivé en tête";
        } else { 
            document.getElementById("resulta").innerHTML = "Candidat 1 participe au second tour sans avoir été en tête";
        }
    }
    if((score_1 / votants) * 100 > 50) {
        document.getElementById("resulta").innerHTML = "Candidat 1 est elu des le premier tour!";
    } else if((score_1 / votants) * 100 < 12.5) {
        document.getElementById("resulta").innerHTML = "Candidat 1 est perdu";
    }
}


/* 4.6(A) Jq*/
function myCandidat_jq() {
    let score_1, score_2, score_3, score_4, votants;
    score_1= Number($("#score_1").val());
    score_2= Number($("#score_2").val());
    score_3= Number($("#score_3").val());
    score_4= Number($("#score_4").val());

    votants= score_1 + score_2 + score_3 + score_4;
    if(((score_1 / votants) * 100 >= 12.5) && ((score_1 / votants) * 100 <= 50)) {
        if (score_1 > score_2 && score_1 > score_3 && score_1 > score_4) {
            $("#resulta").html("(JQ) Candidat 1 participe au second tour en étant arrivé en tête");
        } else { 
            $("#resulta").html("(JQ) Candidat 1 participe au second tour sans avoir été en tête");
        }
    }
    if((score_1 / votants) * 100 > 50) {
        $("#resulta").html("(JQ) Candidat 1 est elu des le premier tour!");
    } else if((score_1 / votants) * 100 < 12.5) {
        $("#resulta").html("(JQ) Candidat 1 est perdu");
    }
}


/* 4.7 JS*/
function myAssurance() {
    let age, annees_permis, accident, annees_client, tarif;
    const rouge = "Tarif Rouge";
    const orange = "Tarif Orange";
    const vert = "Tarif Vert";
    const blue = "Tarif Blue";

    age= document.getElementById("age").value;
    annees_permis= document.getElementById("annees_permis").value;
    accident= document.getElementById("accident").value;
    annees_client= document.getElementById("annees_client").value;

    if(age < 25 && annees_permis < 2) {
        if(accident == 0) {
                tarif = rouge;
        } else {
                tarif = "Refuse!";
            }
    } else if ((age < 25 && annees_permis >= 2) || (age >= 25 && annees_permis < 2)) {
        if (accident == 0) {
                tarif = orange;
            } else if (accident == 1) {
                tarif = rouge;
            } else {
                tarif = "Refuse";
            }
    } else if (age >= 25 && annees_permis >= 2) {
        if(accident == 0) {
                tarif = vert;
            } else if (accident == 1) {
                tarif = orange;
            } else if (accident == 2) {
                tarif = rouge;
            } else {
                tarif = "Refuse";
            }
    }
    if(annees_client > 5 && tarif != "Refuse") {
        if(tarif == vert) {
            tarif = blue;
        } else if(tarif == orange) {
            tarif = vert
        } else if(tarif == rouge) {
            tarif = orange;
        }
    }
    document.getElementById("resulta").innerHTML = tarif;
}


/* 4.7 Jq*/
function myAssurance_jq() {
    let age, annees_permis, accident, annees_client, tarif;
    const rouge = "Tarif Rouge";  
    const orange = "Tarif Orange";
    const vert = "Tarif Vert";
    const blue = "Tarif Blue";

    age= $("#age").val();
    annees_permis= $("#annees_permis").val();
    accident= $("#accident").val();
    annees_client= $("#annees_client").val();

    if(age < 25 && annees_permis < 2) {
        if(accident == 0) {
                tarif = rouge;
        } else {
                tarif = "Refuse!";
            }
    } else if ((age < 25 && annees_permis >= 2) || (age >= 25 && annees_permis < 2)) {
        if (accident == 0) {
                tarif = orange;
            } else if (accident == 1) {
                tarif = rouge;
            } else {
                tarif = "Refuse";
            }
    } else if (age >= 25 && annees_permis >= 2) {
        if(accident == 0) {
                tarif = vert;
            } else if (accident == 1) {
                tarif = orange;
            } else if (accident == 2) {
                tarif = rouge;
            } else {
                tarif = "Refuse";
            }
    }
    if(annees_client > 5 && tarif != "Refuse") {
        if(tarif == vert) {
            tarif = blue;
        } else if(tarif == orange) {
            tarif = vert
        } else if(tarif == rouge) {
            tarif = orange;
        }
    }
    $("#resulta").html(`(JQ) ${tarif}`);
}


/* 4.8 JS*/
function myDate() {
    let jour, mois, anees, bis_anees, v_jour, v_mois, v_date;
    jour= Number(document.getElementById("jour").value);
    mois= Number(document.getElementById("mois").value);
    anees= Number(document.getElementById("anees").value);

    v_jour= jour >= 1 && jour <= 31;
    v_mois= mois >= 1 && mois <= 12;
    bis_anees = (anees % 400 == 0) || ((anees % 4 == 0) && (anees % 100 != 0));
    if (v_mois) {
        if (mois == 2) {
            if (bis_anees) {
                v_jour= (jour >= 1 && jour <= 29);
                } else if (!(bis_anees)) { 
                v_jour= (jour >= 1 && jour <= 28);
                }
            } else if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
                v_jour= (jour >= 1 && jour <= 30);
            } else {
                v_jour= (jour >= 1 && jour <= 31);
        }
    }
    v_date= v_jour && v_mois;
    if (v_date) {
        document.getElementById("resulta").innerHTML = `Votre date: ${jour} / ${mois} / ${anees} est valide!`;
    } else { 
        document.getElementById("resulta").innerHTML = `Votre date: ${jour} / ${mois} / ${anees} est NON valide!`;
    }
}


/* 4.8 Jq*/
function myDate_jq() {
    let jour, mois, anees, bis_anees, v_jour, v_mois, v_date;
    jour= $("#jour").val();
    mois= $("#mois").val();
    anees= $("#anees").val();

    v_jour= jour >= 1 && jour <= 31;
    v_mois= mois >= 1 && mois <= 12;
    bis_anees = (anees % 400 == 0) || ((anees % 4 == 0) && (anees % 100 != 0));
    if (v_mois) {
        if (mois == 2) {
            if (bis_anees) {
                v_jour= (jour >= 1 && jour <= 29);
                } else if (!(bis_anees)) { 
                v_jour= (jour >= 1 && jour <= 28);
                }
            } else if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
                v_jour= (jour >= 1 && jour <= 30);
            } else {
                v_jour= (jour >= 1 && jour <= 31);
        }
    }
    v_date= v_jour && v_mois;
    if (v_date) {
        $("#resulta").html(`(JQ) Votre date: ${jour} / ${mois} / ${anees} est valide!`);
    } else { 
        $("#resulta").html(`(JQ) Votre date: ${jour} / ${mois} / ${anees} est NON valide!`);
    }
}