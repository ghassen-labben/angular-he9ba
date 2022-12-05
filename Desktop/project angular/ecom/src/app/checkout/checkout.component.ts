import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../classes/produit';
import { User } from '../classes/user';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private produitservice: ProduitService, private formBuilder: FormBuilder) {

  }
  form!: FormGroup;

  user!: User;
  lesproduit: Produit[] = [];
  ngOnInit(): void {
    this.form = this.formBuilder.nonNullable.group({
      nom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      addresse: ['', [Validators.required, Validators.minLength(5)]],
      tel: ['', [Validators.required, Validators.minLength(8), Validators.pattern("[0-9]*")]]
    });
    this.produitservice.getUser();
    this.user = this.produitservice.userloged;
    this.user.cart.forEach((e) => {
      this.produitservice.getProducts(e);
    });

  }
  get nom() {
    return this.form.get('nom');
  }
  get tel() {
    return this.form.get('tel');
  }
  get mail() {
    return this.form.get('mail');
  }
  get addresse() {
    return this.form.get('addresse');
  }
  ngAfterViewInit() {
    this.produitservice.getUser();
    this.user = this.produitservice.userloged;
    this.user.cart.forEach((e) => {
      this.produitservice.getProducts(e);
    });
    this.lesproduit = this.produitservice.produitUser;
    console.log(this.lesproduit);
  }
  sumProducts() {
    let s = 0;
    this.lesproduit.forEach(e => {
      s += e.price as number;
    });
    return s;
  }
}
