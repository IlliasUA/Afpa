
/*6.1 js*/
function myArrNombreZero () {
    let arrNum = [];
    for(let i = 0; i < 7; i++) {
        arrNum[i] = 0;
    }
        document.getElementById("resulta").innerHTML=`arrNum =  [${arrNum.join(", ")}] `; 
}

/*6.1 jq*/
function myArrNombreZero_jq () {
    let arrNum = [];
    for(let i = 0; i < 7; i++) {
        arrNum[i] = 0;
    }
        $("#resulta").html(`(jq) arrNum =  [${arrNum.join(", ")}] `);
}

/*6.2 js */
function myArrVoyelles () {
    let arrVoyelles = [];
        arrVoyelles[0] = "A";
        arrVoyelles[1] = "E";
        arrVoyelles[2] = "I";
        arrVoyelles[3] = "O";
        arrVoyelles[4] = "U";
        arrVoyelles[5] = "Y";
    document.getElementById("resulta").innerHTML= `arrVoyelles = [${arrVoyelles.join(", ")}] `;
}

/*6.2 jq */
function myArrVoyelles_jq () {
    let arrVoyelles = [];
        arrVoyelles[0] = "A";
        arrVoyelles[1] = "E";
        arrVoyelles[2] = "I";
        arrVoyelles[3] = "O";
        arrVoyelles[4] = "U";
        arrVoyelles[5] = "Y";
    $("#resulta").html(`(jq) arrVoyelles = [${arrVoyelles.join(", ")}] `);
}

/*6.3 js*/
function myNotes () {
    let arrNotes = [];
    
    for(let i=1; i<=9; i++) {
        arrNotes.push(document.getElementById("iNote" + i).value);
        /*arrNotes += document.getElementById("iNote" + i).value;  -  (marche pas)  */ 
    }
    document.getElementById("resulta").innerHTML= `Votre tableau de notes est: [${arrNotes.join(", ")}]`;    
}

/*6.3 jq*/
function myNotes_jq () {
    let arrNotes = [];
    
    for(let i=1; i<=9; i++) {
        arrNotes.push($("#iNote" + i).val());
    }
    $("#resulta").html(`(jq) Votre tableau de notes est: [${arrNotes.join(", ")}]`);
}

/*6.4 js*/
function myArrOneACinq () {
    let nb = [];
    let i;
    for(i=0; i<5; i++) {
        nb[i] = i * i;
    }
    document.getElementById("resulta").innerHTML= ` nb = [${nb.join(", ")}]`; 
}

/*6.4 jq */
function myArrOneACinq_jq () {
    let nb = [];

    for(let i=0; i<5; i++) {
        nb[i] = i * i;
    }
    $("#resulta").html(`(jq)  nb = [${nb.join(", ")}]`);
}

/*6.5 js */
function myArrOneASix () {
    let tabN = [1];
    for(let k=1; k<6; k++) {
        tabN[k] = tabN[k-1] + 2;
    }
    for(let i=0; i<6; i++) {
        document.getElementById("resulta").innerHTML= `tabN = [${tabN.join(", ")}]`;
    }
}

/*6.5 jq */
function myArrOneASix_jq () {
    let tabN = [1];
    for(let k=1; k<6; k++) {
        tabN[k] = tabN[k-1] + 2;
    }
    for(let i=0; i<6; i++) {
        $("#resulta").html(`(jq) tabN = [${tabN.join(", ")}]`);
    }
}

/*6.6 js */
function tabSuite () {
    let tabSuite = [1, 1];
    for(i=2; i<7; i++) {
        tabSuite[i] = tabSuite[i-1] + tabSuite[i-2];
    }
    for(i=0; i<7; i++) {
        document.getElementById("resulta").innerHTML= `tabSuite = [${tabSuite.join(", ")}]`
    }
}

/*6.6 jq */
function tabSuite_jq () {
    let tabSuite = [1, 1];
    for(i=2; i<7; i++) {
        tabSuite[i] = tabSuite[i-1] + tabSuite[i-2];
    }
    for(i=0; i<7; i++) {
        $("#resulta").html(`(jq) tabSuite = [${tabSuite.join(", ")}]`);
    }
}

/*6.7 js*/
function myNotesMoyen () {
    let arrNotesMoyen = [];
    let sumMoyen = 0;
    for(let i=1; i<10; i++) {
        arrNotesMoyen.push($("#iNote" + i).val());
    }
    for(let i=0; i<9; i++) {
        sumMoyen += Number(arrNotesMoyen[i] / 9);
    } sumMoyen = sumMoyen.toFixed(2);
    document.getElementById("resulta").innerHTML= `La moyenne des votre notes est: ${sumMoyen}`
}



/*6.7 jq*/
function myNotesMoyen_jq () {
    let arrNotesMoyen = [];
    let sumMoyen = 0;
    for(let i=1; i<10; i++) {
        arrNotesMoyen.push($("#iNote" + i).val());
    }
    for(let i=0; i<9; i++) {
        sumMoyen += Number(arrNotesMoyen[i] / 9);
    } sumMoyen = sumMoyen.toFixed(2);
    $("#resulta").html(`(jq) La moyenne des votre notes est: ${sumMoyen}`);
}

/*6.8 js*/
function myValNegPos () {
    let arrValeurs = [];
    let fArticles = document.getElementById("fArticles").value;
    let negatif = 0;
    let positif = 0;
    let nul = 0;
    for(let i=0; i<fArticles; i++) {
        arrValeurs[i] = Number(document.getElementById("iNombre"+(i+1)).value);
    }
    for(i=0; i<fArticles; i++) {
        if(arrValeurs[i] < 0) {
            negatif++;
        } else if (arrValeurs[i] > 0) {
            positif++;
        }else {
            nul++
        }
    }
    document.getElementById("resulta").innerHTML= `Dans votre tableau il y a: <br> - ${positif} valeurs positiv <br> - ${negatif} valeurs negatif <br> - ${nul} valeur 0`
}

/*6.8 jq */
function myValNegPos_jq () {
    let arrValeurs = [];
    let fArticles = ($("#fArticles").val());
    let negatif = 0;
    let positif = 0;
    let nul = 0;
    for(let i=0; i<fArticles; i++) {
        arrValeurs[i] = ($("#iNombre" + (i+1)).val());
    }
    for(i=0; i<fArticles; i++) {
        if(arrValeurs[i] < 0) {
            negatif++;
        } else if (arrValeurs[i] > 0) {
            positif++;
        }else {
            nul++
        }
    }
    $("#resulta").html(`(jq) Dans votre tableau il y a: <br> - ${positif} valeurs positiv <br> - ${negatif} valeurs negatif <br> - ${nul} valeur 0`);
}

/*6.9 js*/
function myCalculeSommeArr () {
    let arrNombre = [];
    let iNbTableau= 5;
    let sommeVal = 0;

    for(let i=0; i<iNbTableau; i++) {
        arrNombre[i] = Math.floor(Math.random() * 100) + 1;    
    }
    for(let i=0; i<iNbTableau; i++) {
        sommeVal += arrNombre[i];
    }
    document.getElementById("resulta").innerHTML=`la somme des valeurs d’un tableau est: ${sommeVal}`
}

/*6.9 jq
function myCalculeSommeArr () {
    let arrNombre = [n];
    let sommeVal = "";

    for(let i=0; i<arrNombre.length; i++) {
        sommeVal += arrNombre[i];
    }
    document.getElementById("resulta").innerHTML=`la somme des valeurs d’un tableau est: ${sommeVal}`
}*/


/*6.10 js */
function myDeuxTab() {
    let my_tab = [];
    let tab_1 = [4, 8, 7, 9, 1, 5, 4 ,6];
    let tab_2 = [7, 6, 5, 2, 1, 3, 7, 4];
    for(let i=0; i<tab_1.length; i++) {
        my_tab[i] = tab_1[i] + tab_2[i];
    }
    document.getElementById("resulta").innerHTML= `Le nouveau tableau est my_tab = [${my_tab.join(", ")}]`
}


/*6.10 jq */
function myDeuxTab_jq() {
    let my_tab = [];
    let tab_1 = [4, 8, 7, 9, 1, 5, 4 ,6];
    let tab_2 = [7, 6, 5, 2, 1, 3, 7, 4];
    for(let i=0; i<tab_1.length; i++) {
        my_tab[i] = tab_1[i] + tab_2[i];
    }
    $("#resulta").html(`(jq) Le nouveau tableau est my_tab = [${my_tab.join(", ")}]`);
}

/*6.11 js */
function myCalculeDeuxTab() {
    let my_newTab= [];
    let somme= 0;
    let tab_1= [4, 8, 7, 12];
    let tab_2= [3, 6];
    for(let i=0; i<tab_1.length; i++) {
        my_newTab[i] = tab_1[i] * tab_2[0] + tab_1[i] * tab_2[1];
        somme += tab_1[i] * tab_2[0] + tab_1[i] * tab_2[1];
    }
    document.getElementById("resulta").innerHTML= `Votre nouveau tableau est: [${my_newTab.join(", ")}] avec sommes total: ${somme}`
}

/*6.11 jq */
function myCalculeDeuxTab_jq() {
    let my_newTab= [];
    let somme= 0;
    let tab_1= [4, 8, 7, 12];
    let tab_2= [3, 6];
    for(let i=0; i<tab_1.length; i++) {
        my_newTab[i] = tab_1[i] * tab_2[0] + tab_1[i] * tab_2[1];
        somme += tab_1[i] * tab_2[0] + tab_1[i] * tab_2[1];
    }
    $("#resulta").html(`(jq) Votre nouveau tableau est: [${my_newTab.join(", ")}] avec sommes total: ${somme}`);
}

/*6.12 js*/
function myAgmntDeUn () {
    let arrValeurs=[]; 
    let arrValeursNew=[]; 
    let fArticles= document.getElementById("fArticles").value;
    for(let i=0; i<fArticles; i++) {
        arrValeurs[i] = Number(document.getElementById("iNombre"+(i+1)).value);
    }
    for(let i=0; i<fArticles; i++) {                 /*soit on utilise map(): arrValeursNew = arrValeurs.map(val => val + 1) */
        arrValeursNew[i] = arrValeurs[i] + 1;
    }
    document.getElementById("resulta").innerHTML=`Votre nouveau tableau est: [${arrValeursNew.join(", ")}]<br> Il est augmentées de 1!`;    
} 

/*6.12 jq*/
function myAgmntDeUn_jq () {
    let arrValeurs=[]; 
    let arrValeursNew=[];
    let fArticles= $("#fArticles").val();
    for(let i=0; i<fArticles; i++) {
        arrValeurs[i] = Number($("#iNombre"+(i+1)).val());
    }
    for(let i=0; i<fArticles; i++) {
        arrValeursNew[i] = arrValeurs[i] + 1;  
    }
    $("#resulta").html(`(jq) Votre nouveau tableau est: [${arrValeursNew.join(", ")}]<br> Il est augmentées de 1!`);
}