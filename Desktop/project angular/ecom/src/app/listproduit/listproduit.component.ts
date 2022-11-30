import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import { Review } from '../classes/review';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  lesproduit!: Produit[];
  constructor(private listproduit: ProduitService) { }

  ngOnInit(): void {
    this.lesproduit = this.listproduit.getProduit();

  }

}
