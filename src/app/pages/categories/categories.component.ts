import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    public restaurantsService: RestaurantsService,
    private cartService:CartService
  ) {
  }

  ngOnInit(): void {
    this.cartService.cartItemsSubject.subscribe((res:any)=>console.log('resssss'))

    console.log(this.restaurantsService.restaurantName)
    this.route.paramMap.subscribe({

      next: (res: any) => {
        //console.log('resssss')
        this.categoriesService.getCategories('test').subscribe({
          next: (res) => {
            console.log(res);
            this.categories = res
            this.categories = [
              {
                id:'1',
                restaurantId:'1',
                name:'test',
              },
              {
                id:'1',
                restaurantId:'1',
                name:'test',
              },
              {
                id:'1',
                restaurantId:'1',
                name:'test',
              },
            ]
          }
        })
      }
    })
  }

  sendcategoryId(id: any) {
    this.itemsService.setcategoryId(id)
  }

}

