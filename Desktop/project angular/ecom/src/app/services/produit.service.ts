import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  lesproduit: Produit[] = [
    new Produit(1, "nike blazer", 350.500, ["../../assets/images/blazer.webp", "../../assets/images/blazer1.webp"], ["shoes", "men", "wommen"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "black"], []),
    new Produit(1, "nike Air force", 180, ["../../assets/images/airforce.jpg", "../../assets/images/airforce1.png"], ["shoes", "men", "wommen"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "black"], []),
    new Produit(1, "nike air Max", 999.500, ["../../assets/images/1.png", "../../assets/images/2.png"], ["shoes", "men", "wommen"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "white"], []),
    new Produit(1, "nike air max", 100.500, ["../../assets/images/2.png"], ["shoes", "men", "wommen"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "black"], []),
    new Produit(1, "nike air max", 100.500, ["../../assets/images/2.png"], ["shoes", "men", "wommen"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["yellow", "green"], []),
    new Produit(1, "nike air max", 100.500, ["../../assets/images/2.png"], ["shoes", "men", "wommen"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "black"], []),
  ]

  getProduit() {
    return this.lesproduit;
  }
  x: Produit[] = [];
  getProduitBycategory(c: String) {
    for (let p of this.lesproduit) {
      if (p.category.filter((e) => e == c).length > 0) {
        this.x.push(p);
      }
    }
    return this.x;
  }

  constructor() { }
}
