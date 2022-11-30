import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produit/:id', component: DetailProduitComponent },
  {
    path: 'all-products', component: PrduitSearchComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    ListproduitComponent,
    SignupComponent,
    PrixPipe,
    DetailProduitComponent,
    PrduitSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
