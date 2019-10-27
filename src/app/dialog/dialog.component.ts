import { Component, OnInit , Inject} from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../book';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'adz-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
book: Book;
  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: Book ) { }

  ngOnInit() {
    this.book = this.apiService.clickedBook(this.data);
    console.log(this.book);
  }

}
