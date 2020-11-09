<template>
  <div class="dflex-center-col">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUsers } from "../graphql/custom/patient";

export default {
  async mounted() {
    let user = {};
    try {
      user = await Auth.currentAuthenticatedUser();
    } catch (error) {
      //console.log(error) //todo add some logging
    }

    console.log("what do you have for user", user);
    if (Object.keys(user).length > 0) {
      this.$router.push({ name: "Patients" });
    }
    AmplifyEventBus.$on("authState", async eventInfo => {
      if (eventInfo === "signedIn") {
        //user = await Auth.currentAuthenticatedUser();
        //console.log("what is the last event hat was fired ", user.attributes.sub)
        //let s = await API.graphql(graphqlOperation(getUsers))
        //let x = this.$runQuery(getUserByCognitoId, {cognitoId: user.attributes.sub})
        //console.log('what do you have for user now', s)

        this.$router.push({ name: "Profile" });
      } else if (eventInfo === "signedOut") {
      }
    });
  }
};
</script>

<style></style>
