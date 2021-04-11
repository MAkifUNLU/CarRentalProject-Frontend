
// import { Component, Input, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Customer } from 'src/app/models/customer';
// import { CustomerService } from 'src/app/services/customer.service';
// import { RentalService } from 'src/app/services/rental.service';
// import { CarDetail } from 'src/app/models/carDetail';
// import { Rental } from 'src/app/models/rental';
// import { CarService } from 'src/app/services/car.service';
// import { environment } from 'src/environments/environment';
// //import { AuthService } from 'src/app/services/auth.service';
// //import { FindeksServiceService } from 'src/app/services/findeks-service.service';
// //import { DialogService } from 'primeng/dynamicdialog';
// //import { CreditCardPaymentComponent } from '../credit-card-payment/credit-card-payment.component';
// import { DatePipe } from '@angular/common';
// import { CarImage } from 'src/app/models/carImage';
// import { CarImageService } from 'src/app/services/carimage.service';

// @Component({
//   selector: 'app-rental',
//   templateUrl: './rental.component.html',
//   styleUrls: ['./rental.component.css']
// })
// export class RentalComponent implements OnInit {
//   car:CarDetail;
//   cars:CarDetail[]=[]
//   startDate:Date;
//   endDate:Date;
//   rentPrice:number = 0;
//   rental:Rental;
//   rentable:Boolean = false;
//   carImages: CarImage[] = [];
//   defaultImg="/images/default.jpg"
//   dataLoaded = false;
//   minDate:string|null;
//   endMinDate:string|null;
//   maxDate:string|null;
//     totalPrice:number=0;
//     totalDay:number=1;
//   constructor(
//     private rentalService:RentalService,
//     private carService:CarService,
//     private activatedRoute:ActivatedRoute,
//     private router:Router,
//     private carImageService : CarImageService,
//     private datePipe:DatePipe,
//     private toastrService:ToastrService,){}
//     //private authService:AuthService,
//     //private findeksService:FindeksServiceService,
//     //private dialogService:DialogService) { }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe(params=>{
//       if(params["carId"]){
//         this.getCarDetail(params["carId"])
//         this.getCarImagesByCarId(params['carId'])
//         this.priceCalculator();
//       }
//     })
//     this.minDate=this.datePipe.transform(new Date(),"yyyy-MM-dd");
//     this.maxDate=this.datePipe.transform(new Date(new Date().setFullYear(new Date().getFullYear() + 1)),"yyyy-MM-dd");
//   }



//   getCarDetail(carId:number) {
//     this.carService.getCarDetailByCarId(carId).subscribe((response) => {
//       this.car = response.data[0];
//     });
//   }

//   async addRental(){
//     this.rentable = (await this.setRentable())
//     if(this.rentable){
//       // let currentUserId = this.authService.getCurrentUserId()
//       // if(await this.findeksService.isCustomerFindexEnough(currentUserId,this.car.carId)){
//       //   this.rental = this.rental;
//       //   this.rental.userId = this.authService.getCurrentUserId()
//       //   this.openCreditCard()

//       // }
//       // else{
//       //   this.toastrService.error("Findeks puanınız yeterli değil","Hata")
//       // }
//     }else{
//       this.toastrService.error("Bu tarihler arasında araba zaten kiralanmış","Hata")
//     }
//   }
//   openCreditCard(){

//     // const ref = this.dialogService.open(CreditCardPaymentComponent, {
//     //   data:{
//     //     rental: this.rental
//     //   },
//     //   header: 'Kart bilgileri',
//     //   width: '40%'
//     // });
//     this.toastrService.info("Kredi kartı ödeme sayfasına yönlendiriliyor","Yönlendiriliyor")
//   }

//   async setRentable(){
//     this.rental = {customerId:this.rental.customerId,carId:this.car.carId,rentStartDate:this.startDate,rentEndDate:this.endDate,totalRentPrice:this.calculatePrice()};
//     return (await this.rentalService.isRentable(this.rental).toPromise()).success
//   }

//   calculatePrice():number{
//     if(this.startDate && this.endDate){
//       let endDate = new Date(this.endDate.toString())
//       let startDate = new Date(this.startDate.toString())
//       let endDay = Number.parseInt(endDate.getDate().toString())
//       let endMonth = Number.parseInt(endDate.getMonth().toString())
//       let endYear = Number.parseInt(endDate.getFullYear().toString())
//       let startDay = Number.parseInt(startDate.getDate().toString())
//       let startMonth = Number.parseInt(startDate.getMonth().toString())
//       let startYear = Number.parseInt(startDate.getFullYear().toString())
//       let result =  ((endDay - startDay) + ((endMonth - startMonth)*30) + ((endYear - startYear)*365) + 1) * this.car.dailyPrice
//       if (result>0){
//         return result
//       }
//     }
//     this.toastrService.info("Bu tarihler arasında arabayı kiralayamazsınız","!")
//     return 0
//   }


//   controlEndDate(){
//     if(this.endDate<this.startDate){
//       this.endDate = this.startDate
//     }
//   }
//   getCarImagesByCarId(carId:number) {
//     this.carImageService.getCarImagesByCarId(carId).subscribe(response => {//hata olabilir
//       this.carImages = response.data;
//       this.dataLoaded = true;

//     })
//   }
//   priceCalculator() {    

//     if (this.startDate != null && this.endDate != null)
//     {
//       var date1 = new Date(this.endDate);
//       var date2 = new Date(this.startDate);

//       var difference = date1.getTime() - date2.getTime();
//       var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));
//       this.totalDay= numberOfDays+1;
//       this.totalPrice = this.totalDay * this.cars[0].dailyPrice;  
//     }     
//   }
// }
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers: [DatePipe]
})
export class RentalComponent implements OnInit {

  carId: number;
  customers: Customer[];
  cars: Car[]
  carImages: CarImage[] = [];
  rentals: Rental[] = [];
  dataLoaded = false;
  rentDate: Date;
  returnDate: Date;
  customerId: number;

  @Input() car: CarDetail;//Input()?


  minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;

  constructor(private rentalService: RentalService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private router: Router,
    private datePipe: DatePipe,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private authService:AuthService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.carId = params["carId"];
        this.getCars(params["carId"]);
      }
    })
    this.getCustomer();

  }

  getRentals() {
    this.rentalService.getRentals().subscribe(response => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
      this.dataLoaded = true;
    })
  }

  getCars(carId: number) {
    this.carService.getCarDetailByCarId(carId).subscribe(response => {
      this.car = response.data[0]

    })
  }

  checkRentableCar() {
    this.rentalService.getRentalsByCarId(this.carId).subscribe(response => {
      if (response.data[0] == null) {
        this.createRental();
        return true;
      }
      let lastItem = response.data[response.data.length - 1]
      if (lastItem.returnDate == null) {
        return this.toastrService.error('Bu araç teslim edilmemiş', 'Teslim Tarihi Geçersiz');
      }
      let returnDate = new Date(lastItem.returnDate);
      let rentDate = new Date(this.rentDate);
      if (rentDate < returnDate) {
        return this.toastrService.error('Bu araç bu tarihler arasında kiralanamaz', 'Geçersiz tarih seçimi')
      }
      this.createRental();
      return true;
    })
  }

  createRental() {
    let createdRental: Rental = {
      carId: this.car.carId,
      brandName: this.car.brandName,
      colorName: this.car.colorName,
      carModelYear: this.car.modelYear,
      carDailyPrice: this.car.dailyPrice,
      carDescription: this.car.description,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      customerId: this.customerId
    };
    //createdRental.customerId == undefined ||
    if ( createdRental.rentDate == undefined) {
      this.toastrService.error('Eksik bilgi girdiniz', 'Bilgilerinizi kontrol ediniz')
    }
    else {
      this.router.navigate(['/payment/', JSON.stringify(createdRental)]);
      this.toastrService.info('Ödeme sayfasına yönlendiriliyorsunuz.', 'Ödeme İşlemleri')
    }
  }

  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }
  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }

  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }

  isLogin(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    return false;
  }

  checkFindexPoint(){
    this.carService.getCarDetailByCarId(this.carId).subscribe(response => {
      
      let customer = this.localStorageService.getCurrentCustomer();

      if(customer.findexPoint === 0){
        this.toastrService.warning("Kullanıcının findeks puanı sıfırdır","Dikkat");
        return  this.router.navigateByUrl("/cars");
      }

      let car:Car = response.data[0];
      if(customer.findexPoint < car.findexPoint){
        this.toastrService.warning("Findeks puanınız yetersiz","Dikkat");
        return  this.router.navigate(["/cars"]);
      }
      return this.checkRentableCar();
    })
  }
}