import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-lock-directive',
  templateUrl: './focus-lock-directive.component.html',
  styleUrls: ['./focus-lock-directive.component.scss']
})
export class FocusLockDirectiveComponent implements OnInit {

  focusLockCode = `
    <div id="lock-1" class="box focus-selector-parent" fuLock>
      <input type="text" placeholder="Input 13" class="input" id="input-13">
      <input type="text" placeholder="Input 14" class="input" id="input-14">
      <input type="text" placeholder="Input 15" class="input" id="input-15">
    </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
