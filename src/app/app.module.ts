import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ItemsComponent } from './pages/items/items.component';
import { ConfigService } from './service/config.service';
import { BrandComponent } from './shared/brand/brand.component';
import { CartButtonComponent } from './shared/cart-button/cart-button.component';
import { HeaderComponent } from './shared/header/header.component';
import { ImgSliderComponent } from './shared/img-slider/img-slider.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ReactiveFormsModule } from '@angular/forms';


const ProjectConfigrations = (config: ConfigService) => {

  return async () => {

    await config.LoadConfigrations();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CartComponent,
    ItemsComponent,
    CartButtonComponent,
    HeaderComponent,
    ImgSliderComponent,
    BrandComponent,
    CategoryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ProjectConfigrations,
      multi: true,
      deps: [ConfigService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
