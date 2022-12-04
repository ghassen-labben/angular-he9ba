import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Produit } from '../classes/produit';
import { ProduitService } from '../services/produit.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Category } from '../category';
import { Observable } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  categories!: Category[];



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
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    center: this.coordinates,
    zoom: 16
  };

  marker = new google.maps.Marker({
    icon: {
      url: "https://cdn-icons-png.flaticon.com/512/2981/2981313.png",
      anchor: new google.maps.Point(35, 10),
      scaledSize: new google.maps.Size(50, 50)
    },

    position: this.coordinates,
    map: this.map,

  });
  sourcemarker!: google.maps.Marker;
  ngAfterViewInit() {
    this.mapInitializer();
  }
  ds!: google.maps.DirectionsService;
  dr!: google.maps.DirectionsRenderer;

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
    this.sourcemarker.setMap(this.map);

  }


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.sourcemarker = new google.maps.Marker({
        icon: {
          url: "https://cdn-icons-png.flaticon.com/512/4284/4284108.png",
          anchor: new google.maps.Point(35, 10),
          scaledSize: new google.maps.Size(50, 50)
        },
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: this.map,
      });
    });

    this.listproduit.getCategories().subscribe(data => { console.log("imad"); this.categories = data });
  }

}
