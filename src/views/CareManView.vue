<template>
  <div class="dflex-center-col">
    <div class="md-layout dflex-center-row">
      <div
        class="md-layout-item md-medium-size-40 md-xsmall-size-100 md-size-25"
      >
        <stats-card
          header-color="danger"
          style="box-shadow: black 0px 0px 16px -7px;"
        >
          <template slot="header">
            <div class="card-icon">
              <i class="fa fa-exclamation-circle"></i>
            </div>
            <p class="category">Flagged As Urgent</p>
            <h3 class="title">
              <animated-number :value="75"></animated-number>
            </h3>
            <div class="dflex-center-row mt-15">
              <md-button class="md-primary md-simple"
                >View Urgent Items</md-button
              >
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-10 md-xsmall-size-100 md-size-25"
      ></div>

      <div
        class="md-layout-item md-medium-size-40 md-xsmall-size-100 md-size-25"
      >
        <stats-card
          header-color="rose"
          style="box-shadow: black 0px 0px 16px -7px;"
        >
          <template slot="header">
            <div class="card-icon">
              <i class="fa fa-list"></i>
            </div>
            <p class="category">Messages</p>
            <h3 class="title">
              <animated-number :value="totalPatients"></animated-number>
            </h3>
            <div class="dflex-center-row mt-15">
              <md-button class="md-primary md-simple">View Messages</md-button>
            </div>
          </template>
        </stats-card>
      </div>
    </div>

    <md-card
      style="box-shadow: black 0px 0px 16px -7px; margin-top:50px; width:90%;"
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
            <md-tabs class="md-primary" md-alignment="left">
              <md-tab
                id="tab-home"
                :md-label="`Active Patients - ${this.activePatientCount}`"
              >
                <ActivePatients></ActivePatients>
              </md-tab>

              <md-tab
                id="tab-pages"
                :md-label="`Ready For Psych Review - ${this.psychReviewCount}`"
              >
                
              </md-tab>

              <md-tab
                id="tab-planReview"
                :md-label="`Plan Needing Review - ${this.planReviewCount}`"
              >
                
              </md-tab>

              <md-tab
                id="tab-NewPatients"
                :md-label="`New Patients - ${this.newPatientCount}`"
              >
                
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </md-card-content>
    </md-card>
    <div>
      <div class="md-layout">
        <div class="md-layout-item md-size-90 mx-auto">
          <md-card
            class="md-card-calendar"
            style="box-shadow:black 0px 0px 12px -4px;"
          >
            <md-card-content>
              <fullCalendar
                ref="calendar"
                defaultView="dayGridMonth"
                :plugins="calendarPlugins"
                :events="events"
                :selectable="true"
                @dateClick="() => {}"
                :header="header"
                :buttonIcons="buttonIcons"
                :selectHelper="true"
                :editable="true"
              />
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard, AnimatedNumber, NavTabsCard } from "@/components";
import ActivePatients from "../pages/CareManager/ActivePatients.vue";
import {
  mdiArrowRightDropCircle,
  mdiPlusCircle,
  mdiAccountSearch
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import S2Button from "@/components/S2Button.vue";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Swal from "sweetalert2";
var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

export default {
  components: {
    StatsCard,
    AnimatedNumber,
    S2Button,
    SvgIcon,
    NavTabsCard,
    FullCalendar,
    ActivePatients
  },
  computed: {
    totalPatients() {
      return 100;
    }
  },
  watch: {
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
      searchQuery: "",
      propsToSearch: ["lastName", "firstName", "street", "city", "state"],
      tableData: [],
      searchedData: [],
      fuseSearch: null,
      mdiArrowRightDropCircle: mdiArrowRightDropCircle,
      mdiPlusCircle: mdiPlusCircle,
      mdiAccountSearch: mdiAccountSearch,
      newPatientCount: 80,
      activePatientCount: 104,
      planReviewCount: 40,
      psychReviewCount: 30,
      calendarPlugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      header: {
        center: "dayGridMonth,timeGridWeek,timeGridDay",
        right: "prev,next,today"
      },
      buttonIcons: {
        close: "fa-times",
        prev: "left-single-arrow",
        next: "right-single-arrow",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
      },
      events: [
        {
          title: "All Day Event",
          start: new Date(y, m, 1),
          className: "event-default"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d - 4, 6, 0),
          allDay: false,
          className: "event-rose"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d + 3, 6, 0),
          allDay: false,
          className: "event-rose"
        },
        {
          title: "Meeting",
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: "event-green"
        },
        {
          title: "Lunch",
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: "event-red"
        },
        {
          title: "Md-pro Launch",
          start: new Date(y, m, d - 2, 12, 0),
          allDay: true,
          className: "event-azure"
        },
        {
          title: "Birthday Party",
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          className: "event-azure"
        },
        {
          title: "Click for Creative Tim",
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: "http://www.creative-tim.com/",
          className: "event-orange"
        },
        {
          title: "Click for Google",
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: "http://www.creative-tim.com/",
          className: "event-orange"
        }
      ]
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
