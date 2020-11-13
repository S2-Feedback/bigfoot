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
            <label for="provider">Assign Care Manager</label>
            <md-select v-model="careManager" name="careManager" id="careManager">
              <md-option value="1">Fight Club</md-option>
              <md-option value="2">Godfather</md-option>
              <md-option value="3">Godfather II</md-option>
              <md-option value="4">Godfather III</md-option>
              <md-option value="5">Godfellas</md-option>
              <md-option value="6">Pulp Fiction</md-option>
              <md-option value="7">Scarface</md-option>
            </md-select>
          </md-field>
        </ValidationProvider>
      </div>
      <br />
      <br />
     
    </form>
  </ValidationObserver>
</template>
<script>
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);

export default {
  name: "CareManagerInfo",
  components: {
    
  },
  data() {
    return {
      careManager:' '
    };
  },
  computed: {},
  watch: {},
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        this.$emit(
          "on-validated",
          res,
          {
            careManagerInfo: {
              Id: this.careManager
            }
          },
          true
        );
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
