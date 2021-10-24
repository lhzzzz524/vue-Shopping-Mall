<template>
  <div class="fenlei-item">
    <div class="fenlei-item-text"><slot name="fenlei-item-text"></slot></div>
    <div class="fenlei-item-pc"><slot name="fenlei-item-pc"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.fenlei-item {
  margin-bottom: 20px;
}
.fenlei-item-text span {
  font-size: 16px;
  width: 32px;
  height: 22px;
}
.fenlei-item-pc div {
  width: 300px;
  height: 100px;
  border: 1px solid red;
}
</style>