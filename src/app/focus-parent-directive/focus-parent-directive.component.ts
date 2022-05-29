import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-parent-directive',
  templateUrl: './focus-parent-directive.component.html',
  styleUrls: ['./focus-parent-directive.component.scss']
})
export class FocusParentDirectiveComponent implements OnInit {

  focusParentCode = `
<div tabindex="0" id="parent-1" class="box focus-selector-parent" [fuParent]="'.focus-selector-parent'">
  <input placeholder="Input 1" class="input">
  <input placeholder="Input 2" class="input">
</div>
<div tabindex="0" id="parent-2" class="box focus-selector-parent" [fuParent]="'.focus-selector-parent'">
  <input placeholder="Input 3" class="input">
  <input placeholder="Input 4" class="input">
</div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
