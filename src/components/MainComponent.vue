<script setup>
    /**
	 * file : MainComponent.vue
	 * 설명 : 메인 화면
	 */

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore, {Navigation, Pagination, loop} from 'swiper/core';
    import { onMounted, ref } from 'vue';
    import { InitPage } from './Common/common';

    SwiperCore.use([Navigation, Pagination, loop]);
    const data = ref([]);

    onMounted(async () => {
        const rtn = await InitPage('', '', '', 1, 3)
        data.value = rtn.data.rtndata
    })
</script>
<template>
    <section class="section platform fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fourthPage" style="height: 937px; padding-top: 0px; padding-bottom: 0px;">
        <!--------------------------------------------- 상단 첫번째 부분 ---------------------------------------------------->
        <div class="fp-tableCell" style="height: 937px;">
            <div class="container">
                <div class="platform-swiper">
                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                        <swiper :slides-per-view="1" :navigation="true" :pagination="true" :loop="true">
                            <!--------------------------------------------- swiper-dlise 첫번째 ---------------------------------------------------->
                            <swiper-slide class="swiper-slide-padding">
                                <div class="section-title text-center mb-6 mb-lg-10 mb-xl-14 nav-list__item depth-1">
                                    <h1 class="main-title--h1 text-white">HS.FRAMEWORK</h1>
                                    <p class="main-text--18 text-gray-a">손쉽게 개발하고 효과적으로 유지 관리 할 수 있는 HS 솔루션</p>
                                    <router-link to="/FrameworkComponent" class="read-more type-white link" title="더보기">
                                        <span class="text">READ MORE</span>
                                        <span class="ex"></span>
                                    </router-link>
                                </div>
                                <div class="row mx-n2">
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/LowCode.png')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">플랫폼 정의</h3>
                                                <p class="text">복잡도가 낮고 Low Code를 지향</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/VariousPlatforms.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">최소화 및 표준화</h3>
                                                <p class="text">다양한 플롯폼에서 제공 가능</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Architecture.png')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">서버 아키텍처</h3>
                                                <p class="text">운영 효율과 사용자의 편의성을 높임</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Development.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">주요 기능</h3>
                                                <p class="text">개발의 편의성 및 운영의 중점</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!--------------------------------------------- swiper-dlise 두번째 ---------------------------------------------------->
                            <swiper-slide class="swiper-slide-padding">
                                <div class="section-title text-center mb-6 mb-lg-10 mb-xl-14">
                                    <h1 class="main-title--h1 text-white">HS 솔루션</h1>
                                    <p class="main-text--18 text-gray-a">오픈 라이선스(NodeJS, MSSQL) 기반 웹/모바일 통합 개발 운영 환경 구성</p>
                                    <router-link to="/FrameworkComponent" class="read-more type-white" title="더보기">
                                        <span class="text">READ MORE</span>
                                        <span class="ex"></span>
                                    </router-link>
                                </div>
                                <div class="row mx-n2">
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box platform-box--2">
                                            <div class="thumb"><img :src="require('@/assets/img/EventNoligo/Loading.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">이벤트 노리고</h3>
                                                <p class="text">
                                                    인기 브랜드 이벤트 정보를<br>
                                                    한 자리에 모은 앱
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box platform-box--2">
                                            <div class="thumb"><img :src="require('@/assets/img/NoligoGames/Main.png')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">노리고 게임즈</h3>
                                                <p class="text">
                                                    국민 마이크래프트 커뮤니티를<br>
                                                    목표로 제작
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box platform-box--2">
                                            <div class="thumb"><img :src="require('@/assets/img/CustomSolutions/Main.png')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">맞춤형 제작</h3>
                                                <p class="text">
                                                    아이디어와 비즈니스 목표를 이해하고<br>
                                                    차별화된 맞춤형 웹 사이트 제작
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box platform-box--2">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/System.png')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">모바일 시스템 개발</h3>
                                                <p class="text">기존 시스템의 DB 활용하여 모바일 시스템 개발 및 운영
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-------------------------------------------------------------------------- 업체 추가되면 위에 있는 section 사용할 것 ------------------------------------------------------------------------------------->
    <!-- <section class="section ref fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fifthPage" style="height: 997px; padding-top: 0px; padding-bottom: 0px;"> -->
    <section class="section fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fifthPage" style="height: 500px; padding-top: 0px; padding-bottom: 0px;">
        <!-- <div class="fp-tableCell" style="height: 920px;"> -->
            <!---------------------------------------------------- 업체 이미지 부분 ---------------------------------------------------->
            <!-- <div class="ref-top">
                <div class="container">
                    <div class="text-center mb-4"><h1 class="main-title--h1 inanimate">Reference</h1></div>
                    <div class="ref-swiper">
                        <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-multirow">
                            <swiper :slides-per-view="1" :navigation="true" :pagination="true" :loop="true">
                                <template v-for="j in 5" :key="j">
                                    <swiper-slide style="padding: 62px;">
                                        <template v-for="i in 10" :key="i">
                                            <template v-if="(j-1)*10+i <= 50">
                                                <img :src="require(`@/assets/img/Main/Company/company_${(j-1)*10+i}.jpg`)" :class="[i > 5 ? 'company_img company_img_top' : 'company_img']">
                                            </template>
                                        </template>
                                    </swiper-slide>
                                </template>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div> -->
            <!---------------------------------------------------- 하단 게시판 부분 ---------------------------------------------------->
            <div class="ref-bottom">
                <div class="container">
                    <div class="row mx-0 mx-lg-n5">
                        <div class="col-12 col-lg-8 px-0 py-3 p-lg-5" >
                            <div class="main-title-box ml-xxl-n5 mr-0" >
                                <h1 class="main-title--1 inanimate">NEWS</h1>
                                <router-link to="/HSsolutionNews" class="read-more" title="더보기">
                                    <span class="text">READ MORE</span>
                                    <span class="ex"></span>
                                </router-link>
                            </div>
                            <div class="row ml-0 ml-xxl-n5 mr-0 main-board">
                                <div class="col-12 col-lg-6 py-3 px-0 px-lg-0 main-board-top">
                                    <template v-for="(item, index) in data" :key="index" >
                                        <router-link :to="`/HSsolutionNewsDetails?IDX=${item.IDX}`" class="link"  v-if="index == 0">
                                            <h2 class="title">{{ item.SUBJECT }}</h2>
                                            <div class="text mt-2">
                                                {{ item.CONTENTS }}
                                            </div>
                                            <p class="date mt-4">{{ item.CREATE_DATE.slice(0,10) }}</p>
                                        </router-link>
                                    </template>
                                </div>
                                <div class="col-12 col-lg-6 py-3 px-0 px-lg-5 main-board-sub">
                                    <ul class="main-board-sub__list">
                                        <template v-for="(item, index) in data" :key="index" >
                                            <li v-if="index < 3" class="item">
                                                <router-link :to="`/HSsolutionNewsDetails?IDX=${item.IDX}`" class="link">
                                                    <h2 class="title">{{ item.SUBJECT }} </h2>
                                                    <p class="date">{{ item.CREATE_DATE.slice(0,10) }}</p>
                                                </router-link>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 px-0 pt-3 pb-0 p-lg-5">
                            <div class="inquiry-bnr">
                                <div class="title-box">
                                    <h3 class="title">제품문의</h3>
                                    <router-link to="/ContactUs" class="read-more type-white" title="자세히 보기">
                                        <span class="text">READ MORE</span>
                                        <span class="ex"></span>
                                    </router-link>
                                </div>
                                <p class="text mt-4">HS 솔루션 전문가로부터 지원받아 보세요!</p>
                                <div class="mt-3">
                                    <a href="mailto:lhscj2466@gmail.com" class="inquiry-link">
                                        <span class="icon icon--mail"></span>
                                        <span class="text">lhscj2466@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </section>
</template>
