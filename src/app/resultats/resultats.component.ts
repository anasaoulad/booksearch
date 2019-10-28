import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { preserveWhitespacesDefault } from '@angular/compiler';
@Component({
  selector: 'adz-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  books: Book[];
  search = '';
  clicked = false;
  constructor(private apiService: ApiService, public dialog: MatDialog) { }
dialogConfig = new MatDialogConfig();
  ngOnInit() {
    this.books = this.apiService.getBooks();
    this.search = this.apiService.reSearch();
    console.log(this.search);
    this.search = '';
    this.apiService.getSearch(this.search);
    console.log(this.books);
  }
  onClick(book: Book) {
    this.apiService.clickedBook(book);
    console.log(book);
    this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.apiService.clickedBook(book),
      panelClass: 'Dialog'
    });
  }
}
