import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component'

const routes: Routes = [
  { path: '', component: ShopHomeComponent },
  { path: 'foodbeverages', component: FoodBeveragesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
