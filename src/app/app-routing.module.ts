import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  
  {
    path: '', 
    component: MainComponent,
   // children: [
    //  {path: 'register', component: RegisterComponent},
  //    {path: 'login', component: LoginComponent},
    //],  Training@123 NiG_eria123@
  },
  {path: 'register', component: RegisterComponent},
       
 {path: 'login', component: LoginComponent,
       children: [
        {path: 'register', component: RegisterComponent}]},
 
 
  //{path: 'app', component: AppComponent},
  //{path: 'landing', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
