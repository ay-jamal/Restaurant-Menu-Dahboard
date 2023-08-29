import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public restaurantsService: RestaurantsService
  ) {
  }

  ngOnInit(): void {
    console.log(this.restaurantsService.restaurantName)
    this.route.paramMap.subscribe({
      next: (res: any) => {
        console.log(res.params);
        this.categoriesService.getCategories('test').subscribe({
          next: (res) => {
            console.log(res);
            this.categories = res
          }
        })
      }
    })
  }

  sendcategoryId(id: any) {
    this.itemsService.setcategoryId(id)
  }

}

