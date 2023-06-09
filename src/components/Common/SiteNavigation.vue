<script setup>
  import { onMounted } from 'vue';

  // Navigation 마우스 오버 및 마우스 아웃시 이벤트
  let isAnimating = false; 
  const handleMouseover = (status, displayValue, opacityValue, intervalTime, time) => {
    if(isAnimating === status){
      return;
    }
    const header = document.querySelector('#header');
    const elements = document.querySelectorAll('.nav-list--depth2');
    const bg = document.querySelector('.nav__bg');

    bg.style.opacity = opacityValue;

    const fadeInOut = setInterval(() => {
      // 서서히 나타내기
      if(displayValue == 'block'){
        bg.style.display = displayValue;
        opacityValue += (intervalTime / time);
        bg.style.opacity = opacityValue;
        if (opacityValue >= 1) {
          clearInterval(fadeInOut);
          bg.style.opacity = '';
          isAnimating = true;
        }
      // 서서히 없어지기
      }else if(displayValue == 'none'){
        const steps = time / intervalTime;
        const opacityStep = 1 / steps;
        opacityValue -= opacityStep;
        bg.style.opacity = opacityValue;
        if (opacityValue <= 0) {
          clearInterval(fadeInOut);
          bg.style.opacity = '';
          bg.style.display = 'none'
          isAnimating = false;
        }
      }
    }, intervalTime);

    displayValue == 'block' ? header.classList.add('ghb-hover') : header.classList.remove('ghb-hover');
    elements.forEach(element => {
      element.style.display = displayValue;
    });
  }

  onMounted(() => {
    
    const nav = document.querySelector('.nav.gnb-drop--all');
    const depths = document.querySelectorAll('.nav-list.nav-list--depth2');
    const bg = document.querySelector('.nav__bg');
    const origin = document.querySelector('.origin');

    nav.addEventListener('mouseenter', () => handleMouseover(true, 'block', 0 , 10, 200));
    bg.addEventListener('mouseleave', () => handleMouseover(false, 'none', 1, 10, 200));
    depths.forEach(depth => {depth.addEventListener('mouseleave', () => handleMouseover(false, 'none', 1, 10, 200))});
    origin.addEventListener('click', () => onClassRemove());

    //on 클래스 remove
    const onClassRemove = () => {
      document.querySelectorAll('.on').forEach(element => {
        element.classList.remove('on');
      });
    }
    // Navigation 메뉴 클릭 시, 클래스 명칭 바꾸는 이벤트
    const parentLinks = document.querySelectorAll('.nav-list__item.depth-1');
    parentLinks.forEach(parentLink => {
      parentLink.addEventListener('click', (event) => {

        onClassRemove();
        parentLink.querySelector('.link').classList.add('on')
        
        if(parentLink.querySelector('.link') === event.target){
          parentLink.querySelector('.nav-list__item.depth-2 .link').classList.add('on')
        }
        const childLinks = parentLink.querySelectorAll('.nav-list__item.depth-2 .link');
        childLinks.forEach(childLink => {
          if(childLink === event.target) {
            childLink.classList.add('on');
          }
        });
      });
    });
  });
</script>

<template>
    <!---------------------------- 상단 바 부분 ---------------------------->
    <header id="header" class="header">
      <div class="container header-wrap">
        <router-link to="/" class="logo d-inline-flex align-items-center h-100" title="메인으로">
          <img src="@/assets/logo.png" alt="HS 솔루션" class="origin">
        </router-link>
        <div class="nav__bg" style="height: 100px"></div>
          <nav class="nav gnb-drop--all">
            <ul class="nav-list nav-list--depth1">
              <!------------------------------ about ------------------------------->
              <li class="nav-list__item depth-1">
                <router-link to="/HSsolutionNews" class="link">About</router-link>
                <ul class="nav-list nav-list--depth2">
                  <li class="nav-list__item depth-2">
                    <router-link to="/HSsolutionNews" class="link">NEWS</router-link>
                  </li>
                  <li class="nav-list__item depth-2">
                    <router-link to="/CompanyLocation" class="link">오시는 길</router-link>
                  </li>
                </ul>
              </li>
              <!------------------------------ Framework ------------------------------->
              <li class="nav-list__item depth-1">
                <router-link to="/FrameworkComponent" class="link">Framework</router-link>
                <ul class="nav-list nav-list--depth2">
                  <li class="nav-list__item depth-2">
                    <router-link to="/FrameworkComponent" class="link">Noligo FW</router-link>
                  </li>
                </ul>
              </li>
              <!------------------------------ Service ------------------------------->
              <li class="nav-list__item depth-1">
                <router-link to="/EvnetNoligo" class="link">Service</router-link>
                <ul class="nav-list nav-list--depth2">
                  <li class="nav-list__item depth-2">
                    <router-link to="/EvnetNoligo" class="link">Event Noligo</router-link>
                  </li>
                  <li class="nav-list__item depth-2">
                    <router-link to="/NoligoGames" class="link">Noligo Games</router-link>
                  </li>
                </ul>
              </li>
              <!------------------------------ Contact Us ------------------------------->
              <li class="nav-list__item depth-1">
                <router-link to="/ContaactUs" class="link">Contact Us</router-link>
                <ul class="nav-list nav-list--depth2">
                  <li class="nav-list__item depth-2">
                    <router-link to="/ContaactUs" class="link">Contact Us</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <button class="nav-mobile__btn" type="button">
            <i class="xi-bars"></i>
          </button>
        </div>
    </header> 
</template>