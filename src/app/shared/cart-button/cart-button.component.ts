import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/service/restaurants.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {


  constructor(private route: Router,
    private restaurantsService: RestaurantsService
    ) {
  }


  goToCart() {
    this.route.navigate([`cart`])
  }
}
