import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxCreditCardsModule } from "./ngx-credit-cards/ngx-credit-cards.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    NgxCreditCardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
