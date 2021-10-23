<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="childclass" viewBox="0 0 32 32"><path d="M 10 5 L 10 10 L 5 10 L 5 11 L 5 27 L 22 27 L 22 22 L 27 22 L 27 5 L 10 5 z M 12 7 L 25 7 L 25 20 L 22 20 L 22 10 L 12 10 L 12 7 z M 7 12 L 20 12 L 20 25 L 7 25 L 7 12 z"></path></svg>
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
