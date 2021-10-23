<template>
<svg :class="childclass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000">
  <path fill="currentColor" d="M499 629l272 -272l39 39l-292 291h-39l-291 -291l38 -39z" />
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
