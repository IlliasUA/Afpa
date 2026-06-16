function myText() {
    let a, b, c, d, resulta;

    a = " belle marquise ";
    b = " vos beaux yeux ";
    c = " me font ";
    d = " d’amour ";

    resulta= a + c + b + d + "<br>";
    resulta+= b + a + c + d + "<br>";
    resulta+= c + d + a + b + "<br>";
    resulta+= a + c + b + d;

    document.getElementById("voir_resulta").innerHTML = resulta;
}


function myText_jq() {
    let a, b, c, d, resulta;

    a = " belle marquise ";
    b = " vos beaux yeux ";
    c = " me font ";
    d = " d’amour ";

    resulta= a + c + b + d + "<br>";
    resulta+= b + a + c + d + "<br>";
    resulta+= c + d + a + b + "<br>";
    resulta+= a + c + b + d;

    $("#voir_resulta").html(`(jq) ${resulta}`);
}
