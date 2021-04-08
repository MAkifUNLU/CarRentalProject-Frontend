// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { Car } from 'src/app/models/car';
// import { CarDetail } from 'src/app/models/carDetail';
// import { CarService } from 'src/app/services/car.service';

// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   styleUrls: ['./car.component.css']
// })
// export class CarComponent implements OnInit {

//   cars:CarDetail[] = [];
//   carss:Car[]=[];
//   dataLoaded = false;
//   filterCarText="";

//   constructor(private carService:CarService,
//     private activatedRoute:ActivatedRoute,
//     private toastrService:ToastrService ) { }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe(params=>{
//       if(params["colorId"]){
//         this.getCarsByColor(params["colorId"])
//       } else if(params["brandId"]){
//         this.getCarsByBrand(params["brandId"])
//       } else {
//         this.getCarDetails()//buraya bak   
//       }
//     })
//   }
//   getCars(){
//    this.carService.getCars().subscribe(response=>{
//      this.cars = response.data
//      this.dataLoaded = true;
//    })
//   }
//   getCarDetails(){
//     this.carService.getCarDetails().subscribe(response=>{
//       this.cars = response.data
//       console.log(response)
//       this.dataLoaded = true;
//     })
//   }
//   getCarDetailByCarId(carId:number){
//     this.carService.getCarDetailByCarId(carId).subscribe(response=>{
//       this.cars = response.data
//       this.dataLoaded = true;
//     })
//   }
//   getCarsByColor(colorId:number){
//     this.carService.getCarsByColor(colorId).subscribe(response=>{
//       this.cars = response.data
//       this.dataLoaded = true;
//     })
//   }
//   getCarsByBrand(brandId:number){
//     this.carService.getCarsByBrand(brandId).subscribe(response=>{
//       this.cars = response.data
//       this.dataLoaded = true;
//     })
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
   dataLoaded=false;
   filterCarText="";
   carDetail:CarDetail[]=[]

   carUpdateForm:FormGroup;
   carDeleteForm:FormGroup;
   selectedCar:CarDetail;
   
   brands:Brand[];
   colors:Color[];
   
  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private router:Router,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }

       else if(params["colorId"]){
           this.getCarsByColor(params["colorId"])
         }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
         }
      else{
        this.getCarDetails();
      }   
      
    })
    //this.getCarDetails();
    this.getBrands();
    this.getColors();
    
  }
   getCarDetails(){
         this.carService.getCarDetails().subscribe(response=>{
           this.carDetail=response.data;
           this.dataLoaded=true;
         })
   }
   getCarDetailByCarId(carId: number) {
    this.carService.getCarDetailByCarId(carId).subscribe(response => {
      console.log(response)
      this.carDetail = response.data;
      this.dataLoaded = true;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId)
    .subscribe(response=>{
      this.carDetail=response.data;
      this.dataLoaded=true;
    })
 }
 /////
 /*getCarDetailByCarId(brandId:number){
  this.carDetailService.getCarDetailsByBrandId(brandId)
  .subscribe(response=>{
    this.carDetail=response.data;
    this.dataLoaded=true;
  })
}*/
getCarsByColor(colorId:number){
   this.carService.getCarsByColor(colorId)
   .subscribe(response=>{
     this.carDetail=response.data;
     this.dataLoaded=true;
   })
 }
// getCarDetailsByBrandColorId(brandId:number,colorId:number){
//   this.carDetailService.getCarDetailsByBrandColorId(brandId,colorId)
//   .subscribe(response=>{
//     this.carDetail=response.data;
//     this.dataLoaded=true;

//   })
// } 

setSelectedCarToUpdate(carDetail:CarDetail){
  this.selectedCar=carDetail;
  this.updateCreateForm();
}
updateCreateForm(){
  this.carUpdateForm=this.formBuilder.group({
    id:[this.selectedCar.id,Validators.required],
    carName:[this.selectedCar.carName,Validators.required],
    colorId:[this.selectedCar.colorId,Validators.required],
    brandId:[this.selectedCar.brandId,Validators.required],
    dailyPrice:[this.selectedCar.dailyPrice,Validators.required],
    modelYear:[this.selectedCar.modelYear,Validators.required],
    description:[this.selectedCar.description,Validators.required]
  })
}
setSelectedCarToDelete(carDetail:CarDetail){
  this.selectedCar=carDetail;
  this.deleteCreateForm();
}
deleteCreateForm(){
  this.carDeleteForm=this.formBuilder.group({
    id:[this.selectedCar.id,Validators.required],
    carName:[this.selectedCar.carName,Validators.required],
    colorId:[this.selectedCar.colorId,Validators.required],
    brandId:[this.selectedCar.brandId,Validators.required],
    dailyPrice:[this.selectedCar.dailyPrice,Validators.required],
    modelYear:[this.selectedCar.modelYear,Validators.required],
    description:[this.selectedCar.description,Validators.required]
  })
}

updateCar(){
  if(this.carUpdateForm.valid){
    let carModel=Object.assign({},this.carUpdateForm.value)
    this.carService.update(carModel).subscribe(
      (response)=>{
        this.toastrService.success(response.message,"Success")
        //this.router.navigate(["/cars"])
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (responseError)=>{
        
        if(responseError.error.ValidationErrors.length>0){
          
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,
              "Authendication Problem")
          }
        }
      })
      
  }
  else{
    this.toastrService.warning("Form can not be null","Update Failed!")
  }
}
deleteCar(){
  if(this.carDeleteForm.valid){
    let carModel=Object.assign({},this.carDeleteForm.value)
    this.carService.delete(carModel).subscribe(
      (response)=>{
        this.toastrService.success(response.message,"Success")
        //this.router.navigate(["/cars"])
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (responseError)=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,
              "Authendication Problem")
          }
        }
      })
      
  }
  else{
    this.toastrService.warning("Form can not be null","Update Failed!")
  }
}
}
