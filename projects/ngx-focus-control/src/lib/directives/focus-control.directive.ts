import {Directive, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Keys} from '../helpers/keys.enum';

interface FocusControlConfig {
  previous?: string | HTMLElement;
  next?: string | HTMLElement;
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
        this.focusElement(this.config.previous);
      } else if (!$event.shiftKey && this.config.next) {
        $event.preventDefault();
        this.focusElement(this.config.next);
      }
    }
  }

  private focusElement(element: string | HTMLElement): void {
    if (typeof element === 'string') {
      this.document.querySelector(element)?.focus();
    } else {
      element.focus();
    }
  }
}
