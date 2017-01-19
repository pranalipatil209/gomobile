import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CanvasAreaComponent } from './canvas-area/canvas-area.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes : Routes = [
    { path : '' , component : CanvasAreaComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'login' , component : LoginComponent },
    { path : 'home' , component : DashboardComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CanvasAreaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
