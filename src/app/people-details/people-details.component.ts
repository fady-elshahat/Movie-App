import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  id:string = "";
  personDetails:any = {};
  imgPrefix:string ="https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute , private _DataService:DataService) {

  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._DataService.getPersonDetails(this.id).subscribe((data)=>{

      this.personDetails = data;
    })
  }

}
