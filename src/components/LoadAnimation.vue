<template lang="pug">
  div.loadAnimation
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/component-definition-name-casing
  name: 'loadAnimation',
};
</script>

<style lang="scss">
@import '@/src/assets/scss/common.scss';
@keyframes loadAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(200%);
  }
  10% {
    transform: scale(1);
  }
}
.loadAnimation {
  width: 40px;
  height: 40px;
  background: $black;
  border-radius: 9999px;
  transform: scale(1);
  animation: loadAnimation 3s infinite;
}
</style>
