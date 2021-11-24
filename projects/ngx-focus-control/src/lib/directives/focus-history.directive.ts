import {Directive, ElementRef, HostListener} from '@angular/core';
import {FocusHistoryService} from '../services/focus-history.service';

@Directive({
  selector: '[fuHistory]'
})
export class FocusHistoryDirective {

  constructor(private readonly el: ElementRef,
              private readonly service: FocusHistoryService) { }

  @HostListener('focus')
  focus(): void {
    this.service.pushElement(this.el.nativeElement);
  }

}
