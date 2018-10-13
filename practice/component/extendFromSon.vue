<template>
  <div class="extendFromSon">

  </div>
</template>

<script>
  import Son from './son.vue'

  export default {
    name: "extendFromSon",

    extends: Son,

    mounted () {
      console.log(this.$data)
    }
  }
</script>

<style lang="stylus" scoped>

</style>