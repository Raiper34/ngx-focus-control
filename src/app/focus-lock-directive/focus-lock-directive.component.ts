import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-lock-directive',
  templateUrl: './focus-lock-directive.component.html',
  styleUrls: ['./focus-lock-directive.component.scss']
})
export class FocusLockDirectiveComponent implements OnInit {

  focusLockCode = `
  <div id="lock-1" class="box focus-selector-parent" fuLock>
    <input type="text" placeholder="Input 1" class="input" id="input-1">
    <input type="text" placeholder="Input 2" class="input" id="input-2">
    <input type="text" placeholder="Input 3" class="input" id="input-3">
  </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
