<script setup>
  /**
	 * file : NoligoGames.vue
	 * 설명 : 노리고 게임즈
	 */

  import { onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Navigation, Pagination, loop } from 'swiper/core';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  SwiperCore.use([Navigation, Pagination, loop]);

  onMounted(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  });
</script><template>
  <!----------------------------------------------------- 중단 메인 이미지 부분 ----------------------------------------------------->
  <div class="sub-visual Service">
    <div class="sub-visual__wrapper container">
      <h1 class="sub-visual__title">Custom Solutions</h1>
    </div>
  </div>
  <main class="main py-20" id="contents">
        <section class="section mb-5 mb-lg-10">
          <div class="container text-center">
            <h1 class="common-title--h1 text-gray-2">맞춤형 제작</h1>
            <p class="common-text--18 text-gray-6 font-weight-light mt-2">
              고객의 아이디어와 비즈니스 목표를 이해하고,<br class="d-none d-lg-block">
              독창적이고 차별화된 맞춤형 웹 사이트 제작 합니다.
            </p>
          </div>
        </section>
        <!-- S : Section (근태관리) -->
        <section class="section py-15 py-lg-20">
          <div class="container">
            <div class="row mx-n5">
              <div class="col-12 col-lg-6 p-5 wow fadeInLeft" data-aos="fade-right">
                <img :src="require('@/assets/img/CustomSolutions/Main.png')">
              </div>
              <div class="col-12 col-lg-6 d-flex align-items-center p-5">
                <ul>
                  <li class="wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">모바일 출퇴근</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 와이파이, GPS, 비콘을 활용한 모바일 근태관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 임직원은 모바일 셀프서비스만으로 근태관리 OK</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">주 52시간 관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 주 52시간 사전/사후 관리, 분석 리포트 제공</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 임직원은 웹/모바일로 실시간 본인 근태내역 확인</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">유연근무관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">
                      - 선택근로제, 간주근로제, 탄력근로제, 시차출퇴근제 ,재택근로제 등<br class="d-none d-xl-block">
                      다양한 유연근무관리를 체계적으로 관리
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          
            <div class="row flex-row-reverse mx-n5 mt-5">
              <div class="col-12 col-lg-6 p-5 wow fadeInRight" data-aos="fade-left">
                <img :src="require('@/assets/img/CustomSolutions/Management.png')">
              </div>
              <div class="col-12 col-lg-6 d-flex align-items-center p-5 text-lg-right">
                <ul>
                  <li class="wow fadeInLeft" data-wow-delay="0s" data-aos="fade-right">
                    <h2 class="common-text--22 font-weight-bold mb-2">보상휴가관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 연장,휴일, 야근 시간에 대한 보상휴가 통합관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 임직원은 보상휴가 잔여시간 실시간 확인하여 보상휴가 신청 및 전자결재 승인</p>
                  </li>
                  <li class="mt-6 wow fadeInLeft" data-aos="fade-right">
                    <h2 class="common-text--22 font-weight-bold mb-2">연차관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 1년미만 월 단위 연차, 1년 이상 연 단위 연차 자동생성</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 일근태 집계를 통한 연차 사용내역 및 잔여 연차 자동 갱신 관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 연차촉진제 프로세스 탑재</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row mx-n5">
              <div class="col-12 col-lg-6 p-5 wow fadeInLeft" data-aos="fade-right">
                <img :src="require('@/assets/img/CustomSolutions/Modifying.png')">
              </div>
              <div class="col-12 col-lg-6 d-flex align-items-center p-5">
                <ul>
                  <li class="wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">모바일 출퇴근</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 와이파이, GPS, 비콘을 활용한 모바일 근태관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 임직원은 모바일 셀프서비스만으로 근태관리 OK</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">주 52시간 관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 주 52시간 사전/사후 관리, 분석 리포트 제공</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 임직원은 웹/모바일로 실시간 본인 근태내역 확인</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">유연근무관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">
                      - 선택근로제, 간주근로제, 탄력근로제, 시차출퇴근제 ,재택근로제 등<br class="d-none d-xl-block">
                      다양한 유연근무관리를 체계적으로 관리
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row flex-row-reverse mx-n5 mt-5">
              <div class="col-12 col-lg-6 p-5 wow fadeInRight" data-aos="fade-left">
                <img :src="require('@/assets/img/CustomSolutions/MemberSearch.png')">
              </div>
              <div class="col-12 col-lg-6 d-flex align-items-center p-5 text-lg-right">
                <ul>
                  <li class="wow fadeInLeft" data-aos="fade-right">
                    <h2 class="common-text--22 font-weight-bold mb-2">보상휴가관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 연장,휴일, 야근 시간에 대한 보상휴가 통합관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 임직원은 보상휴가 잔여시간 실시간 확인하여 보상휴가 신청 및 전자결재 승인</p>
                  </li>
                  <li class="mt-6 wow fadeInLeft" data-aos="fade-right">
                    <h2 class="common-text--22 font-weight-bold mb-2">연차관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 1년미만 월 단위 연차, 1년 이상 연 단위 연차 자동생성</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 일근태 집계를 통한 연차 사용내역 및 잔여 연차 자동 갱신 관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 연차촉진제 프로세스 탑재</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="section pb-15 pb-lg-20">
          <div class="container">
            <div class="text-center mb-12 pt-15 pt-lg-20 border-top">
              <h1 class="common-title--h1">차별성</h1>
            </div>
          
            <div class="card-wrap">
              <h2 class="card-title--1 wow fadeInUp" data-aos="fade-top">급여아웃 소싱</h2>
              <div class="row mx-n2">
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">맞춤형 셋업</h3>
                    <div class="card-body">
                      고객 Needs에 따라 맞춤형 셋업과 서비스 제공 -&gt; <br>
                      비밀연봉제 도입, 갑작스런 담당자 퇴사, 대행업체 변경 등
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">안정적 서비스</h3>
                    <div class="card-body">
                      위기상황대처를 위한 3중 안전장치 완비
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">전문성</h3>
                    <div class="card-body">
                      동종업계 경력자 업무대행, 노무사 및 HR컨설턴트에 의한 전문 서비스
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">사외 People팀</h3>
                    <div class="card-body">
                      급여대행이외 평가 및 연봉계약, 복리후생 등 HR업무 대행
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div class="card-wrap mt-6 mt-lg-10">
              <h2 class="card-title--2 wow fadeInUp" data-aos="fade-top">J.HR(e-HR)</h2>
              <div class="row mx-n2">
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">통합관리와 자동화</h3>
                    <div class="card-body">
                      하나의 솔루션으로 HR관련 모든 기능을 연계하여 처리 가능
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">시장 검증</h3>
                    <div class="card-body">
                      창업초기 부터 HR분야에 집중하면서 입소문만으로 꾸준히 성장
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">보안성과 확장성</h3>
                    <div class="card-body">
                      검증된 확장성과 보안성을 갖춘 e-HR 전용 솔루션
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">연속성과 데이터</h3>
                    <div class="card-body">
                      급여대행 해지후에도 HR솔루션만 사용 가능, 데이터 이관 등 문제 해결
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div class="mt-15">
              <div class="row justify-content-center">
                <div class="col-auto px-10" data-aos="fade-top">
                  <div class="gradient-box rounded-circle">
                    비용절감
                  </div>
                </div>
                <div class="col-auto px-10" data-aos="fade-top">
                  <div class="gradient-box rounded-circle">
                    효율성<br>
                    향상
                  </div>
                </div>
                <div class="col-auto px-10" data-aos="fade-top">
                  <div class="gradient-box rounded-circle">
                    법령준수
                  </div>
                </div>
              </div>
            </div>
          
            <div class="text-center mt-15">
              <router-link to="/ContactUs" class="btn-border-01 py-3 px-15">문의하기</router-link>
            </div>
          </div>
        </section>
      </main>
</template>