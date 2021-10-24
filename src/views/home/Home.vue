<template>
  <div id="home">
    <nav-bar class="home-nav-center"><div slot="center">购物街</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :SprobeType="3"
      @Scroll="ContentScroll"
    >
      <home-swiper :Sbanners="banners" />
      <home-recommend :Rrecommend="recommends"></home-recommend>
      <home-feature />
      <tab-control
        :Ttitle="['流行', '新款', '精选']"
        @TabClick="TabClick"
        class="tab-control"
      ></tab-control>
      <goods-list :Ggoods="goods[type].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";

import HomeSwiper from "./childCopms/HomeSwiper";
import HomeRecommend from "./childCopms/HomeRecommend.vue";
import HomeFeature from "./childCopms/HomeFeature.vue";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        //请求数据 数据结构
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      type: "pop",
      isShow: false,
    };
  },
  created() {
    //只实现功能 具体怎么实现 放在methods
    this.getHomeMultidata(); //请求多个数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //事件监听相关方法
    TabClick(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
    },

    backTop() {
      this.$refs.scroll.scrollTop(0, 0, 600);
    },
    ContentScroll(Yscroll) {
      -Yscroll.y > 1000 ? (this.isShow = true) : (this.isShow = false);
    },

    //网络请求相关函数
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1; //因为page为0 所以要先加1使函数拿到服务器里第一页的数据
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list); //把拿到的第一页得数据加到goods里面得list
        this.goods[type].page = page; //因为已经有数据 所以goods里面的page等于服务器里的page
        console.log(this.goods);
      });
    },
  },
};
</script>

<style  scoped>
#home {
  position: relative;
  /* 
  视口单位中的“视口”，桌面端指的是浏览器的可视区域；移动端指的就是Viewport中的Layout Viewport(布局视口)
  vh	1vh = 视口高度的1%
  */
  height: 100vh;
}
.home-nav-center {
  background-color: var(--color-tint);
  color: #fff;
}
/* 方法一：
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
*/
/*方法二：calc动态计算长度值。 */
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>