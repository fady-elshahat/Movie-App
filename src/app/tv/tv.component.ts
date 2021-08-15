import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  allTv:any[] = [];
  imgPrefix:string ="https://image.tmdb.org/t/p/w500";
  constructor(private _DataService:DataService) { 
  }

  ngOnInit(): void {

    this._DataService.getTV().subscribe((data)=>{

      this.allTv = data.results;
    })
  }

}
