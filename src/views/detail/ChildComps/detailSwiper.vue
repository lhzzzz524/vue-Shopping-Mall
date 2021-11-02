<template>
  <swiper>
    <swiperItem
      class="swiperImg"
      v-for="(item, index) in swiperImg"
      :key="index"
    >
      <img :src="item" alt="" />
    </swiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    swiperImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.swiperImg {
  height: 400px;
  overflow: hidden;
}
</style>