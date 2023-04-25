console.log("tpNode");

import { multiplierPar2 }  from "./calcul2.mjs";
var x=6;
var y = multiplierPar2(x);
//y = addition(x,7); //pas possible d'appeler addition() si pas exportée , ni importée
console.log("y=x*2=" + y);