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


export class Personne{
 
 
    public get age(){ return this._age; }
    public set age(newAge : number){
      if(newAge >= 0) this._age = newAge;
      else console.log("age négatif invalide");
    }
 
    incrementerAge() : void {
        this._age ++;
    }
 
    constructor(public prenom : string ="?" , 
                public  nom : string = "?" , 
                private _age : number = 0){
    }
 
 }
 

