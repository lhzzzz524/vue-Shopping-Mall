<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";
export default {
  props: {
    SprobeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: "",
    };
  },
  methods: {
    scrollTop(x, y, time) {
      this.scroll.scrollTo(x, y, time); //scrollto方法  x 横轴坐标  y 纵轴坐标 time 滚动动画执行的时长
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      observeDOM: true, //会检测scroller内部DOM变化，自动调用refresh方法重新计算来保证滚动的正确性。它会额外增加一些性能开销
      click: true,
      probeType: this.SprobeType,
    });
    this.scroll.on("scroll", (Yscroll) => {
      //独立组件 别的组件可能需要也可能不需要调用这个事件 所以自定义事件发射到home组件 来完成这个动作
      this.$emit("Scroll", Yscroll);
    });
  },
};
</script>

<style  scoped>
</style>