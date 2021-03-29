import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetails } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44325/api/rentals/getrentaldetails";

  constructor(private httpClient: HttpClient) { }
  getRentals():Observable<ListResponseModel<RentalDetails>>{
    return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl)
   }
}
