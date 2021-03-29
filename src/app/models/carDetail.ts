import { Car } from "./car";
import { CarImage } from "./carImage";

  export interface CarDetail extends Car , CarImage {
      carName:string,
      brandName:string,
      colorName:string,
      modelYear:number,
      dailyPrice:number,
      description:string,
      imagePath:string,
      date:Date
  }