import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() time: number = null;

  constructor() {}

  ngOnInit(): void {}
}
