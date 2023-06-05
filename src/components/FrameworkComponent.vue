<script setup>
  import { onMounted } from 'vue';
   
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // 스크롤 이벤트
    function handleScroll() {
      const elements = document.querySelectorAll('.ScrollContainer');

      elements.forEach((element) => {
        const bottom_of_element = element.offsetTop + element.offsetHeight / 2;
        const bottom_of_window = window.scrollY + window.innerHeight;

        if (bottom_of_window > bottom_of_element) {
          element.style.transition = 'opacity 700ms';
          element.style.opacity = '1';
        }
        if (bottom_of_window < bottom_of_element) {
          element.style.transition = 'opacity 700ms';
          element.style.opacity = '0';
        }
      });
    }
  });
</script>
<template>
    <!----------------------------------------------------- 중단 메인 이미지 부분 ----------------------------------------------------->
    <div class="sub-visual" style="background-image: url(https://jihoosoft.com/assets/images/sub/visual_4.jpg)">
      <div class="sub-visual__wrapper container">
        <h1 class="sub-visual__title">Platform</h1>
      </div>
    </div>
    <main class="main" id="contents">
      <!-------------------------------------------------- 첫 이미지 부분(솔루션 소개) ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">플랫폼 정의</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              HS 솔루션은 코딩을 최소화를 중점으로 
              <span class="text-color-1 font-weight-bold">복잡도가 낮음 화면은 코딩없이 Low Code를 지향하며</span>
              <br class="d-none d-lg-block">
              저렴한 가격정챙으로 초기 투자의 부담이 적은 합리적인 플랫폼 입니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/Framework/FirstIntroduction.png')" alt="" class="ScrollContainer">
          </div>
        </div>
      </section>
      <!-------------------------------------------------- DEvice 이미지 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">공통 설계 최소화 및 표준화</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              웹, 모바일 웹, 모바일 앱 등 
              <span class="text-color-1 font-weight-bold ScrollContainer">다양한 플랫폼에서 제공 가능하도록 설계</span>
              있는 플랫폼 입니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/Framework/DevicePlayform.png')" alt="" class="ScrollContainer">
          </div>
        </div>
      </section>
      <!-------------------------------------------------- 서버 아키텍처 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">서버 아키텍처</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              Client > NOLIGO Frame / NOLIGO UI > DB Server 각 단계별로 
              <span class="text-color-1 font-weight-bold ScrollContainer">시스템의 운영 효율과 사용상의 편의성을 높일 수 있는</span>
              <br class="d-none d-lg-block">
              제반 Low Code 요소 들이 탑재되어 있습니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/Framework/Interlock.png')" alt="" class="ScrollContainer">
          </div>
        </div>
      </section>
      <!-------------------------------------------------- 마지막(사용법) 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">HS 솔루션 주요 기능</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              HS 솔루션은 개발의 
              <span class="text-color-1 font-weight-bold ScrollContainer">편의성 및 운영의 편의성을 중점</span>으로 다양한 플랫폼에서 제공되며
              <br class="d-none d-lg-block">
              다양한 부가 기능을 제공합니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/Framework/Flow.png')" alt="" class="ScrollContainer">
          </div>
        </div>
      </section>
    </main>
</template>