import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private produitservice: ProduitService) { }
  categories = ['shoes', 'Tshirt', 'men', 'wommen', 'kids', 'hoodies'];
  photos: string[] = [''];
  lessizes: string[] = [];
  lescategories: string[] = []; sizess = [36, 38, 39, 40, 41, 42, 43];
  ngOnInit(): void {
    this.productform = this.formbuilder.group({
      name: ['',],
      price: [0 as number,],
      photo: [[]],
      category: [[]],
      enStock: [true],
      DateFab: [''],
      sizes: [[]],
      colors: this.formbuilder.array([]),
      reviews: [[]],
      description: ['']
    }
    )

  }
  onselect(e: any) {
    this.photos = []
    for (let i = 0; i < e.target.files.length; i++)
      this.photos.push("../../assets/images/" + e.target.files[i].name);
  }
  onsubmit() {
    const app = document.getElementsByName("lessizes");
    for (let i = 0; i < app.length; i++) {
      if ((app[i] as HTMLInputElement).checked) {
        this.lessizes.push((app[i] as HTMLInputElement).value);
      }
    }
    const cat = document.getElementsByName("lescategories");
    for (let i = 0; i < cat.length; i++) {
      if ((cat[i] as HTMLInputElement).checked) {
        this.lescategories.push((cat[i] as HTMLInputElement).value);
      }
    }
    this.productform.get('photo')?.setValue(this.photos);
    this.productform.get('sizes')?.setValue(this.lessizes);
    this.productform.get('category')?.setValue(this.lescategories);

    console.log(this.productform.value);
    this.produitservice.addProduit(this.productform.value).subscribe(data => console.log(data));

  }
  public get lescolors() {
    return this.productform.get('colors') as FormArray;
  }

  onAjoutercolor() {
    this.lescolors.push(this.formbuilder.control(''));
  }
  productform!: FormGroup;

}
