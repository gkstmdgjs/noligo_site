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
    @import url("//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css");
    @import "@/assets/css/common.min.css";
    @import "@/assets/css/main.min.css";
</style> 