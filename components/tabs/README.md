Dbt-Design-System - Tabs
========================

A component to let users navigate between related sections of content, displaying one section at a time


Using this package
------------------

First install the package into your project:

```shell
npm install -S @dbt-design-system/tabs
```

Then use it in your code as follows:

```js
import React, { createElement as h } from 'react';
import Tabs from '@dbt-design-system/tabs';

export const MyComponent = props => (
  <Tabs
    // WRITEME
  />
);

export default MyComponent;
```


Working on this package
-----------------------

Before working on this package you must install its dependencies using
the following command:

```shell
pnpm install
```


### Testing

Run the unit tests.

```shell
npm test
```


### Building

Build the package by compiling the TypeScript source code.

```shell
npm run build
```


### Clean-up

Remove any previously built files.

```shell
npm run clean
```
