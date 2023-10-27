<script>

import { onMount } from "svelte";
  const STORAGE_KEY = "theme";
  const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
  import anime from 'animejs/lib/anime.es.js';

    const moonPath = "M21.5 50C21.5 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 21.5 22.3858 21.5 50Z"

    const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"

    const darkMode = document.querySelector('#darkMode')

    let toggle = false;

  const THEMES = {
    DARK: "dark",
    LIGHT: "light",
  };

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

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

    // Clickable sun
    
        // Use anime.js
        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo"
        });
        // Add animations to timeline
        timeline.add({
            targets: ".sun",
            d: [ { value: currentTheme === THEMES.DARK ? sunPath : moonPath } ]
        });


    }

</script>

<main>
    <section>
        <h1>Dark Mode</h1>
        <button checked={currentTheme !== THEMES.LIGHT} on:click={toggleTheme}>
            <svg
                id="darkMode" 
                width="100" 
                height="100" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                
                <path 
                class="sun"
                d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z" 
                fill="#FACB26"/>
            </svg>
        </button>

    </section> 

</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    section {
        height: 100vh;
        background: rgb(199, 199, 199);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }

    svg {
        cursor: pointer;
    }
    button {
        background-color: transparent;
        border: none;
    }
</style>