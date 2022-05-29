import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent implements OnInit {

  @Input() title = '';
  @Input() code = '';
  @Input() isDeprecated = false;

  constructor() { }

  ngOnInit(): void {
  }

}
