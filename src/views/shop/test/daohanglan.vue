<template>
  <div class="daohang">
    <span
      v-for="(item, index) in title"
      :key="index"
      class="daohangitem"
      :class="{ active: index == currenactive }"
      @click="btnItem(index)"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    title: Array,
    default() {
      return [];
    },
  },
  data() {
    return {
      currenactive: 0,
    };
  },
  methods: {
    btnItem(index) {
      this.currenactive = index;
    },
  },
};
</script>

<style  scoped>
.daohang {
  display: flex;
}
.daohangitem {
  flex: 1;
  width: 70px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  /* margin-right: 66px; */
  color: #999;
  font-family: PingFang SC;
}
.active {
  color: #333333;
}
</style>