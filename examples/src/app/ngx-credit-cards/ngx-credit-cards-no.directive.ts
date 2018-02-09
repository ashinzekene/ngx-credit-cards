import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import paymentFormatter from 'payment-formatter';

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

}