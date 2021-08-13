import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { PageEvent } from '@angular/material/paginator';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { ActivatedRoute } from '@angular/router';
import categories from '../models/categories';

@Component({
  selector: 'app-products-per-category',
  templateUrl: './products-per-category.component.html',
  styleUrls: ['./products-per-category.component.css']
})
export class ProductsPerCategoryComponent implements OnInit {
  products
  numberOfProducts: number;
  sumInCart: number;
  sortCriteria: string = 'default';
  showCart: boolean;
  category: string;
  categoryStingValue

  constructor(private srvc: ProductsService, private authSrvc: FirebaseAuthService, private router: ActivatedRoute) {
    this.products = this.router.snapshot.data.productDetails
    this.category = this.router.snapshot.url[0].path

    this.srvc.productsInCart$.subscribe(data => {
      this.numberOfProducts = data
    })
    this.authSrvc.signedIn$.subscribe(data => {
      this.showCart = data
    })
  }

  ngOnInit(): void {
    this.categoryStingValue = categories.find(x=>x.categoryName===this.category)
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
    console.log(productIndex)
    this.srvc.updateCart(priceOfItem,nameOfItem,productIndex,this.category)
    this.srvc.productsInCart$.subscribe(data=>{
      this.numberOfProducts = data
    })
    this.srvc.cartItemsSum$.subscribe(data=>{
      this.sumInCart = data
    })
  }

  sortItems(e) {
    this.sortCriteria = e;
  }

}
