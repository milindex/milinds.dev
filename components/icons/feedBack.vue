<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="childclass"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000">
    <path fill="currentColor"
  d="M472 630q43 17 78.5 45t61 65.5t39 81t13.5 88.5v27h-55v-27q1 -49 -18 -94t-53.5 -79t-79.5 -53.5t-94.5 -19.5t-94.5 18.5t-79 53t-53 79t-20 95.5v27h-54v-27q-1 -45 13 -88.5t39 -80.5q53 -77 140 -111q-19 -13 -34.5 -30.5t-26.5 -38t-16.5 -43t-5.5 -45.5
  q0 -40 15 -74.5t41 -61t61 -41.5t74 -15t74 15t61.5 41.5t40.5 60.5q25 58 10 120q-6 23 -17 43.5t-25.5 37.5t-34.5 31zM363 609q28 0 53 -10.5t43.5 -29t29.5 -43.5t11 -52.5t-10.5 -52.5t-29.5 -44t-44 -30t-53 -11t-52.5 10.5t-43.5 29.5t-29.5 44t-10.5 53t10.5 53
  t29.5 44t44 29.5t52 9.5zM938 62v438h-110l-164 164v-164h-55v-55h110v87l87 -87h77v-328h-547v98q-14 2 -27.5 4.5t-27.5 7.5v-165h657z" />
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

