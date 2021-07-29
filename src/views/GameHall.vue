<template>
<!-- eslint-disable max-len -->
<!-- banner -->
<div class="w-full">
  <img src="../assets/banners/banner-1.jpg" alt="" class="w-full object-content">
</div>

<!-- gamehall -->
<div class="px-2 ">
  <!-- Nav -->
  <Nav class="mb-5"></Nav>
  <!-- rush bar -->
  <div class="mb-5">
    <h4 class="mb-1 text-sm text-left text-skin-base">快速參賽</h4>
    <div class="relative flex items-center justify-between px-4 overflow-hidden border border-opacity-50 rounded bg-gradient-to-r h-14 text-skin-base bg-primary-500 border-room-rush">
      <!-- 利用tag進行疊層 背景樣式-->
      <!-- 背景色 -->
      <div class="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-room-rush via-room-rush to-transparent"></div>
      <!-- 高光 -->
      <div class="absolute top-0 left-0 z-10 w-full h-2 bg-gradient-to-b from-white to-transparent opacity-70"></div>
      <!-- 主題圖片 -->
      <img src="../assets/images/gamehall/gop/bg-rush.jpg" alt="rush" class="absolute top-0 right-0 z-0 object-contain object-right-top h-full">
      <!-- 內容 -->
      <p class="relative z-20 flex items-center font-bold text-lh">
        <ChevronDoubleRightIcon class="w-6 h-6 mr-1 text-room-rush-highlight"/>
        快速參賽區塊
      </p>
      <i class="relative z-20 flex items-center justify-center w-6 h-6 bg-black border-2 rounded-full bg-opacity-60 border-room-rush-highlight">
        <ChevronDownIcon class="w-3 h-3 text-skin-base"/>
      </i>
    </div>
  </div>
  <!-- daily project -->
  <div class="flex flex-wrap items-center mb-5">
    <h4 class="mb-1 text-sm text-left text-skin-base">日常賽事</h4>
    <!-- 利用grid system -->
    <div class="grid w-full grid-cols-2 gap-2">
      <!-- 利用客製化樣式混TW class name -->
      <div class="relative flex items-end h-20 pb-2 pl-2 overflow-hidden bg-cover border rounded bg-reward border-room-reward c-bgimg-blend">
        <!-- 高光 -->
        <div class="absolute top-0 left-0 z-10 w-full h-2 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        <!-- 主題圖片 -->
        <img src="../assets/images/gamehall/gop/bg-reward-main.png" alt="reward" class="absolute top-0 right-0 z-0 object-cover w-4/6 h-full ">
        <p class="relative z-10 text-sm font-bold text-left text-skin-base">免費金幣賽 <br> 賺錢兑票</p>
      </div>
      <div class="relative flex items-end h-20 pb-2 pl-2 overflow-hidden bg-cover border rounded bg-chanlage border-room-chanlage c-bgimg-blend">
        <!-- 高光 -->
        <div class="absolute top-0 left-0 z-10 w-full h-2 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        <!-- 主題圖片 -->
        <img src="../assets/images/gamehall/gop/bg-chanlage-main.png" alt="reward" class="absolute top-0 right-0 z-0 object-cover w-4/6 h-full ">
        <p class="relative z-10 text-sm font-bold text-left text-skin-base">免費金幣賽 <br> 賺錢兑票</p>
      </div>
    </div>
  </div>
  <!-- 主題賽事 -->
  <div class="">
    <h4 class="mb-1 text-sm text-left text-skin-base">專題賽事</h4>
    <div class="">
      <!-- 報名狀態 -->
      <p class="flex h-4 mb-1">
        <sapn class="px-2 mr-1 text-xs border rounded-tl-sm border-room-kill bg-gradient-to-r from-room-kill to-room-kill-dark text-skin-base">報名中</sapn>
        <sapn class="px-2 text-xs border rounded-tr-sm border-room-kill text-skin-base">11場</sapn>
      </p>
      <!-- 內容-->
      <div class="relative bg-center bg-contain border rounded rounded-tl-none border-1 border-room-kill h-28 bg-kill">
        <!-- 高光 -->
         <div class="absolute top-0 left-0 z-10 w-full h-2 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        <!-- 漸層 + mix-blend 混合樣式-->
        <div class="absolute top-0 left-0 z-0 w-full h-full opacity-60 bg-gradient-to-r from-room-kill to-room-kill-dark mix-blend-hard-light"></div>
        <!-- 主題 -->
        <div class="absolute bottom-0 z-10 bg-center bg-cover w-36 h-36 right-2 bg-kill-main"></div>
        <!-- 內容文字 -->
        <div class="absolute z-10 top-6 left-3 drop-shadow-xl">
          <h1 class="text-xl font-bold text-skin-base">高校獵頭賽</h1>
          <span class="block w-full h-px bg-gradient-to-r from-white to-transparent"></span>
          <p class="text-sm italic font-bold text-left text-skin-base">New Event</p>
        </div>
        <!-- 玩家獲獎資訊 -->
        <div class="absolute flex items-center justify-start w-48 h-5 px-2 overflow-hidden bg-black border bottom-2 left-3 bg-opacity-60 border-1 border-room-kill rounded-2xl text-room-kill">
          <!-- ic -->
          <SpeakerphoneIcon class="flex-shrink-0 w-4 h-4 mr-1 "/>
          <!-- 獲獎資訊 -->
          <ul class="w-11/12 text-xs text-skin-base">
            <li class="flex items-center">
              <span class="inline-block w-12 truncate">playerplayerplayer</span>
              剛剛獲得 獎金
              <sapn>10元</sapn>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// heroicons
import { ChevronDoubleRightIcon } from '@heroicons/vue/solid';
import { ChevronDownIcon, SpeakerphoneIcon } from '@heroicons/vue/outline';

import Nav from '../components/nav/Nav.vue';

export default {
  name: 'GameHall',
  components: {
    ChevronDoubleRightIcon,
    ChevronDownIcon,
    SpeakerphoneIcon,
    Nav,
  },
  data() {
    return {
      // NavItemActive: true,
    };
  },

};
</script>

<style scoped lang="scss">
  .c-bgimg-blend {
    background-blend-mode: color, normal;
  }
</style>
