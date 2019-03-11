import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  @Input() image : string = '';

  constructor() { }

  ngOnInit() {
  }

}
