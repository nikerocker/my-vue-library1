<template>
  <div class="banner" :style="bannerStyles" :class="`banner__${position}`">
    <slot></slot>
  </div>
</template>
<script>
const defaultStyles = {
  left: 0,
  right: 0,
  // margin: auto,
};
export default {
  name: 'BannerComponent',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(position) {
        return ['top', 'bottom'].indexOf(position) > -1;
      },
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles,
      },
    };
  },
};
</script>
<style scoped>
.banner {
	 padding: 12px;
	 background-color: #fcf6cd;
	 color: #f6a623;
	 text-align: left;
	 position: fixed;
   text-align: center;
	 z-index: 2;
}
 .banner__top {
	 top: 0;
}
 .banner__bottom {
	 bottom: 0;
}
</style>