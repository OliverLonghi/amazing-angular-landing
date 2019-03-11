import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'big-hero',
  templateUrl: './big-hero.component.html',
  styleUrls: ['./big-hero.component.less']
})
export class BigHeroComponent implements OnInit {

  @Input() image = '';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('big-hero image', this.image)
    if ( this.image != '' )
      this.el.nativeElement.style.background = `url(${this.image})`;
  }

}
