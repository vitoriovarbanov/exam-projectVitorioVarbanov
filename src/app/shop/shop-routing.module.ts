import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ProductsPerCategoryComponent } from './products-per-category/products-per-category.component'
import { DisplayCartItemsComponent } from './display-cart-items/display-cart-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
//RESOLVERS
import { ProductDetailsResolver } from '../product-details.resolver';
import { AllProductsByCategoryResolver } from '../all-products-by-category.resolver';
import { CheckoutComponent } from './checkout/checkout.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);

const routes: Routes = [
  { path: '', component: ShopHomeComponent },
  { path: 'foodbeverages', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver } },
  {
    path: 'foodbeverages/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'sports', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver } },
  {
    path: 'sports/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'herbs', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver } },
  {
    path: 'herbs/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'beauty', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver }  },
  {
    path: 'beauty/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'vitamins', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver } },
  {
    path: 'vitamins/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'superfoods', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver } },
  {
    path: 'superfoods/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'diet', component: ProductsPerCategoryComponent, resolve: { productDetails: AllProductsByCategoryResolver } },
  {
    path: 'diet/:id', component: ProductDetailsComponent, resolve: { productDetails: ProductDetailsResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'cart', component: DisplayCartItemsComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
