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
  filtre: Book = new Book();
  books: Book[];
  search = '';
  catSelect: string;
  authSelect: string;
  inputField = '';
  booksWithAuthor: Book[];
  dialogConfig = new MatDialogConfig();
  ktab: Array<Book> = [];

  async ngOnInit() {
    await (this.apiService.getKtab()).subscribe(
      data => {
        data.items.forEach(
          book => {
            const newBook = {

              Author: book.volumeInfo.authors,
              Category: book.volumeInfo.categories,
              Description: book.volumeInfo.description,
              // Height: book.volumeInfo.dimensions ? book.volumeInfo.dimensions.height : undefined,
              // Thickness: book.volumeInfo.dimensions.thickness,
              // Width: book.volumeInfo.dimensions.width
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
            this.ktab.push(newBook);
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

    console.log(this.ktab);
    // this.books = this.apiService.getBooks();
    // console.log(this.books);
    // this.booksWithAuthor = this.books.filter(book => book.Author !== '');
    /* const time = new Observable<string>((observer: Observer<string>) => {
       setInterval(() => observer.next(new Date().toString()), 1000);
     });
    // const soreted = this.bookByAuthor(this.books);
    // const pdfDispo = this.books.filter(z => this.book.PdfDispo);
    // console.log(pdfDispo);
    // this.booksWithAuthor = this.books.filter( book => book.Author !== undefined );
  }*/}

  onChange() {
    this.books = this.books.filter(res => { res.Author.toLocaleLowerCase().match(this.inputField.toLocaleLowerCase()); });
    console.log(this.inputField);
    this.ngOnInit();
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
