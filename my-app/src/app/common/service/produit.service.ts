import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../data/produit';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) {
    //on injecte ici par constructeur un service technique dans un service fonctionnel
   }

   public recupererProduit$() : Observable< Produit[] > {
      /*
      //V1 : simulation sans serveur 
      return of([
        { code : "p1" , nom : "cahier" , prix : 4.5} ,
        { code : "p2" , nom : "stylo" , prix : 1.5}
      ]);
      */
     // V2 : appel de WS REST vers le serveur nodeJs:
     let url = "http://localhost:8282/produit-api/public/produit";
     return this.http.get< Produit[] >(url);
   }

   public modifierProduit$(produit: Produit) : Observable< Produit > {
     let url = "http://localhost:8282/produit-api/private/produit";
     return this.http.put< Produit >(url,produit);
  }
}
