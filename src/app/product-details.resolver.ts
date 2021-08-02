import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ProductsService } from '../app/shop/products.service'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolver implements Resolve<any> {
  constructor(private productSrvc: ProductsService ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const id = route.params['id']
      const category = route.url[0].path
      /* console.log(category)
      console.log(id) */
      return this.productSrvc.getItemDetails(category,id)
    }
}
