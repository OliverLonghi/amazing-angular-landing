import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() color = 'white';

  @Input() inverted_color = 'black';

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
    this.el.nativeElement.style.border = `1px solid ${this.color}`;
    this.mouseleave();
  }

  mouseenter() {
    this.el.nativeElement.style.backgroundColor = this.color;
    this.el.nativeElement.style.color = this.inverted_color;
  }

  mouseleave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
    this.el.nativeElement.style.color = this.color;
  }

}
