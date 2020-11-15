<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-75 mx-auto">
      <md-card
        style="box-shadow: black 0px 0px 16px -7px; margin-top:100px; width:100%;"
      >
        <md-card-header
          class="md-card-header-text md-card-header-blue"
          style="display:flex; justify-content:space-between; margin-bottom:30px; margin:none !important;"
        >
          <div
            class="card-text"
            style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
          >
            <div style="display:flex; align-items:flex-end; width:330px;">
              <md-icon style="margin:0px;">search</md-icon>
              <h4 class="title">Search For Patient</h4>
            </div>
          </div>
        </md-card-header>
        <md-card-content
          style="padding-right:16px; padding-left:16px; padding-top:0px; padding-bottom:24px;"
        >
          <div class="dflex-center-row" style="justify-content:space-between;">
            <div style="width:75%">
              <md-field>
                <label>Enter Patient Name</label>
                <md-input v-model="patientSearchText" type="email"></md-input>
              </md-field>
            </div>
            <S2Button
              :click="handleSearchForPatient"
              :color="'s2success'"
              :width="140"
              :height="40"
            >
              <svg-icon
                class="mr-10"
                slot="buttonIcon"
                type="mdi"
                :path="mdiAccountSearch"
              ></svg-icon
              ><span slot="buttonText">Search</span>
            </S2Button>
          </div>
        </md-card-content>
      </md-card>
      <br />
      <br />
      <md-card style="box-shadow: black 0px 0px 16px -7px;">
        <md-card-header
          class="md-card-header-text md-card-header-blue"
          style="display:flex; justify-content:space-between; margin-bottom:30px; margin:none !important;"
        >
          <div
            class="card-text"
            style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
          >
            <div style="display:flex; align-items:flex-end; width:330px;">
              <md-icon>assignment</md-icon>
              <h4 class="title">Recent Patients</h4>
            </div>
          </div>

          <S2Button
            class="mt-8"
            :click="handleNewPatientClick"
            :color="'s2success'"
            :width="140"
            :height="40"
          >
            <svg-icon
              class="mr-10"
              slot="buttonIcon"
              type="mdi"
              :path="mdiPlusCircle"
            ></svg-icon
            ><span slot="buttonText">New Patient</span>
          </S2Button>
        </md-card-header>
        <md-card-content>
          <md-table
            :value="queriedData"
            :md-sort.sync="currentSort"
            :md-sort-order.sync="currentSortOrder"
            :md-sort-fn="customSort"
            class="paginated-table table-striped table-hover"
          >
            <md-table-toolbar style="margin-bottom:30px;">
              <md-field>
                <label for="pages">Per page</label>
                <md-select v-model="pagination.perPage" name="pages">
                  <md-option
                    v-for="item in pagination.perPageOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                    {{ item }}
                  </md-option>
                </md-select>
              </md-field>

              <md-field>
                <md-input
                  type="search"
                  class="mb-3"
                  clearable
                  style="width: 200px"
                  placeholder="Search records"
                  v-model="searchQuery"
                >
                </md-input>
              </md-field>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Last Name" md-sort-by="lastName">{{
                item.patient_lastName
              }}</md-table-cell>
              <md-table-cell md-label="First Name" md-sort-by="firstName">{{
                item.patient_firstName
              }}</md-table-cell>
              <md-table-cell md-label="Street" md-sort-by="street">{{
                item.patient_street
              }}</md-table-cell>
              <md-table-cell md-label="City" md-sort-by="city">{{
                item.patient_city
              }}</md-table-cell>
              <md-table-cell md-label="State" md-sort-by="state">{{
                item.patient_state
              }}</md-table-cell>
              <md-table-cell md-label="Status" md-sort-by="status">{{
                item.patient_status
              }}</md-table-cell>
              <md-table-cell md-label="">
                <md-button
                  class="md-just-icon md-success md-simple"
                  @click.native="handlePatientViewClick(item)"
                >
                  <svg-icon
                    type="mdi"
                    :path="mdiArrowRightDropCircle"
                  ></svg-icon>
                </md-button>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <div class="">
            <p class="card-category">
              Showing {{ from + 1 }} to {{ to }} of {{ total }} entries
            </p>
          </div>
          <pagination
            class="pagination-no-border pagination-primary"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          >
          </pagination>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>
<script>
import { Pagination } from "@/components";
import patients from "../pages/Dashboard/Tables/patients";
import Fuse from "fuse.js";
import Swal from "sweetalert2";
import SvgIcon from "@jamescoyle/vue-icon";
import S2Button from "@/components/S2Button.vue";
import { API, graphqlOperation } from "aws-amplify";
import { listAllPatients } from "../graphql/custom/patient";
import {
  mdiArrowRightDropCircle,
  mdiPlusCircle,
  mdiAccountSearch
} from "@mdi/js";
import SpinnerService from "../services/spinnerService";
import {
  createOrganization,
  createAddress,
  createLocation
} from "../graphql/mutations";
import { getOrganization } from "../graphql/queries";

export default {
  name: "PCPView",
  components: {
    Pagination,
    SvgIcon,
    S2Button
  },
  data() {
    return {
      currentSort: "lastName",
      currentSortOrder: "asc",
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      footerTable: [
        "Last Name",
        "First Name",
        "Street",
        "City",
        "State",
        "Status",
        "Actions"
      ],
      searchQuery: "",
      propsToSearch: ["lastName", "firstName", "street", "city", "state"],
      tableData: [],
      searchedData: [],
      fuseSearch: null,
      mdiArrowRightDropCircle: mdiArrowRightDropCircle,
      mdiPlusCircle: mdiPlusCircle,
      mdiAccountSearch: mdiAccountSearch,
      showModal: false,
      fullPage: true,
      patientSearchText: ""
    };
  },
  computed: {
    queriedData() {
      let result = this.tableData;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result.slice(this.from, this.to);
    },
    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length;
    }
  },
  watch: {
    searchQuery(value) {
      let result = this.tableData;
      if (value !== "") {
        result = this.fuseSearch.search(this.searchQuery);
      }
      this.searchedData = result;
    }
  },
  methods: {
    handleNewPatientClick() {
      this.$router.push({
        name: "Add Patient",
        params: { returnTo: "Primary Care Portal" }
      });
    },
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      this.wizardModel = { ...this.wizardModel, ...model };
    },
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    handlePatientViewClick(e) {
      this.$router.push({ name: "Patient View", params: { patientInfo: e } });
    },
    async getPatients() {
      await this.$runQuery(listAllPatients).then((res)=>{
          return res
      }).catch((error)=>{console.log('error ', error)
      })
    },
    // async generateEverything() {
    //   // const {data: {createAddress:address}} = await runQuery(createAddress,{input:{street:'101 First St', city:'Test City', state:'TX', zipCode:'75111', isActive:true}})
    //   // const {data: {createOrganization:organization}} = await runQuery(createOrganization,{input:{addressId:address.id, name:'Test Organization'}})
    //   // const {data: {createLocation:locationA}} = await runQuery(createLocation, {input: {organizationid:organization.id, description:'Location A'}})
    //   // const {data: {createLocation:locationB}} = await runQuery(createLocation, {input: {organizationid:organization.id, description:'Location B'}})
    //   //console.log('what do you got?', await runQuery(getOrganization,{id:'419527ba-fad3-4d95-b5ec-8a707df60b4a'}))
    // },
  },
  mounted() {
    this.tableData = this.getPatients();



    this.generateEverything();
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["lastName", "firstName", "street", "city", "state"],
      threshold: 0.3
    });
  },
  // async created() {
  //   let spinner = SpinnerService(this);
  //   await this.getPatients();
  //   spinner.hide();
  // }
};
</script>
<style>
.md-icon {
  margin: 0px !important;
}
.modal-container {
  max-width: 850px;
}
</style>
