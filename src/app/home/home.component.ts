import { Component, OnInit, Injectable } from '@angular/core';
import { Book } from '../book';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from '../api.service';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ResultatsComponent } from '../resultats/resultats.component';
@Component({
  selector: 'adz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // name = 'recherche des livres';
  books: Book[];
  search = '';

  constructor(private apiService: ApiService, private activateroute: ActivatedRoute, private router: Router) {
    // console.log(this.search);
  }

  ngOnInit() {
    // this.books = this.apiService.getBooks();
    //  console.log(this.search);
    console.log(this.books);
    // this.search = this.apiService.getSearch(this.search);
    // this.search = '';
  }
  getSearch() {
    this.apiService.getSearch(this.search);
    console.log(this.search);
    this.router.navigate(['/resultats']);
  }
}
