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
    toggleAnimation(currentTheme);
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

  function toggleAnimation(currentTheme) {
    // Select and store SVG in variables
    const light = document.getElementById("light");
    const dark = document.getElementById("dark");

    // Set transition style on the parent
    dark.style.transition = "all 1s ease";
    light.style.transition = "all 1s ease";

    currentTheme === THEMES.DARK ? light.style.transform = "translateX(0%)" : light.style.transform = "translateX(100%)";

  }
</script>

<!-- ------------------------------ -->
<main>
  <div>
    <button checked={currentTheme !== THEMES.LIGHT} on:click={toggleTheme}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="toggle3">
          <circle id="dark" cx="100" cy="100" r="65" fill="#1E1E1E" />
          <circle id="light" cx="100.5" cy="99.5" r="52.5" fill="white" />
        </g>
      </svg>
    </button>
  </div>
</main>

<!-- -------------------------------- -->
<style>
  :root {
    --bg: #fff;

    --light: #fff422;

    --dark: #000;
  }

  #dark {
    fill: var(--dark);
  }
  #light {
    fill: var(--light);
  }
  #bg {
    fill: var(--bg);
  }
</style>
