<template>
  <div class="dflex-center-col">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";
import { lookupValues } from "../constants/lookups";
import { updateUser } from '../graphql/mutations';

export default {
  data() {
    return {
      lookupValues: {},
      patientId:null
    };
  },
  async mounted() {

    this.patientId = this.$route.query.redirect_uri
    this.lookupValues = lookupValues.userTypes;

    let user = {};
    try {
      user = await Auth.currentAuthenticatedUser();
    } catch (error) {
      //console.log(error); //todo add some logging
    }

    AmplifyEventBus.$on("authState", async eventInfo => {
      if (eventInfo === "signedIn") {
        user = await Auth.currentAuthenticatedUser();
        console.log('what ist the user?', user.attributes.sub)
        if (this.patientId){
          this.updateUserProfile(user)
        }
        
        const email = user.attributes.email;
        const phoneNumber = user.attributes.phone_number;
        let items;

        if(this.patientId){
          items = await this.$runQuery(listUsers, {filter: { id: { eq: this.patientId } }});
        } else {
          items = await this.$runQuery(listUsers, {filter: { cognitoId: { eq: user.attributes.sub } }});
        }
        console.log("here..", items.data.listUsers.items[0].type)
        if (items.data.listUsers.items.length > 0) {
          switch (items.data.listUsers.items[0].type) {
            case this.lookupValues.patient:
              this.$router.push({ name: "Patient Portal" });
              break;
            case this.lookupValues.careManager:
              this.$router.push({ name: "Care Manager Portal" });
              break;
            case this.lookupValues.pcp:
              console.log('pushingggggggg', this.lookupValues.pcp)
              this.$router.push({ name: "Primary Care Portal" });
              break;
            case this.lookupValues.psychiatrist:
              this.$router.push({ name: "Psychiatric Portal" });
              break;
            default:
              this.$router.push({name: "Login"});
              break;
          }
        } else {
          this.$router.push({
            name: "Profile",
            params: {
              email: email,
              phoneNumber: phoneNumber,
              cognitoId: user.attributes.sub
            }
          });
        }
      }
    });
  },
  methods:{
    async updateUserProfile(cognitoUser){
        console.log('-0----------------------------cog', cognitioUser)
      await this.$runQuery(updateUser, {input:{id:this.patientId, cognitoId:cognitoUser.attributes.sub}},{filter:{id: {eq: this.patientId}}})
    }
  }
};
</script>

<style></style>
