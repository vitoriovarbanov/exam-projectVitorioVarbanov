import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { AllProductsBaseModel } from '../models/AllProductsBaseModel'
import { PageEvent } from '@angular/material/paginator';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrls: ['./food-beverages.component.css']
})
export class FoodBeveragesComponent implements OnInit {
  products
  foodBeveragesInCart: number;
  sumInCart: number;
  sortCriteria: string = 'default'
  showCart: boolean

  constructor(private srvc: ProductsService, private authSrvc: FirebaseAuthService, private _snackBar: MatSnackBar) {
    this.srvc.getFoodBeveragesProducsts()
      .subscribe((data: AllProductsBaseModel) => {
        this.products = data
      })

    this.srvc.productsInCart$.subscribe(data => {
      this.foodBeveragesInCart = data
    })

    this.authSrvc.signedIn$.subscribe(data => {
      console.log(data)
      this.showCart = data
    })
  }

  ngOnInit(): void {
  }

  //PAGINATOR SETTINGS,VISIBLE ITEMS PER PAGES
  lowValue: number = 0;
  highValue: number = 10;

  // used to build an array of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  addItemsToCart(priceOfItem, nameOfItem, productIndex) {
    //console.log(priceOfItem)
    this.srvc.updateCart(priceOfItem, nameOfItem, productIndex, 'foodbeverages')

    this.srvc.productsInCart$.subscribe(data => {
      this.foodBeveragesInCart = data
    })
    this.srvc.cartItemsSum$.subscribe(data => {
      this.sumInCart = data
    })
  }

  sortItems(e) {
    this.sortCriteria = e;
  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action);
  }
}
