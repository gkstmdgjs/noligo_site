<script setup>
  /**
	 * file : NoligoGames.vueS
	 * 설명 : 노리고 게임즈
	 */
</script>
<template>
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
              독창적이고 차별화된 맞춤형 웹 사이트 제작
            </p>
          </div>
        </section>
        <!---------------------------------------- 상단 이미지 및 문구 부분 ---------------------------------------->
        <section class="section py-15 py-lg-20">
          <div class="container px-0 px-sm-5">
            <div class="py-15 py-lg-20 px-5" style="background-color:#f9f9f9;">
              <div class="icon-list-wrap mt-5">
                <div class="row mx-n5 text-center">
                  <div class="col-12 col-lg-4 p-5 wow fadeInUp">
                    <div class="icon-list-box">
                      <div><img width="95" height="91" :src="require('@/assets/img/CustomSolutions/Reactive.png')"></div>
                      <h3 class="common-text--22 font-weight-bold text-color-3 mt-5" data-aos="fade-top">반응형 전문제작</h3>
                      <p class="common-text--18 font-weight-light text-gray-6 mt-2">
                        PC, 스마트폰, 태블릿에서 자동으로<br class="d-none d-xl-block">
                        최적화된 레이아웃으로 변경
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4 p-5 wow fadeInUp">
                    <div class="icon-list-box">
                      <div><img width="95" height="91" :src="require('@/assets/img/CustomSolutions/Smartphone.png')"></div>
                      <h3 class="common-text--22 font-weight-bold text-color-3 mt-5" data-aos="fade-top">스마트폰에서도 최적화</h3>
                      <p class="common-text--18 font-weight-light text-gray-6 mt-2">
                        PC와 스마트폰 환경과 다른 해상도에서도<br class="d-none d-xl-block">
                        홈페이지가 최적화되는 최신 웹기술
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4 p-5 wow fadeInUp">
                    <div class="icon-list-box">
                      <div><img width="95" height="91" :src="require('@/assets/img/CustomSolutions/Customization.png')"></div>
                      <h3 class="common-text--22 font-weight-bold text-color-3 mt-5" data-aos="fade-top">고객과의 맞춤 디자인</h3>
                      <p class="common-text--18 font-weight-light text-gray-6 mt-2">
                        맞춤형 서비스 통해 고객들이<br class="d-none d-xl-block">
                        원하는 디자인으로 제작
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!---------------------------------------- 관리자 화면 설명 부분 ---------------------------------------->
        <section class="section py-15 py-lg-20">
          <div class="container">
            <div class="row mx-n5">
              <div class="col-12 col-lg-6 p-5 wow fadeInLeft" data-aos="fade-right">
                <img :src="require('@/assets/img/CustomSolutions/Main.png')">
              </div>
              <div class="col-12 col-lg-6 d-flex align-items-center p-5">
                <ul>
                  <li class="wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">한눈에 보기 쉬운 디자인</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 다른 해상도에서 최적화된 레이아웃으로 변경</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 합계와 통계로 인해 직관적으로 확인 가능</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">합계</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 합계 내고싶은 데이터만 합계 시켜 직관적으로 확인 가능</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 데이터의 변화의 따라 유연하게 합계 가능</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">통계</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">
                      - 합계낸 데이터를 통해 다양하게 통계화 시키며 합계<br class="d-none d-xl-block">
                      데이터의 변화가 있을 시, 유연하게 통계 가능
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
                    <h2 class="common-text--22 font-weight-bold mb-2">데이터 관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 트렌디하고 직관적인 디자인으로 데이터를 한 눈에 보기 쉬움</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 다양한 기능을 지원하여 사용자의 편의성과 자율성을 높여 손 쉽게 사용 가능하도록 지원</p>
                  </li>
                  <li class="mt-6 wow fadeInLeft" data-aos="fade-right">
                    <h2 class="common-text--22 font-weight-bold mb-2">다양한 기능 지원</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 복사, CSV, 엑셀, PDF, 인쇄 기능 완벽 지원</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 최신기술을 사용하여 빠른 속도를 자랑</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 해상도에서 최적화된 반응형 레이아웃으로 변경</p>
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
                    <h2 class="common-text--22 font-weight-bold mb-2">자율성 높은 데이터</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 다양한 데이터를 지원하며 확인 가능</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 데이터를 추가 및 수정할 수 있어 사용자의 자율성을 높임</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">다양한 기능 지원</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 데이터를 추가 및 수정하는 과정에서 다양한 기능을 지원</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 자율성을 높인 맞춤형 디자인</p>
                  </li>
                  <li class="mt-6 wow fadeInRight" data-aos="fade-left">
                    <h2 class="common-text--22 font-weight-bold mb-2">유연한 데이터 관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">
                      - 데이터를 체계적으로 관리하며 데이터 변동에 따라<br class="d-none d-xl-block">
                      다양하고 유연하게 관리 가능
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
                    <h2 class="common-text--22 font-weight-bold mb-2">접속자 정보 관리</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 관리자 입장을 고려하여 접속자의 필요한 정보를 자동으로 추출하여 통합 관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 다양한 기능을 지원하여 간편한 데이터 관리</p>
                  </li>
                  <li class="mt-6 wow fadeInLeft" data-aos="fade-right">
                    <h2 class="common-text--22 font-weight-bold mb-2">다양한 기능 지원</h2>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 접속자의 IP 자동으로 추출하여 데이터를 체계적으로 관리</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- IP뿐만 아니라 접속 경로, 접속기기 등 필요한 정보를 자동으로 추출</p>
                    <p class="common-text--18 text-gray-5 font-weight-light">- 추출된 데이터를 자동으로 추가</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="text-center mb-12 pt-15 pt-lg-20 border-top">
              <h1 class="common-title--h1">차별성</h1>
            </div>
            <div class="card-wrap">
              <h2 class="card-title" data-aos="fade-top">맞춤 제작</h2>
              <div class="row mx-n2">
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">맞춤형</h3>
                    <div class="card-body">
                      고객 Needs에 따라 맞춤형 셋업과 서비스 제공 -&gt; <br>
                      다양한 데이터를 통해 자율성을 높임
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">반응형</h3>
                    <div class="card-body">
                      하나의 홈페이지 만으로 PC, 스마트폰, 태블릿 등 <br>
                      최적화 된 형태의 홈페이지의 환경을 제공
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">전문성</h3>
                    <div class="card-body">
                      다양한 홈페이지 제작경험 다양한 제작경험으로 최고의 디자인을 추구
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--1">
                    <h3 class="card-head">맞춤 디자인</h3>
                    <div class="card-body">
                      맞춤디자인을 통해 고객들이 원하는 디자인으로 제작
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrap mt-6 mt-lg-10">
              <h2 class="card-title" data-aos="fade-top">솔루션</h2>
              <div class="row mx-n2">
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">어플리케이션</h3>
                    <div class="card-body">
                      하나의 솔루션으로 관련 모든 기능을 연계하여 어플리케이션 개발
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">최상의 품질 고수</h3>
                    <div class="card-body">
                      개발과 품질 테스트에 통과한 콘텐츠를 표준화된 결과물로 배포
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">운영 및 유지보수</h3>
                    <div class="card-body">
                      단순히 유지보수나 하자보수만하는 것이 아닌 결과물에 대해 고도화 또는 보수
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 p-2 wow fadeInUp" data-aos="fade-top">
                  <div class="card card--2">
                    <h3 class="card-head">합리적인 가격</h3>
                    <div class="card-body">
                      고객이 원하는 저렴한 가격에 높은 퀄리티 보장
                    </div>
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