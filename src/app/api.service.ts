import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Book, Total } from './book';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  books: Book[] = [];
  search: string;
  TotalBooks: number;
  pages: number;
  author: string;
  page = '1';
  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private http: HttpClient, ) {
  }
  setSearch(search: string) {
    this.search = search;
  }
  reSearch() {
    return this.search;
  }
  getAuthor(author: string) {
    this.author = author;
  }
  setAuthor() {
    return this.author;
  }
  getPage(page: string) {
    this.page = page;
  }
  setPage() {
    return this.page;
  }
  clickedBook(book: Book) {
    return book;
  }
  viderBook() {
    this.books = []; // cela pour évité d'avoir les résultat de la recherche précedente
  }
  getTotalPages() {
    const query =  this.reSearch(); //  === '' ? 'test' : this.search;
    const response =  this.http.get<any>(this.url + query);
    response.subscribe(
      res => {
        const totalBooks = res.totalItems;
        this.pages = Number.parseInt(((totalBooks / 40).toFixed(0)), 10);
      }
    );
    console.log(this.pages);
    return this.pages;
  }
  getBook(): Observable<any> {
    const page = new HttpParams().set('startIndex', this.setPage());
    this.getTotalPages();
    const i = 0; // this.pages;
    const j = i * 40;
    const query = this.reSearch() === '' ? 'test' : this.reSearch();
    return this.http.get(this.url + query + '&maxResults=40' , {params: page});
  }
  getBookWithAuthor(): Observable<any> {
    const author = this.setAuthor();
    const i = 0; // this.pages;
    const j = i * 40;
    const query = this.reSearch() === '' ? 'test' : this.reSearch();
    return this.http.get(this.url + query + '+inauthor:' + author + '&maxResults=40' + '&startIndex=' + j);
  }
}
