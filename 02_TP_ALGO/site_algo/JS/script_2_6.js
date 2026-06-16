function mySurface() {

    let inp_largeur, inp_hauteur, surface;

    inp_largeur = document.getElementById("inp_largeur").value;
    inp_hauteur = document.getElementById("inp_hauteur").value;
    surface = inp_largeur * inp_hauteur;
    document.getElementById("surface").innerHTML = `${surface} px`;
    return false
}

function mySurface_jq() {
    let inp_largeur, inp_hauteur, surface;

    inp_largeur = $("#inp_largeur").val();
    inp_hauteur = $("#inp_hauteur").val();
    surface = inp_largeur * inp_hauteur;
    $("#surface").html(`(jq) ${surface} px`);
    return false
}
