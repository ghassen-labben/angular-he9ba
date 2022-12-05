import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { AccountComponent } from './account/account.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AccuillComponent } from './accuill/accuill.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AccountComponent,
    SearchProductComponent,
    ModifyProductComponent,
    AddProductComponent,
    AccuillComponent],
  imports: [
    DashbordRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class DashbordModule { }
