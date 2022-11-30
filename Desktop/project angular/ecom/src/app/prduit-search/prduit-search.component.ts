import { Component, OnInit } from '@angular/core';

import { Produit } from '../classes/produit';
import { ProduitService } from '../services/produit.service';
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-prduit-search',
  templateUrl: './prduit-search.component.html',
  styleUrls: ['./prduit-search.component.css'],
})
export class PrduitSearchComponent implements OnInit {
  lesproduits!: Produit[];
  constructor(private produitservice: ProduitService) {

  }

  ngOnInit(): void {
    if (this.produitservice.cat == "")

      this.lesproduits = this.produitservice.getProduit();
    else {
      this.lesproduits = this.produitservice.getProduitBycategory(this.produitservice.cat);
    }

  }




  charge(a: number, id: number) {
    let k = this.produitservice.getReviews(id);
    k = k - a;
    return (k >= 0);
  }

}





