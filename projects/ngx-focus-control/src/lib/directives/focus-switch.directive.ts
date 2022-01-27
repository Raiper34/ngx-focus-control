import {ContentChild, ContentChildren, Directive, Input, OnDestroy} from '@angular/core';
import {FocusCaseDirective} from './focus-case.directive';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {FocusDefaultDirective} from './focus-default.directive';

@Directive({
  selector: '[fuSwitch]'
})
export class FocusSwitchDirective implements OnDestroy {

  @ContentChildren(FocusCaseDirective) cases: FocusCaseDirective[];
  @ContentChild(FocusDefaultDirective) defaultCase: FocusDefaultDirective;
  @Input('fuSwitch') set value(val: string | number | Observable<string | number>) {
    if (this.observableGuard(val)) {
      this.subscribeObservable(val);
    } else {
      this.doActionByValue(val);
    }
  }

  unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private doActionByValue(val: string | number): void {
    setTimeout(() => {
      const caseOption = this.cases?.find(item => item.value === val);
      if (caseOption) {
        caseOption.el.nativeElement.focus();
      } else {
        this.defaultCase && this.defaultCase.el.nativeElement.focus();
      }
    });
  }

  private subscribeObservable(obs: Observable<string | number>): void {
    obs.pipe(
      tap(obsVal => this.doActionByValue(obsVal)),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  private observableGuard(val: string | number | Observable<string | number>): val is Observable<string | number> {
    return typeof val === 'object';
  }

}
