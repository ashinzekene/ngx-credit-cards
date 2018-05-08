# NGX CREDIT CARDS

This is an angular module to incoporate credit card payments into app. Inspired by [React Credit Card](https://github.com/medipass/react-creditcard).

It comes with directives for **credit card name**, **credit card number**, **expiry**, **cvv** and a credit card component

[insert image here]

## INSTALLATION
```sh
ng add ngx-credit-cards
```

## HOW TO USE

### Directives
```html
<input class="form-control" ngxCardName (nameChange)="checkNumber($event)" type="text">
<input class="form-control" ngxCardNo (numChange)="checkNumber($event)" type="text">
<input class="form-control" ngxCardExpiry (cvvChange)="checkNumber($event)" type="text">
<input class="form-control" ngxCardCvv (expiryChange)="checkNumber($event)" type="text">
```

### Card Component

```html
<ngx-credit-cards
  [hideName]="false"
  [namePlaceholder]="'Enter Name'"
  [backDescriptionText]="'This card remains a property of Angular bank'"
></ngx-credit-cards>
```

## OPTIONS

### COMPONENT
**Inputs**
```ts
hideName: boolean
namePlaceholder: string
expiryBeforeText: string
expiryAfterText: string
backDescriptionText: string
```

### DIRECTIVES
**ngxCardName**
**ngxCardNo**
**ngxCardExpiry**
**ngxCardCvv**

**Output**
```ts
(nameChange): ValidityOptions
(numChange): ValidityOptions
(cvvChange): ValidityOptions
(expiryChange): ValidityOptions

ValidityOptions: {
  card?: {
    niceType: string,
    type: 'visa'|'discover'|'american-express'|'amex',
    gaps: number[],
    lengths: number[],
    code: { name: string, size: number}
  };
  isPotentiallyValid: boolean;
  isValid: boolean
}
```

## CONTRIBUTIONS
Issues and contributions are highly welcome

## ISSUES
- More than one credit card component