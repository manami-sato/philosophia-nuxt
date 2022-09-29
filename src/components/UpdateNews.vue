<template lang="pug">
	div.news {{newsDate}} : {{newsPlace}} photos have been uploaded.
</template>

<script defer>
import Mixin from '@/src/mixins/mixin.js';
export default {
  mixins: [Mixin],
  data() {
    return {
      res: [],
      newsPlace: '',
      newsDate: '',
      newsPhotos: '',
    };
  },
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.news {
  font-size: 1.5rem;
  font-family: $navFont;
}
</style>
