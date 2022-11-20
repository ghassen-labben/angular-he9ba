import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit!: Produit;
  constructor() { }

  ngOnInit(): void {
  }

}
