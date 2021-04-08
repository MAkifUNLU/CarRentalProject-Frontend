export interface Rental{
    rentalId?:number,
    carId:number,
    customerId?:number,
    brandName?:string,
    colorName:string,
    companyName?:string,
    firstName?: string,
    lastName?:string,
    carDailyPrice:number,
    carModelYear:number,
    carDescription:string,
    rentDate:Date,
    returnDate?:Date
    //     rentalId?:number;
    //     carId:number;
    // userId?:number;
    //     customerId:number;
    //     rentDate?:Date;
    // rentStartDate:Date;
    // rentEndDate?:Date;
    //     returnDate?:Date;
    // totalRentPrice?:number;
}