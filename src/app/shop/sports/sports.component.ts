import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { SportsFitnessProducts } from '../models/SportsFitnessProducts'
import { PageEvent } from '@angular/material/paginator';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  products
  sportsFitnessProducts: number
  sumInCart: number;
  sortCriteria: string = 'default'
  showCart: boolean

  constructor(private srvc: ProductsService, private authSrvc: FirebaseAuthService) {
    this.srvc.getSportFitnessProducts()
      .subscribe((data: SportsFitnessProducts) => {
        this.products = data
      })
    this.srvc.productsInCart$.subscribe(data => {
      this.sportsFitnessProducts = data
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
    this.srvc.updateCart(priceOfItem,nameOfItem,productIndex,'sports')
    this.srvc.productsInCart$.subscribe(data=>{
      this.sportsFitnessProducts = data
    })
    this.srvc.cartItemsSum$.subscribe(data=>{
      this.sumInCart = data
    })
  }

  sortItems(e) {
    this.sortCriteria = e;
  }
}
