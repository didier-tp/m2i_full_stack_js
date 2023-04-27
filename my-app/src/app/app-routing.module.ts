import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';
import { ZzComponent } from './basic/zz/zz.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }, 
  { path: 'basic', component: BasicComponent }, 
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'zz', component: ZzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
