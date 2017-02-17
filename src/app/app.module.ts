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
import { sidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './services/auth.service'
import { LoginRequireResolver } from './resolver/login-require.service';
import { MyProduct } from './product/product.component';
import { KeysPipe } from './pipes/keys.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { OnlyKeysPipe } from './pipes/only-keys.pipe';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { HomeComponent } from './home/home.component';
import { StarsComponent } from './ratings/stars/stars.component';

const appRoutes : Routes = [
    { path : '' , component : CanvasAreaComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'login' , component : LoginComponent },
    { path : 'home' , component : HomeComponent ,
      resolve : { loginRequire : LoginRequireResolver },
      children : [
        { path : '' , component : DashboardComponent, resolve : { loginRequire : LoginRequireResolver }},
        { path : 'product' , component : BuyProductComponent, resolve : { loginRequire : LoginRequireResolver } }
      ]},
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CanvasAreaComponent,
    DashboardComponent,
    sidebarComponent,
    MyProduct,
    KeysPipe,
    CategoryFilterPipe,
    OnlyKeysPipe,
    BuyProductComponent,
    HomeComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  providers : [AuthService, LoginRequireResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
