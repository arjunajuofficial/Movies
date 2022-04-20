import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie_name = new FormControl('');
  movie_year = new FormControl('');
  Title = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  search(){
    //https://www.omdbapi.com/?t=john+wick&y=&apikey=dc12527f
    let mname=this.movie_name.value;
    let myear=this.movie_year.value;
    mname = mname.split(' ').join('+');
    let link = 'https://www.omdbapi.com/?t='+mname+'&y='+myear+'&apikey=dc12527f'
    //console.log(link);
    this.http.get<any>(link).subscribe(data => {
      //this.totalAngularPackages = data.total;
      this.Title = data.Title;
      console.log(data.Title);
  })   
  }
}
