<template>
  <div class="slotDemo">
    <slot></slot>
    <Grandson/>
  </div>
</template>

<script>
  import Grandson from './grandson.vue'

  export default {
    name: "slotDemo",

    data () {
      return {
        value: '子组件中的value'
      }
    },

    components: {
      Grandson
    }
  }
</script>

<style lang="stylus" scoped>

</style>