<script setup>
  import { onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, {EffectCoverflow, Navigation, Pagination, loop} from 'swiper/core';
  import 'swiper/swiper.min.css';

  SwiperCore.use([EffectCoverflow, Navigation, Pagination, loop]);

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
  <div class="sub-visual" style="background-image: url(https://jihoosoft.com/assets/images/sub/visual_2.jpg)">
    <div class="sub-visual__wrapper container">
      <h1 class="sub-visual__title">NoligoGames</h1>
    </div>
  </div>
  <main class="main" id="contents">
    <!------------------------------------------------------ 노리고 홈페이지 첫 소개 부분 -------------------------------------------------------->
    <section class="section ref fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fifthPage" style="height: 1025px;">
      <div class="fp-tableCell" style="height: 937px;">
        <div class="container">
        <div class="text-center mb-12">
          <h1 class="common-title--h1">NOLI.GO</h1>
          <p class="common-text--18 text-gray-6 font-weight-light mt-2">
            노리고 사이트는 국민 마인크래프트 커뮤니티를 목표로 제작되었습니다.<br class="d-none d-lg-block">
            초보자들도 간편하게 모드, 맵, 텍스쳐를 설치 가능하도록 제공 하며, 여러 창작물을 올려 커뮤니티를 제공 합니다.
          </p>
        </div>
        <div class="platform-swiper">
            <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                <swiper :slides-per-view="1" :navigation="true" :pagination="true" :loop="true" :effect="'coverflow'" :coverflowEffect="{slideShadows: true}">
                    <swiper-slide class="swiper-slide-padding">
                      <img :src="require('@/assets/img/NoligoGames/Main.png')">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide-padding">
                      <img :src="require('@/assets/img/NoligoGames/List.png')">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide-padding">
                      <img :src="require('@/assets/img/NoligoGames/Detail.png')">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide-padding">
                      <img :src="require('@/assets/img/NoligoGames/youtube.png')">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
      </div>
    </div>
    </section>
    <!------------------------------------------------------- NOLI.GO 장점 소개 부분 ------------------------------------------------------------->
    <section class="section py-15 py-lg-20" style="background-color: rgb(1 80 188 / 3%);">
      <div class="container">
        <div class="text-center mb-12">
          <h1 class="common-title--h1">NOLI.GO</h1>
          <p class="common-text--18 text-gray-6 font-weight-light mt-2">
            노리고에서는 마인크래프트 자동화 프로그램과<br class="d-none d-lg-block">
            모드, 맵을 관리하고 추가 설치하기 쉽도록 배포하는 시스템을 제공하고 있습니다.
          </p>
        </div>
        <div class="row mx-3 mx-xl-n5 mt-8 mt-lg-14 layout-proc hr-proc wow fadeInDown ScrollContainer" style="visibility: visible; animation-name: fadeInDown;">
          <div class="col-12 col-md-3 p-3 p-xl-5 proc-item--1">
            <h3 class="rounded-title">실시간 모드 업데이트</h3>
            <div class="v-line"></div>
            <div class="text-box--1">
              설치 프로그램 
            </div>
            <div class="v-arrow"></div>
            <div class="text-box--2">
              · 설치 후 각 버전별 지속적 업데이트 <br>
              · 필요한 모드를 요청하여 업데이트 <br>
              · 지속적인 업데이트로 효율성을 높임 <br>
            </div>
          </div>
          <div class="col-12 col-md-3 p-3 p-xl-5 proc-item--2">
            <h3 class="rounded-title">설치</h3>
            <div class="v-line"></div>
            <div class="text-box--1">
              불필요한 모드 설치를<br>
              줄인 효율적인 노리고 프로그램
            </div>
            <div class="v-arrow"></div>
            <div class="text-box--2">
              · 노리고 프로그램으로 자유롭게 설치<br>
              · 맵, 텍스쳐(예정), 모드팩<br>
            </div>
          </div>
          <div class="col-12 col-md-3 p-3 p-xl-5 proc-item--3">
            <h3 class="rounded-title">빠른 설치</h3>
            <div class="v-line"></div>
            <div class="text-box--1">
              다운로드 받은 파일을<br>
              다시 받지 않고 PC에서 파일을 관리
            </div>
            <div class="v-arrow"></div>
            <div class="text-box--2">
              · 최초 모드나 각 모드는 다운로드 필요<br>
              · 다운로드가 편리하게 가이드를 제공
            </div>
          </div>
          <div class="col-12 col-md-3 p-3 p-xl-5 proc-item--4">
            <h3 class="rounded-title">나만의 모드팩 만들기</h3>
            <div class="v-line"></div>
            <div class="text-box--1">
              여러 모드를 조합하여<br>
              나만의 모드팩 만들기
            </div>
            <div class="v-arrow"></div>
            <div class="text-box--2">
              · 높은 자율성<br>
              · 모드팩을 간단히 설치<br>
              · 나만의 모드팩을 공유하여 다른 유저와 소통 가능
            </div>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------ 노리고 프로그램 설치 부분 -------------------------------------------------------->
    <section class="section fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fifthPage" style="height: 1025px;">
      <div class="fp-tableCell" style="height: 937px;">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1">NOLI.GO INSTALLATION</h1>
          </div>
          <div class="platform-swiper">
            <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
              <swiper :slides-per-view="1" :navigation="true" :pagination="true" :loop="true" :effect="'coverflow'" :coverflowEffect="{slideShadows: true}">
                  <swiper-slide class="swiper-slide-padding" v-for="i in 5" :key="i">
                    <div class="swiper-slide-content">
                      <img :src="require(`@/assets/img/NoligoGames/Installation_${i}.png`)">
                    </div>
                  </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>