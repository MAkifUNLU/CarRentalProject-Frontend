import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cars/detail/:carId", component: CarDetailComponent},
  {path:"cars/:carId",component:CarDetailComponent},
  {path:"cars/detail/:carId",component:CarComponent},
   {path:"cars/rentals", component:CarComponent},///:colorId
   {path:"cars/cardetail/:carId", component:CarDetailComponent},
   //{path:"cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/cars/cardetail/:carId", component:CarDetails},
  // {path:"cars/brand/:brandId/cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/color/:colorId/cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/filter/:brandId/:colorId", component:CarComponent},
   {path:"rental/:carId",component:RentalComponent},
   {path:"cars/rental/:carId",component:RentalComponent},
   {path:"payment/:rental",component:PaymentComponent},

   {path:"brands", component:BrandListComponent},
   {path:"colors", component:ColorListComponent},
  
  {path:"brands/add", component:BrandAddComponent},
   {path:"colors/add", component:ColorAddComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
