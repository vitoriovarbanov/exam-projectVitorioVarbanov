import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  itemsInCart
  subtotalSum$ = new BehaviorSubject(0)
  total

  constructor(private srvc: ProductsService,private firestoreDb: AngularFirestore,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
      this.total = localStorage.getItem('cartSum')
      this.total = Number(this.total) + 20;
      this.total = Number(this.total.toFixed(2))
  }

  emptyCart() {
    localStorage.setItem("cartItems", '0');
    localStorage.setItem("cartSum", '0');
    this.srvc.productsInCart$.next(0)
    this.srvc.cartItemsSum$.next(0)
    this.firestoreDb.collection("users").doc(localStorage.getItem('uid')).update({
      cartItems: firebase.firestore.FieldValue.delete()
    })
      .then(() => {
        console.log("Items removed from cart");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    this.itemsInCart = this.srvc.emptyCartFunctionUpdate()
    this.subtotalSum$.next(0)
    setTimeout(()=>{
      window.location.href = 'http://localhost:4200/shop'
    },2000)

  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action);
  }


}
