import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { from} from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ResultatsComponent } from './resultats/resultats.component';
import { MatInputModule } from '@angular/material/input';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultatsComponent,
    DialogComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    SimplebarAngularModule,
    MatDialogModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
