import { keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';
import { Review } from '../classes/review';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  lesproduit: Produit[] = [
    new Produit(1, "nike blazer", 350.500, ["../../assets/images/blazer.webp", "../../assets/images/blazer1.webp", "../../assets/images/blazer2.webp", "../../assets/images/blazer3.webp", "../../assets/images/blazer4.webp"], ["shoes", "men"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "black"], [new Review("ghassen", 5, "good product"), new Review("Imad", 4, "good"), new Review("morad", 1, "bad product")]),
    new Produit(2, "nike Air force", 180, ["../../assets/images/airforce.jpg", "../../assets/images/airforce1.png"], ["shoes", "men"], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "black"], [new Review("ghassen", 5, "good product"), new Review("Imad", 4, "good"), new Review("morad", 1, "bad product")]),
    new Produit(3, "nike air Max", 999.500, ["../../assets/images/1.png", "../../assets/images/2.png"], ["shoes",], true, new Date("2019-01-16"), [38, 39, 40, 41, 41.5, 42], ["red", "white"], [new Review("ghassen", 5, "good product"), new Review("Imad", 4, "good"), new Review("morad", 1, "bad product")]),
    new Produit(4, "Jordan Jumpman Pro", 350.999, ["../../assets/images/Jordan Jumpman Pro.webp", "../../assets/images/Jordan Jumpman Pro1.webp", "../../assets/images/Jordan Jumpman Pro2.webp", "../../assets/images/Jordan Jumpman Pro3.webp", "../../assets/images/Jordan Jumpman Pro4.webp", "../../assets/images/Jordan Jumpman Pro5.webp"], ["shoes", "men", "basketball"], false, new Date("2019-01-16"), [40, 41, 42], ["red", "black"], [new Review("ghassen", 4, "good product"), new Review("Imad", 2, "good"), new Review("morad", 1, "bad product")]),
    new Produit(5, "Jordan Jumpman Pro", 350.999, ["../../assets/images/airjordan1low.webp", "../../assets/images/airjordan1low1.webp", "../../assets/images/airjordanlow2.webp", "../../assets/images/airjordanlow3.webp", "../../assets/images/airjordanlow4.webp"], ["shoes", "men", "basketball"], false, new Date("2019-01-16"), [40, 41, 42], ["red", "black"], [new Review("ghassen", 4, "good product"), new Review("Imad", 2, "good"), new Review("morad", 1, "bad product")]),
    new Produit(6, "Court vision low", 350.999, ["../../assets/images/court vision low 1.webp", "../../assets/images/court vision low 2.webp", "../../assets/images/court vision low 3.webp", "../../assets/images/court vision low 4.webp", "../../assets/images/court vision low 5.webp", "../../assets/images/court vision low 6.webp"], ["shoes", "men", "basketball"], false, new Date("2019-01-16"), [40, 41, 42], ["red", "black"], [new Review("ghassen", 4, "good product"), new Review("Imad", 2, "good"), new Review("morad", 1, "bad product")]),
    new Produit(7, "3WY The Movie BLACK TEE", 199, ["../../assets/images/tshirt 3wrd.jpg", "../../assets/images/tshirt3wrd2.jpg"], ["Tshirt", "wommen", "streetwear"], true, new Date("2022-01-16"), [40, 41, 42], ["black", "white"], [new Review("ghassen", 4, "good product"), new Review("Imad", 2, "good"), new Review("morad", 1, "bad product")])
  ]
  getProduit() {
    return this.lesproduit;
  }
  x: Produit[] = [];
  cat: String = "";
  getProduitBycategory(c: String) {
    this.cat = c;
    for (let p of this.lesproduit) {
      if (p.category.filter((e) => e == c).length > 0) {
        this.x.push(p);
      }
    }

    return this.x;
  }
  getProduitById(i: number) {
    let k = 0;
    while (k < this.lesproduit.length && this.lesproduit[k].id_prod != i) {
      k++;
    }
    if (k < this.lesproduit.length)
      return this.lesproduit[k];
    else {
      console.log(this.lesproduit[k]);
      return this.lesproduit[k];

    }
  }
  public getReviews(id: number) {
    let prod = this.getProduitById(id);
    let sum = 0;
    prod.reviews.forEach(element => {
      sum = sum + element.nbr;
    });
    console.log((sum / prod.reviews.length) - (sum / prod.reviews.length) % 1)
    return (sum / prod.reviews.length) - (sum / prod.reviews.length) % 1;
  }
  lastprod: number = 0;
  favorite(x: number) {
    if (this.lastprod == 0 || this.lastprod != x) {
      this.lastprod = x;

      return true;
    }
    else {
      this.lastprod = 0;

      return false

    }
  }

  constructor() { }
}
