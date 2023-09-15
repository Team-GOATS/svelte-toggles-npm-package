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
  
  </script>
  
  <label class="themeToggle" title="Toggle Theme">
    <input
      type="checkbox"
      class={["svelte-toggle", `svelte-toggle--${size}`, ].join(' ')}
    
      checked={currentTheme !== THEMES.LIGHT}
      on:click={toggleTheme}
    />
    <span class="theme-toggle-sr">Toggle theme</span>
  </label>
  
  <style>
   
    span {
      display: none;
    }

    .svelte-toggle {
        cursor: pointer;
    }

/* --------- Primary OR Secondary ---------- */


/* --------- Sizes --------- */
.svelte-toggle--small {
    height: 15;
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