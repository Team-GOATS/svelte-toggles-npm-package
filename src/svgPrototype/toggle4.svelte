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
        function handleToggle4() {
        // Select and store light and dark icons in variables
        let parentDark = document.getElementById("toggle4-dark");
        let parentLight= document.getElementById("toggle4-light");
        let dark = document.getElementById("toggle4-dark dark");
        let light = document.getElementById("toggle4-light light");
        
        // Set transition style on the parent dark and light icons
        parentDark.style.transition = "all 1s ease";
        parentLight.style.transition = "all 1s ease";


        if (currentTheme === "light") {

        } else if (currentTheme === "dark") {

        }
      }
    
    </script>
    <!-- ------------------------------ -->
    <main>
    
    
        <div>
            <button         
                checked={currentTheme !== THEMES.LIGHT}
                on:click={toggleTheme}
            >
    
                {#if currentTheme === "light"}
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="toggle4-light" clip-path="url(#clip0_11_106)">
                    <g id="light">
                    <circle id="ray8" cx="40" cy="40" r="15" fill="#D9D9D9"/>
                    <circle id="ray7" cx="15" cy="100" r="15" fill="#D9D9D9"/>
                    <circle id="ray6" cx="40" cy="160" r="15" fill="#D9D9D9"/>
                    <circle id="ray5" cx="100" cy="185" r="15" fill="#D9D9D9"/>
                    <circle id="ray4" cx="160" cy="160" r="15" fill="#D9D9D9"/>
                    <circle id="ray3" cx="185" cy="100" r="15" fill="#D9D9D9"/>
                    <circle id="ray2" cx="160" cy="40" r="15" fill="#D9D9D9"/>
                    <circle id="ray1" cx="100" cy="15" r="15" fill="#D9D9D9"/>
                    <circle id="sun" cx="100.5" cy="99.5" r="62.5" fill="#D9D9D9"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_11_106">
                    <rect width="200" height="200" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
    
                {:else if currentTheme === "dark"}
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="toggle4-dark">
                    <circle id="dark" cx="100" cy="100" r="65" fill="black"/>
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
    
    </style>