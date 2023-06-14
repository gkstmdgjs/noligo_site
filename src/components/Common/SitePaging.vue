<script setup>

    import { defineProps, computed } from 'vue';

    const props = defineProps(['Path', 'totalCount', 'pageSize', 'CurrentPage', 'total2']);

    // 페이지 갯수 구하기
    let pages = computed(() => {
        return Math.ceil(props.totalCount / props.pageSize);
    })
</script>
<template>
    <ul>
        <li>
            <router-link :to="{ name: Path, query: {page: 1}}" class="prev-first" alt="첫 페이지로 이동"><span>맨앞으로</span></router-link>
        </li>
        <li v-for="page in pages" :key="page">
            <router-link :to="{ name: Path, query: {page: page}}" :class="{ active: CurrentPage == page }">{{ page }}</router-link>
        </li>  
        <li>
            <router-link :to="{ name: Path, query: {page: pages}}" class="next-last" alt="마지막 페이지로 이동"><span>맨앞맨뒤로으로</span></router-link>
        </li>		  
    </ul>
</template>