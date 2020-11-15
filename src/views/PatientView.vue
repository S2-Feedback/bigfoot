<template>
    <div class="dflex-center-col">
      <div class="md-layout dflex-center-row">
        <div class="md-layout-item md-medium-size-33 md-xsmall-size-33 dflex-center-row">
            <md-card style="box-shadow: black 0px 0px 16px -7px; margin-top:100px; width:95%;">
              <md-card-header
                class="md-card-header-text md-card-header-blue"
                style="margin-bottom:30px; margin:none !important;"
              >
                <div
                  class="card-text"
                  style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
                >
                  <div style="display:flex; align-items:flex-end;">
                    <md-icon style="margin:0px;">assessment</md-icon>
                    <h4 class="title">Primary Care</h4>
                  </div>
                </div>
              </md-card-header>
              <md-card-content style="padding-right:16px; padding-left:16px; padding-top:0px; padding-bottom:24px;">


              </md-card-content>
              <md-card-actions md-alignment="space-between">
              

              </md-card-actions>              
            </md-card>
        </div>
        <div class="md-layout-item md-medium-size-33 md-xsmall-size-33 dflex-center-row">
            <md-card style="box-shadow: black 0px 0px 16px -7px; margin-top:100px; width:95%;">
              <md-card-header
                class="md-card-header-text md-card-header-blue"
                style="margin-bottom:30px; margin:none !important;"
              >
                <div
                  class="card-text"
                  style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
                >
                  <div style="display:flex; align-items:flex-end; width:100%;">
                    <md-icon style="margin:0px;">assessment</md-icon>
                    <h4 class="title">Care Manager</h4>
                  </div>
                </div>
              </md-card-header>
              <md-card-content style="padding-right:16px; padding-left:16px; padding-top:0px; padding-bottom:24px;">


              </md-card-content>
              <md-card-actions md-alignment="space-between">
              

              </md-card-actions>              
            </md-card>
        </div>
        <div class="md-layout-item md-medium-size-33 md-xsmall-size-33 dflex-center-row">
            <md-card style="box-shadow: black 0px 0px 16px -7px; margin-top:100px; width:95%;">
              <md-card-header
                class="md-card-header-text md-card-header-blue"
                style="margin-bottom:30px; margin:none !important;"
              >
                <div
                  class="card-text"
                  style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
                >
                  <div style="display:flex; align-items:flex-end;">
                    <md-icon style="margin:0px;">assessment</md-icon>
                    <h4 class="title">Psychiatric</h4>
                  </div>
                </div>
              </md-card-header>
              <md-card-content style="padding-right:16px; padding-left:16px; padding-top:0px; padding-bottom:24px;">


              </md-card-content>
              <md-card-actions md-alignment="space-between">
              

              </md-card-actions>              
            </md-card>
        </div>

      </div>

      <div class="md-layout dflex-center-row">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 dflex-center-row">
            <md-card style="box-shadow: black 0px 0px 16px -7px; margin-top:100px; width:95%;">
              <md-card-header
                class="md-card-header-text md-card-header-blue"
                style="display:flex; justify-content:space-between; margin-bottom:30px; margin:none !important;"
              >
                <div
                  class="card-text"
                  style="box-shadow:black 0px 0px 12px -4px; display: flex; align-items:center;"
                >
                  <div style="display:flex; align-items:flex-end; width:330px;">
                    <md-icon style="margin:0px;">assessment</md-icon>
                    <h4 class="title">Patient History</h4>
                  </div>
                </div>
              </md-card-header>
              <md-card-content style="padding-right:16px; padding-left:16px; padding-top:0px; padding-bottom:24px;">
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
                      <md-table-cell md-label="Date Of Visit" md-sort-by="dateOfVisit">{{
                        item.patient_lastName
                      }}</md-table-cell>
                      <md-table-cell md-label="Assessement Status" md-sort-by="firstName">{{
                        item.patient_firstName
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
      
    </div>
</template>

<script>

import {
  StatsCard,
  AnimatedNumber,
  Pagination,
} from "@/components";
import { mdiFolderTextOutline } from "@mdi/js";
export default {
computed: {
    totalPatients(){
      return 100
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
  components:{
    Pagination
  },
  data(){
    return {
      mdiFolderTextOutline:mdiFolderTextOutline,
      currentSort: "lastName",
      currentSortOrder: "asc",
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
    }
  }, 
  methods:{
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;
        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
  }
}
</script>

<style>

</style>