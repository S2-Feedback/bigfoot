<template>
  <md-toolbar
    md-elevation="1"
    :class="{ 'md-toolbar-row md-fixed-top': $route.meta.navbarAbsolute }"
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="dflex-center-row" style="align-items:flex-end; width:30%;">
        <md-field>
          <label>Enter Search Criteria</label>
          <md-input v-model="patientSearchText"></md-input>
        </md-field>
        <svg-icon
          class="ml-15"
          slot="buttonIcon"
          type="mdi"
          :path="mdiAccountSearch"
        ></svg-icon>
      </div>
      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <md-list>
            <!-- <md-list-item @click="handlePhoneClick">
              <i class="material-icons">phone</i>
              <p class="hidden-lg hidden-md">Secure Call</p>
            </md-list-item> -->
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
import { Auth } from "aws-amplify";
import { mdiAccountSearch } from "@mdi/js";
export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      mdiAccountSearch: mdiAccountSearch,

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
    async handleSignout() {
      await Auth.signOut();
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
