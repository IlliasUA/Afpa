/*3.1 */
function myPosNegNumb() {
    let inp_number;

    inp_number = document.getElementById("inp_number").value;
    if(inp_number >= 0) {
        document.getElementById("resulta").innerHTML = `${inp_number} est positif`;
    } else {
        document.getElementById("resulta").innerHTML = `${inp_number} est negatif`;
    } 
    return false
}


/*3.2*/
function myCalculeProduit() {
    let i_num1, i_num2;
    i_num1 = document.getElementById("i_num1").value;
    i_num2 = document.getElementById("i_num2").value;
    if((i_num1 > 0 && i_num2 > 0) || (i_num1 < 0 && i_num2 < 0)) {
        document.getElementById("resulta").innerHTML = `Votre produit est positif`;
    } else if((i_num1 > 0 && i_num2 < 0) || (i_num1 < 0 && i_num2 >0)) {
        document.getElementById("resulta").innerHTML = `Votre produit est negatif`;
    }
    return false 
}

/*3.3 */
function myRangeAlphabet() {
    let i_nom1, i_nom2, i_nom3;
    i_nom1 = document.getElementById("i_nom1").value;
    i_nom2 = document.getElementById("i_nom2").value;
    i_nom3 = document.getElementById("i_nom3").value;
    if (i_nom1 <= i_nom2 && i_nom2 <= i_nom3) {
        document.getElementById("resulta").innerHTML = `Votre trois nom sont dans l’ordre alphabétique`;
    } else {
        document.getElementById("resulta").innerHTML = `Votre trois nom ne sont pas dans l’ordre alphabétique`;
        }
        return false
}

/*3.4*/
function NumbIncluZero() {
    let i_num1;
    i_num1 = document.getElementById("i_num1").value;
    if(i_num1 > 0) {
        document.getElementById("resulta").innerHTML = `Votre nomber est positif!`;
    } else if(i_num1 < 0) {
        document.getElementById("resulta").innerHTML = `Votre nomber est negatif!`;
    } else {
        document.getElementById("resulta").innerHTML = `Votre nomber est 0!`;
        }
        return false
}

/*3.5 */
function ProduitIncluZero() {
    let i_num1, i_num2;
    i_num1 = document.getElementById("i_num1").value;
    if((i_num1 > 0 && i_num2 > 0) || (i_num1 < 0 && i_num2 < 0)) {
        document.getElementById("resulta").innerHTML = `Votre nomber est positif!`;
    } else if((i_num1 < 0 && i_num2 > 0) || (i_num1 > 0 && i_num2 < 0)) {
        document.getElementById("resulta").innerHTML = `Votre nomber est negatif!`;
    } else {
        document.getElementById("resulta").innerHTML = `Votre nomber est nul!`;
    }
    return false
}

/*3.6A*/
function myCategorie() {
    let age;
    age = document.getElementById("i_age").value;
    if(age > 5 && age < 8) {
        document.getElementById("resulta").innerHTML = `Poussin de 6 à 7 ans`;
    } else if (age > 7 && age < 10)  {
        document.getElementById("resulta").innerHTML = `Pupille de 8 à 9 ans`;
    } else if (age > 9 && age < 12) {
        document.getElementById("resulta").innerHTML = `Minime de 10 à 11 ans`;
    } else if (age >= 12) {
        document.getElementById("resulta").innerHTML = `Cadet après 12 ans`;
    } else {
        document.getElementById("resulta").innerHTML = `Saisir l'âge à partir de 6 ans`;
    }
    return false
}

/*  ***************************************************function jQuery*****************************************************/

function myPosNegNumb_jq() {
    let inp_number;
    inp_number = $("#inp_number").val();
    if(inp_number >= 0) {
        $("#resulta").html(`(jq) ${inp_number} est positif`);
    } else {
        $("#resulta").html(`(jq) ${inp_number} est negatif`);
    } 
    return false
}

function myCalculeProduit_jq() {
    let i_num1, i_num2;
    i_num1 = $("#i_num1").val();
    i_num2 = $("#i_num2").val();
    if((i_num1 > 0 && i_num2 > 0) || (i_num1 < 0 && i_num2 < 0)) {
        $("#resulta").html(`(jq) Votre produit est positif`);
    } else if((i_num1 > 0 && i_num2 < 0) || (i_num1 < 0 && i_num2 >0)) {
        $("#resulta").html(`(jq) Votre produit est negatif`);
    }
    return false 
}

function myRangeAlphabet_jq() {
    let i_nom1, i_nom2, i_nom3;
    i_nom1 = $("#i_nom1").val();
    i_nom2 = $("#i_nom2").val();
    i_nom3 = $("#i_nom3").val();
    if (i_nom1 <= i_nom2 && i_nom2 <= i_nom3) {
        $("#resulta").html(`(jq) Votre trois nom sont dans l’ordre alphabétique`);
    } else {
        $("#resulta").html(`(jq) Votre trois nom ne sont pas dans l’ordre alphabétique`);
        }
        return false
}

function NumbIncluZero_jq() {
    let i_num1;
    i_num1 = $("#i_num1").val();
    if(i_num1 > 0) {
        $("#resulta").html(`(jq) Votre nomber est positif!`);
    } else if(i_num1 < 0) {
        $("#resulta").html(`(jq) Votre nomber est negatif!`);
    } else {
        $("#resulta").html(`(jq) Votre nomber est nul!`);
    }
        return false
}

function ProduitIncluZero_jq() {
    let i_num1, i_num2;
    i_num1 = $("#i_num1").val();
    i_num2 = $("#i_num2").val();
    if((i_num1 > 0 && i_num2 > 0) || (i_num1 < 0 && i_num2 < 0)) {
         $("#resulta").html(`(jq) Votre nomber est positif!`);
    } else if((i_num1 < 0 && i_num2 > 0) || (i_num1 > 0 && i_num2 < 0)) {
        $("#resulta").html(`(jq) Votre nomber est negatif!`);
    } else {
        $("#resulta").html(`(jq) Votre nomber est nul!`);
    }
    return false
}

function myCategorie_jq() {
    let i_age;
    age = $("#i_age").val();
    if(age > 5 && age < 8) {
        $("#resulta").html(`(jq) Poussin de 6 à 7 ans`);
    } else if (age > 7 && age < 10)  {
        $("#resulta").html(`(jq) Pupille de 8 à 9 ans`);
    } else if (age > 9 && age < 12) {
        $("#resulta").html(`(jq) Minime de 10 à 11 ans`);
    } else if (age >= 12) {
        $("#resulta").html(`(jq) Cadet après 12 ans`);
    } else {
        $("#resulta").html(`(jq) Saisir l'âge à partir de 6 ans`);
    }
    return false
}