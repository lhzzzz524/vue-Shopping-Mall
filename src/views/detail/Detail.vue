<template>
  <div>
    <navBar></navBar>
    <swiper :swiperImg="swiperImg"></swiper>
    <describe :goods="goods"></describe>
  </div>
</template>

<script>
import navBar from "./ChildComps/detailNavbar.vue";
import swiper from "./ChildComps/detailSwiper.vue";
import describe from "./ChildComps/detailDescribe.vue";
import { getDetail, Goods } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      myId: "",
      swiperImg: [],
      goods: {},
    };
  },
  components: {
    navBar,
    swiper,
    describe,
  },
  methods: {
    async getDetail() {
      const datailData = await getDetail(this.myId);
      if (datailData.status === 200 && datailData.data?.result) {
        const myData = datailData.data.result;
        const myArr = [...myData.shopInfo.services];
        this.swiperImg = myData.itemInfo.topImages; //轮播图
        myArr.shift();
        this.goods = new Goods(
          myData.itemInfo,
          myData.columns,
          myData.shopInfo.services,
          myArr
        ); //整合商品、运费等描述
        console.log(datailData);
        console.log("父", this.goods);
      }
    },
  },
  created() {
    this.myId = this.$route.params.id;
    this.getDetail(); //详情页数据
  },
};
</script>

<style scoped>
</style>