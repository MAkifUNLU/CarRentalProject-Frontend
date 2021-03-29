import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44325/api/"

  constructor(private httpClient:HttpClient) { }

  // GetCarDetails(): Observable<ListResponseModel<CarDetail>> {
  //   let newPath = this.apiUrl +"cars/getcardetails";
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  // }
  // GetCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
  //   let newPath = this.apiUrl + "cars/getcarbybrandid?brandId= " + brandId;
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  // }
  // GetCarDetailByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
  //   let newPath = this.apiUrl +"cars/getcarbycolorid?colorId="+colorId;
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  // }
  // GetCarDetailByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
  //   let newPath = this.apiUrl + "cars/getbyid?carId="+ carId;
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  // }
}
