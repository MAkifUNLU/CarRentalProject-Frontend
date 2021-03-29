import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44325/api/"///carimages/

  constructor(private httpClient:HttpClient) { }

  getCarsImages(){
    let newPath=this.apiUrl+"carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getimagesbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}
