import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtonComponent } from '../shared/cart-button/cart-button.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ImgSliderComponent } from '../shared/img-slider/img-slider.component';
import { BrandComponent } from '../shared/brand/brand.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../service/categories.service';
import { RestaurantsModalComponent } from '../shared/restaurants-modal/restaurants-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, CartButtonComponent, HeaderComponent, ImgSliderComponent, BrandComponent],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private categoriesService: CategoriesService,
    private route:Router
  ) {
    config.keyboard = false;
    config.backdrop = 'static';
  }

  ngOnInit(): void {
    this.openRestaurantsModal()
  }

  openRestaurantsModal() {
    const modalRef = this.modalService.open(RestaurantsModalComponent, {
      modalDialogClass: "modal-lg",
    })
    modalRef.componentInstance.editMode = false
    modalRef.closed.subscribe({
      next: (res => {
        console.log(res);
        if (!res) {
          this.openRestaurantsModal()
        } else {
          this.categoriesService.getCategories(res)
          this.route.navigate(['/home'])
        }
      })
    })
  }
}
