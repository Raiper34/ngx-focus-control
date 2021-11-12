import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Directive({
  selector: '[fuObs]'
})
export class FocusObservableDirective implements OnInit, OnDestroy{

  @Input('fuObs') observable$: Observable<boolean>;
  unsubscribe$ = new Subject<void>();

  constructor(private readonly el: ElementRef) { }

  ngOnInit(): void {
    this.observable$.pipe(
      tap(val => this.doActionByValue(val)),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  doActionByValue(value: boolean): void {
    if (value) {
      this.el.nativeElement.focus();
    } else {
      this.el.nativeElement.blur();
    }
  }

}
