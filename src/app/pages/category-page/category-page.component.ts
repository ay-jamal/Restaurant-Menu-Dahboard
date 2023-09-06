import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
  @Input() categoryObj:any;

  constructor(){
  };

  ngOnInit(){
    console.log(this.categoryObj)

  };
}
