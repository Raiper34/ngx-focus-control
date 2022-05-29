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
      <input type="text" placeholder="Input 1" class="input" id="input-1" [fuCase]="'option-1'">
      <input type="text" placeholder="Input 2" class="input" id="input-2" [fuCase]="'option-2'">
      <input type="text" placeholder="Input 3" class="input" id="input-3" [fuCase]="'option-3'">
      <input type="text" placeholder="Input 4 Default" class="input" id="input-4" fuDefault>
    </ng-container>
    <button class="button is-success" (click)="switchValue = 'option-1'">Focus Input 1</button>
    <button class="button is-success" (click)="switchValue = 'option-2'">Focus Input 2</button>
    <button class="button is-success" (click)="switchValue = 'option-3'">Focus Input 3</button>
    <button class="button is-success" (click)="switchValue = 'option-100'">Switch to non-existing value</button>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
