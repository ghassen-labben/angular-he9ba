import { Component } from '@angular/core';
import { Produit } from '../classes/produit';
import { User } from '../classes/user';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  produit: Produit[] = [];
  constructor(private serviceprod: ProduitService) { }
  ngOnInit() {
    this.displayCart();
  }

  x = false;
  user!: User;
  getProduitService() {
    return this.serviceprod;
  }
  displayCart() {
    this.serviceprod.getUser();
    this.user = this.serviceprod.userloged;
    this.user.cart.forEach((e) => {
      this.serviceprod.getProducts(e);
    });
    this.produit = this.serviceprod.produitUser;
  }

}
