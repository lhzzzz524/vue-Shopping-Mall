<template>
  <navBar></navBar>
  <!-- <swiper></swiper> -->
</template>

<script>
import navBar from "./ChildComps/detailNavbar.vue";
import swiper from "./ChildComps/detailSwiper.vue";
import { getDetail } from "network/detail";
export default {
  data() {
    return {
      myId: "",
    };
  },
  components: {
    navBar,
    swiper,
  },
  methods: {
    async getDetail() {
      const datailData = await getDetail(this.myId);
      console.log(datailData);
    },
  },
  created() {
    this.myId = this.$route.params.id;
    this.getDetail();
  },
};
</script>

<style scoped>
</style>