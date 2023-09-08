import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports:[
    ReactiveFormsModule
  ]
})

export class OrderComponent {
  cartItemsSubscription:any;

  cartItems:any;
  
  orderForm :any = new FormGroup({
    customerName: new FormControl('test', Validators.required) ,
    customerPhoneNumber: new FormControl( '092', Validators.required) ,
    customerAddress: new FormControl('test', Validators.required) ,
    customerNote: new FormControl('test') ,
  })

  constructor(
    private cartService:CartService,
    private orderService:OrderService
  ){}
  
  ngOnInit(){
    this.cartItemsSubscription = this.cartService.getCartItemsSubject().subscribe({
      next:(items:any) => {
        this.cartItems = items.cartitems;
        console.log(this.cartItems);
      },
      error:(err)=> false
    });
  }

  sendOrder(){
    console.log(this.orderForm.invalid)
    if(this.orderForm.invalid) return
    const orderObj = {
      ...this.orderForm.value,
      restaurantId: +this.cartItems[0].item.restaurantId,
      items: this.cartItems.map((items:any)=> {
        return {
          itemId: +items.item.id,
          quantity: +items.quantity
        }
      } )
    }
    this.orderService.sendOrder(orderObj).subscribe(res => console.log(res))
  }
}
