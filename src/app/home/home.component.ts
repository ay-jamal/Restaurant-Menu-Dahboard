import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private router: Router
  ) {
    this.route.paramMap.subscribe({
      next: (res: any) => {
        console.log(res);  
        this.name = res.params.name
        this.router.navigate([`/home/${this.name}`])
        this.restaurantsService.restaurantName = res.params.name
      }
    })
  }

  categories: any

  ngOnInit(): void {
  }

}




