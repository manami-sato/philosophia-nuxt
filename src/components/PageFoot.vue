<template lang="pug">
	footer.foot
		ul.foot__shere
			li(v-for="(item, i) in link", :key="i").foot__shere--icon
				a(:href="item.url", target="_blank")
					svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 400 400", style="enable-background:new 0 0 400 400;", xml:space="preserve")
						path(:d="item.path")
		small.foot__copy &copy; 2021 {{enName}}.
</template>
<script>
import Mixin from '@/src/mixins/mixin.js';
export default {
  mixins: [Mixin],
  data() {
    return {
      link: [
        {
          url: 'https://twitter.com/intent/tweet?url=https://www.philosophia000.xyz/&text=Philosophia%20-%20%E6%9C%88%E6%B3%A2%E2%80%99s%20Photography%20Portfolio',
          path: 'M200,0C89.5,0,0,89.5,0,200s89.5,200,200,200s200-89.5,200-200S310.5,0,200,0z M300.5,162.1 c0.1,2.1,0.1,4.2,0.1,6.2c0,63.7-48.5,137.2-137.2,137.2c-26.2,0-51.9-7.5-73.9-21.7c3.8,0.4,7.7,0.7,11.5,0.7 c21.7,0,42.8-7.2,59.8-20.6c-20.6-0.4-38.7-13.9-45-33.5c7.2,1.4,14.7,1.1,21.8-0.8c-22.5-4.5-38.7-24.3-38.7-47.3 c0-0.2,0-0.4,0-0.6c6.7,3.7,14.2,5.8,21.8,6c-21.2-14.2-27.7-42.3-14.9-64.4c24.5,30.1,60.6,48.4,99.4,50.4 c-3.9-16.8,1.4-34.4,14-46.2c19.4-18.2,50-17.2,68.2,2.2c10.8-2.1,21.1-6.1,30.6-11.7c-3.6,11.2-11.1,20.6-21.2,26.7 c9.6-1.1,18.9-3.7,27.7-7.6C318,146.8,309.9,155.2,300.5,162.1z',
        },
        {
          url: 'https://www.facebook.com/sharer/sharer.php?u=https://www.philosophia000.xyz/',
          path: 'M200,0C89.5,0,0,90.1,0,201.2C0,301.6,73.1,384.9,168.8,400V259.4H118v-58.2h50.8v-44.3c0-50.4,29.8-78.3,75.5-78.3c21.5,0,44.1,3.8,44.8,3.9l0,0V132h-25.2c-24.8,0-32.6,15.5-32.6,31.4v37.7h55.5l-8.9,58.2h-46.6V400C326.9,384.9,400,301.7,400,201.2C400,90.1,310.5,0,200,0z',
        },
      ],
    };
  },
};
// Philosophia - 月波’s Photography Portfolio
</script>
<style lang="scss">
@import '@/src/assets/scss/common.scss';
.foot {
  padding: 64px 0 88px;
  &__shere {
    display: flex;
    justify-content: center;
    &--icon {
      display: block;
      width: 40px;
      height: 40px;
      margin: 0 16px 0 0;
      &:last-of-type {
        margin: 0;
      }
      &:hover {
        path {
          opacity: 0.5;
        }
      }
    }
    path {
      width: 40px;
      height: 40px;
      fill: $black;
      opacity: 1;
      transition: 0.2s opacity;
    }
  }
  &__copy {
    display: block;
    width: max-content;
    font-size: 1.2rem;
    text-align: center;
    margin: 24px auto 0;
  }
}
</style>
