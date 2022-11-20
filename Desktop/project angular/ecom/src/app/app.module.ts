import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes } from '@angular/router';
/*const appRoutes: Routes = [
  { path: 'products', component: productcomponent }
];*/
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { SignupComponent } from './signup/signup.component';
import { PrixPipe } from './prix.pipe';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    ListproduitComponent,
    SignupComponent,
    PrixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
