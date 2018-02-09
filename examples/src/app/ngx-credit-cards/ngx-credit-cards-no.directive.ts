import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';

@Directive({
  selector: '[ngxCardNo]'
})
export class CreditCardNoDirective {
  @Output() numberChange: EventEmitter<any> = new EventEmitter()

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('ngx-credit-card-no')
    paymentFormatter({
      inputType: 'cardNumber',
      selector: '.ngx-credit-card-no'
    })
  }

  @HostListener('onKeyUp', ['$event'])
  private keyUp(e: any) {
    console.log("KEY UP")
    this.numberChange.emit(cardValidator.number(e.target.value))
  }

}