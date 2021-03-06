import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CreditCardCvvDirective } from "./ngx-credit-cards-cvv.directive";
import { CreditCardExpiryDirective } from "./ngx-credit-cards-expiry.directive";
import { CreditCardNoDirective } from "./ngx-credit-cards-no.directive";
import { CreditCardNameDirective } from "./ngx-credit-cards-name.directive";
import { NgxCreditCardsComponent } from "./ngx-credit-cards/ngx-credit-cards.component";

import { NgxCreditCardsService } from "./ngx-credit-cards.service";

@NgModule({
  imports: [CommonModule],
  exports: [
    CreditCardCvvDirective,
    CreditCardExpiryDirective,
    CreditCardNoDirective,
    CreditCardNameDirective,
    NgxCreditCardsComponent
  ],
  declarations: [
    CreditCardCvvDirective,
    CreditCardExpiryDirective,
    CreditCardNoDirective,
    CreditCardNameDirective,
    NgxCreditCardsComponent
  ],
  providers: [NgxCreditCardsService],
})
export class NgxCreditCardsModule { }
