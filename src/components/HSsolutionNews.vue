<script setup>
	/**
	 * file : HSsolutionNews.vue
	 * 설명 : News
	 */

	import { watch, ref } from 'vue'
	import { useRoute } from 'vue-router';
	import { InitPage } from './Common/common'
	import SitePaging from './Common/SitePaging.vue';

	const route = useRoute();
	const selectedOption = ref('S');
	const inputValue = ref('');
	const pageSize = 15

	const totalCnt = ref(0)
	const data = ref([])

	// page에 값 변화가 있다면 재할당
	watch(() => route.query.page, async (newValue) => {
		const page = newValue ?? 1;
		const rtn = await InitPage('', selectedOption.value, inputValue.value, page, pageSize);
		data.value = rtn.data.rtndata; 
		totalCnt.value = rtn.data.rtndata[0].TOTAL_COUNT
	}, {immediate: true});

	async function Search(){
		const rtn = await InitPage('', selectedOption.value, inputValue.value, 1, pageSize);
		data.value = rtn.data.rtndata; 
		totalCnt.value = rtn.data.rtndata[0] ? rtn.data.rtndata[0].TOTAL_COUNT : 0
	}

</script>
<template>
	<!------------------------------ 중단 메인 이미지 부분 ------------------------------------->
	<div class="sub-visual About">
      <div class="sub-visual__wrapper container">
        <h1 class="sub-visual__title">About</h1>
      </div>
    </div>
    <main class="main py-20" id="contents">
      <!------------------------------------------ 상단 타이틀 부분 ------------------------------------------------->
      <section class="section mb-5 mb-lg-10">
        <div class="container text-center">
          <h1 class="common-title--h1 text-gray-2">NEWS</h1>
        </div>
      </section>
      <section class="section">
        <div class="container">
			<!------------------------------------------ table 부분 ------------------------------------------------->
			<table class="table_board_for type_d">
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
						<td>{{ item.TOTAL_COUNT - (item.ROWNUM -1) }}</td>
						<td class="text_left">
							<router-link :to="{ name: 'HSsolutionNewsDetails', query: {IDX: item.IDX}}">{{ item.SUBJECT }}</router-link>
						</td>
						<td>{{ item.CREATE_DATE }}</td>
					</tr>
				</tbody>
			</table>
			<!------------------------------------------ 페이징 처리 부분 ------------------------------------------------->
			<div class="paging-area">
				<SitePaging Path="HSsolutionNews" :totalCount="totalCnt" :pageSize="pageSize" :CurrentPage="route.query.page ?? 1" />
			</div>
			<!------------------------------------------ 검색 부분 ------------------------------------------------->
			<div class="board-search-01">
				<fieldset>
					<select class="select-type-01" v-model="selectedOption">
						<option value="S">제목</option>
						<option value="C">내용</option>
					</select>
					<input type="text" title="검색어" name="find_word" class="input-type-01" v-model="inputValue" @keyup.enter="Search">
					<button class="btn btn-color-01" @click="Search">검색</button>
				</fieldset>
			</div>
        </div>
      </section>
    </main>
</template>