import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/detail/:carId", component: CarDetailComponent},
  // {path:"cars/rentals", component:CarComponent},///:colorId
  // {path:"cars/cardetail/:carId", component:CarDetailComponent},
  // {path:"cars/cars/cardetail/:carId", component:CarDetails},
  // {path:"cars/brand/:brandId/cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/color/:colorId/cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/filter/:brandId/:colorId", component:CarComponent},
  // {path:"rental/:carId", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
