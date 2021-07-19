import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopHomeComponent } from './shop-home/shop-home.component';


@NgModule({
  declarations: [ShopHomeComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class ShopModule { }