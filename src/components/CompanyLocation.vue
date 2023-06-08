<script setup>
import { onMounted, ref } from 'vue';

const map = ref(null);

// const loadScript = () => {
//   const script = document.createElement('script');
//   script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=e04e828f6f53f008f3abdc6af4abaeba&autload=false';
//   script.onload = loadMap;
//   document.head.appendChild(script);
// };

// const loadMap = () => {
//   const container = document.getElementById('map');
//   const options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3
//   };

//   map.value = new kakao.maps.Map(container, options);
//   loadMarker();
// };

// const loadMarker = () => {
//   const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
//   const marker = new kakao.maps.Marker({ position: markerPosition });
//   marker.setMap(map.value);
// };

// onMounted(() => {
//   if (window.kakao && window.kakao.maps) {
//     loadMap();
//   } else {
//     loadScript();
//   }
// });
</script>

<template>
    <!------------------------------ 중단 메인 이미지 부분 ------------------------------------->
    <div class="sub-visual" style="background-image: url(https://jihoosoft.com/assets/images/sub/visual_1.jpg)">
      <div class="sub-visual__wrapper container">
        <h1 class="sub-visual__title">About</h1>
      </div>
    </div>
    <!--------------------------------- 메인 부분 ------------------------------------>
    <main class="main pt-15 pb-20 pt-lg-25 pb-lg-40" id="contents">
      <section class="section mb-5 mb-lg-10">
        <div class="container text-center">
          <h1 class="common-title--h1 text-gray-2 font-weight-bold">오시는 길</h1>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <p class="common-text--24 text-gray-3 text-center mb-5 wow fadeInUp">다산중앙로 19번길 25-23 (다산진건 블루웨일 지식산업센터 2차) 445호</p>
        </div>
        <div id="map"></div>
      </section>
    </main>
</template>