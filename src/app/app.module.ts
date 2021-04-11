import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { DatePipe } from '@angular/common';

import{ ToastrModule } from "ngx-toastr";
import { PaymentComponent } from './components/payment/payment.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthMenuComponent } from './components/navi/auth-menu/auth-menu.component';
import { CardSavedComponent } from './components/payment/card-saved/card-saved.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CarDetailComponent,
    FilterCarPipe,
    FilterColorPipe,
    FilterBrandPipe,
    PaymentComponent,
    BrandListComponent,
    BrandAddComponent,
    ColorListComponent,
    ColorAddComponent,
    CarAddComponent,
    LoginComponent,
    AuthMenuComponent,
    CardSavedComponent,
    ProfileComponent,
    RegisterComponent,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    DatePipe,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
