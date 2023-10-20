# Team Goats Svelte Toggles UI Library

Team GOATS from Holmesglen Svelte Toggles back-end is done for you, no tedious research and bug fixing just for Light & Dark mode!

Our Toggles also know your system preference and will default to that style

Check your Local Storage for your Light value.

## Prototype

**Current Prototypes**

| Name                         | Import Statement         | Description |
-------------------------|--------------------------|---------------|
|Checkbox      | svelte-toggles/src/Eclipse          | Literally just a checkbox  |
|Basic              | In Development                         | Sun Turns into Moon         |
|Eclipse           | svelte-toggles/src/Eclipse          | Sun Slides over Moon     |

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
import Eclipse from 'svelte-toggles/src/Eclipse'
```
```js
<Eclipse/>
```
# Properties (COMING SOON)
**Properties are in development**
### [+] size
You can select from; small, medium or large (Default: medium)

_Example use below:_
```js
<Eclipse size="small"/>
```
### [+] fill
You can select from; 

_Example use below:_
```js
<Eclipse fill="example"/>
```
