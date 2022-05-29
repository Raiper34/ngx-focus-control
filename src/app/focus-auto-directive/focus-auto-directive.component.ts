import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-auto-directive',
  templateUrl: './focus-auto-directive.component.html',
  styleUrls: ['./focus-auto-directive.component.scss']
})
export class FocusAutoDirectiveComponent implements OnInit {

  focusAutoCode = `<input placeholder="Input" class="input" [fuAuto]="500">`;

  constructor() { }

  ngOnInit(): void {
  }

}
