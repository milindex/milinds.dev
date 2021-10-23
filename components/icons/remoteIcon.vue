<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="childclass" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000"><path fill="currentColor" d="M807 598l-249 -248l249 -249l-39 -39l-268 268v39l268 268zM188 351l254 255l-254 254l38 39l274 -274v-39l-274 -274z" /></svg>
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

