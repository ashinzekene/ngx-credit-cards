import { Directive, ElementRef } from '@angular/core';
import paymentFormatter from 'payment-formatter';

@Directive({
  selector: '[ngxCardCvv]'
})
export class CreditCardCvvDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('ngx-credit-card-cvv')
    paymentFormatter({
      inputType: 'cvc',
      selector: '.ngx-credit-card-cvv'
    })
  }

}