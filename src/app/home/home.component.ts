import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public show:boolean = false;
  movie_name = new FormControl('');
  movie_year = new FormControl('');
  Title = "";
  Year = "";
  Rated = "";
  Released = "";
  Runtime = "";
  Genre = "";
  Director = "";
  Writer = "";
  Actors = "";  
  Plot = "";
  Language = "";
  Country = "";
  Awards = "";
  Poster = "";
  constructor(private http: HttpClient,private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
    if(this.loginService.login_status == true){
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate([''])
    }
  }
  search(){


    let mname=this.movie_name.value;
    let myear=this.movie_year.value;
    mname = mname.split(' ').join('+');
    let link = 'https://www.omdbapi.com/?t='+mname+'&y='+myear+'&apikey=dc12527f'
    
    this.http.get<any>(link).subscribe(data => {
      //this.totalAngularPackages = data.total;
      this.Title = data.Title;
      this.Year = data.Year;
      this.Rated = data.Rated;
      this.Released = data.Released;
      this.Runtime = data.Runtime;
      this.Genre = data.Genre;
      this.Director = data.Director;
      this.Writer = data.Writer;
      this.Actors = data.Actors;
      this.Plot = data.Plot;
      this.Language = data.Language;
      this.Country = data.Country;
      this.Awards = data.Awards;
      this.Poster = data.Poster

      this.show = true;
      this.movie_name.reset();
      this.movie_year.reset();
      
  })   
  }
}
