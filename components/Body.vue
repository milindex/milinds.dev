<template>
  <section class="split-body flex flex-wrap text-sm">
    <div class="left-side flex flex-wrap">
      <div class="navigation-bar bg-primary text-rest flex flex-col flex-wrap justify-between content-between items-stretch">
        <ul class="actions-container flex flex-col gap-2">
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <CopyIcon class="h-6 w-6 fill-current" />
          </li>
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <CopyIcon class="h-6 w-6 fill-current" />
          </li>
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <CopyIcon class="h-6 w-6 fill-current" />
          </li>
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <CopyIcon class="h-6 w-6 fill-current" />
          </li>
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <CopyIcon class="h-6 w-6 fill-current" />
          </li>
        </ul>
        <ul class="actions-container flex flex-col gap-2">
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <ProfileICon class="h-6 w-6 fill-current" />
          </li>
          <li class="p-1 flex justify-center items-center h-12 w-12 hover:bg-rest-hover">
            <SettingsIcon class="h-6 w-6 fill-current" />
          </li>
        </ul>
      </div>
      <div class="activity-bar bg-secondary text-activity-rest w-275">
        <div class="explorer flex justify-between px-2 items-center">
          <span class="pl-2">Explorer</span>
          <span class="text-md">⋯</span>
        </div>
        <div class="project">
          <div class="pane-header expanded">
            <div class="title bg-primary text-active pl-4 flex items-center justify-items-start ">
              <DownArrow class="h-4 w-4 fill-current"/>
              <span class="ml-0.5 uppercase font-medium text-xs-11 px-2 py-1 text-rest">milinds.dev (Workspace)</span>
            </div>
            <div class="list-of-files flex flex-col px-2 pl-6">
              <ul>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>.github</span></li>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>.nuxt</span></li>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>assets</span></li>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>components</span></li>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>node_modules</span></li>
                <li>
                  <div class="sub-file-list flex items-center "><DownArrow class="mr-1 h-4 w-4 fill-current"/><span>pages</span></div>
                  <ul class="text-pages-primary px-2 pl-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                  </ul>
                </li>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>static</span></li>
                <li class="directory flex items-center "><FolderIcon class="mr-1 h-4 w-4 fill-current"/><span>store</span></li>
                <li class="flex items-center "><ConfigIcon class="mr-1 h-4 w-4 fill-current"/><span>.editorconfig</span></li>
                <li class="flex items-center "><ConfigIcon class="mr-1 h-4 w-4 fill-current"/><span>.eslintcache</span></li>
                <li class="flex items-center "><JSIcon class="mr-1 h-4 w-4 fill-current"/><span>.eslintrc.js</span></li>
                <li class="flex items-center "><ConfigIcon class="mr-1 h-4 w-4 fill-current"/><span>.gitignore</span></li>
                <li class="flex items-center "><ConfigIcon class="mr-1 h-4 w-4 fill-current"/><span>.prettierrc</span></li>
                <li class="flex items-center "><JsonIcon class="mr-1 h-4 w-4 fill-current"/><span>jsconfig.json</span></li>
                <li class="flex items-center "><JSIcon class="mr-1 h-4 w-4 fill-current"/><span>nuxt.config.js</span></li>
                <li class="flex items-center "><JsonIcon class="mr-1 h-4 w-4 fill-current"/><span>package-lock.json</span></li>
                <li class="flex items-center "><JsonIcon class="mr-1 h-4 w-4 fill-current"/><span>package.json</span></li>
                <li class="flex items-center "><FileIcon class="mr-1 h-4 w-4 fill-current"/><span>README.md</span></li>
                <li class="flex items-center "><JSIcon class="mr-1 h-4 w-4 fill-current"/><span>stylelint.config.js</span></li>
                <li class="flex items-center "><JSIcon class="mr-1 h-4 w-4 fill-current"/><span>tailwind.config.js</span></li>
                <li class="flex items-center "><YarnIcon class="mr-1 h-4 w-4 fill-current"/><span>yarn.lock</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="outline pane-header"></div>
        <div class="timeline pane-header"></div>
        <div class="action-comments pane-header"></div>
      </div>
    </div>
    <!-- <div class="center-content relative">
      <div class="w-full h-full relative left-0 top-0 box-border">
        Center Body
      </div>
    </div> -->
  </section>
</template>

<script>
  import CopyIcon from './icons/copyIcon'
  import ProfileICon from './icons/profileIcon'
  import SettingsIcon from './icons/settingsIcon'
  import DownArrow from './icons/downArrowIcon'
  import FileIcon from './icons/filesIcon'
  import FolderIcon from './icons/folderIcon'
  import YarnIcon from './icons/yarnIcon'
  import JSIcon from './icons/JSIcon'
  import JsonIcon from './icons/jsonIcon'
  import ConfigIcon from './icons/configIcon'
  export default {
    components: {
      CopyIcon,
      ProfileICon,
      SettingsIcon,
      DownArrow,
      FileIcon,
      FolderIcon,
      YarnIcon,
      JSIcon,
      JsonIcon,
      ConfigIcon,
    }
  }

</script>


<style lang="scss" scoped>
  .activity-bar {
    li {
      cursor: pointer;
      margin-bottom: 5px;
      &:hover {
        color: #d7dae0;
      }
    }
    .title{
      cursor: pointer;
    }
  }
  .sub-file-list{
    margin-bottom: 5px;
  }


</style>
