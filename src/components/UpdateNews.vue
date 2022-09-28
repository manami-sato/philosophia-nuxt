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
  mounted() {
    // fetch(`${this.productsData}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     this.res = json.photo[json.photo.length - 1];
    //     this.newsPlace = this.res.place;
    //     this.newsDate = this.res.date;
    //     this.newsPhotos = this.res.img;
    //   })
    // .catch((err) => {
    //   console.log(err);
    // });
  },
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.news {
  font-size: 1.5rem;
  font-family: $font2;
}
</style>
