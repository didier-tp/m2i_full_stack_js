"use strict";
/*
export class Personne{
   public prenom : string ;
   public nom : string ;
   private _age : number ;

   public get age(){ return this._age; }
   public set age(newAge : number){
     if(newAge >= 0) this._age = newAge;
     else console.log("age négatif invalide");
   }

   incrementerAge() : void {
       this._age ++;
   }

   constructor(prenom : string ="?" , nom : string = "?" , age : number = 0){
    this.prenom = prenom;
    this.nom = nom;
    this._age = age;
   }

}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    get age() { return this._age; }
    set age(newAge) {
        if (newAge >= 0)
            this._age = newAge;
        else
            console.log("age négatif invalide");
    }
    incrementerAge() {
        this._age++;
    }
    constructor(prenom = "?", nom = "?", _age = 0) {
        this.prenom = prenom;
        this.nom = nom;
        this._age = _age;
    }
}
exports.Personne = Personne;
