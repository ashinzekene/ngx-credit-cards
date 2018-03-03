import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import paymentFormatter from 'payment-formatter';
import * as cardValidator from 'card-validator';
import { NgxCreditCardsService } from "./ngx-credit-cards.service";
import { FormatterOptions, ValidityOptions } from './models';

@Directive({
  selector: '[ngxCardNo]'
})
export class CreditCardNoDirective {
  @Output() numChange: EventEmitter<ValidityOptions> = new EventEmitter()
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

  //  This runs on keyup of the element conatining the directive and outputs the card number validity
  @HostListener('keyup', ['$event']) keyUp(e: any) {
    let { value } = e.target
    this.cardService.cardNumberSuject.next(value)
    // This sets the validity Subject using .next operator. This is done in the card service
    this.cardService.cardOptions = [cardValidator.number(value), false]
    this.numChange.emit(cardValidator.number(value))
    // This formats the card cvv based on the type of card
    let { cardOptionsSubject } = this.cardService
    cardOptionsSubject.subscribe(([cardValidity, _]) => {
      if (cardValidity && cardValidity.card && cardValidity.card.type) {
        this.formatter.cardType = cardValidity.card.type
        paymentFormatter(this.formatter)
      }
    })
  }

  /**
   * Flips the card back to the front
   * @param e Event
   */
  @HostListener('focus', ['$event']) cvvFocus(e: any) {
    this.cardService.cardOptions = [,false]
  }


}