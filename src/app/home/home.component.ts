import { Component, OnInit, Injectable } from '@angular/core';
import { Book } from '../book';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
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
