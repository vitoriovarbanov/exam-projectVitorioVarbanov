import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { SortByPipe } from './sort-by.pipe';
import { AuthModule } from '../auth/auth.module';

import { SortExpansionPanelComponent } from './sort-expansion-panel/sort-expansion-panel.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';
import { CategoriesNavbarComponent } from './categories-navbar/categories-navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsResolver } from '../product-details.resolver';
import { StarRatingTopComponent } from './product-details/star-rating-top/star-rating-top.component';
import { StarRatingBottomComponent } from './product-details/star-rating-bottom/star-rating-bottom.component';
import { NavbarCategoriesProductsComponent } from './product-details/navbar-categories-products/navbar-categories-products.component';
import { AllProductsByCategoryResolver } from '../all-products-by-category.resolver';
import { ProductsPerCategoryComponent } from './products-per-category/products-per-category.component';
import { DialogViewComponent } from './display-cart-items/dialog-view/dialog-view.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    ShopHomeComponent,
    SortByPipe,
    SortExpansionPanelComponent,
    ShoppingCartComponent,
    DisplayCartItemsComponent,
    CategoriesNavbarComponent,
    ProductDetailsComponent,
    StarRatingTopComponent,
    StarRatingBottomComponent,
    NavbarCategoriesProductsComponent,
    ProductsPerCategoryComponent,
    DialogViewComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule,
  ],
  providers: [ProductDetailsResolver, AllProductsByCategoryResolver]
})
export class ShopModule { }
