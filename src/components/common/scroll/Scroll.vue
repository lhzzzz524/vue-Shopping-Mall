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
    isPullUpload: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: "",
    };
  },
  methods: {
    scrollTop(x, y, time) {
      this.scroll?.scrollTo(x, y, time); //scrollto方法  x 横轴坐标  y 纵轴坐标 time 滚动动画执行的时长
    },
    finishPullUp() {
      this.scroll?.finishPullUp();
    },
    refresh() {
      // console.log("---");
      this.scroll.refresh();
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      observeDOM: true, //它无法探测到 img 标签的是否加载完成，因此对于 content 内部含有不确定高度的图片，需要等图片加载完成再调用 bs.refresh() 来重新计算可滚动尺寸。
      // observeImage: true, //v2.1.0 版本后 observe-image来探测 img 标签的加载，因此这两者可以搭配起来 就不需要每张图片加载重新计算高度 这里还是采用计算图片高度方法
      click: true,
      probeType: this.SprobeType,
      pullUpLoad: this.isPullUpload,
    });
    if (this.SprobeType === 2 || this.SprobeType === 3) {
      this.scroll.on("scroll", (Yscroll) => {
        this.$emit("Scroll", Yscroll);
      });
    }
    if (this.isPullUpload) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore");
      });
    }
  },
};
</script>

<style  scoped>
</style>