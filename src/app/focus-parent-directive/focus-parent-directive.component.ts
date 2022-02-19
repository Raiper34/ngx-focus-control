import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-parent-directive',
  templateUrl: './focus-parent-directive.component.html',
  styleUrls: ['./focus-parent-directive.component.scss']
})
export class FocusParentDirectiveComponent implements OnInit {

  focusParentCode = `
    <div tabindex="0" id="parent-1" class="box focus-selector-parent" [fuParent]="'.focus-selector-parent'">
      <input type="text" placeholder="Input 7" class="input" id="input-7">
      <input type="text" placeholder="Input 8" class="input" id="input-8">
    </div>
    <div tabindex="0" id="parent-2" class="box focus-selector-parent" [fuParent]="'.focus-selector-parent'">
      <input type="text" placeholder="Input 9" class="input" id="input-9">
      <input type="text" placeholder="Input 10" class="input" id="input-10">
    </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
