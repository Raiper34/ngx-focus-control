import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-switch-directive',
  templateUrl: './focus-switch-directive.component.html',
  styleUrls: ['./focus-switch-directive.component.scss']
})
export class FocusSwitchDirectiveComponent implements OnInit {

  switchValue = '';
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

  constructor() { }

  ngOnInit(): void {
  }

}
