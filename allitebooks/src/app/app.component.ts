import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient){}

  books : any[];
  search = {
    book_title : ""
  };

  ngOnInit(){
    this.http.get( "assets/books.json" ).subscribe(( data: any[] )=>{
      this.books = data;
    })
  }

}
