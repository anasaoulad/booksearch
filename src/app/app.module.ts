import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ResultatsComponent } from './resultats/resultats.component';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { JwPaginationComponent } from 'jw-angular-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultatsComponent,
    DialogComponent,
    JwPaginationComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    SimplebarAngularModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
