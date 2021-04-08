import { Rental } from "./rental";

export interface RentalDetail {  //extends Rental
        rentalId:number;
        carId:number,
        carName:string,
        userName:string,
        customerName:string,
        rentDate:number,
        returnDate:number,
}