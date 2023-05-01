import Vue from "vue";
import VueRouter from "vue-router";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails.vue";
import MovieCreate from "./components/MovieCreate.vue";
import MovieEdit from "./components/MovieEdit.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "list",
      component: MoviesList,
    },
    {
      path: "/movie/create",
      name: "create",
      component: MovieCreate,
    },
    {
      path: "/movie/:id",
      name: "details",
      component: MovieDetails,
    },
    {
      path: "/movie/:id/edit",
      name: "edit",
      component: MovieEdit,
    },
  ],
});

export default router;
