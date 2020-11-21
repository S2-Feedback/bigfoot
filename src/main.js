import Vue from "vue";

import DashboardPlugin from "./material-dashboard";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsmobile from "@/aws-exports";
import router from "../src/routes/routes";
import Loading from "vue-loading-overlay";
import { runQuery } from "./apis/gql.js";
import {seedData} from '../src/graphql/custom/seedData'
import "vue-loading-overlay/dist/vue-loading.css";




Amplify.configure(awsmobile);
Vue.use(AmplifyPlugin, AmplifyModules);
// Plugins
import App from "./App.vue";
import Chartist from "chartist";

Vue.use(DashboardPlugin);
Vue.use(router);
Vue.use(Loading);
// global library setup
Vue.prototype.$Chartist = Chartist;
Vue.prototype.$runQuery = runQuery;
/* eslint-disable no-new */

seedData()
new Vue({
  el: "#app",
  render: h => h(App),
  router
});
