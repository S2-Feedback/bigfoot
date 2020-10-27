const DashboardLayout = () =>
  import("@/pages/Dashboard/Layout/DashboardLayout.vue");
const Patients = () => import("@/pages/Dashboard/Patients.vue");
const PatientView = () => import("@/pages/Dashboard/PatientView.vue");
const AddPatient = () =>
  import("@/pages/Dashboard/Forms/AddPatient/AddPatient.vue");
const MakeCall = () => import("@/pages/Dashboard/MakeCall.vue");
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
      },
      {
        path: "addPatient",
        name: "Add Patient",
        props: true,
        component: AddPatient
      },
      {
        path: "makeACall",
        name: "Make A Call",
        props: true,
        component: MakeCall
      }
    ]
  }
];

export default routes;
