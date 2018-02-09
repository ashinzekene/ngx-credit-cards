import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';
import { NgxCreditCardsService } from "./ngx-credit-cards.service";

@Directive({
  selector: '[ngxCardNo]'
})
export class CreditCardNoDirective {
  @Output() numberChange: EventEmitter<any> = new EventEmitter()

  constructor(private cardService: NgxCreditCardsService, el: ElementRef) {
    el.nativeElement.classList.add('ngx-credit-card-no')
    paymentFormatter({
      inputType: 'cardNumber',
      selector: '.ngx-credit-card-no'
    })
  }

  @HostListener('keyup', ['$event']) keyUp(e: any) {
    let { value } = e.target 
    this.cardService.cardNumber = value
    this.cardService.cardValue = cardValidator.number(value)
    this.numberChange.emit(cardValidator.number(value))
  }

}