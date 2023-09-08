import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { RestaurantsService } from 'src/app/service/restaurants.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {

  cartItemsSubscription:any;

  cartItemsLength = 0;

  constructor(private route: Router,
    private cartService:CartService
    ) {
  }

  ngOnInit(){
    this.cartItemsSubscription = this.cartService.getCartItemsSubject().subscribe({
      next:(items:any) => {
        this.cartItemsLength = items.cartitems?.length || 0;
        console.log(this.cartItemsLength);
      },
      error:(err)=> false
    });
  }

  goToCart() {
    this.route.navigate([`cart`])
  }
}
