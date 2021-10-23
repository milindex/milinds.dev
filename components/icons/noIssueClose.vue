<template>
  <svg :class="childclass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-10 0 1010 1000"><path fill="currentColor" d="M538 62q72 5 142 40q66 32 120 85q125 135 125 319q0 74 -27 145q-25 68 -73 130q-48 58 -111 96q-66 40 -139 54q-77 15 -148 4q-75 -11 -139 -47q-67 -39 -116.5 -94.5t-78 -125.5t-32 -147t19.5 -146q49 -156 175 -238q60 -41 133 -60t149 -15zM569 869 q62 -15 115 -47q56 -34 97 -85q40 -54 59 -111q21 -63 16 -126q0 -76 -27.5 -147t-78.5 -122q-97 -97 -225 -106q-63 -5 -123 10q-65 16 -115 52q-107 78 -143 207q-20 63 -17 125q2 66 29 125q57 122 169 187q56 33 119 42.5t125 -4.5zM494 469l150 -157l44 44l-150 156 l150 157l-44 43l-150 -156l-150 156l-44 -43l150 -157l-150 -156l44 -44z" /></svg>
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

