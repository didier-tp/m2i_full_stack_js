"use strict";
let a;
a = 6;
//a="abc"; //erreur de type
console.log(a);
let b = 6; //le compilateur typescript déduit de la valeur 6 que b est de type number
//let b :number = 6;
//b="abc"; //ereur détectée
console.log(b);
