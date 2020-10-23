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
            style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
          >
            <div style="display:flex; align-items:flex-end; width:330px;">
              <md-icon>assignment</md-icon>
              <h4 class="title">Patient List</h4>
            </div>
          </div>
          <md-button
            @click="handleNewPatientClick"
            class="md-success controlHeight"
            style="display:flex; flex-direction:column;"
            ><svg-icon type="mdi" :path="mdiPlusCircle"></svg-icon>
            <span>New Patient</span></md-button
          >
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
                item.lastName
              }}</md-table-cell>
              <md-table-cell md-label="First Name" md-sort-by="firstName">{{
                item.firstName
              }}</md-table-cell>
              <md-table-cell md-label="Street" md-sort-by="street">{{
                item.street
              }}</md-table-cell>
              <md-table-cell md-label="City" md-sort-by="city">{{
                item.city
              }}</md-table-cell>
              <md-table-cell md-label="State" md-sort-by="state">{{
                item.state
              }}</md-table-cell>
              <md-table-cell md-label="Status" md-sort-by="status">{{
                item.status
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
import patients from "../Dashboard/Tables/patients";
import Fuse from "fuse.js";
import Swal from "sweetalert2";
import SvgIcon from "@jamescoyle/vue-icon";

import { mdiArrowRightDropCircle, mdiPlusCircle } from "@mdi/js";

export default {
  name: "Patients",
  components: {
    Pagination,
    SvgIcon
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
      tableData: patients,
      searchedData: [],
      fuseSearch: null,
      mdiArrowRightDropCircle: mdiArrowRightDropCircle,
      mdiPlusCircle: mdiPlusCircle,
      showModal: false
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
      this.$router.push({ name: "Add Patient" });
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
    }
  },
  mounted() {
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["lastName", "firstName", "street", "city", "state"],
      threshold: 0.3
    });
  }
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
