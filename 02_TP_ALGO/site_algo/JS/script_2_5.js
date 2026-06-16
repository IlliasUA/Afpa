function myAge() {
    let anee_de_naissance, anee_actuelle, age;

    anee_de_naissance = document.getElementById("anee_de_naissance").value;
    anee_actuelle = document.getElementById("anee_actuelle").value;
    age = anee_actuelle - anee_de_naissance;
    document.getElementById("votre_age").innerHTML = `Vous avez ${age} ans`;
    return false
}


function myAge_jq() {
    let anee_de_naissance, anee_actuelle, age;

    anee_de_naissance = $("#anee_de_naissance").val();
    anee_actuelle = $("#anee_actuelle").val();
    age = anee_actuelle - anee_de_naissance;
    $("#votre_age").html(`(jq) Vous avez ${age} ans`);
    return false
}