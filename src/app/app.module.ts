import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BookViewComponent } from './bookView/book-view/book-view.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [AppComponent, BookViewComponent, HomeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
