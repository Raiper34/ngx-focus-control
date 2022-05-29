import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-selector-directive',
  templateUrl: './focus-selector-directive.component.html',
  styleUrls: ['./focus-selector-directive.component.scss']
})
export class FocusSelectorDirectiveComponent implements OnInit {

  focusSelectorCode = `
  <input placeholder="Input 1" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">
  <input placeholder="Input 2" class="input">
  <input placeholder="Input 3" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">`;

  constructor() { }

  ngOnInit(): void {
  }

}
