const DashboardLayout = () => import("@/pages/Dashboard/Layout/DashboardLayout.vue")
const Patients = () => import("@/pages/Dashboard/Patients.vue")
const PatientView = () => import("@/pages/Dashboard/PatientView.vue")

const routes = [
  {
    path: "/",
    redirect: "/patients",
    name: "Home"
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "patients",
        name: "Patients",
        props: true,
        components: { default: Patients }
      },
      {
        path: "patientView",
        name: "Patient View",
        props: true,
        component: PatientView
      }      
    ]
  }
];

export default routes;
