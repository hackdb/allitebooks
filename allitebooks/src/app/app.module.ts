import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookFilterPipe } from './book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Materials
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
