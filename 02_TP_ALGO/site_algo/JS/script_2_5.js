/*DEBUT */
function myAge() {
/*Variables*/
    let anee_de_naissance, anee_actuelle, age;

    anee_de_naissance = document.getElementById("anee_de_naissance").value;
    anee_actuelle = document.getElementById("anee_actuelle").value;
    age = anee_actuelle - anee_de_naissance;
    document.getElementById("votre_age").innerHTML = `Vous avez ${age} ans`;
    return false
}
/*FIN*/
