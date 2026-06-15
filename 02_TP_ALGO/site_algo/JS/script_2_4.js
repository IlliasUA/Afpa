/*DEBUT */
function myText() {
/*Variables*/
    let a, b, c, d, resulta;
/*Lire*/
    a = " belle marquise ";
    b = " vos beaux yeux ";
    c = " me font ";
    d = " d’amour ";
/*ECRIRE*/
    resulta= a + c + b + d + "<br>";
    resulta+= b + a + c + d + "<br>";
    resulta+= c + d + a + b + "<br>";
    resulta+= a + c + b + d;

    document.getElementById("voir_resulta").innerHTML = resulta;
      
}
/*FIN*/
