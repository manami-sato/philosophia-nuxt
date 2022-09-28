<template lang="pug">
	a(href="#" v-if="mediaFlag").scrollTop
		svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 36.3 109.8", style="enable-background:new 0 0 36.3 109.8;", xml:space="preserve")
			g
				polygon(points="1,109.8 0,109.8 0,0 36.3,36.2 35.5,37 1,2.4").bio__scrollTop--arrow
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
  name: 'scrollTop',
  // eslint-disable-next-line vue/require-prop-types
  props: ['mediaFlag'],
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.scrollTop {
  /*-------------------------------
		スクロールここから
	-------------------------------*/
  display: block;
  position: fixed;
  bottom: 50px;
  right: 30px;
  height: 150px;
  width: 100px;
  opacity: 1;
  transition: 0.2s opacity;
  @media screen and (min-width: 481px) {
    right: 32px;
  }
  @media screen and (max-width: 480px) {
    right: 0;
  }
  &--arrow {
    fill: #282828;
  }
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover {
    opacity: 0.5;
  }
}
</style>
