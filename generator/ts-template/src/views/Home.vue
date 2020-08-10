<template>
  <div class="home">
    <svg-icon class="icon-smile" icon="icon-smile"/>
    <h1>Start develop from here 😛</h1>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from '@vue/composition-api'

  export default defineComponent({
    name: 'home'
  })
</script>

<style lang="scss" scoped>
  @import '../common/scss/variable.scss';
  .home {
    width: 100%;
    height: 100%;
    padding-top: 17vh;
    text-align: center;
    .svg-icon {
      font-size: 40px;
      color: #000;
    }
    h1 {
      margin-left: 20px;
      display: inline-block;
      text-align: center;
      font-size: $font-size-large-x;
      color: #000;
    }
  }
</style>
