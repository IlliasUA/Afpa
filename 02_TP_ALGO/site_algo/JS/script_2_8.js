/*DEBUT */
function myTotalMinutes() {
/*Variables*/
    let inp_heures, inp_minutes, total;

    inp_heures = document.getElementById("inp_heures").value;
    inp_minutes = document.getElementById("inp_minutes").value;
    total = inp_heures * 60 + Number(inp_minutes);
    document.getElementById("total_en_minutes").innerHTML = `${total} minutes`;
    return false
}
/*FIN*/
