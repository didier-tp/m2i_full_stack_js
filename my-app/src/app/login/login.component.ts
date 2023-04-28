import { Component } from '@angular/core';
import { LoginRequest } from '../common/data/login-request';
import { LoginService } from '../common/service/login.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
     //coté html : [(ngModel)]="loginRequest.username"
     public loginRequest = new LoginRequest();
     public message : string ="";

     constructor(public loginService : LoginService){}

     async onLogin(){
      //V1: afficher données saisies:
      //this.message = "données saisie=" + JSON.stringify(this.loginRequest);
      //V2: vérifier le login via un serveur
      try{
        let loginResponse = await firstValueFrom(this.loginService.postLogin$(this.loginRequest));
        this.message = loginResponse.message;
      }catch(err){
        console.log(err);
        this.message="erreur de login";
      }
     }
}
