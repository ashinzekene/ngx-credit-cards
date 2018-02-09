import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
  }

}
