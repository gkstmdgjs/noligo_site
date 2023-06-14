import { createWebHistory, createRouter } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import HSsolutionNews from "@/components/HSsolutionNews.vue";
import HSsolutionNewsDetails from "@/components/HSsolutionNewsDetails.vue";
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
    path: "/HSsolutionNews",
    name: "HSsolutionNews",
    component: HSsolutionNews,
  },
  {
    path: "/HSsolutionNewsDetails",
    name: "HSsolutionNewsDetails",
    component: HSsolutionNewsDetails,
    props: true
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

const scrollBehavior = (to, savedPosition) => {
  if (!!to.query.page) {
    // 페이징 처리 시엔 기본 스크롤 동작 유지
    return savedPosition;
  }else{
    // 그 외 페이지 이동 시, 맨 위로 스크롤
    return { top: 0 };
  }
};

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior
});

export default router;