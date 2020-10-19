<template>
    <div style="display:flex; justify-content:center;">
      <simple-wizard >
        <template slot="header">
          <h3 class="title">New Patient</h3>
          <h5 class="category">Please enter patient and caregiver information.</h5>          
        </template>

        <wizard-tab :before-change="() => validateStep('step1')">
          <template slot="label">
            Patient Information
          </template>
          <FirstStep ref="step1" @on-validated="onStepValidated"></FirstStep>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step2')">
          <template slot="label">
            Caregiver Information
          </template>
          <SecondStep ref="step2" @on-validated="onStepValidated"></SecondStep>
        </wizard-tab>

        <div slot="footer">&nbsp;</div>
        <div slot="footer" style='display:flex;'>
          <md-button style="display:flex; justify-content:center; align-items:center;">
            Cancel
          </md-button>
          <md-button class="md-success" style="display:flex; justify-content:center; align-items:center;">
            Next
          </md-button>
        </div>

      </simple-wizard>
    </div>
</template>
<script>
import { Pagination, Modal, SimpleWizard, WizardTab } from "@/components";
//import SvgIcon from '@jamescoyle/vue-icon'
import FirstStep from "./PatientInfo";
import SecondStep from "./CaregiverInfo";



export default {
    name:'AddPatient',
    components: {
      //SvgIcon,
      WizardTab,
      SimpleWizard,
      FirstStep,
      SecondStep
    },
    data(){
      return (
          {
            activeIndex:0
          }        
      )
    },    
    computed: {
    },
    watch: {
    },        
    methods: {
      validateStep(e){
        console.log('step ', e)
      },
      onStepValidated(e){
        console.log('step validated?? ', e)
        this.activeIndex = 1
      },
    },    
    mounted() {

    }
};
</script>
<style>

</style>




