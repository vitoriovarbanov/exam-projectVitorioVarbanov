import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { map, take } from 'rxjs/operators';

interface PhotoURL {
  email: string;
  photoURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firestoreDb: AngularFirestore) { }

  getUserInfo(){
    return this.firestoreDb.doc(`users/${localStorage.getItem('uid')}`).valueChanges()
      .pipe(take(1),map(data=>{
          return data
      }))
  }

  updateProfile(name,email,telephone,address,country,postalCode){
    this.firestoreDb.collection("users").doc(localStorage.getItem('uid')).update({
      displayName: name,
      email,
      telephone,
      address,
      country,
      postalCode
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
  }

  updatePicture(photoURL){
    this.firestoreDb.collection("users").doc(localStorage.getItem('uid')).update({
      photoURL
    })
      .then(() => {
        console.log("Document successfully written!");
        return photoURL
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
  }

  takePhotoURL() {
    return this.firestoreDb.doc<PhotoURL>(`users/${localStorage.getItem('uid')}`).valueChanges()
      .pipe(take(1), map((data) => {
        if(!data.photoURL){
          console.log(`here`)
          return 'https://st.depositphotos.com/1052233/2815/v/600/depositphotos_28158459-stock-illustration-male-default-profile-picture.jpg'
        }
        return data.photoURL
      }))
  }
}
