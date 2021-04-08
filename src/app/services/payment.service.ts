import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44325/api/";

  // isCardExist(payment:Payment):Observable<ResponseModel>{
  //   let newPath = this.apiUrl + "creditcards/iscardexist"
  //   return this.httpClient.post<ResponseModel>(newPath,payment);
  // }
  // getByCardNumber(cardNumber:string):Observable<ListResponseModel<Payment>>{
  //   let newPath = this.apiUrl + "creditcards/getbycardnumber?cardnumber=" + cardNumber
  //   return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  
  // getCardById(id:number):Observable<SingleResponseModel<Payment>>{
  //   let newPath = this.apiUrl +"creditcards/getbyid?id="+id
  //   return this.httpClient.get<SingleResponseModel<Payment>>(newPath)
  // }
  // updateCard(payment:Payment):Observable<ResponseModel>{
  //   let newPath = this.apiUrl + "creditcards/update"
  //   return this.httpClient.put<ResponseModel>(newPath,payment)
  // } 

}
