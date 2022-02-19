import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-group-directive',
  templateUrl: './focus-group-directive.component.html',
  styleUrls: ['./focus-group-directive.component.scss']
})
export class FocusGroupDirectiveComponent implements OnInit {

  focusGroupCode = `
    <div tabindex="0" id="group-1" class="box focus-selector-parent" [fuGroup]="{selector: '.focus-group-item'}">
      <input type="text" tabindex="-1" placeholder="Input 11" class="input focus-group-item" id="input-11">
      <input type="text" tabindex="-1" placeholder="Input 12" class="input focus-group-item" id="input-12">
    </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
