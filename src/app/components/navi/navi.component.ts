import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  imageUrl = "https://localhost:44325/Images/"
  defaultImage="logo.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
