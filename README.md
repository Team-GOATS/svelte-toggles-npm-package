# Team Goats Svelte Toggles UI Library

## Prototype

Team GOATS from Holmesglens Svelte Toggles back-end is done for you, check your local storage for your Light value.

Our Toggles also know your system prefence and will default to that


To install and set up the library, run:

```sh
npm i svelte-toggles
```

Or if you prefer using Yarn:

```sh
yarn add svelte-toggles
```

Import our Toggle like this (For Example);
```js
import SimpleToggle from 'svelte-toggles/src/simpleToggle'
```
```svelte
<SimpleToggle/>
```
## Properties
### size
You can select from; small, medium or large (Default: medium)

_Example use below:_
```svelte
<SimpleToggle size="small"/>
```
