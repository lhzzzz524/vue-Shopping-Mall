<template>
  <navBar>
    <div slot="left" class="titleIcon" @click="back">
      <img src="~/assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in title"
        :key="index"
        @click="btnTitle(index)"
        :class="{ active: btnCurrIndex == index }"
      >
        {{ item }}
      </div>
    </div>
  </navBar>
</template>

<script>
import navBar from "components/common/navbar/NavBar.vue";
export default {
  components: {
    navBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      btnCurrIndex: 0,
    };
  },
  methods: {
    btnTitle(index) {
      this.btnCurrIndex = index;
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.titleIcon img {
  margin-top: 11px;
}
.title {
  display: flex;
}
.title div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>