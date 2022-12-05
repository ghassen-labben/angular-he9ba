import { Review } from "./review";

export class Produit {
    constructor(public id: number, public name: String, public price: number, public photo: string[], public category: String[], public enStock: boolean,
        public DateFab: Date,
        public sizes: string[], public colors: String[], public reviews: Review[], public description: string) { }
}
