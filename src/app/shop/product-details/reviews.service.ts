import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';

interface AllProductsInList {
  documents: {
    fields: {
      index:{
        integerValue: string,
      }
    }
  }[]
}[]

interface ItemRating {
  reviews: {
    arrayValue: {
      values: {}[]
    }
  }
}

interface AllRatings{
  mapValue: {
    fields: {
      rating: {
        integerValue: string;
      }
    }
  }
}[]

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient, private firestoreDatabase: AngularFirestore) { }

  createPostReviewRequest(category, id, reviewText, rating, username) {
    const firestore = firebase.firestore();
    const col = firestore.collection(category)
    const query = col.where('index', '==', Number(id));
    query.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var docRef = this.firestoreDatabase.collection(category).doc(doc.id);
          docRef.update({
            reviews: firebase.firestore.FieldValue.arrayUnion({ text: reviewText, rating, username })
          });
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  getItemRating(category, productID) {
    return this.http.get(`https://firestore.googleapis.com/v1/projects/health-web-shop/databases/(default)/documents/${category}`)
      .pipe(map(data => {
        let allItems = data['documents'].map(x => x.fields)
        let neededItem: ItemRating = allItems.find(x=>x.index.integerValue===productID);
        let neededItemRatings = 0;
        neededItem.reviews.arrayValue.values.forEach((el:AllRatings)=>{
          neededItemRatings += Number(el.mapValue.fields.rating.integerValue)
        })
        return neededItemRatings
      }))
  }
}
