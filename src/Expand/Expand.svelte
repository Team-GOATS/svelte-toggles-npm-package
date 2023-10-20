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
    const light1 = document.getElementById("light1");
    const light2 = document.getElementById("light2");
    const light3 = document.getElementById("light3");
    const light4 = document.getElementById("light4");
    const light5 = document.getElementById("light5");
    const light6 = document.getElementById("light6");
    const light7 = document.getElementById("light7");
    const light8 = document.getElementById("light8");
    const light9 = document.getElementById("light9");
    const dark = document.getElementById("dark");

    dark.style.transition = "all 1s ease-out";
    light.style.transition = "all 1s ease";
    light2.style.transition = "all 1s ease";
    light3.style.transition = "all 1s ease";
    light4.style.transition = "all 1s ease";
    light5.style.transition = "all 1s ease";
    light6.style.transition = "all 1s ease";
    light7.style.transition = "all 1s ease";
    light8.style.transition = "all 1s ease";
    light9.style.transition = "all 1s ease";

    if (currentTheme === THEMES.DARK) {
      // dark.style.display = "block";
      dark.style.opacity = 1;
      light.style.opacity = 0;
      // light1.style.display = "none";
      light2.style.transform = "translateX(20%)";
      light3.style.transform = "translateX(-20%)";
      light4.style.transform = "translateY(-20%)";
      light5.style.transform = "translate(-20%, 20%)";
      light6.style.transform = "translate(20%, 20%)";
      light7.style.transform = "translate(20%, -20%)";
      light8.style.transform = "translate(-20%, -20%)";
      light9.style.transform = "translateY(20%)";
    } else {
      // dark.style.display = "none";
      dark.style.opacity = 0;
      light.style.opacity = 1;
      // light1.style.display = "block";
      light2.style.transform = "translateX(0%)";
      light3.style.transform = "translateX(0%)";
      light4.style.transform = "translateY(0%)";
      light5.style.transform = "translate(0%)";
      light6.style.transform = "translate(0%)";
      light7.style.transform = "translate(0%)";
      light8.style.transform = "translate(0%)";
      light9.style.transform = "translateY(0%)";
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
        <g id="toggle4" clip-path="url(#clip0_51_46)">
          <g id="light">
            <circle id="light1" cx="100.5" cy="99.5" r="62.5" />
            <circle id="light2" cx="15" cy="100" r="15" />
            <circle id="light3" cx="185" cy="100" r="15" />
            <circle id="light4" cx="100" cy="185" r="15" />
            <circle id="light5" cx="160" cy="40" r="15" />
            <circle id="light6" cx="40" cy="40" r="15" />
            <circle id="light7" cx="40" cy="160" r="15" />
            <circle id="light8" cx="160" cy="160" r="15" />
            <circle id="light9" cx="100" cy="15" r="15" />
          </g>
          <circle id="dark" cx="100" cy="100" r="65" />
        </g>
        <defs>
          <clipPath id="clip0_51_46">
            <rect width="200" height="200" />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</main>

<style>
  :root {
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
