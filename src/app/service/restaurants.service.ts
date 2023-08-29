import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurantsArray: any
  restaurants$ = new Subject()

  restaurantName: any

  restaurantId!: string

  constructor(private http: HttpClient, private config: ConfigService) { }



  getCategoriesByrestaurantLink(restaurantLink: string) {
   return this.http.get(`${this.config.getAPILink()}/api/Categories/${restaurantLink}`)
  }

  // getRestaurants() {
  //   return this.http.get(`${this.config.getAPILink()}/api/Restaurants/current-restaurant`)
  //     .subscribe({
  //       next: (res) => {
  //         this.restaurantsArray = res
  //         this.restaurants$.next(this.restaurantsArray)
  //       }
  //     })
  // }
}
