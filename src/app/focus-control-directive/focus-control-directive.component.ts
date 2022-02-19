import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-control-directive',
  templateUrl: './focus-control-directive.component.html',
  styleUrls: ['./focus-control-directive.component.scss']
})
export class FocusControlDirectiveComponent implements OnInit {

  focusControlCode = `
  <input type="text" placeholder="Input 1" class="input" id="input-1" [fuControl]="{next: '#input-3', previous: input2}">
  <input type="text" #input2 placeholder="Input 2" class="input" id="input-2" [fuControl]="{next: '#input-1', previous: '#input-3'}">
  <input type="text" placeholder="Input 3" class="input" id="input-3" [fuControl]="{next: input2, previous: '#input-1'}">`;

  constructor() { }

  ngOnInit(): void {
  }

}
