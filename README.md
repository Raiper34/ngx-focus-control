[![npm version](https://badge.fury.io/js/ngx-focus-control.svg)](https://badge.fury.io/js/ngx-focus-control)
[![Build Status](https://app.travis-ci.com/Raiper34/ngx-focus-control.svg?branch=main)](https://app.travis-ci.com/Raiper34/ngx-focus-control)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-focus-control)
![NPM](https://img.shields.io/npm/l/ngx-focus-control)

# Ngx-focus-control
Library to provide tools to work with focus and focusable elements to improve user interfaces and accessibility.

Library contains:
- Focus auto directive
- Focus control directive
- Focus selector directive
- Focus parent directive
- Focus group directive
- Focus lock directive

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
