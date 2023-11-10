<script>
import { onMount } from "svelte";
const STORAGE_KEY = "theme";
const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
import anime from 'animejs';

const moonPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C46.0531 29.8513 67.0154 53.5842 100 50Z";
const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

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
        duration: 650,
        easing: "easeOutExpo"
    });
    timeline.add({
    targets: ".sun",
    d: [{value: currentTheme === THEMES.DARK ? moonPath : sunPath}],
    direction: "alternate",
  })

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
            <path 
                class="sun" 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M0 50C2.41411e-06 22.3858 22.3858 -2.41411e-06 50 0C77.6142 2.41411e-06 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 -2.41411e-06 77.6142 0 50ZM7 50C7 26.2518 26.2518 7 50 7L50 93C26.2518 93 7 73.7482 7 50Z" 
                fill={fill}
            />
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