<template>
  <div class="recommend">
    <div
      v-for="(item, index) in Rrecommend"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Rrecommend: Array,
    default() {
      return [];
    },
  },
};
</script>

<style  scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  padding: 0 3px;
}
.recommend-item img {
  width: 100%;
  height: 80%;
  margin-bottom: 6px;
}
</style>