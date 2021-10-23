<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="childclass"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000">
    <path fill="currentColor" d="M976 225l-488 576l-45 -2l-193 -275l47 -33l172 244l463 -548zM452 548l274 -323l-44 -38l-264 313zM355 574l35 48zM254 693l34 49l-50 59l-45 -2l-193 -275l47 -33l172 244z" />
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

