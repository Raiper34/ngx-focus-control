import {Component} from '@angular/core';

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

  focusParentCode = `
    <div tabindex="0" id="parent-1" class="box focus-selector-parent" [ngxFocusParent]="'.focus-selector-parent'">
      <input type="text" placeholder="Input 7" class="input" id="input-7">
      <input type="text" placeholder="Input 8" class="input" id="input-8">
    </div>
    <div tabindex="0" id="parent-2" class="box focus-selector-parent" [ngxFocusParent]="'.focus-selector-parent'">
      <input type="text" placeholder="Input 9" class="input" id="input-9">
      <input type="text" placeholder="Input 10" class="input" id="input-10">
    </div>`;

  focusGroupCode = `
    <div tabindex="0" id="group-1" class="box focus-selector-parent" [ngxFocusGroup]="'.focus-group-item'">
      <input type="text" tabindex="-1" placeholder="Input 11" class="input focus-group-item" id="input-11">
      <input type="text" tabindex="-1" placeholder="Input 12" class="input focus-group-item" id="input-12">
    </div>`;
}
