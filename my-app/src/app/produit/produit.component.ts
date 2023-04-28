import { Component } from '@angular/core';
import { ProduitService } from '../common/service/produit.service';
import { Produit } from '../common/data/produit';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {

   listeProduits : Produit[] = []; //à afficher coté HTML

   constructor(public produitService : ProduitService){
       //this.chercherProduitV1();
       this.chercherProduitV2();
   }

   chercherProduitV1(){
       this.produitService.recupererProduit$()
           .subscribe({
             next: (tabProduits)=>{ this.listeProduits = tabProduits; },
             error: (err)=>{ console.log(err); }
           });
   }

   async chercherProduitV2(){
       try{
        this.listeProduits = await  firstValueFrom( this.produitService.recupererProduit$() );
       }catch(err){
        console.log(err);
       }
   }
        


}
