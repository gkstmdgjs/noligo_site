<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();
const IDX = route.params.IDX;

</script>
<template>
	<!------------------------------ 중단 메인 이미지 부분 ------------------------------------->
	<div class="sub-visual" style="background-image: url(https://jihoosoft.com/assets/images/sub/visual_1.jpg)">
      <div class="sub-visual__wrapper container">
        <h1 class="sub-visual__title">About</h1>
      </div>
    </div>
    <main class="main py-20" id="contents">
      <section class="section mb-5 mb-lg-10">
        <div class="container text-center">
          <h1 class="common-title--h1 text-gray-2">NEWS</h1>
        </div>
      </section>
      <section class="section">
        <div class="container">
            <table class="table-view-01 txt-mt">
                <caption><span class="hidden">상세 입니다.</span></caption>
                <colgroup>
                    <col width="90px">
                    <col width="100%">
                </colgroup>
                <tbody>
                    <tr>
                        <td colspan="2" class="clearfix tit_box">
                            <p class="tit"> 다면평가 클라우드 서비스 Season #3 출시  </p>
                            <p class="tbl_detail_span mt_05">
                                <span class="name">지후소프트</span>
                                <span class="date">2021.10.07</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="board-box">			  
                                <p>지후소프트는 클라우드 다면평가 서비스 Season #3 버젼을 출시하였습니다.&nbsp;</p>
                                <p>2017년 출시이래 지속적으로 업그레이드된 서비스를 출시해오고 있습니다.</p>
                                <p>특히 이번 Season #3에서는 더욱 고도화된 UI/UX,</p>
                                <p>추가 프로그램 수정 개발 없이 설정만으로 고객사의 니즈에 맞는 포맷을 제공할 수 있는 피드백 리포트 설정 기능 등으로</p>
                                <p>고객사는 한층 새로워진 다면평가 클라우드서비스를 경험하실 수 있습니다. </p>
                                <p>법무부 범죄정책예방국은 전년도에 이어 올해에도 새로워진 다면평가 클라우드 서비스를 활용하여&nbsp;</p>
                                <p>상반기 다면평가를 성공적으로 완료하였습니다.&nbsp;</p>
                                <p>감사합니다.&nbsp;</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt_40 text_right board_view_btn_box">
                <router-link to="/HSsolutionNews" class="btn-type-01">목록</router-link>
            </div>
            <div class="border-list-type mt_30">
                <ul>
                    <li>
                        <a href="/about/news.html?bmain=view&amp;uid=13&amp;page=1" title="이전">
                            <div class="clearfix">
                                <div class="left list-up-bg list-title">이전</div>
                                <div class="left w-con">[경동인베스트] 평가관리 클라우드서비스 제공 </div>
                            </div>
                        </a>
                    </li>
                    <li class="">
                        <a href="#" title="다음">
                            <div class="clearfix">
                                <div class="left list-down-bg list-title">다음</div>
                                <div class="left w-con">다음 글이 없습니다.</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </section>  
    </main>
</template>