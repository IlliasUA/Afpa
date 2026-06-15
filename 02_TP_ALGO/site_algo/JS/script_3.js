/*DEBUT */
function myPosNegNumb() {
/*Variables*/
    let inp_number;

    inp_number = document.getElementById("inp_number").value;
    if(inp_number >= 0) {
        document.getElementById("resulta").innerHTML = `${inp_number} est positif`;
    } else {
        document.getElementById("resulta").innerHTML = `${inp_number} est negatif`;
    } 
    return false
}
/*FIN*/


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

function myRangeAlphabet() {
    let i_nom1, i_nom2, i_nom3;
    i_nom1 = document.getElementById("i_nom1").value;
    i_nom2 = document.getElementById("i_nom2").value;
    i_nom3 = document.getElementById("i_nom3").value;
    if (i_nom1 <= i_nom2 && i_nom2 <= i_nom3) {
        document.getElementById("resulta").innerHTML = `Votre trois nom sont dans l’ordre alphabétique`;
    } else
        document.getElementById("resulta").innerHTML = `Votre trois nom ne sont pas dans l’ordre alphabétique`;
        return false
}