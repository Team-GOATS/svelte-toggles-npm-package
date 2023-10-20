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
        function handleToggle1() {
        // Select and store light and dark icons in variables
        let parentDark = document.getElementById("toggle1-dark");
        let parentLight= document.getElementById("toggle1-light");
        let dark = document.getElementById("toggle1-dark dark");
        let light = document.getElementById("toggle1-light light");
        let bg = document.getElementById("toggle1-dark bg");
        
        // Set transition style on the parent dark and light icons
        parentDark.style.transition = "all 1s linear";
        parentLight.style.transition = "all 1s linear";


        if (currentTheme === "light") {


          // Light icon fades away when clicked on ...
          light.style.opacity = "0";
          // ... And dark icon fades in ...
          dark.style.opacity = "1";
          // ... With the bg moving 'on screen' to form the crescent shape of the moon
          bg.style.transform = "translate(0)";


        } else if (currentTheme === "dark") {


          // Dark icon fades away when clicked on ...
          dark.style.opacity = "0";
          // ... With the bg moving 'off screen'
          bg.style.transform = "transform: translate(50%, -50%)";
          // ... And light icon fades in ...
          light.style.opacity = "1";


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
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="toggle1-light">
                    <circle id="light" cx="100" cy="100" r="65" />
                  </g>
                </svg>
    
                {:else if currentTheme === "dark"}
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="toggle1-dark">
                    <circle id="dark" cx="100" cy="100" r="65" />
                    <circle id="bg" cx="145" cy="55" r="55" />
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