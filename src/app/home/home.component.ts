import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  treindgMovie:any[] = [];
  treindgTv:any[] = [];
  treindgPerson:any[] = [];
  treindgNetwork:any[] = [];
  term:string = "";
  searchDet:any[] = [];
  imgPrefix:string ="https://image.tmdb.org/t/p/w500";

  constructor(private _DataService:DataService) { 
  }

  searchItem(){
    this._DataService.search(this.term).subscribe((data)=>{
      this.searchDet = data.results;
    })
  }

  ngOnInit(): void {
    this._DataService.getTrending("movie").subscribe((data)=>{

      this.treindgMovie = data.results.slice(0,16);
    })


    this._DataService.getTrending("tv").subscribe((data)=>{

      this.treindgTv = data.results.slice(0,10);
    })


    this._DataService.getPerson().subscribe((data)=>{

      this.treindgPerson = data.results.slice(0,10);
    })
  }

}
