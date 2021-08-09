import { Component, OnInit } from '@angular/core';
import categories from '../../models/categories'

@Component({
  selector: 'app-navbar-categories-products',
  templateUrl: './navbar-categories-products.component.html',
  styleUrls: ['./navbar-categories-products.component.css']
})
export class NavbarCategoriesProductsComponent implements OnInit {
  showClose = false;
  categoriesImported

  constructor() {
    this.categoriesImported = categories
   }

  ngOnInit(): void {
  }
}
