<template lang="pug">
	nav.nav
		h1.nav__heading
			NuxtLink(:to="{name:'index'}", target="page").nav__heading--link Philosophia
		div(:class="navFlag ? 'SPNavActive' : ''").nav__link
			ul.nav__link--list
				li(v-for="(item, i) in year", :key="i", :class="{navActive:Number(item) === Number(getYear)}").nav__link--list--item
					NuxtLink(:to="`/biography/${item}`") {{item}}
			NuxtLink(to="/about", :class="{aboutActive:aboutFlag}").nav__link--about
				img(:src="iconPath", :alt="name")
				p(v-if="navFlag").nav__link--txt About
		div(@click="navFlag = !navFlag", :class="navFlag ? 'navBtnActive' : 'navBtnDisActive'").nav__btn
</template>

<script>
import UpdateNews from '@/src/components/UpdateNews.vue';
import Mixin from '@/src/mixins/mixin.js';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navigation',
  components: {
    UpdateNews,
  },
  mixins: [Mixin],
  // eslint-disable-next-line vue/require-prop-types
  props: ['aboutFlag', 'getYear'],
  data() {
    return {
      activeYearIndex: '',
      widthFlag: true,
      navFlag: false,
      yearFlag: false,
    };
  },
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 160px;
  padding: 0 5vw;
  color: $accentColor;
  background: rgba($color: $baceColor, $alpha: 0.8);
  position: fixed;
  top: 0;
  z-index: 25;
  &__heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    position: relative;
    font-size: 3.2rem;
    font-family: $font;
    &--link {
      opacity: 1;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  &__link {
    @media screen and (min-width: 721px) {
      /* PCサイト */
      display: flex;
      gap: 56px;
    }
    @media screen and (max-width: 720px) {
      display: none;
      justify-content: flex-end;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background: #fff;
      padding: 0 0 64px;
      opacity: 0;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    &--list {
      @media screen and (min-width: 721px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        font-size: 1.8rem;
        font-family: $font2;
        margin: 0 0 0 auto;
      }
      @media screen and (max-width: 720px) {
        display: block;
      }
      &--item {
        @media screen and (min-width: 721px) {
          /* PCサイト */
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 32px;
          position: relative;
        }
        @media screen and (max-width: 720px) {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          width: 100vw;
          height: 56px;
          font-size: 1.8rem;
          font-family: $font2;
        }
        a {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          color: $accentColor;
          background: transparent;
          transition: 0.2s background, 0.2s color;
          &:hover {
            color: $baceColor;
            background: $accentColor;
          }
          @media screen and (min-width: 721px) {
            justify-content: center;
          }
          @media screen and (max-width: 720px) {
            justify-content: flex-start;
            padding: 0 0 0 20%;
          }
        }
      }
    }
    &--about {
      @media screen and (min-width: 721px) {
        display: block;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: transparent 4px solid;
        opacity: 1;
        overflow: hidden;
        transition: 0.2s opacity, 0.2s border;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &:hover {
          opacity: 0.6;
        }
        p {
          display: none;
        }
      }
      @media screen and (max-width: 720px) {
        display: block;
        border: none;
        img {
          display: none;
        }
        &:hover {
          color: $baceColor;
          background: $accentColor;
        }
        p {
          padding: 0 0 0 20%;
        }
      }
    }
    &--txt {
      @media screen and (min-width: 721px) {
        display: none;
      }
      @media screen and (max-width: 720px) {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 100vw;
        height: 56px;
        font-size: 1.8rem;
        font-family: $font2;
      }
    }
  }
  &__btn {
    @media screen and (min-width: 721px) {
      display: none;
    }
    @media screen and (max-width: 720px) {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      width: 32px;
      height: 13px;
      position: relative;
      opacity: 1;
      &::before,
      &::after {
        content: '';
        display: block;
        width: 32px;
        height: 3px;
        background: $accentColor;
        border-radius: 2px;
        position: absolute;
        inset: auto auto auto 0;
        transform: rotateZ(0);
        transition: 0.2s opacity, 0.2s width, 0.2s inset, 0.2s transform;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
}
.navActive {
  a {
    color: $baceColor;
    background: $accentColor;
  }
}
.navBtnActive {
  animation: btnActive 0.2s;
  &::before {
    width: 34px;
    inset: 4.5px auto auto -1px;
    transform: rotateZ(18deg);
  }
  &::after {
    width: 34px;
    inset: auto auto 5.1px -1px;
    transform: rotateZ(-18deg);
  }
}
.navBtnDisActive {
  animation: btnDisActive 0.2s;
}
.SPNavActive {
  display: flex;
  opacity: 1;
  animation: SPActive 0.2s;
}
.SPNavDisActive {
  @media screen and (max-width: 720px) {
    display: none;
    opacity: 0;
    animation: SPDisActive 0.2s;
  }
}
.aboutActive {
  @media screen and (min-width: 721px) {
    border: $accentColor 4px solid;
  }
}
@keyframes SPActive {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes SPDisActive {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes btnActive {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes btnDisActive {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
</style>
