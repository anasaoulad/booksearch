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
  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private http: HttpClient, ) {
  }
  setSearch(search: string) {
    this.search = search;
  }
  reSearch() {
    return this.search;
  }
  clickedBook(book: Book) {
    return book;
  }
  book() {
    const query = this.search === '' ? 'test' : this.search;
    return this.http.get<Book[]>(this.url + query + '&maxResults=40' + '&startIndex=')
      .subscribe(
      );
  }
  viderBook() {
    this.books = [];
  }
  getTotalBooks() {
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
  getBooks(): Book[] {
    this.getTotalBooks();
    const query = this.reSearch() === '' ? 'test' : this.reSearch();
    for (let i = 0; i < 2; i++) {
      const j = i * 40;
      const response = this.http.get<any>(this.url + query + '&maxResults=40' + '&startIndex=' + j);
      response.subscribe(res => {

        const books = res.items;
        books.forEach(book => {
          const newBook = {
            Author: book.volumeInfo.authors,
            Category: book.volumeInfo.categories,
            Description: book.volumeInfo.description,
            // Height: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.height : undefined,
            Id: book.id,
            ImageUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : undefined,
            Language: book.volumeInfo.language,
            PageCount: book.volumeInfo.pageCount,
            PdfLink: book.accessInfo.pdf.downloadLink,
            PreviewLink: book.volumeInfo.previewLink,
            PublishDate: book.volumeInfo.publishedDate,
            Publisher: book.volumeInfo.publisher,
            Rating: book.volumeInfo.averageRating,
            RatingsCount: book.volumeInfo.ratingCount,
            SubTitle: book.volumeInfo.subtitle,
            // Thickness: book.volumeInfo.dimensions.thickness,
            Title: book.volumeInfo.title,
            WebRead: book.accessInfo.webReaderLink,
            PdfDispo: book.accessInfo.pdf.isAvailable,
            // Width: book.volumeInfo.dimensions.width
          };

          this.books.push(newBook);
        });

      }, (error) => {
        console.error();
      }, () => { console.log('done'); });
    }
    return this.books;
  }
  /*getNumberBooks(num: number): Book[] {
    this.books = [];
    const query = this.search === '' ? 'test' : this.search;
    const response = this.http.get<any>(this.url + query + '&maxResults=40&startIndex=' + num);
    response.subscribe(res => {

      const books = res.items;

      books.forEach(book => {
        const newBook = {
          Author: book.volumeInfo.authors,
          Category: book.volumeInfo.categories,
          Description: book.volumeInfo.description,
          // Height: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.height : undefined,
          Id: book.id,
          // ImageUrl: book.volumeInfo.imageLinks.thumbnail,
          ImageUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : undefined,
          Language: book.volumeInfo.language,
          PageCount: book.volumeInfo.pageCount,
          PdfLink: book.accessInfo.pdf.downloadLink,
          PreviewLink: book.volumeInfo.previewLink,
          PublishDate: book.volumeInfo.publishedDate,
          Publisher: book.volumeInfo.publisher,
          Rating: book.volumeInfo.averageRating,
          RatingsCount: book.volumeInfo.ratingCount,
          SubTitle: book.volumeInfo.subtitle,
          // Thickness: book.volumeInfo.dimensions.thickness,
          Title: book.volumeInfo.title,
          WebRead: book.accessInfo.webReaderLink,
          PdfDispo: book.accessInfo.pdf.isAvailable,
          // Width: book.volumeInfo.dimensions.width
        };

        this.books.push(newBook);
      });

    });

    return this.books;
  }*/
  getKtab(): Observable<any> {
    const i = 0; // this.pages;
    const j = i * 40;
    const query = this.reSearch() === '' ? 'test' : this.reSearch();
    return this.http.get(this.url + query + '&maxResults=40' + '&startIndex=' + j);
  }
}
