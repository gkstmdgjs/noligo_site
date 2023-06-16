<script setup>
	/**
	 * file : CompanyLocation.vue
	 * 설명 : 오시는 길
	 */
  import { onMounted } from 'vue';

  onMounted(() => {
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.onload = () => kakao.maps.load(initMap);
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e04e828f6f53f008f3abdc6af4abaeba&libraries=services';
      document.head.appendChild(script);
    }
  });

  function initMap() {
    const container = document.getElementById('map-1');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소 설정 하기
    geocoder.addressSearch('다산중앙로 19번길 25-23', function(result, status) {
      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시
      var marker = new kakao.maps.Marker({
          map: map,
          position: coords
      });

      // 인포윈도우로 장소에 대한 설명을 표시
      var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">HS 솔루션</div>'
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동
      map.setCenter(coords);
      } 
    });
  }
</script>

<template>
    <!------------------------------ 중단 메인 이미지 부분 ------------------------------------->
    <div class="sub-visual About">
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
          <div id="map-1" class="map wow fadeInUp"></div>
        </div>
      </section>
    </main>
</template>
