/*DEBUT */
function mySurface() {
/*Variables*/
    let inp_largeur, inp_hauteur, surface;

    inp_largeur = document.getElementById("inp_largeur").value;
    inp_hauteur = document.getElementById("inp_hauteur").value;
    surface = inp_largeur * inp_hauteur;
    document.getElementById("surface").innerHTML = `${surface} px`;
    return false
}
/*FIN*/
