import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import { User } from '../classes/user';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit!: Produit;
  constructor(public serviceproduit: ProduitService) { }
  z: boolean = false;
  ngOnInit(): void {

  }

}
