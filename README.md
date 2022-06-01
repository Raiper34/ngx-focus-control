[![npm version](https://badge.fury.io/js/ngx-focus-control.svg)](https://badge.fury.io/js/ngx-focus-control)
[![CircleCI](https://circleci.com/gh/Raiper34/ngx-focus-control.svg?style=shield)](https://circleci.com/gh/Raiper34/ngx-focus-control)
[![Coverage Status](https://coveralls.io/repos/github/Raiper34/ngx-focus-control/badge.svg?branch=main)](https://coveralls.io/github/Raiper34/ngx-focus-control?branch=main)
[![GitHub issues](https://img.shields.io/github/issues/Raiper34/ngx-focus-control)](https://github.com/Raiper34/ngx-focus-control/issues)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-focus-control)
![NPM](https://img.shields.io/npm/l/ngx-focus-control)
[![demo](https://badgen.net/badge/demo/online/orange)](https://ngx-focus-control.netlify.app/)
[![stack blitz](https://badgen.net/badge/stackblitz/online/orange)](https://stackblitz.com/edit/angular-ivy-nsumon)

![ngc focus control logo](logo.svg)
# Ngx Focus Control
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
auto-focuses element when an element is created, a page is visited, or delay data bidding is changed. Users can define delay of focus. 0 is the default delay when a delay is not specified.
- ### Focus control directive
allows the user to manually define the next and/or previous focus target.
- ### Focus selector directive
allows the user to manually define the next and previous focus target by the given query selector.
- ### Focus parent directive
behaves very similarly to Focus selector directive, only the user can access focusable child elements with this directive by pressing Enter.
- ### Focus group directive
allows merging focusable elements into the group. The user focuses the whole group and can enter into this group by Enter press and leave the group by Escape press.
- ### Focus lock directive
locks some area (div, span...). The first and last focusable child of the directive element are connected together (the next focus target of the last child is the first child and vice versa), useful for accessible modals.
- ### Focus if directive
focuses the element when condition bidding changes to True or blurs the element when condition bidding changes to False. Instead of primitive value, you can also pass observable, which focuses element when observable emits True and blur element when observable emits False.
- ### Focus history directive
stores focused elements into history and thanks to history service `FocusHistoryService` you can go back in focus history using `focusHistoryService.focusPrevious()`.
- ### Focus switch directives
on parent element with some variable focuses child element with the value provided in focus case directive that matches. It matches the first element from top to bottom. If there is no match and you use the focus default directive, the element with this directive is focused. Value needs to change, to focus the element (if the switch variable has got value 0, and you set the variable again to 0, the element will not be focused). You can also pass observable into focus switch directive (works similar as in focus if directive).
