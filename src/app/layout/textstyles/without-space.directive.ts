import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[without_space]'
})
export class WithoutSpaceDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.marginTop = '0px';
    this.el.nativeElement.style.marginBottom = '0px';
  }

}
