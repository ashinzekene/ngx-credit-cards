import { Component, OnInit, Input } from '@angular/core';
import { NgxCreditCardsService } from "../ngx-credit-cards.service";
import { padEnd } from "../utils";
import { images } from "../card-images";

@Component({
  selector: 'ngx-credit-cards',
  styleUrls: ['ngx-credit-cards.component.css'],
  templateUrl: 'ngx-credit-cards.component.html'
})
export class NgxCreditCardsComponent implements OnInit {
  public images: any
  public cvv: string = ''
  public name: string = ''
  public number: string = ''
  public expiry: string = ''
  public type: string = ''
  public length: number = 16
  public isAmex: boolean = false
  public creditCardClassObject: any = {}
  public imageClassObject: any = {}
  public flipped: boolean = false
  @Input() hideName: boolean
  @Input() namePlaceholder: string = 'FULL NAME'
  @Input() expiryBeforeText: string = 'month/year'
  @Input() expiryAfterText: string = 'valid thru'
  @Input() backDescriptionText: string = null

  constructor(private ngxccService: NgxCreditCardsService) { }

  formatName() {
  }

  formatNumber() {
    // const { length: maxLength, type } = this.state
  }

  formatCVC() {
    this.cvv = padEnd(this.ngxccService.expiry, 3, '•')
  }

  addClass() {
    let name = 'ng-credit-card--' + this.type
    this.imageClassObject = { 'ng-credit-card__logo': true, [name]: true }
    this.creditCardClassObject = { 'ng-credit-card': true, [name]: true, 'ng-credit-card--flipped': this.flipped }
    console.log('Type', this.type)
    console.table(this.imageClassObject)
    console.table(this.creditCardClassObject)
  }

  ngOnInit() {
    this.images = images
    this.hideName = this.hideName || false
    this.namePlaceholder = this.namePlaceholder || 'FULL NAME'
    this.expiryBeforeText = this.expiryBeforeText || 'month/year'
    this.expiryAfterText = this.expiryAfterText || 'valid thru'
    this.subscribeToValues()
    this.ngxccService.cardOptionsSubject.subscribe(([cardOptions, flipped]) => {
      this.flipped = flipped
      if (cardOptions && cardOptions.card && cardOptions.card.type) {
        this.type = cardOptions.card.type
      }
      this.addClass()
    })
  }

  subscribeToValues() {
    this.ngxccService.cardNumberSuject.subscribe(number => {
      this.number = number
    })
    this.ngxccService.expirySubject.subscribe(expiry => {
      this.expiry = expiry
    })
    this.ngxccService.cvvSubject.subscribe(cvv => {
      this.cvv = `${cvv}`
    })
  }

  ngOnDestroy() {
    this.ngxccService.cardOptionsSubject.unsubscribe()
  }
}