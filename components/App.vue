<template>
  <div>
    <TopBar />
    <Body/>
    <BottomBar />
  </div>
</template>

<script>
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import Body from "./Body";

export default {
  components:{
    TopBar,
    BottomBar,
    Body,
  }
}
</script>


