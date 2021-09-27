import {Directive, ElementRef, HostListener, Input} from '@angular/core';

interface FocusControlConfig {
  previous?: string;
  next?: string;
}

@Directive({
  selector: '[ngxFocusControl]'
})
export class FocusControlDirective {

  @Input('ngxFocusControl') set config(val: FocusControlConfig) {
    this._config = val;
  }

  get config(): FocusControlConfig {
    return this._config;
  }

  private _config: FocusControlConfig;

  constructor() {
  }

  @HostListener(`keydown`, ['$event']) goTo($event: KeyboardEvent) {
    if ($event.key === 'Tab') {
      if ($event.shiftKey && this.config.previous) {
        $event.preventDefault();
        (document.querySelector(this.config.previous) as HTMLElement)?.focus();
      } else if (!$event.shiftKey && this.config.next) {
        $event.preventDefault();
        (document.querySelector((this.config.next)) as HTMLElement)?.focus();
      }
    }
  }
}
