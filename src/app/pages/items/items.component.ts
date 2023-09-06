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

  subcategories: any = []
  categoryId:any;
  restaurantId:any;

  constructor(
    private cartService: CartService,
    private itemService: ItemsService,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.router.queryParams.subscribe({
      next:(res:any)=>{
        this.restaurantId = res.restaurantId
      }
    })
    
    this.router.paramMap.subscribe({
      next:(res:any)=>{
        this.categoryId = res.params.id
        if(!this.categoryId) return
        
        this.itemService.getAllByCategoryId(this.categoryId).subscribe({
          next: (res:any) => {
            console.log('items ',res);
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
    console.log('hi from items component ');
    item.restaurantId = this.restaurantId
    this.cartService.addItemToCart(item);
  }

}
