console.log("tpNode");

import calculModule from "./calcul3.mjs";
var x=6;
var y = calculModule.multiplierPar2(x);
//y = calculModule.addition(x,7); //pas possible d'appeler addition() si pas exportée 
console.log("y=x*2=" + y);