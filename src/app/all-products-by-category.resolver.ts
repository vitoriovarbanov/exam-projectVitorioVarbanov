import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ProductsService } from './shop/products.service';

@Injectable({
  providedIn: 'root'
})
export class AllProductsByCategoryResolver implements Resolve<boolean> {
  constructor(private productSrvc: ProductsService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const category = route.url[0].path
    //console.log(category)
    return this.productSrvc.getAllItemsPerCategory(category)
  }
}
