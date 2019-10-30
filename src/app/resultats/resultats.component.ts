import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'adz-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  books: Book[];
  search = '';
//  clicked = false;
  dialogConfig = new MatDialogConfig();

 /* bookByAuthor = (books: Book[]) => books.sort((booka: Book, bookb: Book) => {
    if (booka.PageCount > bookb.PageCount) { return 1; }
    if (booka.PageCount < bookb.PageCount) {return 0 ; }
    return 0;
  })*/

  ngOnInit() {
    this.books = this.apiService.getBooks();
   /* const time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
    console.log(time);*/
    // this.search = this.apiService.reSearch();
    // this.apiService.setSearch(this.search);
   // this.search = '';
    // const soreted = this.bookByAuthor(this.books);
   // const pdfDispo = this.books.filter(z => this.book.PdfDispo);
    // console.log(pdfDispo);
   // this.booksWithAuthor = this.books.filter( book => book.Author !== undefined );
  }

  onClick(book: Book) {
    this.apiService.clickedBook(book);
    this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.apiService.clickedBook(book),
      panelClass: 'Dialog'
    });
  }
  onClickPage(num: number) {
    this.books = this.apiService.getNumberBooks(num);
  }


  // tslint:disable-next-line:variable-name

  // const filterbyauthor = (_book: Book[], books)=> books.filter()
}
