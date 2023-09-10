import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {

  cartItems: any;
  cartItemsSubscription!: Subscription;

  constructor(private cartService: CartService, private route: Router,
    private restaurantsService:RestaurantsService
    ) {
   
  }

  ngOnInit(): void {
    //console.log('hi from cart component');
    this.cartService.cartItemsSubject.subscribe((res:any)=>false)
    this.cartItemsSubscription = this.cartService.getCartItemsSubject().subscribe({
      next:(items:any) => {
        console.log(items.cartitems);
        this.cartItems = items.cartitems;
      },
      error:(err)=> false
    });
  }

  removeFromCart(item: string): void {
    this.cartService.removeItemFromCart(item);
  }

  updateQuantity(item: { item: string; quantity: number }, index: number): void {
    if (item.quantity < 1) {
      item.quantity = 1; // Ensure quantity is always at least 1
    }
    this.cartItems[index].quantity = item.quantity;
  }

  goToOrder() {
    const restaurantName = this.restaurantsService.restaurantName
    this.route.navigate([`/home/${restaurantName}/orders`])
  }

  ngOnDestroy(): void {

  }
}
