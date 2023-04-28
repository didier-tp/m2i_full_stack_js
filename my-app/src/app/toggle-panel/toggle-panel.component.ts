import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.scss']
})
export class TogglePanelComponent {
  toggleP /* : boolean */ =false;
  
  @Input()
  title /* : string */ = 'default panel title';
 
}
