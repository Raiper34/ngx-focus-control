import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-group-directive',
  templateUrl: './focus-group-directive.component.html',
  styleUrls: ['./focus-group-directive.component.scss']
})
export class FocusGroupDirectiveComponent implements OnInit {

  focusGroupCode = `
  <div tabindex="0" id="group-1" class="box focus-selector-parent" [fuGroup]="{selector: '.focus-group-item'}">
    <div class="subtitle has-text-black">Group</div>
    <input type="text" tabindex="-1" placeholder="Input 1" class="input focus-group-item" id="input-1">
    <input type="text" tabindex="-1" placeholder="Input 2" class="input focus-group-item" id="input-2">
  </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
