import { Component } from '@angular/core';



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  username : string ;
  message : string ="";
  onAction(){
   this.message ="Hello " + this.username;
  }

  constructor(){
    this.username="?";
  }
  
}
