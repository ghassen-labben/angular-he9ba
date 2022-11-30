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
      nom: new FormControl(""),
      mail: new FormControl(""),
      passowrd: new FormControl(""),
      confirmPassword: new FormControl("")
    }
  )
  onSubmit() {

  }
  constructor() { }

  ngOnInit(): void {
  }

}
