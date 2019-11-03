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

  books: Book[];
  search = '';
  total: number;

  constructor(private apiService: ApiService, private activateroute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
this.apiService.viderBook();
  }
  setSearch() {
    this.apiService.setSearch(this.search);
    this.router.navigate(['/resultats']);
   // this.total = this.apiService.getTotalBooks();
   // this.books = this.apiService.getBooks();
  }
}
