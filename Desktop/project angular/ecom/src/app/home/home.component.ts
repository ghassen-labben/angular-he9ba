import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Produit } from '../classes/produit';
import { ProduitService } from '../services/produit.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Category } from '../category';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  categories: Category[] = [
    new Category("men", "../../assets/images/men.png"),
    new Category("wommen", "../../assets/images/wommen.png"),
    new Category("kids", "../../assets/images/kids.png"),
    new Category("shoes", "../../assets/images/shoes.png"),
    new Category("hoodies", "../../assets/images/hoodie.png"),
    new Category("t-shirt", "../../assets/images/tshirt.png"),


  ];


  produitcategory!: Produit[];
  constructor(private listproduit: ProduitService) { }

  getProduitService() {
    return this.listproduit;
  }
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 36.70726747904303;
  lng = 10.200959675266823;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }


  ngOnInit(): void {
    this.produitcategory = this.listproduit.getProduitBycategory("");

  }

}
