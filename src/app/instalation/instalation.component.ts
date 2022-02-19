import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalation',
  templateUrl: './instalation.component.html',
  styleUrls: ['./instalation.component.scss']
})
export class InstalationComponent implements OnInit {

  code = `import {NgxFocusControlModule} from 'ngx-focus-control';

  @NgModule({
  // ...
    imports: [
      // ...
      NgxFocusControlModule,
      // ...
    ],
  // ...
  })`;

  constructor() { }

  ngOnInit(): void {
  }

}
