import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './pages/items/items.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/:name', pathMatch: 'full' },
  {
    path: 'home/:name', component: HomeComponent, children: [
      { path: '', component: ItemsComponent },
      { path: 'items/:id', component: ItemsComponent },
      { path: 'orders', component: OrderComponent }
    ],
  },
    { path: 'cart', component: CartComponent },
  
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
