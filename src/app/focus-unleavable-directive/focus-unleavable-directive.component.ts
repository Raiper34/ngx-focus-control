import { Component } from '@angular/core';

@Component({
  selector: 'app-focus-unleavable-directive',
  templateUrl: './focus-unleavable-directive.component.html',
  styleUrls: ['./focus-unleavable-directive.component.scss']
})
export class FocusUnleavableDirectiveComponent {

  inputContent = '';
  focusUnleavableCode = `<input placeholder="Input 1" class="input" [(ngModel)]="inputContent" [fuUnleavable]="inputContent.length < 5">`;

}
