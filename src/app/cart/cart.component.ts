import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {

  cartItems: { item: string; quantity: number }[] = [];
  cartItemsSubscription!: Subscription;

  constructor(private cartService: CartService, private route: Router,
    ) {
   
  }

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartService.getCartItemsSubject().subscribe(items => {
      console.log('hi from cart component');
      console.log(items);
      this.cartItems = items;
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
    this.route.navigate(['/home/orders'])
  }

  ngOnDestroy(): void {

  }
}
