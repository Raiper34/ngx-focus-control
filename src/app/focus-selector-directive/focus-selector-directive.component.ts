import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-selector-directive',
  templateUrl: './focus-selector-directive.component.html',
  styleUrls: ['./focus-selector-directive.component.scss']
})
export class FocusSelectorDirectiveComponent implements OnInit {

  focusSelectorCode = `
  <input type="text" placeholder="Input 4" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">
  <input type="text" placeholder="Input 5" class="input">
  <input type="text" placeholder="Input 6" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">`;

  constructor() { }

  ngOnInit(): void {
  }

}
