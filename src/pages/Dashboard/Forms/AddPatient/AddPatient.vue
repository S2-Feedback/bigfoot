<template>
  <div class="dflex-center-col">
    <div class="md-size-30">&nbsp;</div>
    <div class="md-size-60 dflex-center-col">
      <div class="dflex" style="justify-content:flex-start; width:100%;">
        <S2Button
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
    <div class="md-size-30">&nbsp;</div>
  </div>
</template>
<script>
import { Pagination, Modal, SimpleWizard, WizardTab } from "@/components";
import SvgIcon from "@jamescoyle/vue-icon";
import PatientInfo from "./PatientInfo";
import SecondStep from "./CaregiverInfo";
import S2Button from "@/components/S2Button.vue";
import { mdiChevronLeftCircle } from "@mdi/js";

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
      mdiChevronLeftCircle: mdiChevronLeftCircle
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
