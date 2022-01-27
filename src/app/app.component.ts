import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {FocusHistoryService} from 'ngx-focus-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  condition = false;
  observable$ = new Subject<boolean>();
  switchValue = '';

  focusAutoCode = `<input type="text" placeholder="Input 0" class="input" id="input-0" [fuAuto]="0">`;

  focusControlCode = `
  <input type="text" placeholder="Input 1" class="input" id="input-1" [fuControl]="{next: '#input-3', previous: '#input-2'}">
  <input type="text" placeholder="Input 2" class="input" id="input-2" [fuControl]="{next: '#input-1', previous: '#input-3'}">
  <input type="text" placeholder="Input 3" class="input" id="input-3" [fuControl]="{next: '#input-2', previous: '#input-1'}">`;

  focusSelectorCode = `
  <input type="text" placeholder="Input 4" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">
  <input type="text" placeholder="Input 5" class="input">
  <input type="text" placeholder="Input 6" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">`;

  focusParentCode = `
    <div tabindex="0" id="parent-1" class="box focus-selector-parent" [fuParent]="'.focus-selector-parent'">
      <input type="text" placeholder="Input 7" class="input" id="input-7">
      <input type="text" placeholder="Input 8" class="input" id="input-8">
    </div>
    <div tabindex="0" id="parent-2" class="box focus-selector-parent" [fuParent]="'.focus-selector-parent'">
      <input type="text" placeholder="Input 9" class="input" id="input-9">
      <input type="text" placeholder="Input 10" class="input" id="input-10">
    </div>`;

  focusGroupCode = `
    <div tabindex="0" id="group-1" class="box focus-selector-parent" [fuGroup]="{selector: '.focus-group-item'}">
      <input type="text" tabindex="-1" placeholder="Input 11" class="input focus-group-item" id="input-11">
      <input type="text" tabindex="-1" placeholder="Input 12" class="input focus-group-item" id="input-12">
    </div>`;

  focusLockCode = `
    <div id="lock-1" class="box focus-selector-parent" fuLock>
      <input type="text" placeholder="Input 13" class="input" id="input-13">
      <input type="text" placeholder="Input 14" class="input" id="input-14">
      <input type="text" placeholder="Input 15" class="input" id="input-15">
    </div>`;

  focusIfCode = `<input type="text" placeholder="Input 16" class="input" id="input-16" [fuIf]="condition">`;
  focusObsCode = `<input type="text" placeholder="Input 17" class="input" id="input-17" [fuObs]="observable$">`;

  focusHistoryCode = `
    <input type="text" placeholder="Input 18" class="input" id="input-18" fuHistory>
    <input type="text" placeholder="Input 19" class="input" id="input-19" fuHistory>
    <button class="button is-success" (click)="focusHistoryService.focusPrevious()">Focus previous</button>
  `;

  focusSwitchCode = `
    <ng-container [fuSwitch]="switchValue">
      <input type="text" placeholder="Input 20" class="input" id="input-20" [fuCase]="'option-1'">
      <input type="text" placeholder="Input 21" class="input" id="input-21" [fuCase]="'option-2'">
      <input type="text" placeholder="Input 22" class="input" id="input-22" [fuCase]="'option-3'">
      <input type="text" placeholder="Input 23 Default" class="input" id="input-23" fuDefault>
    </ng-container>
    <button class="button is-success" (click)="switchValue = 'option-1'">Focus Input 20</button>
    <button class="button is-success" (click)="switchValue = 'option-2'">Focus Input 21</button>
    <button class="button is-success" (click)="switchValue = 'option-3'">Focus Input 22</button>
    <button class="button is-success" (click)="switchValue = 'option-100'">Switch to non existing value</button>
  `;

  get historyIds(): string[] {
    return this.focusHistoryService.getHistory().map(item => item.id);
  }

  constructor(public readonly focusHistoryService: FocusHistoryService) {
  }
}
