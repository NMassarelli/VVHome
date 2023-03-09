import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BookViewComponent } from './book-view/book-view.component';
import { WritingSelectionViewComponent } from './writing-selection-view/writing-selection-view.component';

@NgModule({
  declarations: [BookViewComponent, WritingSelectionViewComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
