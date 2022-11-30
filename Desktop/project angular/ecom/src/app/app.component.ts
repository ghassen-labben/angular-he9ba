import { Component } from '@angular/core';
import { ProduitService } from './services/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hekba';
  constructor(private serviceprod: ProduitService) {

  }
  getProduitService() {
    return this.serviceprod;
  }
}
