import { Car } from "./car";
import { CarImage } from "./carImage";
import { Customer } from "./customer";

  export interface CarDetail extends Car , CarImage, Customer {
      carName:string,
      brandName:string,
      colorName:string,
      modelYear:number,
      dailyPrice:number,
      description:string,
      imagePath:string,
      date:Date
  }