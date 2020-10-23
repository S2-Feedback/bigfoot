<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div class="md-layout" style="display:flex; justify-content:center;">
        <ValidationProvider
          name="provider"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:660px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label for="provider">Select Existing Caregiver</label>
            <md-select v-model="provider" name="provider" id="provider">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </ValidationProvider>
      </div>
      <br />
      <br />
      <div class="md-layout" style="display:flex; justify-content:center;">
        <ValidationProvider
          name="firstName"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>First Name</label>
            <div class="md-layout-item">
              <md-input v-model="firstName"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:30px;">&nbsp;</span>
        <ValidationProvider
          name="lastName"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>Last Name</label>
            <div class="md-layout-item">
              <md-input v-model="lastName"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:30px;">&nbsp;</span>
        <ValidationProvider
          name="dob"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label
              >Date Of Birth
              <span style="font-size:9px;">mm/dd/yyyy</span></label
            >
            <div class="md-layout-item">
              <md-input v-model="dob"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
      </div>
      <div class="md-layout" style="display:flex; justify-content:center;">
        <ValidationProvider
          name="address"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:430px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>Address</label>
            <div class="md-layout-item">
              <md-input v-model="address"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:30px;">&nbsp;</span>
        <div style="width:200px; display:flex; align-items:center">
          <button type="button" class="md-button md-success md-simple">
            Same as patient address
          </button>
        </div>
      </div>
      <div class="md-layout" style="display:flex; justify-content:center;">
        <ValidationProvider
          name="city"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>City</label>
            <div class="md-layout-item">
              <md-input v-model="city"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:30px;">&nbsp;</span>
        <ValidationProvider
          name="state"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>State</label>
            <div class="md-layout-item">
              <md-input v-model="state"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:30px;">&nbsp;</span>
        <ValidationProvider
          name="zipcode"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>Zip Code</label>
            <div class="md-layout-item">
              <md-input v-model="zipcode"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
      </div>
      <div class="md-layout" style="display:flex; justify-content:center;">
        <ValidationProvider
          name="email"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>Email Address</label>
            <div class="md-layout-item">
              <md-input v-model="email"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:30px;">&nbsp;</span>
        <ValidationProvider
          name="phoneNumber"
          rules="required"
          v-slot="{ passed, failed }"
          style="width:200px;"
        >
          <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
            <label>Phone Number</label>
            <div class="md-layout-item">
              <md-input v-model="phone"></md-input>
            </div>
            <slide-y-down-transition>
              <md-icon class="error" v-show="failed">close</md-icon>
            </slide-y-down-transition>
            <slide-y-down-transition>
              <md-icon class="success" v-show="passed">done</md-icon>
            </slide-y-down-transition>
          </md-field>
        </ValidationProvider>
        <span style="width:230px;">&nbsp;</span>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);

export default {
  name: "PatientInfo",
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      dob: "",
      email: "",
      phone: "",
      provider: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        this.$emit("on-validated", res);
        return res;
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}
</style>
