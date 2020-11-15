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
import { Pagination, Modal, SimpleWizard, WizardTab } from "@/components";
import SpinnerService from "../../../../services/spinnerService";
import SvgIcon from "@jamescoyle/vue-icon";
import PatientInfo from "./PatientInfo";
import SecondStep from "./CareManagerInfo";
import S2Button from "@/components/S2Button.vue";
import { mdiChevronLeftCircle } from "@mdi/js";
import { runQuery } from "../../../../apis/gql";
import { createPatient } from "../../../../graphql/custom/patient";

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
      showWizard: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    handleBackToPatients() {
      let spinner = SpinnerService(this)
      this.showWizard = false; //trying to combat the bit of jank in the theme where it shrinks the grid before navigation
      setTimeout(() => {
        spinner.hide()
        this.$router.push({ name: this.returnTo})        
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
       setTimeout(async() => {

         console.log('this is the wizard  odel', this.wizardModel)
          await runQuery(createPatient, {
            input: {
              patient_lastName: this.wizardModel.patientInfo.lastName,
              patient_firstName: this.wizardModel.patientInfo.firstName,
              patient_dob: this.wizardModel.patientInfo.dob,
              patient_street: this.wizardModel.patientInfo.street,
              patient_city: this.wizardModel.patientInfo.city,
              patient_state: this.wizardModel.patientInfo.state,
              patient_status: this.wizardModel.patientInfo.status,
              patient_email: this.wizardModel.patientInfo.email,
              patient_phone: this.wizardModel.patientInfo.phone,
              patient_provider: this.wizardModel.patientInfo.provider
            }
          })
            .then(() => {
              //create the referral
            })
            .catch(error => {
              //console.log('error', error)
            });
          spinner.hide();
          this.$router.push({name: this.returnTo} );         
       }, 50);
      
    }
  },
  props:{
    returnTo:{
      type:String
    }
  },
  mounted() {
  }
};
</script>
<style>
.md-button .md-ripple {
  justify-content: flex-start;
}
</style>
