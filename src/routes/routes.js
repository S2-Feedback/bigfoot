const DashboardLayout = () =>
  import("@/pages/Dashboard/Layout/DashboardLayout.vue");
const Patients = () => import("@/pages/Dashboard/Patients.vue");
const PatientView = () => import("@/pages/Dashboard/PatientView.vue");
const AddPatient = () =>
  import("@/pages/Dashboard/Forms/AddPatient/AddPatient.vue");
const MakeCall = () => import("@/pages/Dashboard/MakeCall.vue");
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      component: DashboardLayout,
      children: [
        {
          path: "/patients",
          name: "Patients",
          props: true,
          components: { default: Patients },
          meta: { requiresAuth: true }
        },
        {
          path: "patientView",
          name: "Patient View",
          props: true,
          component: PatientView,
          meta: { requiresAuth: true }
        },
        {
          path: "addPatient",
          name: "Add Patient",
          props: true,
          component: AddPatient,
          meta: { requiresAuth: true }
        },
        {
          path: "makeACall",
          name: "Make A Call",
          props: true,
          component: MakeCall,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
});
router.beforeResolve(async (to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   try {
  //     await Vue.prototype.$Amplify.Auth.currentAuthenticatedUser();
  //     next();
  //   } catch (e) {
  //     next({
  //       path: "/",
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     });
  //   }
  // }
  next();
});
export default router;
