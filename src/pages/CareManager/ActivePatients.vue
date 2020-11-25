<template>
    <div>
        <md-table
            :value="queriedData"
            :md-sort.sync="currentSort"
            :md-sort-order.sync="currentSortOrder"
            :md-sort-fn="customSort"
            class="paginated-table table-striped table-hover"
            style="min-height:300px; align-items:flex-start; mt-15;"
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
            <md-table-cell md-label="Last Name" md-sort-by="lastName">{{item.patient.user.lastName}}</md-table-cell>
            <md-table-cell md-label="First Name" md-sort-by="firstName">{{ item.patient.user.firstName }}</md-table-cell
            >
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
    </div>
</template>

<script>
import { selectAllPatientsWithStatus } from '../../graphql/custom/patient'
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowRightDropCircle, mdiPlusCircle } from "@mdi/js";
export default {
    name:'ActivePatients',
    components:{
        SvgIcon
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
        
    data(){
        return {
            tableData: [],
            searchedData: [],
            fuseSearch: null,
            searchQuery: "",
            mdiArrowRightDropCircle: mdiArrowRightDropCircle,            
            mdiPlusCircle: mdiPlusCircle,
            currentSort: "lastName",
            currentSortOrder: "asc",
            pagination: {
                perPage: 10,
                currentPage: 1,
                perPageOptions: [5, 10, 25, 50],
                total: 0
            },
        }
    },
    methods:{
        async getAllPatientsWithStatus(){
            return await this.$runQuery(selectAllPatientsWithStatus).catch(err=>{console.log(err)})
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
    },
    async mounted(){
        this.tableData = await this.getAllPatientsWithStatus()
        this.tableData = this.tableData.data.listPatientCharts.items
        console.log('what did you get for the shit', this.tableData)
    }
    


}
</script>

<style>

</style>