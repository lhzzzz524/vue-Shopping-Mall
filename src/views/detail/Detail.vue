<template>
  <div>{{ myId }}</div>
</template>

<script>
export default {
  data() {
    return {
      myId: "",
    };
  },
  mounted() {
    this.myId = this.$route.params.id;
  },
};
</script>

<style scoped>
</style>