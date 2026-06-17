function myTtc() {
    let inp_small_nombre, inp_small_prix, inp_small_tva, resulta;
    inp_small_nombre = document.getElementById("inp_small_nombre").value;
    inp_small_prix = document.getElementById("inp_small_prix").value;
    inp_small_tva = document.getElementById("inp_small_tva").value;
    resulta = Math.round( (inp_small_prix * inp_small_nombre) * (1 + inp_small_tva / 100) );
    document.getElementById("resulta").innerHTML = `Prix total des vos articles est ${resulta}`;
      }

function myTtc_jq() {
    let inp_small_nombre = $("#inp_small_nombre").val();
    let inp_small_prix  = $("#inp_small_prix").val();
    let inp_small_tva  = $("#inp_small_tva").val();
    let resulta = Math.round((inp_small_prix * inp_small_nombre) * (1 + inp_small_tva / 100));
    $("#resulta").html(`(jq)Prix total des vos articles est ${resulta}`);
}