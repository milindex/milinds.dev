<template>
<svg :class="childclass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="#fff" d="M6.5 37.5L6.5 2.5 24.793 2.5 33.5 11.207 33.5 37.5z"></path><path fill="#788b9c" d="M24.586,3L33,11.414V37H7V3H24.586 M25,2H6v36h28V11L25,2L25,2z"></path><path fill="#fff" d="M24.5 11.5L24.5 2.5 24.793 2.5 33.5 11.207 33.5 11.5z"></path><path fill="#788b9c" d="M25,3.414L32.586,11H25V3.414 M25,2h-1v10h10v-1L25,2L25,2z"></path><path fill="none" stroke="#b272db" stroke-miterlimit="10" d="M25.5 19.5L27.5 23.5 25.5 27.5M14.5 19.5L12.5 23.5 14.5 27.5M22.5 16.5L17.5 30.5"></path></svg>
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
