/*DEBUT */
function myGreeting() {
/*Variables*/
    let inp_prenom, inp_nom;

    inp_prenom = document.getElementById("inp_prenom").value;
    inp_nom = document.getElementById("inp_nom").value;
    
    document.getElementById("greeting").innerHTML = `Bonjour ${inp_prenom} ${inp_nom}!`;
    return false
}
/*FIN*/
