import { Component } from '@angular/core';
import { LoginRequest } from '../common/data/login-request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
     //coté html : [(ngModel)]="loginRequest.username"
     public loginRequest = new LoginRequest();
     public message : string ="";

     onLogin(){
      //V1: afficher données saisies:
      this.message = "données saisie=" + JSON.stringify(this.loginRequest);
      //V2: vérifier le login via un serveur
     }
}
