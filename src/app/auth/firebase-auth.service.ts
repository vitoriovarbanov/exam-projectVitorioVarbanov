import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductsService } from '../shop/products.service';


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
    private router: Router, private firestoreDatabase: AngularFirestore, private srvc: ProductsService) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.firestoreDatabase.doc(`users/${user.uid}`).valueChanges()
          .pipe(take(1)).subscribe(data => {
            this.newUser.next(data['newUser'])
          })
        this.newUser.subscribe(data => {
          if (data === true) {
            this.signedIn$.next(false)
          } else {
            localStorage.setItem('photoURL', user.photoURL)
            localStorage.setItem('email', user.email)
            localStorage.setItem('uid', user.uid)
            localStorage.setItem('displayName', user.displayName)
            this.signedIn$.next(true)
            this.srvc.getUserCurrentItemsInCart()
              .subscribe(data => {
                /* console.log(data) */
                let cartItems = 0;
                let cartSum = 0;
                data.forEach(el => {
                  cartItems += el.quantity
                  cartSum += el.priceOfItem * el.quantity
                });
                localStorage.setItem('cartItems', cartItems.toString())
                localStorage.setItem('cartSum', cartSum.toString())
                this.srvc.productsInCart$.next(Number(localStorage.getItem('cartItems')))
              })
          }
        })
        return this.firestoreDatabase.doc(`users/${user.uid}`).valueChanges()
      } else {
        this.signedIn$.next(false)
      }
    })
  }


  async AuthLogin(provider) {
    return await this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('Logged in with Google!')
        this.router.navigate(['/'])
        return this.updateUserData(result.user, result.additionalUserInfo.isNewUser)
      }).catch((error) => {
        console.log(error)
        this.handleError(error.message)
      })
  }

  registerUserWithMail(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.router.navigate(['auth/login'])
        console.log('Registration successfull!')
        return this.updateUserData(data.user, data.additionalUserInfo.isNewUser)
      })
      .catch(err => {
        console.log(err.message)
        this.handleError(err.message)
      })
  }

  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.signedIn$.next(true)
        console.log('Logged In!');
        this.router.navigate(['/'])
        return this.updateUserData(result.user, result.additionalUserInfo.isNewUser)
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.handleError(err.message)
      });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.signedIn$.next(false)
      console.log('Logged Out!');
      localStorage.clear();
      this.router.navigate(['/']);
    })
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

  currError = new BehaviorSubject('')
  handleError(err) {
    let error = err;
    console.log(error)
    this.currError.next(error)
    //window.alert(error);
  }


}
