import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  private categoryId: any
  private categoryid$ = new Subject()

  setcategoryId(id: string) {
    this.categoryId = id
    this.categoryid$.next(this.categoryId)
  }

  getAllByCategoryId(id: string) {
   return this.http.get(`${this.config.getAPILink()}/api/SubCategories/get-all-by-category-id/${id}`)
  }

  getItems(subCategoryId: any) {
    return this.http.get(`${this.config.getAPILink()}/api/Items?subCategoryId=${subCategoryId}`)
  }

  getcategoryIdSubject(): Subject<any> {
    return this.categoryid$;
  }


}
