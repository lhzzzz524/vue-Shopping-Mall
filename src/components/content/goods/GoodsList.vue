<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in Ggoods"
      :key="index"
      :GLIitem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsListItem,
  },
  props: {
    Ggoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 15px;
}
</style>