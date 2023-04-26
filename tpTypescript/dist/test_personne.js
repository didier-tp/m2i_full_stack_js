"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./personne");
let p1;
p1 = new personne_1.Personne();
p1.age = -40; //refusé , pas pris en compte
p1.age = 60;
p1.incrementerAge();
console.log("age=" + p1.age);
console.log("p1=" + JSON.stringify(p1));
let p2 = new personne_1.Personne("jean", "Bon", 33);
p2.incrementerAge();
console.log("p2=" + JSON.stringify(p2));
