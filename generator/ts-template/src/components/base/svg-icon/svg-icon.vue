<template>
  <svg class="svg-icon icon" :class="{'icon-spin': spin}">
    <use :xlink:href="`#${icon}`"/>
  </svg>
</template>

<script lang="ts">
  import {defineComponent} from '@vue/composition-api'

  export default defineComponent({
    name: 'svg-icon',
    props: {
      icon: {
        type: String,
        required: true
      },
      spin: {
        type: Boolean,
        default: false
      }
    }
  })
</script>

<style lang="scss" scoped>
  svg.icon {
    fill: currentColor;
    height: 1em;
    margin-bottom: 0.125em;
    vertical-align: middle;
    width: 1em;
  }

  svg.icon-spin {
    animation: icon-spin 2s infinite linear;
  }

  @keyframes icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
