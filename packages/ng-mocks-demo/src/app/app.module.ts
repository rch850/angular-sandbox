import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { KakkoPipe } from './kakko.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    KakkoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
