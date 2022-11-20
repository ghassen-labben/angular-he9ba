import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm = new FormGroup(
    {
      nom: new FormControl("UserName"),
      mail: new FormControl("Email"),
      passowrd: new FormControl("password"),
      confirmPassword: new FormControl("confirm passowrd")
    }
  )
  onSubmit() {
    console.log(this.registerForm.value.nom);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
