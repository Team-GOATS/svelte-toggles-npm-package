<script>    
    import { onMount } from "svelte";
       const STORAGE_KEY = "theme";
       const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
     
       const THEMES = {
         DARK: "dark",
         LIGHT: "light",
       };
     
       const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;
     
       let currentTheme;
       const applyTheme = () => {
         const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
         currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;
     
         currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;
     
         if (currentTheme === THEMES.DARK) {
           document.body.classList.remove(THEMES.LIGHT);
           document.body.classList.add(THEMES.DARK);
         } else {
           document.body.classList.remove(THEMES.DARK);
           document.body.classList.add(THEMES.LIGHT);
         }
       };
     
       const toggleTheme = () => {
         const stored = localStorage.getItem(STORAGE_KEY);
     
         if (stored) {
           localStorage.removeItem(STORAGE_KEY);
         } else {
           localStorage.setItem(
             STORAGE_KEY,
             prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
           );
         }
   
         applyTheme();
       };
     
       onMount(() => {
         applyTheme();
         window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
       });
   
   
       /**
      * @type {'small' | 'medium' | 'large'} How large should the button be?
      */
     export let size = 'medium';
   
       /**
      * @type {'red' | 'pink' | 'green'} How large should the button be?
      */
     export let theme = 'pink';
   
   
       // ------------- OUR PROP VARIABLES -----------
       // label
       export let label;
   
   </script>
   
   <main>
       <div class="toggle-switch">
       <br/>
   
        <button class={["toggle-button", `toggle-button--${size}`, "theme",`theme--${theme}`].join(' ')}
            on:click={toggleTheme}>
               {label}
           </button>
   
       </div>
   </main>
   
   <style>
   button {
       border-radius: 20px;
       padding: 0.5em;
   }
   button:hover {
       cursor: pointer;
       filter: brightness(0.5);
   }
   
   /* Button Styling for User */
   .theme--pink{
       background-color: rgb(220, 70, 207);
   }
   
   .theme--red{
       background-color: rgb(243, 44, 44);
       color: white;
   }
   
   .theme--green {
       background-color: rgb(22, 189, 22);
   }
   
   
   /* Size Options */
   .toggle-button--small {
     font-size: 12px;
     padding: 6px 6px;
   }
   .toggle-button--medium {
     font-size: 14px;
     padding: 8px 14px;
   }
   .toggle-button--large {
     font-size: 16px;
     padding: 12px 24px;
   }
   
   </style>