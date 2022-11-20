import { Review } from "./review";

export class Produit {
    constructor(public id_prod: Number, public name: String, public price: Number, public photo: string[], public category: String[], public enStock: boolean,
        public DateFab: Date,
        public sizes: Number[], public colors: String[], public reviews: Review[]) { }
}
