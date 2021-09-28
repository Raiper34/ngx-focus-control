import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  focusControlCode = `
  <input type="text" placeholder="Input 1" class="input" id="input-1" [ngxFocusControl]="{next: '#input-3', previous: '#input-2'}">
  <input type="text" placeholder="Input 2" class="input" id="input-2" [ngxFocusControl]="{next: '#input-1', previous: '#input-3'}">
  <input type="text" placeholder="Input 3" class="input" id="input-3" [ngxFocusControl]="{next: '#input-2', previous: '#input-1'}">`;

  focusSelectorCode = `
  <input type="text" placeholder="Input 4" class="input focus-selector-item" [ngxFocusSelector]="'.focus-selector-item'">
  <input type="text" placeholder="Input 5" class="input">
  <input type="text" placeholder="Input 6" class="input focus-selector-item" [ngxFocusSelector]="'.focus-selector-item'">`;
}
