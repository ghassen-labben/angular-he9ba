import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  constructor(private produitservice: ProduitService) { }
  ngOnInit(): void {
    this.lesproduit;
    this.produitservice.getProduits().subscribe(data => { this.lesproduit = data; console.log(data) });
  }
  lesproduit!: Produit[];
  deleteproduct(id: number) {
    this.produitservice.deleteProduct(id).subscribe(data => console.log(data));
    window.location.reload();
  }
}
