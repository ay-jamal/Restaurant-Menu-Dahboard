import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from './service/restaurants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'restaurant-menu-dahboard';
  name: any

}
