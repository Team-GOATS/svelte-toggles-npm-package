<script>
  import SimpleToggle from "C:/Users/admin/Documents/GitHub/teamgoats-npm-package/package/src/simpleToggle";

  import SlideToggle from "C:/Users/admin/Documents/GitHub/teamgoats-npm-package/package/src/slideToggle";

  // Import stylesheet for toggles
  import "./toggles.css";

  function handleToggle2() {
    console.log("Clicked!");
    let light = document.getElementById("light");
    console.log(light);
    light.classList.add("test");
  }
</script>

<main>
  <div />
  <h1>Svelte Toggles Examples</h1>

  <div class="card">
    <h3>simpleToggle Import</h3>
    <SimpleToggle />
  </div>
  <div class="card">
    <h3>slideToggle Import</h3>
    <SlideToggle />
  </div>

  <!-- Toggle 1 -->
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="toggle1" clip-path="url(#clip0_51_3)">
      <circle id="light" cx="100" cy="100" r="65" />
      <circle id="bg1" cx="200" r="55" />
      <circle id="dark" cx="100" cy="100" r="65" />
      <g id="bg2">
        <circle cx="145" cy="55" r="55" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_51_3">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <!-- Toggle 2 -->
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="toggle2">
      <circle
        class="translateLight transition"
        id="light"
        cx="100"
        cy="100"
        r="65"
      />
      <path
        class="translateDark transition"
        id="dark"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M164.692 106.062C158.578 108.407 151.939 109.692 145 109.692C114.624 109.692 90 85.0675 90 54.6918C90 47.7528 91.285 41.1138 93.6301 35C60.7212 38.2008 35 65.9426 35 99.6918C35 135.59 64.1015 164.692 100 164.692C133.749 164.692 161.491 138.971 164.692 106.062Z"
      />
    </g>
  </svg>

  <!-- Toggle 3 -->
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="toggle3">
      <circle id="dark" cx="100" cy="100" r="65" />
      <circle id="light" cx="100.5" cy="99.5" r="52.5" />
    </g>
  </svg>

  <!-- Toggle 4 -->
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
</main>

<style>
  /**

  *? Convert designs to SVGs and import to application
  *? Display SVGs on page, remove fill colour so we can override with our CSS styling
  *? Add CSS styling - colours to SVG id attributes
  *? Add CSS animations/transitions
  *! onClick JavaScript, trigger the animations
  *! Adjust CSS animations/transitions and styling as needed
  *! Implement SVG into <checkbox>, <button>, <a>

  **/
</style>
