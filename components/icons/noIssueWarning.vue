<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="childclass" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000">
    <path fill="currentColor" d="M473 62h55l408 767l-27 46h-819l-27 -46zM500 142l-357 670h713zM539 750v-63h-78v63h78zM461 625v-250h78v250h-78z" />
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

