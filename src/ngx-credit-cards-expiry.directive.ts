import { Directive, ElementRef } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';
import { NgxCreditCardsService } from "./ngx-credit-cards-cvv.service";

@Directive({
  selector: '[ngxCardExpiry]'
})
export class CreditCardExpiryDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('ngx-credit-card-expiry')
    paymentFormatter({
      inputType: 'expiry',
      selector: '.ngx-credit-card-expiry'
    })
  }
  
}