<script setup>

import { onMounted, ref } from 'vue'

const data = ref([])

onMounted(() => {
	initPage()
})

async function initPage() {
	const params = {
		VIEW_CODE: '',
		PREF: 'BOARD',
		METHOD_CODE: 'NOLIGO_SITE',
		DATA: {
			PAGE_NO: '1',
			PAGE_SIZE: '15',
		},
	}
	const rtn = await ng_core.common.getData(params);
	data.value = rtn.data.rtndata;
}

</script>
<template>
	<!------------------------------ 중단 메인 이미지 부분 ------------------------------------->
	<div class="sub-visual" style="background-image: url(https://jihoosoft.com/assets/images/sub/visual_1.jpg)">
      <div class="sub-visual__wrapper container">
        <h1 class="sub-visual__title">About</h1>
      </div>
    </div>
    <main class="main py-20" id="contents">
      <!-- S : Section (페이지 상단 타이틀) -->
      <section class="section mb-5 mb-lg-10">
        <div class="container text-center">
          <h1 class="common-title--h1 text-gray-2">NEWS</h1>
        </div>
      </section>
      <!-- E : Section (페이지 상단 타이틀) -->
      <!-- S : Section -->
      <section class="section">
        <div class="container">
        	<table class="table_board_for type_d">
          		<caption><span class="hidden">일반 게시판 입니다.</span></caption>
          		<colgroup>
					<col width="8%">
					<col width="*%;">
					<col width="12%;">
				</colgroup>
          		<thead>
            		<tr>
						<th scope="col">NO</th>
						<th scope="col">제목</th>
			            <th scope="col">작성일</th>
			        </tr>
          		</thead>
          		<tbody>
            		<tr class="" v-for="(item, index) in data" :key="index">
              			<td>{{ item.ROWNUM }}</td>
              			<td class="text_left">
							<a href="/about/news.html?bmain=view&amp;uid=14&amp;search=%26page%3D1">{{ item.SUBJECT }}</a>
						</td>
			            <td>{{ item.CREATE_DATE.slice(0,10) }}</td>
			        </tr>
	          	</tbody>
        	</table>
			<div class="paging-area">
				<ul>
					<li>
						<a href="/about/news.html?page=1" class="prev-first" alt="첫 페이지로 이동"><span>맨앞으로</span></a></li><li><a class="active">1</a>
					</li>  
					<li>
						<a href="/about/news.html?page=2">2</a>
					</li> 
					<li>
						<a href="/about/news.html?page=2" class="next-last" alt="마지막 페이지로 이동">
						<span>맨뒤로</span></a>
					</li>		  
				</ul>
			</div>
			<div class="board-search-01">
				<fieldset>
					<legend class="hidden">검색</legend>
					<select name="find_field" title="search" class="select-type-01">
						<option value="title">제목</option>
						<option value="content">내용</option>
					</select>
					<input type="text" title="검색어" name="find_word" value="" class="input-type-01">
					<input type="submit" value="검색" class="btn btn-color-01">
				</fieldset>
			</div>
        </div>
      </section>
    </main>
</template>