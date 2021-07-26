import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() itemsInCart
  @Input() itemsSum
  constructor(private srvc: ProductsService) { }

  ngOnInit(): void {
  }

}
