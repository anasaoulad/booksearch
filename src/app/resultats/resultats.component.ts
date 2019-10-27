import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'adz-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  books: Book[];
  search = '';
  clicked = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.books = this.apiService.getBooks();
    this.search = this.apiService.reSearch();
    console.log(this.search);
    this.search = '';
    this.apiService.getSearch(this.search);
    console.log(this.books);
  }
onClick() {
  this.clicked = !this.clicked;
}
}
