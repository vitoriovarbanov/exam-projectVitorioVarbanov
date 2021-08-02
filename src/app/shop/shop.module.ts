import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FoodBeveragesComponent } from './food-beverages/food-beverages.component';
import { SortByPipe } from './sort-by.pipe';
import { SortExpansionPanelComponent } from './sort-expansion-panel/sort-expansion-panel.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SportsComponent } from './sports/sports.component';
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';
import { CategoriesNavbarComponent } from './categories-navbar/categories-navbar.component';
import { AuthModule } from '../auth/auth.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsResolver } from '../product-details.resolver';


@NgModule({
  declarations: [ShopHomeComponent, FoodBeveragesComponent, SortByPipe, SortExpansionPanelComponent, ShoppingCartComponent, SportsComponent, DisplayCartItemsComponent, CategoriesNavbarComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [ProductDetailsResolver]
})
export class ShopModule { }
