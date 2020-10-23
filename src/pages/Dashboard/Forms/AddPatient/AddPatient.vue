<template>
  <div>
    <div class="md-layout-item md-size-75 mx-auto" style="margin-bottom:30px;">
      <md-button
        class="md-success controlHeight"
        @click="handleBackToPatients"
        style="display:flex; flex-direction:column;"
        ><svg-icon type="mdi" :path="mdiArrowLeftCircle"></svg-icon>
        <span>Back To Patients</span></md-button
      >
    </div>
    <div style="display:flex; justify-content:center;">
      <simple-wizard>
        <template slot="header">
          <h3 class="title">New Patient</h3>
          <h5 class="category">
            Please enter patient and caregiver information.
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
            Caregiver Information
          </template>
          <secondStep ref="step2" @on-validated="wizardComplete"></secondStep>
        </wizard-tab>
      </simple-wizard>
    </div>
  </div>
</template>
<script>
import { Pagination, Modal, SimpleWizard, WizardTab } from "@/components";
//import SvgIcon from '@jamescoyle/vue-icon'
import PatientInfo from "./PatientInfo";
import SecondStep from "./CaregiverInfo";

export default {
  name: "AddPatient",
  components: {
    //SvgIcon,
    WizardTab,
    SimpleWizard,
    PatientInfo,
    SecondStep
  },
  data() {
    return {
      wizardModel: {}
    };
  },
  computed: {},
  watch: {},
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    handleBackToPatients() {
      this.$router.push({ name: "Patients" });
    },
    onStepValidated(validated, model) {
      this.wizardModel = { ...this.wizardModel, ...model };
    },
    wizardComplete() {
      this.$router.push("Patients");
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
