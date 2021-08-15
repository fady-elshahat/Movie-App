import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

  imgPrefix:string ="https://image.tmdb.org/t/p/w500";

  @Input() treindgMovie:any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    margin:5,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 0
      },
      740: {
        items: 0
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
