import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-focus-if-directive',
  templateUrl: './focus-if-directive.component.html',
  styleUrls: ['./focus-if-directive.component.scss']
})
export class FocusIfDirectiveComponent implements OnInit {

  condition = false;
  observable$ = new Subject<boolean>();

  focusIfCode = `<input type="text" placeholder="Input 16" class="input" id="input-16" [fuIf]="condition">
<input type="text" placeholder="Input 17" class="input" id="input-17" [fuObs]="observable$">`;

  constructor() { }

  ngOnInit(): void {
  }

}
