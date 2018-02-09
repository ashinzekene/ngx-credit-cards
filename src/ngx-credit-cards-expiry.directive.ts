import { Directive, ElementRef, HostListener, Host } from '@angular/core';
import paymentFormatter from 'payment-formatter';

@Directive({
  selector: '[ngxCardExpiry]'
})
export class CreditCardExpiryDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('ngx-credit-card-expiry')
    el.nativeElement.style.backgroundColor = "red"
    console.log('added to class')
    paymentFormatter({
      inputType: 'expiry',
      selector: 'input.ngx-credit-card-expiry'
    })
  }


  @HostListener('onkeyup', ['$event'])
  onkeyup(event: any) {
    console.log("Key up card expiry")
  }
  
}