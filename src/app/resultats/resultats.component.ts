import { Component, OnInit } from '@angular/core';
import { Book, Total } from '../book';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { Observable, Observer } from 'rxjs';
import { Subscription } from 'rxjs';
// import { FormsModule , FormControl } from '@angular/forms';
@Component({
  selector: 'adz-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {


  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  search = '';
  filter: Book = new Book();
  catSelect: string;
  authSelect: string;
  dialogConfig = new MatDialogConfig();
  Book: Array<Book> = [];
  author = '';
  page: string;
  async ngOnInit() {
    this.Book = [];
    this.apiService.getAuthor(this.author);
    if (this.author === '') {
      this.onLoad();
      console.log(this.author);
    }
    if (this.author !== '') {
      this.onChange();
      console.log(this.author);
    }
    // this.books = this.apiService.getBooks();
    // console.log(this.books);
    // this.booksWithAuthor = this.books.filter(book => book.Author !== '');
  }
  onLoad() {
    this.Book = [];
    (this.apiService.getBook()).subscribe(
      data => {
        data.items.forEach(
          book => {
            const newBook = {

              Author: book.volumeInfo.authors,
              Category: book.volumeInfo.categories,
              Description: book.volumeInfo.description,
              Height: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.height : undefined,
              Thickness: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.thickness : undefined,
              Width: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.width : undefined,
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
              Title: book.volumeInfo.title,
              WebRead: book.accessInfo.webReaderLink,
              PdfDispo: book.accessInfo.pdf.isAvailable,

            };
            this.Book.push(newBook);
          }
        );
      },
      (error) => {

        console.error();

      },
      () => {

        console.log('done from rs');
      }
    );

    console.log(this.Book);

  }
  setPage(data) {
    this.page = data;
  }
  onClickPage() {
    this.apiService.getPage(this.page);
    this.ngOnInit();
  }
  onAuthor() {
    this.apiService.getAuthor(this.author);
    this.ngOnInit();
  }
  onChange() {
    this.apiService.getAuthor(this.author);
    console.log(this.author);
    (this.apiService.getBookWithAuthor()).subscribe(
      data => {
        data.items.forEach(
          book => {
            const newBook = {

              Author: book.volumeInfo.authors,
              Category: book.volumeInfo.categories,
              Description: book.volumeInfo.description,
              Height: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.height : undefined,
              Thickness: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.thickness : undefined,
              Width: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.width : undefined,
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
              Title: book.volumeInfo.title,
              WebRead: book.accessInfo.webReaderLink,
              PdfDispo: book.accessInfo.pdf.isAvailable,

            };
            this.Book.push(newBook);
          }
        );
      },
      (error) => {

        console.error();

      },
      () => {

        console.log('done from rs');
      }
    );
  }
  onClick(book: Book) {
    this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.apiService.clickedBook(book),
      panelClass: 'Dialog'
    });
  }

  /*onClickPage(num: number) {
    this.books = this.apiService.getNumberBooks(num);
  }*/

}
