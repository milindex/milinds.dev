<template>
  <section class="flex justify-between align-middle w-full fixed bottom-0 bg-secondary text-rest text-xs w-full">
    <div class="left-side">
      <ul class="linear flex items-center flex-1 gap-2">
        <li class="bg-special-skyblue text-special-white hover:special-active">
          <RemoteIcon class="h-5 w-5 fill-current" />
        </li>
        <li class="flex items-center">
          <GitMergeIcon class="h-5 w-5 fill-current" /> master*
        </li>
        <li>
          <GitSyncIcon class="h-5 w-5 fill-current" />
        </li>
        <li class="flex items-center flex-1">
          <NoIssueClose class="h-5 w-5 fill-current mr-1" />0
          <NoIssueWarning class="h-5 w-5 fill-current mx-1" /> 0</li>
        <li>
          <ZapIcon class="h-5 w-5 fill-current" />
        </li>
      </ul>
    </div>
    <div class="right-side">
      <ul class="linear flex items-center flex-1 gap-1">
        <li>Line 19, Col 94</li>
        <li>Spaces: 2</li>
        <li>UTF-8</li>
        <li>Vue</li>
        <li class="flex items-center gap-1">
          <GoLiveIcon class="h-5 w-5 fill-current" /> Go Live
        </li>
        <li>TS 4.4.3</li>
        <li>Tag: PascalCase</li>
        <li>Attr: kebab-case</li>
        <li class="flex items-center gap-1">
          <CheckAll class="h-5 w-5 fill-current" /> Prettier
        </li>
        <li class="flex items-center gap-1">
          <FeedBack class="h-5 w-5 fill-current" />
        </li>
        <li class="flex items-center gap-1">
          <NotificationIcon class="h-5 w-5 fill-current" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import RemoteIcon from "./icons/remoteIcon";
  import GitMergeIcon from "./icons/gitMergeIcon";
  import ZapIcon from "./icons/zapIcon";
  import GitSyncIcon from "./icons/gitSyncIcon";
  import NoIssueClose from "./icons/noIssueClose";
  import NoIssueWarning from "./icons/noIssueWarning";
  import GoLiveIcon from "./icons/GoLiveIcon";
  import CheckAll from "./icons/checkAll";
  import FeedBack from "./icons/feedBack";
  import NotificationIcon from "./icons/notificationIcon";
  export default {
    components: {
      RemoteIcon,
      GitMergeIcon,
      ZapIcon,
      GitSyncIcon,
      NoIssueClose,
      NoIssueWarning,
      GoLiveIcon,
      CheckAll,
      FeedBack,
      NotificationIcon,
    }
  }

</script>

<style lang="scss" scoped>
  ul{
    &.linear{
      li {
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
