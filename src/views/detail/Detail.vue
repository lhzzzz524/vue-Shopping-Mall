<template>
  <div id="detail">
    <navBar class="detailNavbar" @clickTitle="clickTitle"></navBar>
    <scroll class="detailContent" ref="scroll" :SprobeType="3">
      <swiper :swiperImg="swiperImg"></swiper>
      <describe :goods="goods"></describe>
      <shop :shop="shop"></shop>
      <detailGoodInfo
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
      ></detailGoodInfo>
      <detailParamInfo :paramInfo="paramsData" ref="params"></detailParamInfo>
    </scroll>
  </div>
</template>

<script>
import navBar from "./ChildComps/detailNavbar.vue";
import swiper from "./ChildComps/detailSwiper.vue";
import shop from "./ChildComps/detailShop.vue";
import describe from "./ChildComps/detailDescribe.vue";
import detailGoodInfo from "./ChildComps/detailGoodInfo.vue";
import detailParamInfo from "./ChildComps/detailParamInfo.vue";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import scroll from "../../components/common/scroll/Scroll.vue";
export default {
  name: "Detail",
  data() {
    return {
      myId: "",
      swiperImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsData: {},
      topYs: [0],
      getTopYs: null,
    };
  },
  components: {
    navBar,
    swiper,
    describe,
    scroll,
    shop,
    detailGoodInfo,
    detailParamInfo,
  },
  methods: {
    async getDetail() {
      const datailData = await getDetail(this.myId);
      if (datailData.status === 200 && datailData.data?.result) {
        const myData = datailData.data.result;
        const myArr = [...myData.shopInfo.services];
        const myTotal = (myData.shopInfo.cSells / 10000).toFixed(1) + "万";
        this.swiperImg = myData.itemInfo.topImages; //轮播图
        myArr.shift();
        this.goods = new Goods( //整合商品、运费等描述
          myData.itemInfo,
          myData.columns,
          myData.shopInfo.services,
          myArr
        );
        this.shop = new Shop(myData.shopInfo, myTotal); //商店销量、宝贝数量等
        myData.detailInfo.detailImage[0].list.splice(5);
        this.detailInfo = myData.detailInfo;
        this.paramsData = new GoodsParam(
          myData.itemParams.info,
          myData.itemParams.rule
        ); //商品参数
      }
    },
    clickTitle(index) {
      this.$refs.scroll.scrollTop(0, -this.topYs[index], 100);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      this.topYs.push(this.$refs.params.$el.offsetTop);
    },
  },
  created() {
    this.myId = this.$route.params.id;
    this.getDetail(); //详情页数据
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 999;
  height: 100vh;
  background-color: #fff;
}
.detailNavbar {
  position: relative;
  z-index: 9;
}
.detailContent {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>