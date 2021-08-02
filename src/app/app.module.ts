import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductDetailsResolver } from './product-details.resolver';

var firebaseConfig = {
  apiKey: "AIzaSyCSMVEI-JeMqnZkV0xINRC7aDOpR_zIvE4",
  authDomain: "health-web-shop.firebaseapp.com",
  projectId: "health-web-shop",
  storageBucket: "health-web-shop.appspot.com",
  messagingSenderId: "814139156034",
  appId: "1:814139156034:web:5dee0632d0f82b7da4efdb"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, // auth
  ],
  providers: [ProductDetailsResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
