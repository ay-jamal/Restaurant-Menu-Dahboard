import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  subcategories: any

  constructor(
    private cartService: CartService,
    private itemService: ItemsService,
    private router:ActivatedRoute
  ) {
    this.subcategories = []
    this.router.paramMap.subscribe({
      next:(res:any)=>{
        console.log(res.params.id);
        if(!res.params.id) return
        this.itemService.getAllByCategoryId(res.params.id).subscribe({
          next: (res:any) => {
            console.log(res);
            this.subcategories = res
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.itemService.getcategoryIdSubject().subscribe({
      next: (res) => {
        console.log(res);
        this.itemService.getAllByCategoryId(res).subscribe({
          next: (res:any) => {
            console.log(res);
            this.subcategories = res
          }
        })
      }
    })
  }


  getAllItems(subcategory: any): any[] {
    let allItems: any[] = [];
    subcategory.subCategories.forEach((subcateg: any) => {
      allItems = allItems.concat(subcateg.items);
    });
    return allItems;
  }

  addToCart(item: any) {
    console.log('hi from cart ');
    
    this.cartService.addItemToCart(item);
  }

}
