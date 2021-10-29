<template>
  <swiper>
    <swiper-item v-for="(item, index) in Sbanners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadOver" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  props: {
    Sbanners: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
  data() {
    return {
      isTrue: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    loadOver() {
      if (!this.isTrue) {
        this.isTrue = true;
        this.$emit("imgLoadOver");
      }
    },
  },
};
</script>

<style  scoped>
</style>