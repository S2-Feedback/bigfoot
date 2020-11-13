<template>
  <div class="wrapper" style="overflow-x:hidden;">
    <notifications></notifications>
    <top-navbar
      style="box-shadow: 0 6px 6px -5px black; background-color:#404040 !important;"
    ></top-navbar>
    <div class="main-panel" style="width:100%">
      <zoom-center-transition :duration="150" mode="out-in">
        <router-view style="margin-top:30px;"></router-view>
      </zoom-center-transition>
    </div>
    <content-footer></content-footer>
  </div>
</template>
<script>

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}



import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    ZoomCenterTransition
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }
  },
  updated() {
  },
  mounted() {
  }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}
.main-panel .zoomIn {
  animation-name: zoomIn95;
}
@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
