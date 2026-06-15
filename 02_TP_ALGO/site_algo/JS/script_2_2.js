function myCarre() {
    let inp_small, i_carre;
    inp_small = document.getElementById("inp_small").value;
    i_carre = inp_small * inp_small;
    document.getElementById("i_resultat").innerHTML = `Le carré de ${inp_small} est ${i_carre}`;
    return false 
}

