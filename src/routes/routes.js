import DashboardLayout from "@/pages/Dashboard/Layout/DashboardLayout.vue";
import HelloWorld from "@/pages/Dashboard/HelloWorld.vue";


const routes = [
  {
    path: "/",
    redirect: "/helloworld",
    name: "Home"
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "helloworld",
        name: "Hello World",
        components: { default: HelloWorld }
      }
    ]
  }
];

export default routes;
