import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesArray: any
  categories$ = new Subject()
  subcategories$ = new Subject()
  constructor(private http: HttpClient, private config: ConfigService) { }

  getCategories(restaurantLink: string) {
    return this.http.get(`${this.config.getAPILink()}/api/Categories/home/${restaurantLink}`)
  }

  getSubCategories(categoryId: any) {
    return this.http.get(`${this.config.getAPILink()}/api/SubCategories?categoryId=${categoryId}`)
  }

}
