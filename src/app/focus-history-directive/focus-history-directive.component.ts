import { Component, OnInit } from '@angular/core';
import {FocusHistoryService} from 'ngx-focus-control';

@Component({
  selector: 'app-focus-history-directive',
  templateUrl: './focus-history-directive.component.html',
  styleUrls: ['./focus-history-directive.component.scss']
})
export class FocusHistoryDirectiveComponent implements OnInit {

  focusHistoryCode = `
    <input type="text" placeholder="Input 1" class="input" id="input-1" fuHistory>
    <input type="text" placeholder="Input 2" class="input" id="input-2" fuHistory>
    <button class="button is-info" (click)="focusHistoryService.focusPrevious()">Focus previous</button>
  `;

  get historyIds(): string[] {
    return this.focusHistoryService.getHistory().map(item => item.id);
  }

  constructor(public readonly focusHistoryService: FocusHistoryService) { }

  ngOnInit(): void {
    this.focusHistoryService.clearHistory();
  }

}
