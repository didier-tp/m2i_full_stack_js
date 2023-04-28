import { Component } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  listeCouleurs = [ "white" , "lightgrey" , "lightgreen" , "lightblue" ];

  constructor(public preferencesService : PreferencesService ){
    //injection de dépendance par constructeur
    //une unique instance de PreferencesService
    //sera automatiquement reliée au composant courant (FooterComponent)
  }

}
