import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[] = [];
  dataLoaded = false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      } else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      } else {
        this.getCarDetails()//buraya bak   
      }
    })
  }
  getCars(){
   this.carService.getCars().subscribe(response=>{
     this.cars = response.data
     this.dataLoaded = true;
   })
  }
  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.cars = response.data
      console.log(response)
      this.dataLoaded = true;
    })
  }
  getCarDetailByCarId(carId:number){
    this.carService.getCarDetailByCarId(carId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  
}
