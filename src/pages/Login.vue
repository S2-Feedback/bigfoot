<template>
  <div class="dflex-center-col">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";

export default {
  async mounted() {
    let user = {};
    try {
      user = await Auth.currentAuthenticatedUser();
    } catch (error) {
      //console.log(error) //todo add some logging
    }
    if (Object.keys(user).length > 0) {
      this.$router.push({ name: "Patients" });
    }
    AmplifyEventBus.$on("authState", eventInfo => {
      if (eventInfo === "signedIn") {
        this.$router.push({ name: "Patients" });
      } else if (eventInfo === "signedOut") {
      }
    });
  }
};
</script>

<style></style>
