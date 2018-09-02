# Redux Store

## Rules

Components should not be concerned with the the shape of the store, but they
should care about what _module_ and its actions and selectors that they need to
use.

Create an directory for each _module_ (separated depending on the business logic
of the application).

Each _module_ directory has at lease four files:

- **reducers.js** Reducer for this _module_, the reducer can be refactored into
  sub-reducer files.

- **actions.js** `export` the action _TYPES_ by default, and `export` each
  action separately.

- **selector.js** Each selector is aware of which key of the state it's living
  under. Therefore, there is no need for a global selector file.

- **index.js** `export` all actions, selectors and reducers. The default export
  is the reducer for this _module_. Each action or selector should be also
  exported (its very less likely they have the same name).

The root level `actions.js` and `selectors.js` exports all the functions created within all _modules_.

**actions** and **selectors** shared between _modules_ should use relative import.

## Usage

```js
import { setMessage, getMessage } from 'store/greet';

import { actions as greetActions } from 'store/greet';
import { selectors as greetSelectors } from 'store/greet';

import { actions } from 'store';
// actions.greet.setMessage
```
