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

    // --------- SVG Function
    const handleToggle2 = () => {
        // Select and store light and dark icons in variables
        let parentDark = document.getElementById("toggle2-dark");
        let parentLight= document.getElementById("toggle2-light");
        let dark = document.getElementById("dark");
        let light = document.getElementById("light");

        console.log(parentDark);
        console.log(parentLight);
        console.log(light);
        console.log(dark);
        
        // Set transition style on the parent dark and light icons
        parentDark.style.transition = "all 1s ease";
        parentLight.style.transition = "all 1s ease";


        if (currentTheme === "light") {


          // When light icon is clicked on, light icon disappears and moves 'off screen'
          light.style.opacity = "0";
          light.style.transform = "translateX(-100%)";


          // Dark icon appears and moves 'on screen' ...
          dark.style.opacity = "1";
          dark.style.transform = "translateX(0)";


        } else if (currentTheme === "dark") {


          dark.style.opacity = "0";
          dark.style.transform = "translateX(-100%)";


          light.style.opacity = "1";
          light.style.transform = "translateX(0)";


        }
      }

</script>
<!-- ------------------------------ -->
<main>


    <div>
        <button         
            checked={currentTheme !== THEMES.LIGHT}
            on:click={toggleTheme}
            on:click={handleToggle2}
        >

            {#if currentTheme === "light"}
              <!-- Try adding LIGHT SVG's here -->
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="toggle2-light">
                 <circle id="light" cx="100" cy="100" r="65" style="opacity: 0," />
                </g>
              </svg> 

            {:else if currentTheme === "dark"}
              <!-- And DARK here -->
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="toggle2-dark">
                <path id="dark" fill-rule="evenodd" clip-rule="evenodd" d="M164.692 106.062C158.578 108.407 151.939 109.692 145 109.692C114.624 109.692 90 85.0675 90 54.6918C90 47.7528 91.285 41.1138 93.6301 35C60.7212 38.2008 35 65.9426 35 99.6918C35 135.59 64.1015 164.692 100 164.692C133.749 164.692 161.491 138.971 164.692 106.062Z"/>
                </g>
              </svg>  

            {/if}

        </button>
      </div>


</main>
<!-- -------------------------------- -->
<style>
/* Custom properties for SVG fill property */
:root {
  /* This custom property should correlate with the app.css background colour */
  --bg: #242424;


  /* Represents the colour of our sun */
  --light: #fff;
    /* Represents the colour of our moon */
  --dark: #000;
}


/* Custom properties for dark and light SVG fill properties */
#dark {
  fill: var(--dark);
}
#light {
  fill: var(--light);
}

    /* Set transition style on the parent dark and light icons */
    #toggle2-dark,
    #toggle2-light {
      transition: all 1s ease;
    }

</style>