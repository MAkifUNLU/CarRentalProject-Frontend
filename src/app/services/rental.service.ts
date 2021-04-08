import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44325/api/";           //rentals/getrentaldetails

   constructor(private httpClient: HttpClient) { }
    // getRentals():Observable<ListResponseModel<RentalDetail>>{
    //   return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl)
    //  }

    getRentals():Observable<ListResponseModel<Rental>>{
      let newPath = this.apiUrl+"rentals/getall";
      return this.httpClient.get<ListResponseModel<Rental>>(newPath);
    }
  
   getAllRentalDetail():Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "rentals/getallrentaldetails"
    return this.httpClient
      .get<ListResponseModel<RentalDetail>>(this.apiUrl);
  }

  getRentalById(rentalId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getbyid?=" + rentalId
    return this.httpClient
    .get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getbycarid?=" + carId
    return this.httpClient
    .get<ListResponseModel<Rental>>(newPath);
  }
  
  addRental(rental:Rental){
    let newPath = this.apiUrl + "rentals/add"
    this.httpClient.post(newPath,rental).subscribe()
  }

  // isRentable(rental:Rental):Observable<ResponseModel>{
  //   let newPath = this.apiUrl + "rentals/isrentable"
  //   return this.httpClient.post<ResponseModel>(newPath,rental);
  // }



  // getLastByCarId(carId:number):Observable<Rental>{
  //   let newPath = this.apiUrl + "rentals/getlastbycarid?carId=" + carId
  //   return this.httpClient.get<Rental>(newPath);
  // }

}
