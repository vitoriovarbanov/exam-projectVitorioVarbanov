import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component'
import { SportsComponent } from './sports/sports.component';
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';

const routes: Routes = [
  { path: '', component: ShopHomeComponent },
  { path: 'foodbeverages', component: FoodBeveragesComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'cart', component: DisplayCartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
