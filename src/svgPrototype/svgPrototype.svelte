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

</script>
<!-- ------------------------------ -->
<main>


    <div>
        <button         
            checked={currentTheme !== THEMES.LIGHT}
            on:click={toggleTheme}
        >

            {#if currentTheme === "light"}
              <!-- Try adding LIGHT SVG's here -->
            <img alt="light" src="https://placehold.co/100x100?text=in+light"/>

            {:else if currentTheme === "dark"}
              <!-- And DARK here -->
            <img alt="dark" src="https://placehold.co/100x100?text=in+dark"/>

            {/if}

        </button>
      </div>


</main>
<!-- -------------------------------- -->
<style>

</style>