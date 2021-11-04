<template>
  <div class="describe" v-if="Object.keys(goods).length">
    <h4 class="title">{{ goods.title }}</h4>
    <div class="price">
      <span class="new gap" ref="test">{{ goods.newPrice }}</span>
      <span class="old gap">{{ goods.oldPrice }}</span>
      <span
        class="desc"
        :style="{ backgroundColor: this.goods.color }"
        v-if="this.goods.desc"
        >{{ goods.desc }}</span
      >
    </div>
    <div class="star">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.services[0].name }}</span>
    </div>
    <div class="deliverGoods">
      <div v-for="(item, index) in goods.myServices" :key="index" class="item">
        <img :src="item.icon" alt="" class="img" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      newdeliver: [],
    };
  },
  created() {},
};
</script>

<style scoped>
.describe {
  padding: 10px 7px 0 10px;
  border-bottom: 4px solid rgba(204, 203, 203, 0.3);
}
.title {
  font-size: 20px;
}
.price {
  position: relative;
  margin-top: 10px;
}
.gap {
  padding-right: 9px;
}
.new {
  font-size: 24px;
}
.old {
  text-decoration: line-through;
}
.desc {
  position: absolute;
  padding: 5px;
  border-radius: 15px;
  color: white;
  font-size: 14px;
}
.star {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.deliverGoods {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  border-top: 1px solid rgba(175, 175, 175, 0.5);
}
.item {
  margin: 15px 0;
}
.img {
  margin-bottom: -2px;
  width: 15px;
  height: 15px;
}
</style>