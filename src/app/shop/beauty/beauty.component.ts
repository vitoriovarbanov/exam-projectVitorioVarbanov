import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { AllProductsBaseModel } from '../models/AllProductsBaseModel';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {
  products
  beautyProducts: number
  sumInCart: number;
  sortCriteria: string = 'default'
  showCart: boolean


  constructor(private srvc: ProductsService, private authSrvc: FirebaseAuthService) {
    this.srvc.getBeautyProducts()
      .subscribe((data: AllProductsBaseModel) => {
        this.products = data
      })
    this.srvc.productsInCart$.subscribe(data => {
      this.beautyProducts = data
    })
    this.authSrvc.signedIn$.subscribe(data=>{
      console.log(data)
      this.showCart = data
    })
  }

  ngOnInit(): void {
  }

  // used to build an array of papers relevant at any given time
  lowValue: number = 0;
  highValue: number = 10;
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  addItemsToCart(priceOfItem,nameOfItem,productIndex) {
    this.srvc.updateCart(priceOfItem,nameOfItem,productIndex,'beauty')
    this.srvc.productsInCart$.subscribe(data=>{
      this.beautyProducts = data
    })
    this.srvc.cartItemsSum$.subscribe(data=>{
      this.sumInCart = data
    })
  }

  sortItems(e) {
    this.sortCriteria = e;
  }

}
