import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';
import { NgxCreditCardsService } from "./ngx-credit-cards-cvv.service";

@Directive({
  selector: '[ngxCardCvv]'
})
export class CreditCardCvvDirective {
  @Output() numberChange: EventEmitter<any> = new EventEmitter()

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('ngx-credit-card-cvv')
    paymentFormatter({
      inputType: 'cvc',
      selector: '.ngx-credit-card-cvv'
    })
  }

}