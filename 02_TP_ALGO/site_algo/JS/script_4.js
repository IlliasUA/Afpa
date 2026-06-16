function tutuFunc() {
    let tutu, toto, tata;
    tutu = document.getElementById("inp_tutu").value;
    toto = document.getElementById("inp_toto").value;
    tata = document.getElementById("inp_tata").value;
    if((tutu <= toto + 4) && (tata != "OK")) {
        tutu -= 1;
    } else {
        tutu += 1;
    }
    document.getElementById("resulta").innerHTML = `${tutu}`;
    return false
}

function tutuFunc_jq() {
    let tutu, toto, tata;
    tutu = $("#inp_tutu").val();
    toto = $("#inp_toto").val();
    tata = $("#inp_tata").val();
    if((tutu <= toto + 4) && (tata != "OK")) {
        tutu -= 1;
    } else {
        tutu += 1;
    }
    $("#resulta").html(`(jq) ${tutu}`);
    return false
}