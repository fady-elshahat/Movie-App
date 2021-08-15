import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allMovie:any[] = [];
  imgPrefix:string ="https://image.tmdb.org/t/p/w500";

  constructor(private _DataService:DataService) { 

  }

  ngOnInit(): void {
    this._DataService.getMovies().subscribe((data)=>{

      this.allMovie = data.results;
    })
  }

}
