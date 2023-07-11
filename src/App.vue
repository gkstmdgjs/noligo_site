<template>
  <div id="app">
    <div class="sub-body">
      <SiteNavigation></SiteNavigation>
      <router-view></router-view>
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script setup>
  import SiteNavigation from '@/components/Common/SiteNavigation'
  import SiteFooter from '@/components/Common/SiteFooter'
  import { onMounted } from 'vue';
  import SwiperCore, { Navigation, Pagination, loop } from 'swiper/core';
  SwiperCore.use([Navigation, Pagination, loop]);
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  onMounted(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  });
</script>
<style>
    @import url("//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css");
    @import "@/assets/css/common.min.css";
    @import "@/assets/css/main.min.css";
</style> 