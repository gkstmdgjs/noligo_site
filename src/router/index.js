import { createWebHistory, createRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import ContaactUs from "@/components/ContaactUs.vue";
import FrameworkComponent from "@/components/FrameworkComponent.vue";
import EvnetNoligo from "@/components/EvnetNoligo.vue";
import NoligoGames from "@/components/NoligoGames.vue";
import CompanyLocation from "@/components/CompanyLocation.vue";

const routes = [
  {
    path: "/",
    name: "MainComponent",
    component: MainComponent,
  },
  {
    path: "/CompanyLocation",
    name: "CompanyLocation",
    component: CompanyLocation,
  },
  {
    path: "/FrameworkComponent",
    name: "FrameworkComponent",
    component: FrameworkComponent,
  },
  {
    path: "/EvnetNoligo",
    name: "EvnetNoligo",
    component: EvnetNoligo,
  },
  {
    path: "/NoligoGames",
    name: "NoligoGames",
    component: NoligoGames,
  },
  {
    path: "/ContaactUs",
    name: "ContaactUs",
    component: ContaactUs,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;