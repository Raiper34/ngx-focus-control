import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Directive({
  selector: '[fuIf]'
})
export class FocusIfDirective implements OnDestroy {

  @Input('fuIf') set value(val: boolean | Observable<boolean>) {
    if (this.booleanGuard(val)) {
      this.doActionByValue(val);
    } else {
      this.subscribeObservable(val);
    }
  }

  unsubscribe$ = new Subject<void>();

  constructor(private readonly el: ElementRef) {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeObservable(obs: Observable<boolean>): void {
    obs.pipe(
      tap(obsVal => this.doActionByValue(obsVal)),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  private doActionByValue(val: boolean): void {
    setTimeout(() => val ? this.el.nativeElement.focus() : this.el.nativeElement.blur());
  }

  private booleanGuard(val: boolean | Observable<boolean>): val is boolean {
    return typeof val === 'boolean';
  }

}
