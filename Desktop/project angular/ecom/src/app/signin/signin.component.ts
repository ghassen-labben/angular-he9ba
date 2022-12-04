import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private produitservice: ProduitService, private route: Router) { }
  get email() {
    return this.signin.get('email');
  }
  get password() {
    return this.signin.get('password');

  }
  ngOnInit(): void {
    this.signin = this.formbuilder.nonNullable.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.maxLength(10)]
    })
  }
  onsubmit() {
    console.log(this.signin.get('password')?.invalid);
    this.produitservice.getUserBymail(this.email?.value).subscribe(data => {
      if (data.length > 0) {
        if (data[0].password == this.password?.value) {
          localStorage.setItem("user", this.email?.value);
          window.location.reload();
          this.route.navigate(['']);
        }
        else {
          this.password?.addValidators(Validators.maxLength(data[0].password.length));
          console.log("password incorrect");
          this.b = true;
        }
      } else {
        console.log("user undefined");
        this.route.navigate(['/signup']);
      }
    })
  }
  b!: boolean;
  signin!: FormGroup;

}
