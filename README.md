[![npm version](https://badge.fury.io/js/ngx-focus-control.svg)](https://badge.fury.io/js/ngx-focus-control)
[![CircleCI](https://circleci.com/gh/Raiper34/ngx-focus-control.svg?style=shield)](https://circleci.com/gh/Raiper34/ngx-focus-control)
[![Coverage Status](https://coveralls.io/repos/github/Raiper34/ngx-focus-control/badge.svg?branch=main)](https://coveralls.io/github/Raiper34/ngx-focus-control?branch=main)
[![GitHub issues](https://img.shields.io/github/issues/Raiper34/ngx-focus-control)](https://github.com/Raiper34/ngx-focus-control/issues)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-focus-control)
![NPM](https://img.shields.io/npm/l/ngx-focus-control)
[![demo](https://badgen.net/badge/demo/online/orange)](https://ngx-focus-control.netlify.app/)
[![stack blitz](https://badgen.net/badge/stackblitz/online/orange)](https://stackblitz.com/edit/angular-ivy-nsumon)
[![Gitter](https://img.shields.io/gitter/room/raiper34/ngx-focus-control)](https://gitter.im/ngx-focus-control/community?source=orgpage)

![ngc focus control logo](logo.svg)
# Ngx Focus Control
Angular library to provide tools to work with focus and focusable elements to improve user interfaces and accessibility.

# Version compatibility
| Angular version | Ngx focus control version |
|-----------------|---------------------------|
| 8 - 13          | 0.0.0 - 3.x.x             |
| 14              | 4.x.x                     |

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
```html
<input placeholder="Input" class="input" [fuAuto]="500">
```
- ### Focus control directive
allows the user to manually define the next and/or previous focus target.
```html
<input placeholder="Input 1" class="input" id="input-1" [fuControl]="{next: '#input-3', previous: input2}">
<input #input2 placeholder="Input 2" class="input" id="input-2" [fuControl]="{next: '#input-1', previous: '#input-3'}">
<input placeholder="Input 3" class="input" id="input-3" [fuControl]="{next: input2, previous: '#input-1'}">
```
- ### Focus selector directive
allows the user to manually define the next and previous focus target by the given query selector.
```html
<input placeholder="Input 1" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">
<input placeholder="Input 2" class="input">
<input placeholder="Input 3" class="input focus-selector-item" [fuSelector]="'.focus-selector-item'">
```
- ### Focus group directive
allows merging focusable elements into the group. The user focuses the whole group and can enter into this group by Enter press and leave the group by Escape press.
```html
<div tabindex="0" id="group-1" class="box focus-selector-parent" [fuGroup]="{selector: '.focus-group-item'}">
  <div class="subtitle has-text-black">Group</div>
  <input type="text" tabindex="-1" placeholder="Input 1" class="input focus-group-item" id="input-1">
  <input type="text" tabindex="-1" placeholder="Input 2" class="input focus-group-item" id="input-2">
</div>
```
- ### Focus lock directive
locks some area (div, span...). The first and last focusable child of the directive element are connected together (the next focus target of the last child is the first child and vice versa), useful for accessible modals.
```html
<div id="lock-1" class="box focus-selector-parent" fuLock>
  <input type="text" placeholder="Input 1" class="input" id="input-1">
  <input type="text" placeholder="Input 2" class="input" id="input-2">
  <input type="text" placeholder="Input 3" class="input" id="input-3">
</div>
```
- ### Focus if directive
focuses the element when condition bidding changes to True or blurs the element when condition bidding changes to False. Instead of primitive value, you can also pass observable, which focuses element when observable emits True and blur element when observable emits False.
```html
<input type="text" placeholder="Input 16" class="input" id="input-16" [fuIf]="condition">
<input type="text" placeholder="Input 17" class="input" id="input-17" [fuIf]="observable$">
```
- ### Focus switch directives
on parent element with some variable focuses child element with the value provided in focus case directive that matches. It matches the first element from top to bottom. If there is no match and you use the focus default directive, the element with this directive is focused. Value needs to change, to focus the element (if the switch variable has got value 0, and you set the variable again to 0, the element will not be focused). You can also pass observable into focus switch directive (works similar as in focus if directive).
```html
<ng-container [fuSwitch]="switchValue">
  <input type="text" placeholder="Input 1" class="input" id="input-1" [fuCase]="'option-1'">
  <input type="text" placeholder="Input 2" class="input" id="input-2" [fuCase]="'option-2'">
  <input type="text" placeholder="Input 3" class="input" id="input-3" [fuCase]="'option-3'">
  <input type="text" placeholder="Input 4 Default" class="input" id="input-4" fuDefault>
</ng-container>
<button class="button is-success" (click)="switchValue = 'option-1'">Focus Input 1</button>
<button class="button is-success" (click)="switchValue = 'option-2'">Focus Input 2</button>
<button class="button is-success" (click)="switchValue = 'option-3'">Focus Input 3</button>
<button class="button is-success" (click)="switchValue = 'option-100'">Switch to non-existing value</button>
```
- ### Focus history directive
stores focused elements into history and thanks to history service `FocusHistoryService` you can go back in focus history using `focusHistoryService.focusPrevious()`.
```html
<input type="text" placeholder="Input 1" class="input" id="input-1" fuHistory>
<input type="text" placeholder="Input 2" class="input" id="input-2" fuHistory>
<button class="button is-info" (click)="focusHistoryService.focusPrevious()">Focus previous</button>
```
```ts
import {FocusHistoryService} from 'ngx-focus-control';
...
constructor(public readonly focusHistoryService: FocusHistoryService) { }
```

# License
MIT
