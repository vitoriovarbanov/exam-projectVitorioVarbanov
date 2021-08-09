import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { AllProductsBaseModel } from '../models/AllProductsBaseModel';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {
  products
  herbsProducts: number
  sumInCart: number;
  sortCriteria: string = 'default'
  showCart: boolean

  constructor(private srvc: ProductsService, private authSrvc: FirebaseAuthService) {
    this.srvc.getHerbsProducts()
      .subscribe((data: AllProductsBaseModel) => {
        this.products = data
      })
    this.srvc.productsInCart$.subscribe(data => {
      this.herbsProducts = data
    })
    this.authSrvc.signedIn$.subscribe(data=>{
      console.log(data)
      this.showCart = data
    })
  }

  ngOnInit(): void {
  }

  lowValue: number = 0;
  highValue: number = 10;
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  addItemsToCart(priceOfItem,nameOfItem,productIndex) {
    this.srvc.updateCart(priceOfItem,nameOfItem,productIndex,'herbs')
    this.srvc.productsInCart$.subscribe(data=>{
      this.herbsProducts = data
    })
    this.srvc.cartItemsSum$.subscribe(data=>{
      this.sumInCart = data
    })
  }

  sortItems(e) {
    this.sortCriteria = e;
  }

}
