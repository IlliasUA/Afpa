
/*6.1 js*/
function myArrNombreZero () {
    let arrNum = [];
    for(let i = 0; i < 7; i++) {
        arrNum[i] = 0;
    }
        document.getElementById("resulta").innerHTML=`arrNum =  [${arrNum.join(" ")}] `; 
}

/*6.1 jq*/
function myArrNombreZero_jq () {
    let arrNum = [];
    for(let i = 0; i < 7; i++) {
        arrNum[i] = 0;
    }
        $("#resulta").html(`(jq) arrNum =  [${arrNum.join(" ")}] `);
}

/*6.2 js */
function myArrVoyelles () {
    let arrVoyelles = [];
        arrVoyelles[0] = "A";
        arrVoyelles[1] = "E";
        arrVoyelles[2] = "I";
        arrVoyelles[3] = "O";
        arrVoyelles[4] = "U";
        arrVoyelles[5] = "Y";
    document.getElementById("resulta").innerHTML= `arrVoyelles = [${arrVoyelles.join(" ")}] `;
}

/*6.2 jq */
function myArrVoyelles_jq () {
    let arrVoyelles = [];
        arrVoyelles[0] = "A";
        arrVoyelles[1] = "E";
        arrVoyelles[2] = "I";
        arrVoyelles[3] = "O";
        arrVoyelles[4] = "U";
        arrVoyelles[5] = "Y";
    $("#resulta").html(`(jq) arrVoyelles = [${arrVoyelles.join(" ")}] `);
}

/*6.3 js*/
function myNotes () {
    let arrNotes = [];
    
    for(i=1; i<=9; i++) {
        arrNotes.push(document.getElementById("iNote" + i).value);
        /*arrNotes += document.getElementById("iNote" + i).value;  -  (marche pas)  */ 
    }
    document.getElementById("resulta").innerHTML= `Votre tableau de notes est: ${arrNotes.join(" ")}`;    
}

/*6.3 jq*/
function myNotes_jq () {
    let arrNotes = [];
    
    for(i=1; i<=9; i++) {
        arrNotes.push($("#iNote" + i).val());
    }
    $("#resulta").html(`(jq) Votre tableau de notes est: ${arrNotes.join(" ")}`);
}