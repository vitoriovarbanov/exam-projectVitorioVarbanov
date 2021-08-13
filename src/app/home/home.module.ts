import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module'


import { HomeRoutingModule } from './home-routing.module';
import { TopViewComponent } from './top-view/top-view.component';
import { HomeView2Component } from './home-view2/home-view2.component';


@NgModule({
  declarations: [TopViewComponent, HomeView2Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  exports: [
    TopViewComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
