import { NgModule } from '@angular/core';
// import { CommonModule } from "@angular/common";

import { CreditCardCvvDirective } from "./ngx-credit-cards-cvv.directive";
import { CreditCardExpiryDirective } from "./ngx-credit-cards-expiry.directive";
import { CreditCardNoDirective } from "./ngx-credit-cards-no.directive";

@NgModule({
  exports: [CreditCardCvvDirective, CreditCardExpiryDirective, CreditCardNoDirective],
  declarations: [CreditCardCvvDirective, CreditCardExpiryDirective, CreditCardNoDirective],
  providers: [],
})
export class Angular4PaystackModule { }
