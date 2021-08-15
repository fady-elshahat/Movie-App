import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  allPeople:any[] = [];
  imgPrefix:string ="https://image.tmdb.org/t/p/w500";

  constructor(private _DataService:DataService) { 

  }

  ngOnInit(): void {
    this._DataService.getPerson().subscribe((data)=>{

      this.allPeople = data.results;
    })
  }

}
