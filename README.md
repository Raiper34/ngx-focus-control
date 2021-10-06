[![npm version](https://badge.fury.io/js/ngx-focus-control.svg)](https://badge.fury.io/js/ngx-focus-control)
[![Build Status](https://app.travis-ci.com/Raiper34/ngx-focus-control.svg?branch=main)](https://app.travis-ci.com/Raiper34/ngx-focus-control)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-focus-control)
![NPM](https://img.shields.io/npm/l/ngx-focus-control)

# Ngx-focus-control
This angular library is here to simplify work with user defined accessibility. It adds multiple directives to make elements more user-friendly accessible with keyboard.
Library contains:
- Focus control directive
- Focus selector directive
- Focus parent directive
- Focus group directive

# Instalation

`npm install ngx-focus-control --save`

then add `NgxFocusControlModule` into module imports
```
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
