import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44325/api/";//cardetails

  constructor(private httpClient:HttpClient) { }

   getCars():Observable<ListResponseModel<CarDetail>>{
     let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
   getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl +"cars/getacardetails";//?carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
   getCarDetailByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbyid?carId="+ carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
   getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
   getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
   }
}
