<template>
<!-- gamehall -->
<div class="min-h-screen">
  <!-- banner -->
  <div class="w-full border-2 border-red-900 h-slideBanners ">
    <img src="" alt="" class="object-cover w-full h-full">
  </div>
  <!-- nav -->
  <nav class="text-skin-base">
    <ul>
      <li>遊戲Game</li>
      <li>遊戲Game</li>
      <li>遊戲Game</li>
      <li>遊戲Game</li>
      <li>遊戲Game</li>
    </ul>
  </nav>
  <!-- rush bar -->
  <div>
    <p>你有2場可快速參賽！</p>
    <BeakerIcon class="w-5 h-5 text-blue-500"/>
  </div>
  <!-- daily project -->
  <div class="">
    <div>
      <img src="" alt="">
      <p>免費金幣賽</p>
    </div>
    <div>
      <img src="" alt="">
      <p>金幣競技賽</p>
    </div>
  </div>
</div>
</template>

<script>
// heroicons
import { BeakerIcon } from '@heroicons/vue/solid';

export default {
  name: 'GameHall',
  components: {
    BeakerIcon,
  },
};
</script>

<style lang="scss">
  // .banner {
  //   height: 142px;
  // }
</style>
