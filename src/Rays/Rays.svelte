<script>
    import { onMount } from "svelte";
    const STORAGE_KEY = "theme";
    const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

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
        document.body.classList.remove(THEMES.DARK);
        document.body.classList.add(THEMES.LIGHT);
  
      } else {
        document.body.classList.remove(THEMES.LIGHT);
        document.body.classList.add(THEMES.DARK);
      }
      onToggle(currentTheme)
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
  

    function onToggle(currentTheme) {
    const animation = document.querySelector("#animation");
    const rays = document.querySelector("#rays");

    if (animation.classList.contains("sun") && currentTheme === THEMES.DARK) {
        animation.classList.remove("sun");
        animation.classList.add("moon");
        rays.style.opacity = 0;
        rays.style.transition = "opacity 0.375s ease-in-out, transform 0.2s ease-in-out";
        setTimeout(() => {
            rays.style.transform = "scale(0.9)";
        }, 400);
        rays.classList.add("ray_hide");
    } else {
        animation.classList.remove("moon");
        animation.classList.add("sun");
        rays.style.transition = "opacity 0.375s ease-in-out, transform 0.2s ease-in-out";
        setTimeout(() => {
            rays.style.opacity = 1;
            rays.style.transform = "scale(1)";
        }, 350);
    }
}

      function onClick(){
        toggleTheme()
      }
  
      /**
     * @type {'small' | 'medium' | 'large'} How large should the button be?
     */
    export let size = 'medium';
  
    export let lightFill = "#24282E"
    export let darkFill = "#FACB26"
  
  </script>
  
  <main>
    
      <section>
          <button checked={currentTheme !== THEMES.LIGHT} on:click={onClick}
  
          >
          <svg
            viewBox="0 0 200 200"
            id="darkMode"
            title="Toggle theme"
            aria-label="Toggle theme"
            class={["svelte-toggle", `svelte-toggle--${size}`, ].join(' ')}
        >
          <defs>
            <style>
              #animation {
                transform: scale(0.5);
                transform-box: view-box;
                transform-origin: center;
              }
              .sun {
                transition: all 0.375s ease-in-out;
                d: path(
                  "M0,100 C 0 44.7 44.7 0 100 0 C 155.3 0 200 44.7 200 100 C 200 155.3 155.3 200 100 200 C 44.7 200 0 155.3 0 100"
                );
              }
    
              .moon {
                transition: all 0.375s ease-in-out;
                d: path(
                  "M0,100 C 0 44.7 44.7 0 100 0 C 63 30 50 60 50 100 C 50 140 63 170 100 200 C 44.7 200 0 155.3 0 100"
                );
              }
    
              #rays {
                transition: all 0.375s ease-in-out;
                transform-box: view-box;
                transform-origin: center;
              }
    
              #raysRotation {
                transform-box: view-box;
                transform-origin: center;
                animation: rotate 4s linear infinite;
              }
    
              @keyframes rotate {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(20deg);
                }
              }
    
              .ray {
                transform-box: view-box;
                transform-origin: center;
              }
            </style>
          </defs>
          <path
            id="animation"
            class="sun"
            d="M0,100 
             C 0 44.7 44.7 0 100 0 
             C 155.3 0 200 44.7 200 100
             C 200 155.3 155.3 200 100 200
             C 44.7 200 0 155.3 0 100 "
             fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill}
          ></path>
    
          <g id="raysRotation">
            <g id="rays">
              <path class="ray" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(20)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(40)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(60)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(80)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(100)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(120)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(140)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(160)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(180)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(200)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(220)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(240)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(260)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(280)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(300)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(320)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
              <path class="ray" transform="rotate(340)" d="M100 30 l3,15h-6 z" fill={currentTheme === THEMES.LIGHT ? lightFill : darkFill} />
            </g>
          </g>
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
        height: 65px;
        width: 65px;
        margin: 5px;
    }
  
  
  </style>