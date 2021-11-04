<template>
  <div class="shop">
    <div class="shopName">
      <img :src="shop.logo" alt="" />
      <div>{{ shop.name }}</div>
    </div>
    <div class="star">
      <div class="left">
        <div class="total">
          <div class="text">{{ shop.total }}</div>
          <div>总销量</div>
        </div>
        <div class="total">
          <div class="text">{{ shop.allTreasure }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="long"></div>
      <div class="right">
        <div v-for="(item, index) in shop.score" :key="index" class="score">
          <div class="rText">{{ item.name }}</div>
          <div class="fixed">{{ item.score }}</div>
          <div class="bgc">{{ item.isBetter ? "高" : "低" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop {
  padding: 10px 0 0 10px;
}
.shopName {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.shopName img {
  width: 70px;
  height: 70px;
  margin-right: 10px;
}
.shopName div {
  font-size: 18px;
}
.star {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.left {
  display: flex;
}
.text {
  text-align: center;
  font-size: 18px;
  padding-bottom: 5px;
}
.total {
  font-size: 16px;
  padding: 15px;
}
.long {
  width: 1px;
  height: 40px;
  border-left: 1px solid rgb(206, 206, 206);
}
.score {
  display: flex;
  padding-left: 30px;
}
.rText {
  padding: 0 5px 10px 0;
}
.fixed {
  width: 34px;
  margin-right: 5px;
}
.bgc {
  width: 21px;
  height: 18px;
  padding-top: 1px;
  text-align: center;
  color: white;
  background-color: red;
}
</style>