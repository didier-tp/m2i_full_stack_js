import { Component } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent {
  ht=0;
  tauxTva=20;
  tva=0;
  ttc=0;
  listeTaux=[5,10,20]; //en%

  onCalculerTvaTtc(){
    this.tva = this.ht * this.tauxTva / 100;
    this.ttc = Number(this.ht) + this.tva;
  }

}
