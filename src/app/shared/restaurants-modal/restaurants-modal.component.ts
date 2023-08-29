import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsService } from 'src/app/service/restaurants.service';

@Component({
  selector: 'app-restaurants-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './restaurants-modal.component.html',
  styleUrls: ['./restaurants-modal.component.scss']
})
export class RestaurantsModalComponent implements OnInit {

  restaurants: any

  constructor(
    public activeModal: NgbActiveModal,
    private restaurantsService: RestaurantsService
  ) {
  }

  ngOnInit(): void {
    // this.restaurantsService.getRestaurants()
    // this.restaurantsService.restaurants$.subscribe({
    //   next: (res) => {
    //     this.restaurants = res
    //     console.log(this.restaurants);
        
    //   }
    // })
  }

  restaurantsForm: FormGroup = new FormGroup({
    name: new FormControl('0', [Validators.required])
  })

  submitForm() {
    this.restaurantsService.restaurantId = this.restaurantsForm.value.name
    this.activeModal.close(this.restaurantsService.restaurantId)
  }

  close() {
    this.activeModal.close(0)
  }

}

