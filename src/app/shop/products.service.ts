import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { FoodProducts } from './models/FoodProduts';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  databaseUrl: string = 'https://health-web-shop.firebaseio.com'

  constructor(private http: HttpClient, private firestoreDb: AngularFirestore) { }

  getFoodBeveragesProducsts() {
    return this.http.get<FoodProducts>('https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/foodbeverages')
      .pipe(map(data => {
        return data['documents'].map(x => x['fields'])
      }))
  }



}
