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
import { createAddress, createUser } from "../../../../graphql/mutations";
import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import { lookupValues } from "../../../../constants/lookups";

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
        const userSub = await this.createCognitoUser();

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
            console.log("errrrr", err);
          });

        const user = await this.$runQuery(createUser, {
          input: {
            cognitoId: userSub,
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
            console.log("errrrr", err);
          });

        spinner.hide();
        notify("top", "right", "New Patient Created", "success", this);
        this.triggerReferral();
        this.$router.push({ name: this.returnTo });
      }, 50);
    },
    triggerReferral() {
      notify("top", "right", "BHI Referral Sent To Patient", "success", this);
    },
    async createCognitoUser() {
      const poolData = {
        UserPoolId: "us-east-1_PoH70Lysw",
        ClientId: "67i78koc22f2gfbjvhm0iqdsq4"
      };
      let userPool = new CognitoUserPool(poolData);
      let attributeList = [];
      let dataEmail = {
        Name: "email",
        Value: this.wizardModel.patientInfo.email
      };
      let dataPhone = {
        Name: "phone_number",
        value: this.wizardModel.patientInfo.phone
      };

      let attributeEmail = new CognitoUserAttribute(dataEmail);
      let attributePhone = new CognitoUserAttribute(dataPhone);

      attributeList.push(attributeEmail);
      attributeList.push(attributePhone);

      return new Promise((resolve, reject) => {
        userPool.signUp(
          `${this.wizardModel.patientInfo.firstName}.${this.wizardModel.patientInfo.lastName}`,
          "password",
          attributeList,
          null,
          (err, result) => {
            resolve(result.userSub);
          }
        );
      });
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
