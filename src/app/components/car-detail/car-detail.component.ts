import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[] = []
  carImages: CarImage[] = [];
  cars: Car[] = [];
  dataLoaded = false;

  constructor(private carService : CarService,
    private carDetailService : CarDetailService,
    private carImageService : CarImageService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailByCarId(params["carId"])
        this.getCarImagesByCarId(params['carId']);
      }
    })
  }
  getCarDetailByCarId(carId: number) {
    this.carService.getCarDetailByCarId(carId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }
  getCarImagesByCarId(carId:number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {//hata olabilir
      this.carImages = response.data;
      this.dataLoaded = true;

    })
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  } 
}
