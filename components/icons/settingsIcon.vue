<template>
<svg :class="childclass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000">
  <path fill="currentColor" d="M569 275l-31 -150h-75l-32 150l-43 19l-125 -82l-57 50l82 125l-13 44l-150 31v75l150 32l19 50l-81 125l50 50l125 -82l50 19l25 144h75l31 -150l50 -19l125 81l50 -50l-81 -125l18 -50l144 -25v-75l-150 -31l-19 -50l82 -125l-51 -50l-125 81zM588 62l31 150l131 -81
l125 125l-87 131l150 25v175l-150 32l87 131l-125 125l-131 -88l-31 150h-175l-32 -150l-131 82l-125 -125l88 -132l-150 -25v-175l150 -31l-82 -131l125 -125l132 87l25 -150h174h1zM625 500q0 34 -17 62.5t-45.5 45.5t-62.5 17t-62.5 -17t-45.5 -45.5t-17 -62.5t17 -62.5
t45.5 -45.5t62.5 -17t62.5 17t45.5 45.5t17 62.5zM500 562q28 0 45.5 -17t17.5 -45t-17.5 -45.5t-45.5 -17.5t-45 17.5t-17 45.5t17 45t45 17z" />
</svg>
</template>

<script>
export default({
  props: {
    childclass: {
      type: String,
      default: ""
    }
  }
})
</script>
