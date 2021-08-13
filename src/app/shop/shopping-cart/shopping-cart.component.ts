import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() itemsInCart
  @Input() itemsSum
  relativeLink: string;

  constructor(private route: ActivatedRoute) {
    //console.log(this.route.snapshot)
    if(this.route.snapshot.params.id){
      this.relativeLink = '../../cart'
    }else{
      this.relativeLink = '../cart'
    }

  }

  ngOnInit(): void {
  }

}
