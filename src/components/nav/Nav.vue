<template>
<nav class="flex flex-wrap items-center content-center h-14">
  <!-- eslint-disable max-len -->
  <ul class="flex items-end h-full overflow-hidden overflow-x-auto text-base flex-full text-skin-muted">
    <!-- active 樣式 -->
    <li class="relative flex items-end h-8 px-1 mr-2 active">
      <a href="#" class="mb-1"> 和平精英 </a>
    </li>
    <!-- 一般樣式 -->
    <li v-for="(items, index) in NavItems" :key="index" @click="toggleActive(index)"
    class="relative flex items-end h-8 px-1 mr-2"
    :class=" NavItemActive ? 'active' : ''"
    >
      <a href="#" class="mb-1"> {{ items }} </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      NavItems: ['傳說對決', '英雄聯盟', '鬥地主'],
      NavItemActive: false,
    };
  },
  methods: {
    toggleActive(idx) {
      // 如何取得當前順序與如何判斷當是目前所在時讓NavItemActive 為 true
      // this.$emit("tr", this.index);Z
      console.log(idx);
      // console.log(this.$emit);
      // console.log(this.classTogle());
    },
    // classTogle() {
    //   return 'bg-blue-500';
    // },
  },
};
</script>
<style scoped lang="scss">
nav {
  li {

    &::before {
      content: '';
      position: absolute;
      bottom: -30%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 2rem;
      border: 3px solid transparent;
      border-top: 4px solid var(--color-secondary-300);
      opacity: 0;
      transition: bottom .8s, opacity .3s;
    }

    &.active {
      @apply font-bold text-lg text-skin-base;

      &::before {
        bottom: 0;
        opacity: 1;
      }
    }
  }
}

</style>
