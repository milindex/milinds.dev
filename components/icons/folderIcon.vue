<template>
<svg :class="childclass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000">
  <path fill="currentColor" d="M630 501l-273 -272l39 -39l292 292v39l-292 291l-39 -38l273 -272v-1z" />
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
