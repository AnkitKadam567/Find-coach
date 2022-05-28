import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "./pages/PageNotFound.vue";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachList from "./pages/coaches/CoachList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestReceived from "./pages/requests/RequestReceived.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
    {
      path: "/coaches/:id",
      props: true,
      component: CoachDetails,
      children: [{ path: "contact", component: ContactCoach }],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: PageNotFound },
  ],
});

export default router;
