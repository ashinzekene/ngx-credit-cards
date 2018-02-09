import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';
import { NgxCreditCardsService } from "./ngx-credit-cards.service";
import { FormatterOptions } from "./models";

@Directive({
  selector: '[ngxCardCvv]'
})
export class CreditCardCvvDirective {
  @Output() cvvChange: EventEmitter<FormatterOptions> = new EventEmitter()
  maxLength: number = 3
  formatter: FormatterOptions = {
    inputType: 'cvc',
    selector: '.ngx-credit-card-cvv'
  }

  constructor(private cardService: NgxCreditCardsService, el: ElementRef) {
    el.nativeElement.classList.add('ngx-credit-card-cvv')
  }

  @HostListener('keyup', ['$event']) keyUp(e: any) {
    let { value } = e.target
    let validObj = cardValidator.cvv({ maxLength: this.maxLength, value })
    this.cardService.cvv = value
    this.cvvChange.emit(validObj)
    let { cardValidity } = this.cardService
    if (cardValidity && cardValidity.card && cardValidity.card.type) {
      this.formatter.cardType = cardValidity.card.type
      paymentFormatter(this.formatter)
    }
  }


}