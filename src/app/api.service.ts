import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  books: Book[] = [];
  search = '';
  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private http: HttpClient, ) {
  }
  getSearch(search: string) {
    this.search = search;
  }
  reSearch() {
    return this.search;
  }
  getBooks(): Book[] {
    this.books = [];
    const response = this.http.get<any>(this.url + 'test' + '&maxResults=40');
    // console.log(this.search);
    response.subscribe(res => {
      const books = res.items;

      books.forEach(book => {
        const newBook = {
          Id: book.id,
          Title: book.volumeInfo.title,
          Author: book.volumeInfo.authors,
          ImageUrl: book.volumeInfo.imageLinks.thumbnail,
          PublishDate: book.volumeInfo.publishedDate
        };

        this.books.push(newBook);
      });

    });

    return this.books;
  }
}
