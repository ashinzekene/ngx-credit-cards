import { Injectable } from '@angular/core';
import { ValidityOptions } from './models';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NgxCreditCardsService {
  private _cardNumber: string | number
  private _cvv: number
  private _expiry: string
  private _cardValidity: Subject<ValidityOptions> = new Subject()
  constructor() { }

  /**
   * @description Return the value of the card number
   */
  get cardNumber(): string | number {
    return this._cardNumber
  }

  /**
   * @description sets the value of the card number
   * @param value The card value 
   */
  set cardNumber(value) {
    this._cardNumber = value
  }


  /**
   * @description Return the value of the card number
   */
  get expiry(): string {
    return this._expiry
  }


  /**
   * @description sets the value of the card number
   * @param value The card value 
   */
  set expiry(value) {
    this._expiry = `${value}`
  }


  /**
   * @description Return the value of the cvv number
   */
  get cvv(): number {
    return this._cvv
  }


  /**
   * @description sets the value of the card number
   * @param value The card value 
   */
  set cvv(value) {
    this._cvv = value * 1
  }


  /**
   * @description Return the card validity object
   */
  get cardValiditySubject(): Subject<ValidityOptions> {
    return this._cardValidity
  }

  /**
   * @description sets the value of the card validity object
   * @param value The card validity object from the 'card-validator' library
   */
  set cardValidity(value: ValidityOptions) {
    this._cardValidity.next(value)
  }

}