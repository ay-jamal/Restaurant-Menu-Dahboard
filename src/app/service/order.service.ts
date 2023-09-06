import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient, private config: ConfigService
  ) { }

  sendOrder(order:any){
    console.log(order)
    return this.http.post(`${this.config.getAPILink()}/api/Orders`, order)

  }
}
