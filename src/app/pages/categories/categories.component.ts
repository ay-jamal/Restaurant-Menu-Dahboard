import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { ItemsService } from 'src/app/service/items.service';
import { RestaurantsService } from 'src/app/service/restaurants.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categories: any
  subCategories: object[] = []
  id: any
  name: any

  constructor(
    private categoriesService: CategoriesService,
    private itemsService: ItemsService,
    public restaurantsService: RestaurantsService,
    private cartService:CartService
  ) {
  }

  ngOnInit(): void {
    this.cartService.cartItemsSubject.subscribe((res:any)=>console.log('resssss'))

    console.log(this.restaurantsService.restaurantName)

    this.categoriesService.getCategories(this.restaurantsService.restaurantName).subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res

      }
    })

  }

  sendcategoryId(id: any) {
    this.itemsService.setcategoryId(id)
  }

}

