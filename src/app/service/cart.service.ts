import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: { item: string; quantity: number }[] = [];
  private cartItemsSubject: Subject<{ item: string; quantity: number }[]> = new Subject<{ item: string; quantity: number }[]>();

  constructor() { }

  getCartItems(): { item: string; quantity: number }[] {
    return this.cartItems;
  }

  addItemToCart(item: string): void {
    console.log(item);

    const existingCartItem = this.cartItems.find(cartItem => cartItem.item === item);
    if (existingCartItem) {
      console.log('existingCartItem');
      existingCartItem.quantity++;
    } else {
      console.log('not existingCartItem');
      this.cartItems.push({ item, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeItemFromCart(item: string): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.item === item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartItemsSubject(): Subject<{ item: string; quantity: number }[]> {
    return this.cartItemsSubject;
  }
}
