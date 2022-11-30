import { Review } from "./review";

export class Produit {
    constructor(public id_prod: number, public name: String, public price: number, public photo: string[], public category: String[], public enStock: boolean,
        public DateFab: Date,
        public sizes: Number[], public colors: String[], public reviews: Review[]) { }
}
