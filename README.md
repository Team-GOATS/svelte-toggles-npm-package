
  <div align="center">
<h1>Team Goats Svelte Toggles UI Library</h1>
    We stressed so you could relax!
    <br />
    <br />
    <a href="https://sveltetoggles.onrender.com" disabled>View Demo Site</a>
    ·
    <a href="https://github.com/Team-GOATS/svelte-toggles-npm-package/issues">Report Bug</a>
    ·

  <br/>
  <br/>

   <span style="color:red"><strong> Fully Released </strong></span>
  <br />
  <br />
  Team GOATS from Holmesglen Svelte Toggle Switches functionality is done for you, no tedious research and bug fixing just for Light & Dark mode!

  <br />
  <br />
  <div style="display: flex" align="center">
  <div style="width: 25%;">
  <p>Basic</p>
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDhxZzE4dXd1M2VmbW52emQ4bXZnZXdqdHY0aGZxenJqazVid2xhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d0GKBjUK11NfpeXV2k/giphy.gif" style="margin: 1px">
  </div>

  <div style="width: 25%;">
    <p>Horizon</p>
    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDc2bmtmcjZvc3lnajk2MHlkOGhtajQzcWNrbmtmdmJoN2hrZ3UzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1h4hrHJNvhul1bXES3/giphy.gif" style="margin: 1px">
  </div>

  <div style="width: 25%;">
    <p>Rays</p>
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZzZWFjZjZjYmVqZ3Vxd3plZmd5YWlodDNxMTloZWoyejhvcTB1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9D7xN8s3rKHfLDlBve/giphy.gif" style="margin: 1px">
  </div>

  <div style="width: 25%;">
    <p>Simple</p>
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenRyZjZ1bmdvYzR2NXF5M3RtazViYm95MXI1MXA0OTdvenRzdHpqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pJ5jHRwItT5BPV38Ij/giphy.gif" style="margin: 1px">
  </div>

  </div>
  
  </div>


## Toggles

**Current Toggles**

| Name                         | Import Statement         | Description |
-------------------------|--------------------------|---------------|
|Basic      | svelte-toggles/src/Basic          | Sun Morphs into Crescent Moon  |
|Horizon      | svelte-toggles/src/Horizon          | Sun falls behind Horizon  |
|Rays      | svelte-toggles/src/Rays          | Sun w Rays morphs into Crescent Moon  |
|Simple      | svelte-toggles/src/Simple          | Sun Morphs into Moon  |


## Get Started


Check your Local Storage for your Light value when the Sun is visible

**To install and set up the library, run:**

```sh
npm i svelte-toggles
```

**Or if you prefer using Yarn:**

```sh
yarn add svelte-toggles
```

## Usage
**Import our Toggle like this (For Example);**
```js
import Basic from 'svelte-toggles/src/Basic'

<Basic/>
```
# Properties

## [+] size

__Change the size of the toggle__

__Type:__ String

You can select from; `small`, `medium` or `large` (Default: `medium`)

_Example use below:_
```js
<Basic size="small"/>
```
## [+] Fill

__Change the Colour of the Toggle according to the State__

__Type:__ String


### [+] lightFill

Colour of Toggle when **Light Value** is present

### [+] darkFill

Colour of Toggle when **NO Light Value** is present

You can select from; Any take HEX or RGBA code 

Default Light: `#24282E` | Default Dark: `#FACB26`

_Example use below:_
```js
<Basic lightFill="#ff0000" darkFill="#ff03f5"/>
```
```js
<Basic lightFill="255, 255, 255" darkFill="0, 0, 0"/>
```

<br />
<br />

## Known Bugs
<ul>
  <li>Rays Toggle - Double clicking toggle will cause the sun rays to be visible when they may not meant to be. <strong>ONLY affects animation</strong></li>
</ul>

## Inspiration
Inspired by the React Toggles library; <a href="https://www.toggles.dev"> toggles.dev</a>

### Special Thanks
Our Teachers throughout our Diploma; Daniel & Alex

Waqas Ahmad on helping develop the "Rays" SVG Animation