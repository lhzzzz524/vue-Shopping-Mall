<template>
  <div class="tab-control">
    <span
      v-for="(item, index) in Ttitle"
      :key="index"
      class="tab-control-item"
      @click="clickBtn(index)"
      :class="{ active: currentIndex == index }"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    Ttitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    clickBtn(index) {
      this.currentIndex = index;
      //this.$emit("TabClick", index);
    },
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  margin: 0 36px;
}
.active {
  border-bottom: 2px solid var(--color-high-text);
  color: var(--color-high-text);
}
/* .tab-control-item:hover { 移动端不行
  border-bottom: 2px solid var(--color-high-text);
  color: var(--color-high-text);
} */
</style>