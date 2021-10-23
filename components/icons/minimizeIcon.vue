<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="childclass" viewBox="0 0 32 32"><path d="M 5 15 L 5 17 L 27 17 L 27 15 Z"></path></svg>
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

<style scoped>
  /* svg{
    width: 20px;
    height: 20px;
  } */
</style>
