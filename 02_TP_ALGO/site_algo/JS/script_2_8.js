
function myTotalMinutes() {

    let inp_heures, inp_minutes, total;

    inp_heures = document.getElementById("inp_heures").value;
    inp_minutes = document.getElementById("inp_minutes").value;
    total = inp_heures * 60 + Number(inp_minutes);
    document.getElementById("total_en_minutes").innerHTML = `${total} minutes`;
    return false
}

function myTotalMinutes_jq() {
    let inp_heures, inp_minutes, total;
    inp_heures = $("#inp_heures").val();
    inp_minutes = $("#inp_minutes").val();
    total = inp_heures * 60 + Number(inp_minutes);
    $("#total_en_minutes").html(`(jq) ${total} minutes`);
    return false
}


