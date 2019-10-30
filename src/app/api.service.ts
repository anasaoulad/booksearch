import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
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
  setSearch(search: string) {
    this.search = search;
  }
  reSearch() {
    return this.search;
  }
  clickedBook(book: Book) {
    return book;
  }
  getBooks(): Book[] {
    this.books = [];
    const query = this.search === '' ? 'test' : this.search;
    const response = this.http.get<any>( this.url + query + '&maxResults=40' );
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
          PdfDispo: book.accessInfo.pdf.isAvailable
          // Width: book.volumeInfo.dimensions.width
        };

        this.books.push(newBook);
      });

    });

    return this.books;
  }
  getNumberBooks(num: number): Book[] {
    this.books = [];
    const query = this.search === '' ? 'test' : this.search;
    const response = this.http.get<any>( this.url + query + '&maxResults=40&startIndex=' + num );
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
          PdfDispo: book.accessInfo.pdf.isAvailable
          // Width: book.volumeInfo.dimensions.width
        };

        this.books.push(newBook);
      });

    });

    return this.books;
  }
}
