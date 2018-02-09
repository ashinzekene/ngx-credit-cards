import { Injectable } from '@angular/core';

@Injectable()
export class NgxCreditCardsService {
  private _cardNumber: string|number
  private _cvv: number
  private _expiry: string
  private _cardValue:any = {}
  constructor() { }

  get cardNumber(): string|number {
    return this._cardNumber
  }

  set cardNumber(value) {
    this._cardNumber = value
  }

  get expiry(): string {
    return this._expiry
  }

  set expiry(value) {
    this._expiry = `${value}`
  }

  get cvv(): number {
    return this._cvv
  }

  set cvv(value) {
    this._cvv = value*1
  }
  

  get cardValue(): any {
    return this._cardValue
  }

  set cardValue(value) {
    this._cardValue = value
  }
  
}