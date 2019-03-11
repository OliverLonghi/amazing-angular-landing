import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.less']
})
export class ContentSectionComponent implements OnInit {

  @Input() image : string;

  constructor(private el: ElementRef) { }

  ngOnInit() {

    console.log('image', this.image)

    if ( this.image != '' ) 
      this.el.nativeElement.style.backgroundImage = `url(${this.image})`;
    
  }

}
