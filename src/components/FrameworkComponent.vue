<script setup>
  /**
	 * file : FrameworkComponent.vue
	 * 설명 : 플랫폼
	 */
</script>
<template>
    <!----------------------------------------------------- 중단 메인 이미지 부분 ----------------------------------------------------->
    <div class="sub-visual Platform">
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
            <img :src="require('@/assets/img/Framework/FirstIntroduction.png')">
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
              <span class="text-color-1 font-weight-bold" data-aos="fade-up">다양한 플랫폼에서 제공 가능하도록 설계</span>
              있는 플랫폼 입니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/img/Framework/DevicePlayform.png')" data-aos="fade-up">
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
              <span class="text-color-1 font-weight-bold" data-aos="fade-up">시스템의 운영 효율과 사용자의 편의성을 높일 수 있는</span>
              <br class="d-none d-lg-block">
              제반 Low Code 요소 들이 탑재되어 있습니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/img/Framework/Interlock.png')" data-aos="fade-up">
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
              <span class="text-color-1 font-weight-bold" data-aos="fade-up">편의성 및 운영을 중점</span>으로 다양한 플랫폼에서 제공되며
              <br class="d-none d-lg-block">
              다양한 부가 기능을 제공합니다.
            </p>
          </div>
          <div class="text-center">
            <img :src="require('@/assets/img/Framework/Flow.png')" data-aos="fade-up">
          </div>
        </div>
      </section>
    </main>
</template>