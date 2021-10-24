<template>
  <div class="tuku">
    <daohanglan :title="['效果图首页', '家具美图', '精美图册']"></daohanglan>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./test/fenlei/fenleiitempc.vue";
import Daohanglan from "./test/daohanglan.vue";
export default {
  data() {
    return {};
  },
  components: {
    Daohanglan,
    MainTabBar,
  },
};
</script>

<style  scoped>
</style>