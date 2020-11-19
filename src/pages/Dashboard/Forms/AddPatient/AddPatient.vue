<template>
  <div class="dflex-center-col md-layout-item mx-auto md-size-75 ">
    <div v-show="showWizard">
      <div class="dflex" style="justify-content:flex-start; width:100%;">
        <S2Button
          v-show="showWizard"
          :style="'color:white;'"
          :width="165"
          :click="handleBackToPatients"
        >
          <svg-icon
            slot="buttonIcon"
            class="mr-10"
            type="mdi"
            :path="mdiChevronLeftCircle"
          ></svg-icon
          ><span class="buttonText" slot="buttonText">Back To Patients</span>
        </S2Button>
      </div>
      <simple-wizard v-show="showWizard">
        <template slot="header">
          <h3 class="title">New Patient</h3>
          <h5 class="category">
            Please enter patient and care manager information.
          </h5>
        </template>

        <wizard-tab :before-change="() => validateStep('step1')">
          <template slot="label">
            Patient Information
          </template>
          <patientInfo
            ref="step1"
            @on-validated="onStepValidated"
          ></patientInfo>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step2')">
          <template slot="label">
            Care Manager Information
          </template>
          <secondStep ref="step2" @on-validated="onStepValidated"></secondStep>
        </wizard-tab>
      </simple-wizard>
    </div>
  </div>
</template>
<script>
import { notify } from "../../../../services/notificationService";
import { Pagination, Modal, SimpleWizard, WizardTab } from "@/components";
import SpinnerService from "../../../../services/spinnerService";
import SvgIcon from "@jamescoyle/vue-icon";
import PatientInfo from "./PatientInfo";
import SecondStep from "./CareManagerInfo";
import S2Button from "@/components/S2Button.vue";
import { mdiChevronLeftCircle, mdiSubdirectoryArrowLeft } from "@mdi/js";
import { runQuery } from "../../../../apis/gql";
import { createAddress, createUser, createPatient, createPatientReferral } from "../../../../graphql/mutations";
import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import { lookupValues } from "../../../../constants/lookups";
import { Auth } from "aws-amplify";

export default {
  name: "AddPatient",
  components: {
    SvgIcon,
    WizardTab,
    SimpleWizard,
    PatientInfo,
    SecondStep,
    S2Button
  },
  data() {
    return {
      wizardModel: {},
      mdiChevronLeftCircle: mdiChevronLeftCircle,
      showWizard: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    handleBackToPatients() {
      let spinner = SpinnerService(this);
      this.showWizard = false; //trying to combat the bit of jank in the theme where it shrinks the grid before navigation
      setTimeout(() => {
        spinner.hide();
        this.$router.push({ name: this.returnTo });
      }, 50);
    },
    async onStepValidated(validated, model, finalStep) {
      this.wizardModel = { ...this.wizardModel, ...model };
      if (finalStep) {
        await this.wizardComplete();
      }
    },
    async wizardComplete() {
      const spinner = SpinnerService(this);
      this.showWizard = false;

      setTimeout(async () => {
        const addressId = await this.$runQuery(createAddress, {
          input: {
            street: this.wizardModel.patientInfo.street,
            city: this.wizardModel.patientInfo.city,
            state: this.wizardModel.patientInfo.state,
            zipCode: this.wizardModel.patientInfo.zipCode,
            isActive: 1
          }
        })
          .then(result => {
            return result.data.createAddress.id;
          })
          .catch(err => {
            //console.log("errrrr", err);
          });

        const user = await this.$runQuery(createUser, {
          input: {
            cognitoId: '',
            addressId: addressId,
            firstName: this.wizardModel.patientInfo.firstName,
            lastName: this.wizardModel.patientInfo.lastName,
            dob: this.wizardModel.patientInfo.dob,
            email: this.wizardModel.patientInfo.email,
            phone: this.wizardModel.patientInfo.phone,
            type: lookupValues.userTypes.patient,
            isActive: 1
          }
        })
          .then(result => {
            return result.data.createUser.id;
          })
          .catch(err => {
            //console.log("errrrr", err);
          });
        const patient = await this.$runQuery(createPatient,{input:{
          patientId: user
        }})
        
        
        this.triggerReferral(user);
        spinner.hide();
        this.$router.push({ name: this.returnTo });
      }, 50);
    },
    async triggerReferral(patientId) {
      notify("top", "right", "New Patient Created", "success", this);
      const loggedInUser = await Auth.currentAuthenticatedUser();
      
      await this.$runQuery(createPatientReferral,{input:{
        patientId:patientId,
        referredBy:loggedInUser.attributes.sub,
        referredDate:new Date(),
        patientEmail: this.wizardModel.patientInfo.email,
        patientName: `${this.wizardModel.patientInfo.firstName} ${this.wizardModel.patientInfo.lastName}`
      }}).then(()=>{
        notify("top", "right", "BHI Referral Sent To Patient", "success", this); 
      }).catch((err)=>{
        notify("top", "right", err, "danger", this);
      })
      
    }
  },
  props: {
    returnTo: {
      type: String
    }
  },
  mounted() {}
};
</script>
<style>
.md-button .md-ripple {
  justify-content: flex-start;
}
</style>
