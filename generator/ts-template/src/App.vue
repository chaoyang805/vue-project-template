<template>
  <div id="app">
    <svg-sprite/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from '@vue/composition-api'
  import SvgSprite from './components/base/svg-icon/svg-sprite.vue'

  export default defineComponent({
    name: 'App',
    components: {SvgSprite}
  })
</script>

<style lang="scss">
  @import './common/scss/variable.scss';

  #app {
    width: 100%;
    height: 100vh;
    min-height: 900px;
    min-width: 600px;
    background-size: cover;
  }
</style>
