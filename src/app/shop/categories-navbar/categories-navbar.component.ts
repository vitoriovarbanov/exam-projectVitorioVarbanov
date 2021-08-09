import { Component, OnInit } from '@angular/core';
import categories from '../models/categories'

@Component({
  selector: 'app-categories-navbar',
  templateUrl: './categories-navbar.component.html',
  styleUrls: ['./categories-navbar.component.css']
})
export class CategoriesNavbarComponent implements OnInit {
  showClose = false;
  categoriesImported

  constructor() {
    this.categoriesImported = categories
  }

  ngOnInit(): void {
  }
}
