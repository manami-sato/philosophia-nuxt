<template lang="pug">
	main
		Navigation(:aboutFlag="false", :getYear="0")
		transition(name="pageFadeIn")
			div.notFound
				h2.notFound__heading Page not found
				p.notFound__text 申し訳ありません。お探しのページは見つかりませんでした。
				PageFoot
</template>

<script>
import Navigation from '@/src/components/Navigation.vue';
import PageFoot from '@/src/components/PageFoot.vue';
import Mixin from '@/src/mixins/mixin.js';
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
  name: 'About',
  components: {
    Navigation,
    PageFoot,
  },
  mixins: [Mixin],
  head() {
    return {
      title: 'Page not found｜Philosophia',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Page not found｜Philosophia',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.philosophia000.xyz/404',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.notFound {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 80vw;
  max-width: 800px;
  margin: 0 auto;
  padding: 200px 0 0;
  &__heading {
    font-family: $navFont;
    font-size: 2.2rem;
  }
  &__text {
    color: #444;
  }
}
</style>
