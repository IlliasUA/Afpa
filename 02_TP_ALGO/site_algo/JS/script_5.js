/* 5.1* JS*/
function myNomberCompris() {
    let iNombre;
    iNombre = document.getElementById("iNombre").value;
    if ((iNombre < 1) || (iNombre > 3)) {
         document.getElementById("resulta").innerHTML = `Saisie erronée. Recommoncez`;
    } else {
         document.getElementById("resulta").innerHTML= "Saisie OK";
    }
}

/* 5.1* JQ*/
function myNomberCompris_jq() {
    let iNombre;
    iNombre = $("#iNombre").val();
    if ((iNombre < 1) || (iNombre > 3)) {
        $("#resulta").html(`(jq) Saisie erronée. Recommoncez`);
    } else {
        $("#resulta").html(`(jq) Saisie OK`);
    }
}


/* 5.2 JS*/ 
function myNomberCompris_5_2 () {
    let iNombre;
    iNombre = Number(document.getElementById("iNombre").value);
    if (iNombre < 10) {
         document.getElementById("resulta").innerHTML= "Plus grand!";
    } else if (iNombre > 20) {
         document.getElementById("resulta").innerHTML= "Plus petit!";
    } else {
         document.getElementById("resulta").innerHTML= "Saisie OK";
    }
}

/* 5.2* JQ*/
function myNomberCompris_5_2_jq () {
    let iNombre;
    iNombre = Number($("#iNombre").val());
    if (iNombre < 10) {
         $("#resulta").html(`(jq) Plus grand!`);
    } else if (iNombre > 20) {
         $("#resulta").html(`(jq) Plus petit!`);   
    } else {
         $("#resulta").html(`(jq) Saisie OK`);
    }
}

/*5.2  JS (B)*/
let iNombreHasard = Math.floor(Math.random() * 100) + 1; 

function myNomberCompris_5_2b () {
    let iNombre = Number(document.getElementById("iNombre").value);
    if (iNombre < iNombreHasard) {
         document.getElementById("resulta").innerHTML= "Plus grand!";
    } else if (iNombre > iNombreHasard) {
         document.getElementById("resulta").innerHTML= "Plus petit!";
    } else {
         document.getElementById("resulta").innerHTML= "Saisie OK";
    }
}


/*5.2  jq (B)*/

function myNomberCompris_5_2b_jq () {
    let iNombre = $("#iNombre").val();
    if (iNombre < iNombreHasard) {
        $("#resulta").html(`(jq) Plus grand!`);
    } else if (iNombre > iNombreHasard) {
        $("#resulta").html(`(jq) Plus petit!`);
    } else if (iNombre == iNombreHasard) {
        $("#resulta").html(`(jq) Saisie OK!`);
    }
}


/* 5.3*/
function myNomberDepart () {
     let iNombre = Number(document.getElementById("iNombre").value);
     let i = 0;
     let resultat = ""; 

     while(i < 10) {
         iNombre ++;
         resultat += iNombre + " ";
         i++;
     } 
     document.getElementById("resultat").innerHTML= resultat;
}  

/* 5.3 jq*/
function myNomberDepart_jq () {
     let iNombre = Number($("#iNombre").val());
     let i = 0;
     let resultat = ""; 

     while(i < 10) {
         iNombre++;
         resultat += iNombre + " ";
         i++;
     } 
     $("#resultat").html(`(jq) ${resultat}`);
}  

/* 5.4 js*/
function myNomberDepart_js_pour () {
     let iNombre = document.getElementById("iNombre").value;
     let resultat = ""; 

     for (i=0; i<10; i++)    {
         iNombre ++;
         resultat += iNombre + " ";
     }
     document.getElementById("resultat").innerHTML= resultat;
}  
/* 5.4 jq*/
function myNomberDepart_jq_pour () {
     let iNombre = Number($("#iNombre").val());
     let resultat = ""; 

     for (i=0; i<10; i++)    {
         iNombre ++;
         resultat += iNombre + " ";
     }
     $("#resultat").html(`(jq) ${resultat}`);
}  

/* 5.5 js*/
function myTableMultiplication () {
     let iNombre = Number(document.getElementById("iNombre").value);
     let resultat = ""; 
     for (i=1; i<=10; i++) {
          resultat += `${iNombre} x ${i} = ${iNombre * i}<br>`
          document.getElementById("resultat").innerHTML= resultat;
     }
}


/* 5.5 jq*/
function myTableMultiplication_jq () {
     let iNombre = Number($("#iNombre").val());
     let resultat = ""; 
     for (i=1; i<=10; i++) {
          resultat += `${iNombre} x  ${i} = ${iNombre * i}<br>`
          $("#resultat").html(`(jq) ${resultat}`);
     }
}

/* 5.6 js*/
function myCalculeNombre_js () {
     let iNombre = Number(document.getElementById("iNombre").value);
     let resultat = 0;
     let nomb_de_pas = "";
     for (i=1; i<=iNombre; i++) {
          resultat += i;
          nomb_de_pas += i;
          if (i < iNombre) {
              nomb_de_pas += " + ";  
          }
     document.getElementById("resultat").innerHTML=`${nomb_de_pas} = ${resultat}`;
     }
}

/* 5.6 jq*/
function myCalculeNombre_jq () {
     let iNombre = Number($("#iNombre").val());
     let resultat = 0;
     nomb_de_pas = ""; 
     for (i=1; i<=iNombre; i++) {
          resultat += i;
          nomb_de_pas += i;
          if (i < iNombre) {
              nomb_de_pas += " + ";  
          } 
     $("#resultat").html(`(jq) ${nomb_de_pas} = ${resultat}`);
     }
}

/* 5.7 js*/
function myFactorielle_js () {
     let iNombre = Number(document.getElementById("iNombre").value);
     let nomb_de_pas = "";
     let resultat = 1;
      
     for (i=1; i<=iNombre; i++) {
          nomb_de_pas +=i;
          resultat *=i;
          if (i < iNombre) {
              nomb_de_pas += " * "; 
          }
          document.getElementById("resultat").innerHTML= `${iNombre}! = ${nomb_de_pas} = ${resultat} `;
     }
}

/* 5.7 jq*/

function myFactorielle_jq () {
     let iNombre = Number($("#iNombre").val());
     let nomb_de_pas = "";
     let resultat = 1;
      
     for (i=1; i<=iNombre; i++) {
          nomb_de_pas +=i;
          resultat *=i;
          if (i < iNombre) {
              nomb_de_pas += " * "; 
          }
          $("#resultat").html(`(jq) ${iNombre}! = ${nomb_de_pas} = ${resultat}`);
     }
}

/* 5.8 js*/
function myNomberMax () {
     let max = Number(document.getElementById("iNombre1").value);
     for (i=1; i<= 20; i++)    {
          let iNombre = Number(document.getElementById("iNombre" + i).value);

          if (max < iNombre) {
                 max = iNombre;
               }
     }
     document.getElementById("resultat").innerHTML=`${max} est plus grand numéro`;
}

/* 5.8 jq*/
function myNomberMax_jq () {
     let max = Number($("#iNombre1").val());
     for (i=1; i<= 20; i++)    {
          let iNombre = Number($("#iNombre" + i).val());

          if (max < iNombre) {
                 max = iNombre;
               }
     }
     $("#resultat").html(`(jq) ${max} est plus grand numéro`);
}

/* 5.8b js*/
function myNomberMax_b () {
     let max = Number(document.getElementById("iNombre1").value);
     let iCount;
     for (i=1; i<= 20; i++) {
          let iNombre = Number(document.getElementById("iNombre" + i).value);
          iCount = 1;
          if (max < iNombre) {
                 max = iNombre;
                 iCount = i;
               }
     }
     document.getElementById("resultat").innerHTML=`${max} est plus grand numéro avec le champ de saisie n° ${iCount}`;
}

/* 5.8b jq*/
function myNomberMax_b_jq () {
     let max = Number($("#iNombre1").val());
     let iCount;
     for (i=1; i<= 20; i++)    {
          let iNombre = Number($("#iNombre" + i).val());
          iCount = 1;
          if (max < iNombre) {
                 max = iNombre;
                 iCount = i;
               }
     }
     $("#resultat").html(`(jq) ${max} est plus grand numéro avec le champ de saisie n° ${iCount}`);
}


/* 5.9 js*/
function myNomberMax59 () {
     let max = Number(document.getElementById("iNombre1").value);
     let fNombre = Number(document.getElementById("fNombre").value);
     let iCount;
     for (i=1; i <= fNombre; i++) {
          let iNombre = Number(document.getElementById("iNombre" + i).value);
          iCount = 1;
          if (max < iNombre) {
                 max = iNombre;
                 iCount = i;
               }
     }
     document.getElementById("resultat").innerHTML=`${max} est plus grand numéro avec le champ de saisie n° ${iCount}`;
}


/* 5.10 js*/
function myArticles () {
     let sommeDonnee = Number(document.getElementById("sNombre").value);
     let sommeDevoir = window.sommeDevoir;
     let nBillet10 = 0;
     let nBillet5 = 0;
     let nBillet1 = 0;
     let votreMonnaie = sommeDonnee - sommeDevoir;
     let resVotreMonnaie = votreMonnaie;
     let resultates = "";

     if(votreMonnaie >= 10) {
          while (votreMonnaie >= 10) {
               nBillet10++;  
               votreMonnaie -= 10;
          }
     }
     if(votreMonnaie >= 5) {
          nBillet5++;
          votreMonnaie -= 5;
     }
     if(votreMonnaie >= 1) {
          nBillet1 = votreMonnaie;
     } 
     resultates = `Votre monnaie est ${resVotreMonnaie}€: <br>`;
     if(nBillet10 > 0) {
          resultates += `- ${nBillet10} billet de 10€<br>`;     
     }
     if(nBillet5 > 0) {
          resultates += `- ${nBillet5} billet de 5€<br>`;
     }
     if(nBillet1 > 0) {
          resultates += `- ${nBillet1} billet de 1€`;
     }
     document.getElementById("resultat").innerHTML = resultates;
}


/* 5.10 jq*/
function myArticles_jq () {
     let sommeDonnee = Number($("#sNombre").val());
     let sommeDevoir = window.sommeDevoir;
     let nBillet10 = 0;
     let nBillet5 = 0;
     let nBillet1 = 0;
     let votreMonnaie = sommeDonnee - sommeDevoir;
     let resVotreMonnaie = votreMonnaie;
     let resultates = "";

     if(votreMonnaie >= 10) {
          while (votreMonnaie >= 10) {
               nBillet10++;  
               votreMonnaie -= 10;
          }
     }
     if(votreMonnaie >= 5) {
          nBillet5++;
          votreMonnaie -= 5;
     }
     if(votreMonnaie >= 1) {
          nBillet1 = votreMonnaie;
     } 
     resultates = `Votre monnaie est ${resVotreMonnaie}€: <br>`;
     if(nBillet10 > 0) {
          resultates += `- ${nBillet10} billet de 10€<br>`;     
     }
     if(nBillet5 > 0) {
          resultates += `- ${nBillet5} billet de 5€<br>`;
     }
     if(nBillet1 > 0) {
          resultates += `- ${nBillet1} billet de 1€`;
     }
     $("#resultat").html(`(jq) ${resultates}`);
}