import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37`)
  }
  getTrendingPeople(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&append_to_response=videos,images`)
  }
  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&language=en-US`)
  }
  getTvDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&language=en-US`)
  }
  getPersonDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&language=en-US&append_to_response=videos,images`)
  }
  getMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&language=en-US&page=1`)
  }
  getTV():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&language=en-US&page=1`)
  }
  getPerson():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&language=en-US&page=1`)
  }
  search(term: string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=cfd8cc0bf7cc3d9378942b6940c3bf37&query=${term}
    &language=en-US&page=1&include_adult=false`)
  }
}
