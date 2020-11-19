<template>
  <div class="dflex-center-col">
    <div class="md-layout dflex-center-row">
      <div
        class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-25"
      >
        <stats-card
          header-color="rose"
          style="box-shadow: black 0px 0px 16px -7px;"
        >
          <template slot="header">
            <div class="card-icon">
              <i class="fa fa-list"></i>
            </div>
            <p class="category">Total Patients</p>
            <h3 class="title">
              <animated-number :value="totalPatients"></animated-number>
            </h3>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-25"
      >
        <stats-card
          header-color="primary"
          style="box-shadow: black 0px 0px 16px -7px;"
        >
          <template slot="header">
            <div class="card-icon">
              <i class="fa fa-search-plus"></i>
            </div>
            <p class="category">Assessments For Review</p>
            <h3 class="title">
              <animated-number :value="34"></animated-number>
            </h3>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-30 md-xsmall-size-100 md-size-25"
      >
        <stats-card
          header-color="danger"
          style="box-shadow: black 0px 0px 16px -7px;"
        >
          <template slot="header">
            <div class="card-icon">
              <i class="fa fa-exclamation-circle"></i>
            </div>
            <p class="category">Flagged For Followup</p>
            <h3 class="title">
              <animated-number :value="75"></animated-number>
            </h3>
          </template>
        </stats-card>
      </div>
    </div>

    <md-card
      style="box-shadow: black 0px 0px 16px -7px; margin-top:100px; width:75%;"
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
            <md-icon style="margin:0px;">assignment</md-icon>
            <h4 class="title">My Patients</h4>
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
        <nav-tabs-card>
          <template slot="content">
            <md-tabs class="md-primary" md-alignment="left" >
              <md-tab  id="tab-home" md-label="Active Patients" md-icon="bug_report">
                <md-table v-model="firstTabs" @md-selected="onSelect">
                  <md-table-row
                    slot="md-table-row"
                    slot-scope="{ item }"
                    md-selectable="multiple"
                    md-auto-select
                  >
                    <md-table-cell>{{ item.tab }}</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Edit</md-tooltip>
                      </md-button>
                      <md-button class="md-just-icon md-simple md-danger">
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Close</md-tooltip>
                      </md-button>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Ready For Psych Review" md-icon="code">
                <md-table v-model="firstTabs" @md-selected="onSelect">
                  <md-table-row
                    slot="md-table-row"
                    slot-scope="{ item }"
                    md-selectable="multiple"
                    md-auto-select
                  >
                    <md-table-cell>{{ item.tab }}</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Edit</md-tooltip>
                      </md-button>
                      <md-button class="md-just-icon md-simple md-danger">
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Close</md-tooltip>
                      </md-button>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </md-tab>

              <md-tab id="tab-planReview" md-label="Plan Needing Review" md-icon="cloud">
                <md-table v-model="thirdTabs" @md-selected="onSelect">
                  <md-table-row
                    slot="md-table-row"
                    slot-scope="{ item }"
                    md-selectable="multiple"
                    md-auto-select
                  >
                    <md-table-cell>{{ item.tab }}</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Edit</md-tooltip>
                      </md-button>
                      <md-button class="md-just-icon md-simple md-danger">
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Close</md-tooltip>
                      </md-button>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </md-tab>


              <md-tab id="tab-NewPatients" md-label="New Patients" md-icon="cloud">
                <md-table v-model="forthTab" @md-selected="onSelect">
                  <md-table-row
                    slot="md-table-row"
                    slot-scope="{ item }"
                    md-selectable="multiple"
                    md-auto-select
                  >
                    <md-table-cell>{{ item.tab }}</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-just-icon md-simple md-primary">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Edit</md-tooltip>
                      </md-button>
                      <md-button class="md-just-icon md-simple md-danger">
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Close</md-tooltip>
                      </md-button>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </md-tab> 





            </md-tabs>
          </template>
        </nav-tabs-card>        
      </md-card-content>
      
    </md-card>
  </div>
</template>

<script>
import { StatsCard, AnimatedNumber, NavTabsCard } from "@/components";
import {
  mdiArrowRightDropCircle,
  mdiPlusCircle,
  mdiAccountSearch
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import S2Button from "@/components/S2Button.vue";

export default {
  components: {
    StatsCard,
    AnimatedNumber,
    S2Button,
    SvgIcon,
    NavTabsCard
  },
  computed: {
    totalPatients() {
      return 100;
    },
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
  data() {
    return {
      currentSort: "lastName",
      currentSortOrder: "asc",
      patientSearchText: "",
      pagination: {
        perPage: 10,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0
      },
      searchQuery: "",
      propsToSearch: ["lastName", "firstName", "street", "city", "state"],
      tableData: [],
      searchedData: [],
      fuseSearch: null,
      mdiArrowRightDropCircle: mdiArrowRightDropCircle,
      mdiPlusCircle: mdiPlusCircle,
      mdiAccountSearch: mdiAccountSearch
    };
  },
  methods: {
    handleNewPatientClick() {
      this.$router.push({
        name: "Add Patient",
        params: { returnTo: "Care Manager Portal" }
      });
    },
    handleSearchForPatient() {}
  }
};
</script>

<style></style>
