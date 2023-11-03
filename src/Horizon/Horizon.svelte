<script>
    import { onMount } from "svelte";
    const STORAGE_KEY = "theme";
    const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
    import anime from 'animejs';
  
    const moonPath = "M90 40C90 40 72.0914 40 50 40C27.9086 40 10 40 10 40C10 17.9086 27.9086 0 50 0C72.0914 0 90 17.9086 90 40Z";

    const sunPath = "M90 40C90 62.0914 72.0914 80 50 80C27.9086 80 10 62.0914 10 40C10 17.9086 27.9086 0 50 0C72.0914 0 90 17.9086 90 40Z";
  
    const THEMES = {
        DARK: "dark",
        LIGHT: "light",
      };
  
    const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE);
  
    let currentTheme;
    const applyTheme = () => {
      const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
      currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;
  
      if (currentTheme === THEMES.DARK) {
        document.body.classList.remove(THEMES.LIGHT);
        document.body.classList.add(THEMES.DARK);
      } else {
        document.body.classList.remove(THEMES.DARK);
        document.body.classList.add(THEMES.LIGHT);
      }
      toggleAnimation(currentTheme);
    };
  
    const toggleTheme = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      stored ? localStorage.removeItem(STORAGE_KEY) : localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES>DARK)
  
      applyTheme();
    };
  
    onMount(() => {
      applyTheme();
      window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
    });
  
    function toggleAnimation(currentTheme) {
          // Use anime.js
          const timeline = anime.timeline({
            duration: 450,
            easing: "linear",
            });
            timeline.add({
            targets: ".sun",
            translateY: currentTheme === THEMES.DARK ? 0 : 40,
            d: [ { value: currentTheme === THEMES.DARK ? sunPath : moonPath } ]
          });
      }
  
            /**
     * @type {'small' | 'medium' | 'large'} How large should the button be?
     */
    export let size = 'medium';
  
    export let fill = "#FACB26"
  
  </script>
  
  <main>
    
      <section>
          <button checked={currentTheme !== THEMES.LIGHT} on:click={toggleTheme}
  
          >
              <svg
                  id="darkMode" 
                  width="100" 
                  height="100" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  
                  class={["svelte-toggle", `svelte-toggle--${size}`, ].join(' ')}
                  >
                  
                  <path d="M0 90C0 88.3431 1.34315 87 3 87H97C98.6569 87 100 88.3431 100 90C100 91.6569 98.6569 93 97 93H3C1.34314 93 0 91.6569 0 90Z" fill="#EAD300"/>

                  <path 
                  class="sun"
                  d="M90 40C90 62.0914 72.0914 80 50 80C27.9086 80 10 62.0914 10 40C10 17.9086 27.9086 0 50 0C72.0914 0 90 17.9086 90 40Z" 
                  fill={fill}/>
              </svg>
          </button>
      </section> 
  
  </main>
  <style>
      svg {
          cursor: pointer;
      }
      button {
          background-color: transparent;
          border: none;
      }
  
  
    .svelte-toggle--small {
      height: 15px;
      width: 15px;
      margin: 5px;
    }
    .svelte-toggle--medium {
        height: 25px;
        width: 25px;
        margin: 5px;
    }
    .svelte-toggle--large {
        height: 35px;
        width: 35px;
        margin: 5px;
    }
  </style>