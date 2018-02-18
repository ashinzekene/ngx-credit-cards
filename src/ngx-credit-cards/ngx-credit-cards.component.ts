import { Component, OnInit, Input } from '@angular/core';
import { NgxCreditCardsService } from "../ngx-credit-cards.service";
import { padEnd } from "../utils";

@Component({
  selector: 'ngx-credit-cards',
  templateUrl: 'ngx-credit-cards.component.html'
})
export class NgxCreditCardsComponent implements OnInit {
  public cvv: string = ''
  public name: string = ''
  public number: string = ''
  public expiry: string = this.ngxccService.expiry
  public type: string = 'unknown'
  public length: number = 16
  @Input() hideName: false
  @Input() focused: string = null
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

  ngOnInit() {
    this.hideName = this.hideName || false
    this.namePlaceholder = this.namePlaceholder || 'FULL NAME'
    this.expiryBeforeText = this.expiryBeforeText || 'month/year'
    this.expiryAfterText = this.expiryAfterText || 'valid thru'
  }
}