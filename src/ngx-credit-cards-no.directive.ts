import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';
import { NgxCreditCardsService } from "./ngx-credit-cards.service";
import { FormatterOptions, ValidityOptions } from './models';

@Directive({
  selector: '[ngxCardNo]'
})
export class CreditCardNoDirective {
  @Output() numberChange: EventEmitter<ValidityOptions> = new EventEmitter()
  formatter: FormatterOptions = {
    inputType: 'cvc',
    selector: '.ngx-credit-card-cvv'
  }

  constructor(private cardService: NgxCreditCardsService, el: ElementRef) {
    el.nativeElement.classList.add('ngx-credit-card-no')
    paymentFormatter({
      inputType: 'cardNumber',
      selector: '.ngx-credit-card-no'
    })
  }

  
  formatNumber = number => {
    const { length: maxLength, type } = this.state;
    let formattedNumber = number;

    if (number && number.length > maxLength) {
      formattedNumber = number.slice(0, maxLength);
    }

    formattedNumber = padEnd(formattedNumber, maxLength, '•');

    if (type === 'amex') {
      formattedNumber = `${formattedNumber.substring(0, 4)} ${formattedNumber.substring(4, 10)} ${formattedNumber.substring(10)}`;
    } else {
      const amountOfSpaces = Math.ceil(maxLength / 4);
      times(amountOfSpaces, i => {
        const spaceIndex = ((i * 4) + i);
        formattedNumber = `${formattedNumber.slice(0, spaceIndex)} ${formattedNumber.slice(spaceIndex)}`;
      });
    }

    return formattedNumber;
  }

  @HostListener('keyup', ['$event']) keyUp(e: any) {
    let { value } = e.target
    this.cardService.cardNumber = value
    this.cardService.cardValidity = cardValidator.number(value)
    this.numberChange.emit(cardValidator.number(value))
    let { cardValidity } = this.cardService
    if (cardValidity && cardValidity.card && cardValidity.card.type) {
      this.formatter.cardType = cardValidity.card.type
      paymentFormatter(this.formatter)
    }
  }

}