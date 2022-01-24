[![npm version](https://badge.fury.io/js/ngx-focus-control.svg)](https://badge.fury.io/js/ngx-focus-control)
[![CircleCI](https://circleci.com/gh/Raiper34/ngx-focus-control.svg?style=shield)](https://circleci.com/gh/Raiper34/ngx-focus-control)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-focus-control)
![NPM](https://img.shields.io/npm/l/ngx-focus-control)
[![demo](https://badgen.net/badge/demo/online/orange)](https://ngx-focus-control.netlify.app/)
[![stack blitz](https://badgen.net/badge/stackblitz/online/orange)](https://stackblitz.com/edit/angular-ivy-nsumon)

# Ngx-focus-control
Angular library to provide tools to work with focus and focusable elements to improve user interfaces and accessibility.

# Instalation

`npm install ngx-focus-control --save`

then add `NgxFocusControlModule` into module imports
```typescript
import {NgxFocusControlModule} from 'ngx-focus-control';

@NgModule({
// ...
  imports: [
    // ...
    NgxFocusControlModule,
    // ...
  ],
// ...
})
```

# Usage
See [DEMO](https://ngx-focus-control.netlify.app/) app for usage.

# Directives
- ### Focus auto directive
focuses the element after ngAfterViewInit hook and when the delay bidding changes. The user can define the delay (0 is default delay).
- ### Focus control directive
allows the user to manually define the next and/or previous focus target.
Example shows how to revert direction of focus.
- ### Focus selector directive
allows the user to manually define the next and previous focus target by the given class.
Example shows how to skip element between elements with this class (element is still accessible by mouse).
- ### Focus parent directive
behaves very similarly to Focus selector directive, only the user can access focusable child
elements with this directive by pressing Enter.
- ### Focus group directive
allows merging focusable elements into the group. The user focuses the whole group and can enter
into this group by Enter press and leave the group by Escape press.
- ### Focus lock directive
locks some area (div, span...). First and last focusable child of directive element are connected
together (the next focus target of last child is first child and vice versa), useful for accessible modals.
- ### Focus if directive
focuses the element when condition bidding changes to True or blurs the element when condition
biding changes to False.
- ### Focus obs directive
focuses element when observable emits True and blur element when observable emits False.
- ### Focus history directive and service
Directive stores focused element into history and thanks for history service `FocusHistoryService`
you can go back in focus history using `focusHistoryService.focusPrevious()`.
- ### Focus switch and case directives
Focus switch directive on parent element with some variable focuses child element with value provided in
  focus case directive that matches. It matches first element from top to bottom.
