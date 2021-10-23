<template>
  <section class="flex justify-between bg-primary text-rest pl-2 top-title-bar text-sm">
    <div class="menu-bar flex items-center flex-1">
      <VSCodeIcon class="" />
      <ul class="linear flex">
        <li>File</li>
        <li>Edit</li>
        <li>Selection</li>
        <li>View</li>
        <li>Go</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>
    </div>
    <div class="title-bar flex-1 justify-center text-center items-center py-1">
      Visual Studio
    </div>
    <div class="window-actions flex flex-1 justify-end">
      <div class="minimize-btn py-0 px-3 flex items-center hover:bg-rest-hover">
        <MinimizeIcon class="h-5 w-5 fill-current" />
      </div>
      <div class="restore-down-btn py-0 px-3 flex items-center hover:bg-rest-hover">
        <RestoreDownIcon class="h-5 w-5 fill-current" />
      </div>
      <div class="close-btn py-0 px-3 flex items-center hover:bg-windows-warning hover:text-windows-white">
        <CloseButtonIcon class="h-5 w-5 fill-current" />
      </div>
    </div>
  </section>
</template>

<script>
import RestoreDownIcon from "./icons/restoreDown";
import VSCodeIcon from "./icons/VSCode";
import MinimizeIcon from "./icons/minimizeIcon";
import CloseButtonIcon from "./icons/closeButton";
export default {
  components : {
    VSCodeIcon,
    RestoreDownIcon,
    MinimizeIcon,
    CloseButtonIcon
  }
}
</script>


<style lang="scss" scoped>
.menu-bar{
  ul{
    li{
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      cursor: pointer;
      &:hover {
        background-color: #2C313A;
      }
    }
  }
}
</style>
