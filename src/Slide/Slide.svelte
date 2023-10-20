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
    stored
      ? localStorage.removeItem(STORAGE_KEY)
      : localStorage.setItem(
          STORAGE_KEY,
          prefersDarkThemes() ? THEMES.LIGHT : THEMES > DARK
        );

    applyTheme();
  };

  onMount(() => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
  });

  function toggleAnimation(currentTheme) {
    const light = document.getElementById("light");
    const dark = document.getElementById("dark");

    dark.style.transition = "all 1s ease";
    light.style.transition = "all 1s ease";

    if (currentTheme === THEMES.DARK) {
      light.style.opacity = "0";
      light.style.transform = "translateX(-100%)";
      dark.style.opacity = "1";
      dark.style.transform = "translateX(0)";
    } else {
      dark.style.opacity = "0";
      dark.style.transform = "translateX(-100%)";
      light.style.opacity = "1";
      light.style.transform = "translateX(0)";
    }
  }
</script>

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
        <g id="toggle2">
          <circle id="light" cx="100" cy="100" r="65" />
          <path
            id="dark"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M164.692 106.062C158.578 108.407 151.939 109.692 145 109.692C114.624 109.692 90 85.0675 90 54.6918C90 47.7528 91.285 41.1138 93.6301 35C60.7212 38.2008 35 65.9426 35 99.6918C35 135.59 64.1015 164.692 100 164.692C133.749 164.692 161.491 138.971 164.692 106.062Z"
          />
        </g>
      </svg>
    </button>
  </div>
</main>

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
</style>
