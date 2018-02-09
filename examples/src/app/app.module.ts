import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxCreditCardsModule } from "./ngx-credit-cards/ngx-credit-cards.module";
import { AppComponent } from "./app.component";
import { MyHighlightDirective } from './my-highlight.directive';

@NgModule({
  declarations: [AppComponent, MyHighlightDirective],
  imports: [
    BrowserModule,
    NgxCreditCardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
