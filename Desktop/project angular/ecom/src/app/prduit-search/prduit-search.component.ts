import { Component, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import { ProduitService } from '../services/produit.service';
import SwiperCore, { Navigation } from "swiper";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-prduit-search',
  templateUrl: './prduit-search.component.html',
  styleUrls: ['./prduit-search.component.css'],
})
export class PrduitSearchComponent implements OnInit {
  cat!: string;
  lesproduits!: Produit[];
  constructor(private produitservice: ProduitService, private route: ActivatedRoute, private formbuilder: FormBuilder) {

  }
  getproduitservice() {
    return this.produitservice;
  }

  get price() {
    return this.filter.get('price')?.value;
  }
  k!: Produit[];
  filter!: FormGroup;
  search!: FormGroup;
  ngOnInit(): void {
    this.search = this.formbuilder.group({
      search: ['']
    })
    this.filter = this.formbuilder.group({
      men: [''],
      wommen: [''],
      kids: [''],
      red: [''],
      black: [''],
      yellow: [''],
      White: [''],
      blue: [''],
      price: ['99']
    });

    this.load();
    if (this.produitservice.i) {
      this.load();

    }

  }
  searchBylibele() {
    if (this.search.value.search.length > 0) {
      this.lesproduits = this.k.filter(e => e.name[0] == this.search.value.search);
    }
  }
  searchlibelleandprice() {
    this.searchBylibele();
    if (this.lesproduits.length > 0) {
      this.lesproduits = this.lesproduits.filter(e => e.price <= this.price);
    }
  }
  load() {

    this.route.params.subscribe((params: Params) => {
      this.cat = params["cat"];
      if (this.cat == "all") {
        this.produitservice.getProduits().subscribe(
          (data) => {
            this.lesproduits = data;
            this.k = data;

          }
        );
      }
      else {
        this.lesproduits = this.produitservice.getProduitBycategory(this.cat);
      }

    });
  }
  charge(a: number, id: number) {
    this.produitservice.getReviews(id);
    return false
  }

}





