import {Directive, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Keys} from '../helpers/keys.enum';

interface FocusControlConfig {
  previous?: string;
  next?: string;
}

@Directive({
  selector: '[fuControl]'
})
export class FocusControlDirective {

  @Input('fuControl') set config(val: FocusControlConfig) {
    this._config = val;
  }

  get config(): FocusControlConfig {
    return this._config;
  }

  private _config: FocusControlConfig;

  constructor(@Inject(DOCUMENT) private readonly document: any) {
  }

  @HostListener(`keydown`, ['$event']) goTo($event: KeyboardEvent) {
    if ($event.key === Keys.Tab) {
      if ($event.shiftKey && this.config.previous) {
        $event.preventDefault();
        (this.document.querySelector(this.config.previous) as HTMLElement)?.focus();
      } else if (!$event.shiftKey && this.config.next) {
        $event.preventDefault();
        (this.document.querySelector((this.config.next)) as HTMLElement)?.focus();
      }
    }
  }
}
