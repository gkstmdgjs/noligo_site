<script setup>
  import { onMounted } from 'vue';
  import Swiper from 'swiper';

  onMounted(() => {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
  });
</script>
<template>
    <section class="section platform fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fourthPage" style="height: 937px; padding-top: 0px; padding-bottom: 0px;"><div class="fp-tableCell" style="height: 937px;">
        <div class="container">
            <div class="platform-swiper">
                <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div class="swiper-wrapper" style="transform: translate3d(-1400px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="1" style="width: 1400px;">
                        </div>
                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 1400px;">
                            <div class="section-title text-center mb-6 mb-lg-10 mb-xl-14">
                                <h1 class="main-title--h1 text-white">HS 솔루션</h1>
                                <p class="main-text--18 text-gray-a">손쉽게 개발하고 효과적으로 유지 관리 할 수 있는 HS 솔루션</p>
                                <a href="../platform/platform.html" class="read-more type-white" title="더보기">
                                    <span class="text">READ MORE</span>
                                    <span class="ex"></span>
                                </a>
                            </div>
                            <div class="row mx-n2">
                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_2.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">개발 LifeCycle 관리</h3>
                                            <p class="text">분석,설계,개발,배포 단계 Cycle 관리</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_4.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">Smart Client 제공</h3>
                                            <p class="text">UX기반의 편리한 화면 기능 제공</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_3.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">시스템 관리 기능 내장</h3>
                                            <p class="text">사용자, 보안, 권한, 메뉴 관리 기능 제공</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_1.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">개발 표준 제공</h3>
                                            <p class="text">화면, 보고서 개발 Template 제공</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="1" style="width: 1400px;">
                            <div class="section-title text-center mb-6 mb-lg-10 mb-xl-14">
                                <h1 class="main-title--h1 text-white">J.LAMP5</h1>
                                <p class="main-text--18 text-gray-a">오픈 라이선스(Linux, Apache, MariaDB, PHP) 기반 웹/모바일 통합 개발 운영 환경 구성</p>
                                <a href="../platform/lamps.html" class="read-more type-white" title="더보기">
                                    <span class="text">READ MORE</span>
                                    <span class="ex"></span>
                                </a>
                            </div>
                            <div class="row mx-n2">
                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box platform-box--2">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_2.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">인프라 비용 DOWN</h3>
                                            <p class="text">
                                                Linux, Maria DB, Apache로 시스템을<br>
                                                구축하여 별도의 소프트웨어 구매 비용이<br>
                                                발생하지 않음
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box platform-box--2">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_4.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">다양한 디바이스 지원</h3>
                                            <p class="text">
                                                하이브리드 웹앱 구축으로 모바일,<br>
                                                태블릿, PC 등 다양한 디바이스 환경<br>
                                                지원
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box platform-box--2">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_3.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">플랫폼 통합</h3>
                                            <p class="text">
                                                다양한 환경의 기간 시스템을 동일한<br>
                                                플랫폼으로 통합
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-3 p-2">
                                    <div class="platform-box platform-box--2">
                                        <div class="thumb">
                                            <img src="https://jihoosoft.com/assets/images/main/platform_img_2.jpg" alt="">
                                        </div>
                                        <div class="desc">
                                            <h3 class="title">모바일 시스템 개발</h3>
                                            <p class="text">기존 시스템의 DB 활용하여 모바일
                                                시스템 개발 및 운영
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                <button type="button" class="swiper-button-prev" title="이전 슬라이드로 이동" tabindex="0" role="button" aria-label="Previous slide" style="left: 0;transform: translateX(-150%) !important; color: #666"></button>
                <button type="button" class="swiper-button-next" title="다음 슬라이드로 이동" tabindex="0" role="button" aria-label="Next slide" style="right: 0; transform: translateX(150%) !important; color: #666"></button>
            </div>
            <div class="swiper-pagination type-white swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span></div>
        </div>
    </div>
</section>
<section class="section ref fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fifthPage" style="height: 937px; padding-top: 0px; padding-bottom: 0px;"><div class="fp-tableCell" style="height: 937px;">
        <div class="ref-top">
            <div class="container">
                <div class="text-center mb-4">
                    <h1 class="main-title--h1 inanimate">Reference</h1>
                </div>
                <div class="ref-swiper">
                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-multirow">
                        <div class="swiper-wrapper" style="width: 7332px; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                            <div class="swiper-slide swiper-slide-active" style="order: 0; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_1.jpg" alt="">
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-next" style="-webkit-box-ordinal-group: 1; order: 1; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_2.jpg" alt="">
                                </div>
                            </div>
                            <div class="swiper-slide" style="-webkit-box-ordinal-group: 2; order: 2; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_3.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 3; order: 3; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_4.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 4; order: 4; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_5.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 26; order: 26; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_6.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 27; order: 27; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_7.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 28; order: 28; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_8.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 29; order: 29; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_9.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 30; order: 30; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_10.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 5; order: 5; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_11.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 6; order: 6; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_12.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 7; order: 7; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_13.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 8; order: 8; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_14.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 9; order: 9; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_15.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 31; order: 31; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_16.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 32; order: 32; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_17.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 33; order: 33; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_18.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 34; order: 34; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_19.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 35; order: 35; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_20.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 10; order: 10; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_21.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 11; order: 11; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_22.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 12; order: 12; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_23.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 13; order: 13; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_24.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 14; order: 14; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_25.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 36; order: 36; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_26.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 37; order: 37; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_27.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 38; order: 38; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_28.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 39; order: 39; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_29.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 40; order: 40; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_30.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 15; order: 15; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_31.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 16; order: 16; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_32.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 17; order: 17; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_33.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 18; order: 18; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_34.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 19; order: 19; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_35.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 41; order: 41; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_36.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 42; order: 42; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_37.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 43; order: 43; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_38.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 44; order: 44; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_39.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 45; order: 45; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_40.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 20; order: 20; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_41.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 21; order: 21; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_42.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 22; order: 22; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_43.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 23; order: 23; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_44.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 24; order: 24; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_45.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 46; order: 46; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_46.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 47; order: 47; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_47.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 48; order: 48; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_48.jpg" alt="">
                                </div>
                            </div><div class="swiper-slide" style="-webkit-box-ordinal-group: 49; order: 49; margin-top: 10px; width: 272px; margin-right: 10px;"></div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 49; order: 49; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_49.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 50; order: 50; margin-top: 10px; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_50.jpg" alt="">
                                </div>
                            </div>
                                                        <div class="swiper-slide" style="-webkit-box-ordinal-group: 25; order: 25; width: 272px; margin-right: 10px;">
                                <div class="img-box">
                                    <!-- 사이즈 제한 없음 -->
                                    <img src="https://jihoosoft.com/assets/images/main/ref_img_51.jpg" alt="">
                                </div>
                            </div>
                                                    </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

                    <button type="button" class="swiper-button-prev swiper-button-disabled" title="이전 슬라이드로 이동" tabindex="-1" role="button" aria-label="Previous slide" aria-disabled="true" style="left: 0;transform: translateX(-150%) !important; color: #666"></button>
                    <button type="button" class="swiper-button-next" title="다음 슬라이드로 이동" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false" style="right: 0; transform: translateX(150%) !important; color: #666"></button>
                </div>
            </div>
        </div>
        <div class="ref-bottom">
            <div class="container">
                <div class="row mx-0 mx-lg-n5">
                    <div class="col-12 col-lg-8 px-0 py-3 p-lg-5">
                        <div class="main-title-box ml-xxl-n5 mr-0">
                            <h1 class="main-title--1 inanimate">NEWS</h1>
                            <a href="../about/news.html" class="read-more" title="더보기">
                                <span class="text">READ MORE</span>
                                <span class="ex"></span>
                            </a>
                        </div>
                        <!-- S : 게시판 목록 -->
                        <div class="row ml-0 ml-xxl-n5 mr-0 main-board">
                            <div class="col-12 col-lg-6 py-3 px-0 px-lg-0 main-board-top">
                                <a href="/about/news.html?bmain=view&amp;uid=14" class="link">
                                    <h2 class="title">다면평가 클라우드 서비스 Season #3 출시</h2>
                                    <div class="text mt-2">
                                        <p>지후소프트는 클라우드 다면평가 서비스 Season #3 버젼을 출시하였습니다.&nbsp;</p>
                                        <p>2017년 출시이래 지속적으로 업그레이드된 서비스를 출시해오고 있습니다.</p>
                                        <p>특히 이번 Season #3에서는 더욱 고도화된 UI/UX,</p>
                                        <p>추가 프로그램 수정 개발 없이 설정만으로 고객사의 니즈에 맞는 포맷을 제공할 수 있는 피드백 리포트 설정 기능 등으로</p>
                                        <p>고객사는 한층 새로워진 다면평가 클라우드서비스를 경험하실 수 있습니다. </p>
                                        <p>법무부 범죄정책예방국은 전년도에 이어 올해에도 새로워진 다면평가 클라우드 서비스를 활용하여&nbsp;</p>
                                        <p>상반기 다면평가를 성공적으로 완료하였습니다.&nbsp;</p>
                                        <p>감사합니다.&nbsp;</p>
                                    </div>
                                    <p class="date mt-4">2021.10.07</p>
                                </a>
                            </div>
                            <div class="col-12 col-lg-6 py-3 px-0 px-lg-5 main-board-sub">
                                <ul class="main-board-sub__list">
                                    <li class="item">
                                        <a href="/about/news.html?bmain=view&amp;uid=13" class="link">
                                            <h2 class="title">[경동인베스트] 평가관리 클라우드서비스 제공 </h2>
                                            <p class="date">2021.10.07</p>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="/about/news.html?bmain=view&amp;uid=12" class="link">
                                            <h2 class="title">[코렌스 그룹] e-HR 구축 계약</h2>
                                            <p class="date">2021.10.07</p>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="/about/news.html?bmain=view&amp;uid=11" class="link">
                                            <h2 class="title">[법무부] 다면평가 서비스 공급</h2>
                                            <p class="date">2021.10.07</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 px-0 pt-3 pb-0 p-lg-5">
                        <div class="inquiry-bnr">
                            <div class="title-box">
                                <h3 class="title">제품문의</h3>
                                <a href="../contact/index.html" class="read-more type-white" title="자세히 보기">
                                    <span class="text">READ MORE</span>
                                    <span class="ex"></span>
                                </a>
                            </div>
                            <p class="text mt-4">HS 솔루션 전문가로부터 지원받아 보세요!</p>
                            <div class="mt-4">
                                <a href="mailto:lhscj2466@gmail.com" class="inquiry-link">
                                    <span class="icon icon--mail"></span>
                                    <span class="text">lhscj2466@gmail.com</span>
                                </a>
                            </div>
                            <div class="mt-3">
                                <a href="tel:01039337249" class="inquiry-link">
                                    <span class="icon icon--tel"></span>
                                    <span class="text">02-2038-8064</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>