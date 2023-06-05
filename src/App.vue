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

</script>
<style>
    @import "@/css/main.min.css";
    @import "@/css/common.min.css";
</style> 