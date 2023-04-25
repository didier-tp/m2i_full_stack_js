console.log("tpNode");

var calculModule = require("./calcul");
var x=6;
var y = calculModule.multiplierPar2(x);
//y = calculModule.addition(x,7); //pas possible d'appeler adiition() si pas exportée
console.log("y=x*2=" + y);