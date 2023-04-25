var nbCalculs = 0;

function addition(a,b){
    nbCalculs++;
    return a+b;
}

function multiplierPar2(x){
    nbCalculs++;
    //console.log("nbCalculs="+nbCalculs)
    console.log(`nbCalculs=${nbCalculs}`)
    return addition(x,x);
}

/* paramètres de enchainerCalculEtAffichage() :
 x = nombre , 
 fctCalcul = reference vers une fonction de calcul
 fctAff = reference vers fonction affichage
*/
function enchainerCalculEtAffichage(x,fctCalcul,fctAff){
    let resCalcul = fctCalcul(x);
    fctAff(resCalcul);
   }
   

//export default {   multiplierPar2 , addition }
//export default {  multiplierPar2 :  multiplierPar2 }
export default {  multiplierPar2 , enchainerCalculEtAffichage }

