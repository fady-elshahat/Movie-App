import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';  
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"home",canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"main", component:MainComponent},
  {path:"main/login", component:LoginComponent},
  {path:"main/registration", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"login/main", component:MainComponent},
  {path:"about",canActivate:[AuthGuard], component:AboutComponent},
  {path:"movieDetails/:id",canActivate:[AuthGuard], component:MovieDetailsComponent},
  {path:"tvDetails/:id",canActivate:[AuthGuard], component:TvDetailsComponent},
  {path:"personDetails/:id",canActivate:[AuthGuard], component:PeopleDetailsComponent},
  {path:"tv",canActivate:[AuthGuard], component:TvComponent},
  {path:"movies",canActivate:[AuthGuard], component:MoviesComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"people",canActivate:[AuthGuard] , component:PeopleComponent},
  {path:"**", component:NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
