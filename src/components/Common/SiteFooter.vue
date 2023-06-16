<script setup>
	/**
	 * file : SiteFooter.vue
	 * 설명 : 사이트 하단 forrter(고정)
	 */
</script>
<template>
    <footer id="footer" class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3">
            <div class="footer-logo">
              <router-link to="/" title="메인으로">
                <img src="@/assets/img/logogGrayWhite.png" alt="JIHOOSOFT">
              </router-link>
            </div>
          </div>
          <div class="col-12 col-lg-9 mt-3 mt-lg-0">
            <div class="footer__txt">
              <p class="txt">
                <span><router-link to="/SitePrivacy" class="link">개인정보처리방침</router-link></span>
                <span><router-link to="/SiteEmailRefusal" class="link">이메일무단수집거부</router-link></span>
              </p>
            </div>
            
            <div class="footer__txt--2 mt-5">
              <p class="txt">
                <span>E-mail :lhscj2466@gmail.com</span>
              </p>
            </div>
            <p class="footer-copyright">
              Copyright© 2023 HS Solutons. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
</template>