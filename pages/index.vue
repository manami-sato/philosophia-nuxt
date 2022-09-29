<template lang="pug">
	//- transition(name="scrollAction")
		main(v-if="indexFlag", @touchstart="handleScroll").index
			ul.index__img
				li(v-for="(img, i) in indexImg", :key="img", v-show="coverImgDisplay === i")
					transition(name="mainImg")
						img(:src="img", alt="Philosophia", v-show="coverImgDisplay === i")
			div.index__ttl
				h1 {{title}}
				p {{desc}}
			div.index__mouse scroll
</template>

<script>
import Navigation from '@/src/components/Navigation.vue';
import UpdateNews from '@/src/components/UpdateNews.vue';
import Mixin from '@/src/mixins/mixin.js';
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
  name: 'index',
  components: {
    Navigation,
    UpdateNews,
  },
  mixins: [Mixin],
  data() {
    return {
      res: [],
      coverImgDisplay: 0,
      indexFlag: true,
    };
  },
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  // beforeDestroy() {
  //   console.log(this.indexFlag);
  // },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$router.push({
      path: '/biography/2022',
    });
    // setTimeout(this.mainImgSlide, 4000);
    // this.SPindex();
  },
  methods: {
    SPindex() {
      // SP版indexの処理
      if (window.matchMedia('(max-width: 480px)').matches) {
        // 高さを画面いっぱいに
        this.height = window.innerHeight;
        document.querySelector('main').style.height = this.height + `px`;
      }
    },
    pageMove() {
      this.$router.push({
        path: '/biography/2022',
      });
    },
    handleScroll() {
      console.log('ok');
      this.indexFlag = false;
      setTimeout(this.pageMove, 500);
    },
    mainImgSlide() {
      this.coverImgDisplay++;
      if (this.coverImgDisplay === this.indexImg.length) {
        this.coverImgDisplay = 0;
      }
      setTimeout(this.mainImgSlide, 5000);
    },
  },
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh + 1px);
  background: #000;
  position: relative;
  opacity: 1;
  transform: translateY(0);
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: -3;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.6);
      mix-blend-mode: hue;
      position: absolute;
      top: 0;
      left: 0;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
  }
  &__ttl {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 90vw;
    max-width: 1000px;
    color: $white;
    mix-blend-mode: difference;
    margin: 0 auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    h1 {
      font-family: $logoFont;
      font-size: 5rem;
      z-index: 5;
      background: transparent;
    }
    p {
      font-family: $navFont;
      font-size: 1.5rem;
      padding-top: 10px;
      line-height: 20px;
      z-index: 5;
      width: 202px;
      text-align: right;
      font-weight: bold;
    }
  }
  &__mouse {
    color: $white;
    font-size: 1.6rem;
    font-family: $logoFont;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 0 20px rgba($color: #000000, $alpha: 1);
    position: absolute;
    right: 0;
    bottom: 6vh;
    left: 0;
    &::before {
      content: '';
      display: block;
      width: 32px;
      height: 56px;
      background: transparent;
      border: $white 3px solid;
      border-radius: 16px;
      margin: auto;
      position: absolute;
      right: 0;
      bottom: 40px;
      left: 0;
    }
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background: $white;
      border-radius: 4px;
      margin: 12px auto 0;
      position: absolute;
      right: 0;
      bottom: 78px;
      left: 0;
      animation: circlemove 1.6s ease-in-out infinite,
        cirlemovehide 1.6s ease-out infinite;
    }
  }
}
/*下からの距離が変化して丸の全体が上から下に動く*/
@keyframes circlemove {
  0% {
    bottom: 78px;
  }
  100% {
    bottom: 50px;
  }
}
/*上から下にかけて丸が透過→不透明→透過する*/
@keyframes cirlemovehide {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}
/* fv画像のフェードイン */
.mainImg-enter-active {
  transition: opacity 0.4s;
}
.mainImg-leave-active {
  position: absolute;
}
.mainImg-enter,
.mainImg-leave-to {
  opacity: 0;
}

// indexのフェードイン
.scrollAction-leave-active {
  // animation: scrollActionAnimation 0.5s;
  // animation-delay: 0.1s;
  transition: 0.5s opacity, 0.5s transform;
}
.scrollAction-leave-to {
  transform: translateY(-24px);
  opacity: 0;
}

@keyframes scrollActionAnimation {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  // 20%{
  //   transform: translateY(0);
  //   opacity: 0;
  // }
  100% {
    transform: translateY(-40px);
    opacity: 0;
  }
}
</style>
