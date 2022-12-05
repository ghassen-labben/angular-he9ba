import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccuillComponent } from './accuill/accuill.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routesdash: Routes = [
  {
    path: 'dashbord', component: AccuillComponent, children: [
      { path: 'searchproducts', component: SearchProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'Modify-product', component: ModifyProductComponent },
      { path: 'Manage-Users', component: ModifyProductComponent }
    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routesdash)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
