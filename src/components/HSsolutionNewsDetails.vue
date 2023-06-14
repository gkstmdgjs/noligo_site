<script setup>

import { onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';
import { initPage } from './Common/common'

const route = useRoute();
const IDX = route.query.IDX;
const data = ref([]);

onMounted(async () => {
    const rtn = await initPage(IDX, '', '', '', '')
    data.value = rtn.data.rtndata[0]
})

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
                            <p class="tit"> {{ data.SUBJECT }}  </p>
                            <p class="tbl_detail_span mt_05">
                                <span class="name">{{ data.CREATE_USERID }}</span>
                                <span class="date">{{ data.CREATE_DATE }}</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="board-box">			  
                                {{ data.CONTENTS }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt_40 text_right board_view_btn_box">
                <router-link to="/HSsolutionNews" class="btn-type-01">목록</router-link>
            </div>
        </div>
      </section>  
    </main>
</template>