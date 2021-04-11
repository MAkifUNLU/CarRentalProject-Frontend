import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { CardSavedComponent } from './components/payment/card-saved/card-saved.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},  
  //{path:"cars/filter/:brandId/:colorId", component:CarDetailComponent},
  {path:"cars/customers", component: CustomerComponent},
  {path:"customers", component: CustomerComponent},
  {path:"cars/add", component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars/detail/:carId", component: CarDetailComponent},
  {path:"cars/:carId",component:CarDetailComponent},
  {path:"cars/detail/:carId",component:CarComponent},
   {path:"cars/rentals", component:CarComponent},///:colorId
   {path:"cars/cardetail/:carId", component:CarDetailComponent},
   //{path:"cars/filter/brand/:brandId/color/:colorId",component:CarComponent},
   //{path:"cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/cars/cardetail/:carId", component:CarDetails},
  // {path:"cars/brand/:brandId/cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/color/:colorId/cars/cardetail/:carId", component:CarComponent},
  // {path:"cars/filter/:brandId/:colorId", component:CarComponent},
   {path:"rental/:carId",component:RentalComponent},
   {path:"cars/rental/:carId",component:RentalComponent},
   {path:"payment/:rental",component:PaymentComponent},
   {path:"login",component:LoginComponent},
   {path:"register",component:RegisterComponent},
   {path:"profile",component:ProfileComponent},

  {path:"cardSaved",component:CardSavedComponent},

   {path:"brands", component:BrandListComponent},
   {path:"colors", component:ColorListComponent},
  
   {path:"brands/add", component:BrandAddComponent,canActivate:[LoginGuard]},
   {path:"colors/add", component:ColorAddComponent,canActivate:[LoginGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
