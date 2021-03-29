import { Rental } from "./rental";

export interface RentalDetails extends Rental{
    id:number,
    carId:number,
    carName:string,
    userName:string,
    customerName:string,
    rentDate:number,
    returnDate:number,
}