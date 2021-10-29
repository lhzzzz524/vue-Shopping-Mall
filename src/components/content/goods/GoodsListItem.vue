<template>
  <div class="GLIitem">
    <img :src="GLIitem.show.img" @load="imgLoad" @click="btnCilck" alt="" />
    <div class="goods-info">
      <p>{{ GLIitem.title }}</p>
      <span class="price">{{ GLIitem.price }}</span>
      <span class="collect">{{ GLIitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GLIitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    btnCilck() {
      this.$router.push(`/detail/${this.GLIitem.iid}`);
    },
  },
};
</script>

<style  scoped>
.GLIitem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.GLIitem img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>