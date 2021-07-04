<template>
  <div id="home">
    <nav-bar class="home-nav-center"><div slot="center">购物街</div></nav-bar>
    <home-swiper :Sbanners="banners" />
    <home-recommend :Rrecommend="recommends"></home-recommend>
    <home-feature />
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCopms/HomeSwiper";
import HomeRecommend from "./childCopms/HomeRecommend.vue";
import HomeFeature from "./childCopms/HomeFeature.vue";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style  scoped>
.home-nav-center {
  background-color: var(--color-tint);
  color: #fff;
}
</style>