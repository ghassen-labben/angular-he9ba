import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accuill',
  templateUrl: './accuill.component.html',
  styleUrls: ['./accuill.component.css']
})
export class AccuillComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit(): void {
    if (localStorage.getItem('user') && !(localStorage.getItem('user') == "admin@admin.com") || !localStorage.getItem('user')) {
      this.route.navigate(['']);
    }
  }

}
