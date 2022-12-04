import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';
import { Review } from '../classes/review';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { Route, Router } from '@angular/router';
import { User } from '../classes/user';
const URL = 'http://localhost:3000/produits';
const URLCat = 'http://localhost:3000/category';
const URLUSER = 'http://localhost:3000/users';
const URLRev = 'http://localhost:3000/reviews';
@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  public user!: User[];
  public user2!: User;

  public message = localStorage.getItem("user");

  lesproduit!: Observable<Produit[]>
  constructor(private http: HttpClient, private route: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(URLUSER);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(URLCat);
  }
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(URL);
  }
  addProduit(p: Produit): Observable<Produit> {
    return this.http.post<Produit>(URL, p);
  }
  getUserBymail(m: string): Observable<User[]> {
    return this.http.get<User[]>(`${URLUSER}?mail=${m}`);
  }
  addCart(id: Number, u: User): Observable<User> {
    return this.http.put<User>(URLUSER + "/" + id, u);
  }
  addUser(u: User): Observable<User> {
    return this.http.post<User>(URLUSER, u);
  }
  authentficate(u: User): Observable<User> {
    return this.http.get<User>(`${URLUSER}?mail=${u.mail}&password=${u.password}`);
  }
  x: Produit[] = [];
  signout() {
    localStorage.setItem("user", "");
    window.location.reload();
  }
  getProduitBycategory(c: String) {
    this.x = [];
    this.getProduits().subscribe(
      (data) => {
        data.forEach((e) => {
          for (let i of e.category) {
            if (c == i) {
              this.x.push(e);
            }
          }
        });

      })

    return this.x;
  }

  clickEvent(x: any) {
    return x;
  }
  getProduitById(i: number): Observable<Produit> {
    return this.http.get<Produit>(`${URL}/${i}`);
  }
  public getReviews(id: number) {
    return this.http.get<Review>(`${URLRev}?id_prod=${id}`);
  }
  lastprod: number = 0;
  favorite(x: number) {
    if (this.lastprod == 0 || this.lastprod != x) {
      this.lastprod = x;

      return true;
    }
    else {
      this.lastprod = 0;

      return false

    }
  }
  user3!: User;
  addProductTocart(id: number) {
    if (this.message && this.message.length > 0) {
      this.getUserBymail(this.message).subscribe((data) => {
        this.user3 = data[0];
        if (this.user3.cart.filter(e => e == id).length > 0) {
          return;
        }
        this.user3.cart.push(id);
        this.addCart(this.user3.id, this.user3).subscribe(data => console.log(data));
      })
    }
  }

  userloged!: User;
  produitUser: Produit[] = [];
  getUser() {
    if (this.message && this.message)
      this.getUserBymail(this.message).subscribe((data) => {
        this.userloged = data[0];
      });
  }
  getProducts(id: number) {
    this.getProduitById(id).subscribe((data) => {
      if (this.produitUser.filter(e => e.id == id).length < 1)
        this.produitUser.push(data);
    });
  }
}
