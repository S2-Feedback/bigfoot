<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-75 mx-auto">
      <md-card style="box-shadow: black 0px 0px 16px -7px;">
        <md-card-header
          class="md-card-header-text md-card-header-blue"
          style="display:flex; justify-content:space-between; margin-bottom:30px; margin:none !important;"
        >
          <div
            class="card-text"
            style="box-shadow:black 0px 0px 12px -4px; display:flex; align-items:center;"
          >
            <div style="display:flex; align-items:flex-end; width:330px;">
              <md-icon style="margin:0px;">assignment</md-icon>
              <h4 class="title">Complete Your Profile</h4>
            </div>
          </div>
        </md-card-header>
        <md-card-content>
          <div
            v-show="!activeTab"
            class="md-layout"
            style="display:flex; margin-top:30px; justify-content:center;"
          >
            <span class="card-description" style="font-size:large;"
              >I am registering as a</span
            >
            <br />
            <div
              class="dflex"
              style="width:100%; margin-top:30px; margin-bottom:30px; justify-content:space-evenly;"
            >
              <S2Button
                class="mt-8"
                :click="
                  () => {
                    handleTypeSelection('pa');
                  }
                "
                :color="activeTab === 'pa' ? 's2success' : 's2default'"
                :width="140"
                :height="40"
              >
                <span slot="buttonText">Patient</span>
              </S2Button>
              <S2Button
                class="mt-8"
                :click="
                  () => {
                    handleTypeSelection('cm');
                  }
                "
                :color="activeTab === 'cm' ? 's2success' : 's2default'"
                :width="140"
                :height="40"
              >
                <span slot="buttonText">Care Manager</span>
              </S2Button>
              <S2Button
                class="mt-8"
                :click="
                  () => {
                    handleTypeSelection('psy');
                  }
                "
                :color="activeTab === 'psy' ? 's2success' : 's2default'"
                :width="140"
                :height="40"
              >
                <span slot="buttonText">Psychiatrist</span>
              </S2Button>
              <S2Button
                class="mt-8"
                :click="
                  () => {
                    handleTypeSelection('cp');
                  }
                "
                :color="activeTab === 'cp' ? 's2success' : 's2default'"
                :width="140"
                :height="40"
              >
                <span slot="buttonText">Care Provider</span>
              </S2Button>
            </div>
          </div>
          <ValidationObserver ref="form">
            <form v-show="activeTab" @submit.prevent="validate">
              <div
                class="md-layout"
                style="display:flex; justify-content:center;"
              >
                <ValidationProvider
                  name="firstName"
                  rules="required"
                  v-slot="{ passed, failed }"
                  style="width:200px;"
                >
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
              <div
                class="md-layout"
                style="display:flex; justify-content:center;"
              >
                <ValidationProvider
                  name="address"
                  rules="required"
                  v-slot="{ passed, failed }"
                  style="width:660px;"
                >
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
              </div>
              <div
                class="md-layout"
                style="display:flex; justify-content:center;"
              >
                <ValidationProvider
                  name="city"
                  rules="required"
                  v-slot="{ passed, failed }"
                  style="width:200px;"
                >
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
              <div
                class="md-layout"
                style="display:flex; justify-content:center;"
              >
                <ValidationProvider
                  name="email"
                  rules="required"
                  v-slot="{ passed, failed }"
                  style="width:200px;"
                >
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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
                  <md-field
                    :class="[{ 'md-error': failed }, { 'md-valid': passed }]"
                  >
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

              <div
                class="md-layout"
                style="display:flex; width:100%; margin-top:25px; justify-content:flex-end;"
              >
                <S2Button
                  class="mt-8"
                  :click="handleFinishClick"
                  :color="'s2success'"
                  :width="160"
                  :height="40"
                >
                  <span slot="buttonText">Complete Profile</span>
                </S2Button>
              </div>
            </form>
          </ValidationObserver>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import S2Button from "@/components/S2Button.vue";

export default {
  components: {
    S2Button
  },
  data() {
    return {
      activeTab: ""
    };
  },
  methods: {
    handleTypeSelection(selectedType) {
      this.activeTab = selectedType;
    },
    handleFinishClick() {
      this.$router.push("Patients");
    }
  }
};
</script>

<style></style>
