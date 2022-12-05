import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../classes/user';
import { ProduitService } from '../services/produit.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private produitService: ProduitService, private formBuilder: FormBuilder, private route: Router, private http: HttpClient) { }
  users!: User[];
  ngOnInit(): void {
    if (this.produitService.message) {
      this.route.navigate([''])
    }
    this.registerForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        cart: [[]],
        purchased: [[]],
        reviews: [[]]

      }

    )


  }


  onSubmit() {
    this.produitService.getUsers().subscribe((data) => this.users = data.filter(e => e.mail == this.registerForm.value.mail));
    if (this.users.length > 0) {
      if (this.users[0].password == this.registerForm.value.passowrd) {
        this.produitService.user2 = this.users[0];
        localStorage.setItem("user", this.produitService.user2.mail);
        window.location.reload();
        this.route.navigateByUrl("");
      }
      else
        this.route.navigateByUrl("/signin");
    } else {
      this.onAjouter();

    }
  }
  onAjouter() {
    this.produitService.addUser(this.registerForm.value).subscribe(data => {
      console.log(data); this.produitService.user2 = data;
      localStorage.setItem("user", this.produitService.user2.mail);
      window.location.reload();

      this.route.navigateByUrl("/");
    });
  }
}
