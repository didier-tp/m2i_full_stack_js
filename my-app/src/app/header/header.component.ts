import { Component, Input } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input()
     titre = "titre_par_defaut";


  constructor(public preferencesService : PreferencesService) { 
    //lien entre composant et service par injection par constructeur
    console.log("dans constructeur de HeaderComponent , titre=" + this.titre)
  }

 ngOnInit(): void { console.log("dans ngOnInit() de HeaderComponent , titre=" + this.titre)
 }

}
