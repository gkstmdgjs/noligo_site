<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {Navigation, Pagination, loop} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, loop]);

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
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Infrastructure.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">개발 LifeCycle 관리</h3>
                                                <p class="text">분석,설계,개발,배포 단계 Cycle 관리</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Device.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">Smart Client 제공</h3>
                                                <p class="text">UX기반의 편리한 화면 기능 제공</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/System.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">시스템 관리 기능 내장</h3>
                                                <p class="text">사용자, 보안, 권한, 메뉴 관리 기능 제공</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-3 p-2">
                                        <div class="platform-box">
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Development.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">개발 표준 제공</h3>
                                                <p class="text">화면, 보고서 개발 Template 제공</p>
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
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Infrastructure.jpg')" alt=""></div>
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
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Device.jpg')" alt=""></div>
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
                                            <div class="thumb"><img :src="require('@/assets/img/Main/System.jpg')" alt=""></div>
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
                                            <div class="thumb"><img :src="require('@/assets/img/Main/Development.jpg')" alt=""></div>
                                            <div class="desc">
                                                <h3 class="title">모바일 시스템 개발</h3>
                                                <p class="text">기존 시스템의 DB 활용하여 모바일
                                                    시스템 개발 및 운영
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
    <section class="section ref fp-section fp-table active fp-completely" data-fp-styles="null" data-anchor="fifthPage" style="height: 997px; padding-top: 0px; padding-bottom: 0px;">
        <div class="fp-tableCell" style="height: 920px;">
            <!---------------------------------------------------- 업체 이미지 부분 ---------------------------------------------------->
            <div class="ref-top">
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
            </div>
            <!---------------------------------------------------- 하단 게시판 부분 ---------------------------------------------------->
            <div class="ref-bottom">
                <div class="container">
                    <div class="row mx-0 mx-lg-n5">
                        <div class="col-12 col-lg-8 px-0 py-3 p-lg-5" >
                            <div class="main-title-box ml-xxl-n5 mr-0" >
                                <h1 class="main-title--1 inanimate">NEWS</h1>
                                <router-link to="/FrameworkComponent" class="read-more" title="더보기">
                                    <span class="text">READ MORE</span>
                                    <span class="ex"></span>
                                </router-link>
                            </div>
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
