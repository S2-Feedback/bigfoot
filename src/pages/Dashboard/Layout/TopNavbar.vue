<template>
  <md-toolbar
    md-elevation="1"
    :class="{ 'md-toolbar-row md-fixed-top': $route.meta.navbarAbsolute }"
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-round md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          style="fill:white"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <md-list-item @click="handlePhoneClick">
              <i class="material-icons">phone</i>
              <p class="hidden-lg hidden-md">Secure Call</p>
            </md-list-item>
            <md-list-item href="#/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <md-list-item @click="handleSignout">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
          
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPhone } from "@mdi/js";
import {Auth} from 'aws-amplify'
export default {
  data() {
    return {
      selectedEmployee: "",
      mdiPhone: mdiPhone,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  methods: {
    async handleSignout(){
      await Auth.signOut()
      this.$router.push({ name: "Login" });
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
    handlePhoneClick() {
      this.$router.push({ name: "Make A Call" });
    }
  }
};
</script>
