import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-auto-directive',
  templateUrl: './focus-auto-directive.component.html',
  styleUrls: ['./focus-auto-directive.component.scss']
})
export class FocusAutoDirectiveComponent implements OnInit {

  focusAutoCode = `<input type="text" placeholder="Input 0" class="input" id="input-0" [fuAuto]="0">`;

  constructor() { }

  ngOnInit(): void {
  }

}
