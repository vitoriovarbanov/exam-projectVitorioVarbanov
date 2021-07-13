import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'


interface User {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  signedIn$ = new BehaviorSubject(false)
  newUser = new BehaviorSubject(true)

  constructor(public afAuth: AngularFireAuth,
    private router: Router, private firestoreDatabase: AngularFirestore) { }


  async AuthLogin(provider) {
    return await this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('Logged in with Google!')
        this.router.navigate(['/'])
        return this.updateUserData(result.user, result.additionalUserInfo.isNewUser)
      }).catch((error) => {
        console.log(error)
      })
  }

  registerUserWithMail(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.router.navigate(['auth/login'])
        console.log('Registration successfull!')
        return this.updateUserData(data.user, data.additionalUserInfo.isNewUser)
      })
      .catch(err => console.log(err.message))
  }

  updateUserData({ uid, email, displayName, photoURL }: User, newUser) {
    //Sets user data to firestore on login with google/register
    const userRef: AngularFirestoreDocument<User> = this.firestoreDatabase.doc(`users/${uid}`)

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      newUser
    }
    return userRef.set(data, { merge: true })
  }


}
