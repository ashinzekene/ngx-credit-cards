import { Directive, ElementRef, HostListener, Host } from '@angular/core';
import paymentFormatter from 'payment-formatter';

@Directive({
  selector: '[ngxCardCvv]'
})
export class CreditCardCvvDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('ngx-credit-card-cvv')
    el.nativeElement.style.backgroundColor = "red"
    console.log('added to class')
    paymentFormatter({
      inputType: 'cardNumber',
      selector: 'input.ngx-credit-card-no'
    })
  }

  @HostListener('onkeyup', ['$event'])
  onkeyup(event: any) {
    console.log("Key up card cvv")
  }
  

}