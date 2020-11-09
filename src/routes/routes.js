const DashboardLayout = () => import("@/pages/Dashboard/Layout/DashboardLayout.vue");
const Patients = () => import("@/pages/Dashboard/Patients.vue");

const PatientView = () => import("@/views/PatientView.vue");
const CareManView = () => import("@/views/CareManView.vue");
const PCPView = () => import("@/views/PCPView.vue");
const PsychView = () => import("@/views/PsychView.vue");

const AddPatient = () => import("@/pages/Dashboard/Forms/AddPatient/AddPatient.vue");
const MakeCall = () => import("@/pages/Dashboard/MakeCall.vue");
const Profile = () => import("@/pages/Profile.vue");

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
          path: "/patient",
          name: "Patient Portal",
          props: true,
          component: PatientView ,
          meta: { requiresAuth: true }
        },
        {
          path: "/careManager",
          name: "Care Manager Portal",
          props: true,
          component: CareManView ,
          meta: { requiresAuth: true }
        },
        {
          path: "/pcp",
          name: "Primary Care Portal",
          props: true,
          component: PCPView ,
          meta: { requiresAuth: true }
        },
        {
          path: "/psych",
          name: "Psychiatric Portal",
          props: true,
          component: PsychView ,
          meta: { requiresAuth: true }
        },
        {
          path: "/profile",
          name: "Profile",
          props: true,
          component: Profile ,
          meta: { requiresAuth: true }
        },
        {
          path: "/patients",
          name: "Patients",
          props: true,
          components: { default: Patients },
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
