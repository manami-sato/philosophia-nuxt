<template lang="pug">
  main
    div.hoge
      div.hoge__1
        img(src="https://manami-sato.github.io/philosophia-img/img/img_032_06.jpg")
      div.hoge__2
        img(src="https://manami-sato.github.io/philosophia-img/img/img_027_09.jpg")
      div.hoge__3
      div.hoge__4
      div.hoge__5
      div.hoge__6
      div.hoge__7
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
  name: 'hoge',
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
.hoge {
  display: grid;
  grid-template-columns: 40px 40px 40px 40px;
  grid-template-rows: 40px 40px 20px 20px 20px 20px 40px;
  > div {
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__1 {
    grid-column: 1/5;
    grid-row: 1;
    background: #000;
    border-radius: 40px 0 40px 0;
  }
  &__2 {
    grid-column: 1;
    grid-row: 2/7;
    background: #000;
    border-radius: 40px 0 40px 0;
  }
  &__3 {
    grid-column: 1;
    grid-row: 7;
    background: yellow;
    border-radius: 9999px;
  }
  &__4 {
    grid-column: 4;
    grid-row: 2/8;
    background: #000;
    border-radius: 0 0 40px 0;
  }
  &__5 {
    grid-column: 3;
    grid-row: 7;
    background: #000;
    border-radius: 40px 0 0 0;
  }
  &__6 {
    grid-column: 3;
    grid-row: 3;
    background: cyan;
    border-radius: 20px 0 0 0;
  }
  &__7 {
    grid-column: 3;
    grid-row: 5;
    background: cyan;
    border-radius: 20px 0 0 0;
  }
}
</style>
