<template lang="pug">
	main
		Navigation(:aboutFlag="false", :getYear="id")
		transition(name="pageFadeIn")
			main(v-show="pageFadeInFlag").bio
				ul.bio__thumbnail
					li(v-for="(item, i) in data" :key="i", :class="{vertical:item.vertical}", @click="modalDisplay(i)").bio__thumbnail--contents
						img(:src="`${thumbnailPath}img_thumbnail_${item.contentId}.jpg`",  :alt="item.alt")
				PageFoot
		transition(name="modalFadeIn")
			div(v-if="modalDisplayFlag").bio__modal
				div(@click="modalDisplay").bio__modal--back
				div.bio__modal--img
					ul.bio__modal--img--list
						transition(name="modalImgFadeIn")
							li(v-for="(item, i) in data[getItem].img" :key="i", v-if="imgDisplay === i")
								img(:src="`${imgPath}img_${data[getItem].contentId}_${imgIndex}.jpg`", :alt="data[getItem].alt")
					div.bio__modal--img--info
						div.bio__modal--date {{data[getItem].date.split("T")[0]}}
						div.circle
							div(v-for="(n, i) in data[getItem].img" :key="i" @click="onCircle(i)" :class="{setCircle: imgDisplay === i}")
						div.bio__modal--place {{data[getItem].place}}
				div.bio__modal--arrow
					div(@click="prev", v-if="arrowFlag").bio__modal--arrow--prev
					div(@click="next", v-if="arrowFlag").bio__modal--arrow--next
		ScrollTop(:mediaFlag="mediaFlag")
</template>

<script>
import Navigation from '@/src/components/Navigation.vue';
import PageFoot from '@/src/components/PageFoot.vue';
import ScrollTop from '@/src/components/ScrollTop.vue';
import Mixin from '@/src/mixins/mixin.js';
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
  name: 'biography',
  components: {
    Navigation,
    PageFoot,
    ScrollTop,
  },
  mixins: [Mixin],
  async asyncData({ $microcms, params }) {
    const res = await $microcms.get({
      endpoint: 'data',
      queries: { limit: 100 },
    });
    const id = Number(params.id);
    const data = res.contents
      .reverse()
      .filter((item) => Number(item.year[0].id) === id);
    return { data, id };
  },
  data() {
    return {
      id: 0,
      data: [],
      flag: 0,
      modalDisplayFlag: false, // モーダル出すか出さないか
      getItem: 0,
      imgDisplay: 0, // 現在表示している○○枚目
      imgIndex: 0,
      modalHeight: 0, // モーダルの高さ
      mediaFlag: false, // PCか否か
      pageFadeInFlag: false,
      imgNumber: [],
      arrowFlag: true,
    };
  },
  head() {
    return {
      title: `${this.id} Biography｜Philosophia`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.id} Biography｜Philosophia`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.philosophia000.xyz/biography/${this.id}`,
        },
      ],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    if (window.matchMedia('(min-width: 481px)').matches) {
      this.mediaFlag = true;
    }
    this.pageFadeInFlag = !this.pageFadeInFlag;
  },
  beforeDestroy() {
    this.pageFadeInFlag = !this.pageFadeInFlag;
  },
  methods: {
    number() {
      if (this.imgDisplay < 10) {
        this.imgIndex = '0' + (this.imgDisplay + 1);
      }
    },
    modalDisplay(i) {
      this.getItem = i;
      this.modalDisplayFlag = !this.modalDisplayFlag;
      this.imgDisplay = 0;
      this.number();
    },
    next() {
      this.imgDisplay++;
      if (this.imgDisplay === this.data[this.getItem].img) {
        this.imgDisplay = 0;
      }
      this.number();
    },
    prev() {
      this.imgDisplay--;
      if (this.imgDisplay < 0) {
        this.imgDisplay = this.data[this.getItem].img - 1;
      }
      this.number();
    },
    onCircle(i) {
      this.imgDisplay = i;
    },
  },
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.bio {
  align-items: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  &__thumbnail {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: fit-content;
    padding: 160px 0 0 0;
    @media screen and (min-width: 481px) {
      gap: 16px;
    }
    @media screen and (min-width: 1081px) {
      width: calc(320px * 3 + 16px * 2);
    }
    @media screen and (max-width: 1120px) {
      width: calc(320px * 2 + 16px * 1);
    }
    @media screen and (max-width: 980px) {
      width: calc(320px * 2 + 16px * 1);
    }
    @media screen and (max-width: 800px) {
      width: 320px;
    }
    @media screen and (max-width: 480px) {
      justify-content: flex-start;
      gap: 3px;
      width: 100vw;
      padding: 160px 0 0;
      li {
        width: calc((100vw - 3px) / 2);
        height: calc((100vw - 3px) / 2);
      }
    }
    &--contents {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      @media screen and (max-width: 480px) {
        width: 200px;
        height: 200px;
      }
      @media screen and (min-width: 481px) {
        // display: flex;
        // justify-content: center;
        width: 320px;
        height: 320px;
        position: relative;
        // img {
        // width: 100%;
        // height: 100%;
        // object-fit: cover;
        // }
        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background: $accentColor;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.7;
          transition: 0.2s opacity;
          mix-blend-mode: hue;
					z-index: 2;
        }
        &:hover {
          &::before {
            opacity: 0;
          }
        }
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    img {
      height: 100%;
      width: 100%;
      transform: scale(1);
      object-fit: cover;
      transition: 0.6s transform;
    }
  }
  &__wrap {
    @media screen and (max-width: 480px) {
      margin: 60px 0 50px;
    }
  }
  &__modal {
    /*-------------------------------
		モーダルウィンドウここから
		-------------------------------*/
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0 0 0 0;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 50;
    &--img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media screen and (min-width: 481px) {
        height: 80vh;
        width: 70%;
        max-width: 1200px;
        img {
          height: calc(80vh - 64px);
          width: 100%;
          object-fit: contain;
        }
      }
      @media screen and (max-width: 480px) {
        height: 60vh;
        width: 100%;
        margin: 0 auto 40px;
        &--list {
          width: 100%;
          height: 100%;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            img {
              height: 100%;
              width: 100%;
              object-fit: contain;
            }
          }
        }
      }
      &--info {
        font-family: 'Crimson Text', serif;
        @media screen and (min-width: 481px) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          font-size: 1.5rem;
          min-height: 50px;
          padding: 0 3%;
        }
        @media screen and (max-width: 480px) {
          display: grid;
          grid-template-columns: auto auto;
          grid-template-rows: auto auto;
          width: 90%;
          margin: 0 auto;
          padding: 16px 0 0;
        }
      }
    }
    &--date {
      @media screen and (min-width: 481px) {
        width: 20%;
      }
      @media screen and (max-width: 480px) {
        grid-column: 1;
        grid-row: 1;
      }
    }
    &--place {
      text-align: right;
      @media screen and (min-width: 481px) {
        width: 20%;
      }
      @media screen and (max-width: 480px) {
        grid-column: 2;
        grid-row: 1;
      }
    }
    &--back {
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 60;
      @media screen and (min-width: 481px) {
        right: 10%;
        top: 10%;
      }
      @media screen and (max-width: 480px) {
        right: 3%;
        top: 3%;
      }
      &:hover {
        &::before {
          background-color: $partsHoverColor;
        }
        &::after {
          background-color: $partsHoverColor;
        }
      }
      &::before {
        @include backSet;
        transform: rotateZ(45deg);
      }
      &::after {
        @include backSet;
        transform: rotateZ(135deg);
      }
    }
    &--arrow {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: auto;
      position: absolute;
      z-index: -1;
      @media screen and (min-width: 481px) {
        height: 100vh;
        inset: 0 0 0 0;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
        inset: auto 0 80px 0;
      }
      &--prev {
        @include modalBorderSet;
        &::before {
          transform: rotateZ(45deg);
          margin: 0 0 24px;
        }
        &::after {
          transform: rotateZ(135deg);
          margin: 24px 0 0;
        }
      }
      &--next {
        @include modalBorderSet;
        &::before {
          transform: rotateZ(135deg);
          margin: 0 0 24px;
        }
        &::after {
          transform: rotateZ(45deg);
          margin: 24px 0 0;
        }
      }
    }
  }
}
.modalFadeIn-enter-active,
.modalFadeIn-leave-active,
.modalImgFadeIn-enter-active {
  transition: opacity 0.2s;
}
.modalImgFadeIn-leave-active {
  position: absolute;
}
.modalFadeIn-enter,
.modalFadeIn-leave-to,
.modalImgFadeIn-enter,
.modalImgFadeIn-leave-to {
  opacity: 0;
}
/*-------------------------------
	モーダルウィンドウここまで
-------------------------------*/
// .vertical {
//   &:hover {
//     img {
//       height: 170%;
//       width: 170%;
//       object-fit: cover;
//     }
//   }
// }
.circle {
  display: flex;
  margin-top: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
    grid-column: 1/3;
    grid-row: 2;
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }
  div {
    background: rgb(199, 199, 199);
    transition: 0.2s background;
    border-radius: 7px;
    width: 12px;
    height: 12px;
    margin-right: 15px;
    &:last-child {
      margin: 0;
    }
    &:hover {
      background: rgb(119, 119, 119);
    }
  }
  .setCircle {
    background-color: rgb(119, 119, 119);
    animation: imgTransition 0.3s;
  }
}
</style>
