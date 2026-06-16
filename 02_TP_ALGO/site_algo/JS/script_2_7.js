
function myGreeting() {
    let inp_prenom, inp_nom;
    inp_prenom = document.getElementById("inp_prenom").value;
    inp_nom = document.getElementById("inp_nom").value;
    document.getElementById("greeting").innerHTML = `Bonjour ${inp_prenom} ${inp_nom}!`;
    return false
}


function myGreeting_jq() {
    let inp_prenom, inp_nom;
    inp_prenom = $("#inp_prenom").val();
    inp_nom = $("#inp_nom").val();
    $("#greeting").html(`(jq) Bonjour ${inp_prenom} ${inp_nom}!`);
    return false
}