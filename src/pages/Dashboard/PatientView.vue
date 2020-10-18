<template>
  <div class='md-layout'>
    <div class="md-layout-item md-size-75 mx-auto" style="margin-bottom:30px;">
        <md-button class="md-success controlHeight" @click="handleBackToPatients" style="display:flex; flex-direction:column;"><svg-icon type="mdi" :path="mdiArrowLeftCircle "></svg-icon> <span>Back To Patients</span></md-button>
    </div>  
    <div class="md-layout-item md-size-75 mx-auto">
      <md-card style="box-shadow: black 0px 0px 16px -7px">
        <md-card-header class="md-card-header-text md-card-header-blue" style='display:flex; justify-content:space-between;'>
          <div class="card-text" style="box-shadow:black 0px 0px 12px -4px">
            <div style='display:flex; align-items:flex-end; flex-direction:column;'>
              <h3 class="title" style="width:300px;">{{patientInfo.lastName}}, {{patientInfo.firstName}}</h3>              
              <h5 class="title" style="width:300px;">{{patientInfo.street}} {{patientInfo.city}}, {{patientInfo.state}}</h5>              
            </div>
          </div>
          <md-button class="md-success controlHeight" style="display:flex; flex-direction:column;"><svg-icon type="mdi" :path="mdiPlusCircle"></svg-icon> <span>New Assessment</span></md-button>
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
              <md-table-cell md-label="Start Date" md-sort-by="startDate">{{item.startDate}}</md-table-cell>
              <md-table-cell md-label="Caregiver" md-sort-by="caregiver">{{item.caregiver}}</md-table-cell>
              <md-table-cell md-label="Status"  md-sort-by="status">{{ item.status }}</md-table-cell>
              <md-table-cell md-label="">
                <md-button
                  class="md-just-icon md-success md-simple"
                  @click.native="handlePatientViewClick(item)"
                >
                <svg-icon type="mdi" :path="mdiArrowRightDropCircle"></svg-icon>                  
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
import Swal from "sweetalert2";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowRightDropCircle,mdiPlusCircle,mdiArrowLeftCircle  } from '@mdi/js'


export default {
    name:'PatientView',
    components: {
      Pagination,
      SvgIcon
    },
    data(){
      return (
          {
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
            mdiArrowRightDropCircle:mdiArrowRightDropCircle,
            mdiPlusCircle: mdiPlusCircle,
            mdiArrowLeftCircle:mdiArrowLeftCircle 

          }        
      )
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
        return this.searchedData.length > 0 ? this.searchedData.length : this.tableData.length;
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
      handleBackToPatients(){
        this.$router.push({name:'Patients'})  
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
      handlePatientViewClick(e){
        this.$router.push({name:'Patient View', params:{'patientInfo':e}})
      }
    },    
    props:{
        patientInfo:{}
    },
    mounted() {
      this.fuseSearch = new Fuse(this.tableData, {
        keys: ["startDate", "caregiver", "status"],
        threshold: 0.3
      });
    }
};
</script>
<style>
.md-button .md-ripple {
    padding:0px !important;
}
.md-button-content{
    display:flex !important;
    flex-direction: row;
    align-items: flex-end !important;
}
.controlHeight{
    height:35px;
    margin-top:15px !important;
    margin-right:0px !important; 
    padding:5px;
}

</style>





