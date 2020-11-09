<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-75 mx-auto" style="margin-bottom:30px;">
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
    <div class="md-layout-item md-size-75 mx-auto">
      <md-card style="box-shadow: black 0px 0px 16px -7px">
        <md-card-header
          class="md-card-header-text md-card-header-blue"
          style="display:flex; justify-content:space-between;"
        >
          <div class="card-text" style="box-shadow:black 0px 0px 12px -4px">
            <div
              style="display:flex; align-items:flex-end; flex-direction:column;"
            >
              <h3 class="title" style="width:300px;">
                {{ patientInfo.patient_lastName }},
                {{ patientInfo.patient_firstName }}
              </h3>
              <h5 class="title" style="width:300px;">
                {{ patientInfo.patient_street }} {{ patientInfo.patient_city }},
                {{ patientInfo.patient_state }}
              </h5>
            </div>
          </div>
          <S2Button
            :click="handleNewAssessmentClick"
            :style="'color:white;'"
            :width="165"
            class="mt-8"
          >
            <svg-icon
              slot="buttonIcon"
              class="mr-10"
              type="mdi"
              :path="mdiPlusCircle"
            ></svg-icon
            ><span class="buttonText" slot="buttonText">New Assessment</span>
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
            <md-table-toolbar style="margin-bottom:30px; margin-top:40px;">
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
              <md-table-cell md-label="Start Date" md-sort-by="startDate">{{
                item.startDate
              }}</md-table-cell>
              <md-table-cell md-label="Caregiver" md-sort-by="caregiver">{{
                item.caregiver
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
import assessments from "../Dashboard/Tables/assessments";
import Fuse from "fuse.js";
import SvgIcon from "@jamescoyle/vue-icon";
import S2Button from "@/components/S2Button.vue";
import {
  mdiChevronLeftCircle,
  mdiPlusCircle,
  mdiArrowRightDropCircle
} from "@mdi/js";

export default {
  name: "PatientView",
  components: {
    Pagination,
    SvgIcon,
    S2Button
  },
  data() {
    return {
      currentSort: "startDate",
      currentSortOrder: "asc",
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      searchQuery: "",
      propsToSearch: [],
      tableData: assessments,
      searchedData: [],
      fuseSearch: null,
      mdiChevronLeftCircle: mdiChevronLeftCircle,
      mdiPlusCircle: mdiPlusCircle,
      mdiArrowRightDropCircle: mdiArrowRightDropCircle
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
    handleBackToPatients() {
      this.$router.push({ name: "Patients" });
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
  props: {
    patientInfo: {}
  },
  mounted() {
    console.log("patient info", this.patientInfo);
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ["startDate", "caregiver", "status"],
      threshold: 0.3
    });
  }
};
</script>
<style></style>
