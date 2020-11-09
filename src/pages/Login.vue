<template>
  <div class="dflex-center-col">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from '../graphql/queries';
import { lookupValues } from '../constants/lookups'

export default {
  data(){
    return {
      lookupValues:{}
    }
  },
  async mounted() {
    this.lookupValues = lookupValues.userTypes

    let user = {};
    try {
      user = await Auth.currentAuthenticatedUser();
    } catch (error) {
      //console.log(error) //todo add some logging
    }


    if (Object.keys(user).length > 0) {
      this.$router.push({ name: "Patients" });
    }
    AmplifyEventBus.$on("authState", async eventInfo => {
      if (eventInfo === "signedIn") {
        user = await Auth.currentAuthenticatedUser();
        const email = user.attributes.email
        const phoneNumber = user.attributes.phone_number
        const {data:{listUsers:{items}}} = await this.$runQuery(listUsers,{filter:{cognitoId:{eq:user.attributes.sub}}})

        if(items.length>0){
          switch (items[0].type) {
              case this.lookupValues.patient:
                  this.$router.push({name:"Patient Portal"})
                  break;
              case this.lookupValues.careManager:
                  this.$router.push({name:"Care Manager Portal"})
                  break;
              case this.lookupValues.pcp:
                  this.$router.push({name:"Primary Care Portal"})
                  break;
              case this.lookupValues.psychiatrist:
                  this.$router.push({name:"Psychiatric Portal"})
                  break;
              default:
                  this.$router.push("/")
                  break;
          }          
        } else {
          this.$router.push({ name: "Profile", params: {'email':email, 'phoneNumber':phoneNumber, 'cognitoId':user.attributes.sub}});
        }
      } 
    });
  }
};
</script>

<style></style>
