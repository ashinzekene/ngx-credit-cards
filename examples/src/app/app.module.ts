import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular4PaystackModule } from './angular4-paystack/angular4-paystack.module'
import { NgxCreditCardsModule } from "./ngx-credit-cards/ngx-credit-cards.module";
// import { CreditCardCvvDirective, CreditCardExpiryDirective, CreditCardNoDirective } from './ngx-credit-cards' 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // CreditCardCvvDirective,
    // CreditCardExpiryDirective,
    // CreditCardNoDirective,
  ],
  imports: [
    BrowserModule,
    Angular4PaystackModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
