<script setup>
  /**
	 * file : EvnetNoligo.vue
	 * 설명 : 이벤트 노리고
	 */
</script>
<template>
    <!----------------------------------------------------- 중단 메인 이미지 부분 ----------------------------------------------------->
    <div class="sub-visual Service">
      <div class="sub-visual__wrapper container">
        <h1 class="sub-visual__title">EvnetNoligo</h1>
      </div>
    </div>
    <main class="main" id="contents">
      <!-------------------------------------------------- 첫 앱 소개 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20" style="background-color:#f9f9f9;">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">이벤트 노리고</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              인기 브랜드 이벤트 정보를
              <span class="text-color-1 font-weight-bold"> [이벤트 노리고]에서 </span>
              <br class="d-none d-lg-block">
              한 자리에 모아 봤습니다
            </p>
          </div>
          <div class="text-center">
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/Loading.jpg')" alt="" class="AppImg">
            </div>
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/Main.jpg')" alt="" class="AppImg">
            </div>
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/EventDetail.jpg')" alt="" class="AppImg">
            </div>
          </div>
        </div>
      </section>
      <!-------------------------------------------------- 알림 설정 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">알림 설정</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              이벤트를 한 자리에 모으는 것만으로는 부족하죠,
              <span class="text-color-1 font-weight-bold" data-aos="fade-up">브랜드별 알람 </span>
              기능을 사용 해보세요
            </p>
          </div>
          <div class="text-center">
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/Notification_1.jpg')" alt="" class="AppImg" data-aos="fade-right">
            </div>
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/Notification_2.jpg')" alt="" class="AppImg" data-aos="fade-left">
            </div>
          </div>
        </div>
      </section>
      <!-------------------------------------------------- 즐겨 찾기 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20" style="background-color:#f9f9f9;">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">즐겨 찾기</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              관심 있는 이벤트를
              <span class="text-color-1 font-weight-bold" data-aos="fade-up"> 즐겨 찾기를 통해</span>
              <br class="d-none d-lg-block">
              한 눈에 확인 해보세요
            </p>
          </div>
          <div class="text-center">
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/BookMark.jpg')" alt="" class="AppImg" data-aos="fade-up">
              <div>이벤트의 <span style="color:rgb(229 229 25);">★</span> 눌러 즐겨찾기에 추가한 모습</div>
            </div>
          </div>
        </div>
      </section>
      <!-------------------------------------------------- 카테고리 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">카테고리</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              관심있는 이벤트를
              <span class="text-color-1 font-weight-bold" data-aos="fade-up"> 카테고리를 통해 </span> 손 쉽게 찾아 보세요
            </p>
          </div>
          <div class="text-center">
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/Category_1.jpg')" alt="" class="AppImg" data-aos="fade-up">
            </div>
            <div class="image-container">
              <img :src="require('@/assets/img/EventNoligo/Category_2.jpg')" alt="" class="AppImg" data-aos="fade-up">
            </div>
          </div>
        </div>
      </section>
      <!-------------------------------------------------- 마지막(설정) 부분 ----------------------------------------------------------->
      <section class="section py-15 py-lg-20">
        <div class="container">
          <div class="text-center mb-12">
            <h1 class="common-title--h1 text-gray-2 my-3">설정</h1>
            <p class="common-text--18 font-weight-light text-gray-3">
              다양한 설정과 문의, 업체 추가 요청으로
              <span class="text-color-1 font-weight-bold" data-aos="fade-up">이벤트 노리고를</span> 이용 해 보세요
            </p>
          </div>
          <div class="text-center">
            <div style="padding-bottom: 50px;"> 
              <img :src="require('@/assets/img/EventNoligo/Setting.jpg')" alt="" class="AppImg" data-aos="fade-up">
            </div>
            <div class="image-container" style="padding: 10px;">
              <a href="https://apps.apple.com/it/app/%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%85%B8%EB%A6%AC%EA%B3%A0-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EB%85%B8%EB%A6%AC%EB%8B%A4/id1546579729" target="_blank" class="link">
                <img :src="require('@/assets/img/EventNoligo/IOS.png')" alt="" data-aos="fade-right">
              </a>
            </div>
            <div class="image-container" style="padding: 10px;">
              <a href="https://play.google.com/store/apps/details?id=org.nativescript.ecboard&hl=ko&gl=US" target="_blank" class="link">
                <img :src="require('@/assets/img/EventNoligo/Android.png')" alt="" data-aos="fade-left">
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>