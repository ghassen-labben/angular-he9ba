import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { SignupComponent } from './signup/signup.component';
import { PrixPipe } from './prix.pipe';
import { SwiperModule } from 'swiper/angular';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { PrduitSearchComponent } from './prduit-search/prduit-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { MatBadgeModule } from '@angular/material/badge';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from './signin/signin.component';
import { DashbordModule } from './dashbord/dashbord.module';
import { AccuillComponent } from './dashbord/accuill/accuill.component';
import { AboutUsComponent } from './about-us/about-us.component';

var appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produit/:id', component: DetailProduitComponent },
  {
    path: 'all-products/:cat', component: PrduitSearchComponent
  },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CheckoutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashbord', component: AccuillComponent },
  { path: 'aboutUs', component: AboutUsComponent },

  { path: '**', component: HomeComponent }

];
if (localStorage.getItem('user')) {
  appRoutes.forEach((e) => {
    if (e.path == "signup" || e.path == "signin")
      e.redirectTo = '';

  }
  );
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    ListproduitComponent,
    SignupComponent,
    PrixPipe,
    DetailProduitComponent,
    PrduitSearchComponent,
    CheckoutComponent,
    NavComponent,
    SigninComponent,
    AboutUsComponent],
  imports: [
    BrowserModule,
    DashbordModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
